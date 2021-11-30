#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
#include <windows.h>
struct Student {
    int id;
    char name[10];
};
struct Node {
    struct Student student;
    struct Node * prev;
    struct Node * next;
};
struct Node * Head;
struct Node * Tail;
int listLength;
struct Student fillStudent();
void printStudent(struct Student student);
struct Node * createNode();
int addNode();
int insertNode();
struct Node * findNodeByStudentId(int id);
struct Student searchById();
struct Student searchByName();
void deleteStudent();
void freeList();
void listAll();
void printMenu();

int main()
{
    int userEntry;
    int success = 0;
    struct Student student;
    do {
        userEntry = 0;
        printMenu();
        printf("Choose an option from the menu: ");
        scanf("%d", &userEntry);
        switch(userEntry) {
            case 1:
                // add node
                success = addNode();
                if (success) {
                    printf("Node added successfully!\n");
                } else {
                    printf("Failed to add node!\n");
                }
                break;
            case 2:
                // insert
                success = insertNode();
                if (success) {
                    printf("Node added successfully!\n");
                } else {
                    printf("Failed to add node!\n");
                }
                break;
            case 3:
                // search by id
                student = searchById();
                if (student.id != -1) {
                    printStudent(student);
                } else {
                    printf("Student Not Found...\n");
                }
                break;
            case 4:
                // search by name
                student = searchByName();
                if (student.id != -1) {
                    printStudent(student);
                } else {
                    printf("Student Not Found...\n");
                }
                break;
            case 5:
                // delete
                deleteStudent();
                break;
            case 6:
                // free
                freeList();
                break;
            case 0:
                // exit
                break;
            case 7:
                // list all
                printf("\nList count: %d\n", listLength);
                listAll();
                break;
            case 8:
                // clear screen
                system("cls");
                break;
            default:
                // default
                printf("Invalid choice\n\n");
                userEntry = -1;
                break;
        }
    } while (userEntry != 0);
    freeList();
    return 0;
}

struct Student fillStudent() {
    // request student info
    // returns pointer to student
    char temp[10];
    struct Student student;
    printf("Enter student ID: ");
    scanf("%d", &student.id);
    do {
        printf("Enter student name: ");
        scanf("%s", temp);
        if (strlen(temp) > 9) {
            printf("Invalid name length, must be less than 10 characters\n");
        } else {
            strcpy(student.name, temp);
        }
    } while (strlen(temp) > 9);
    return student;
};
void printStudent(struct Student student) {
    // print student details
    printf("\n\n******\n\n");
    printf("Student ID: %d\n", student.id);
    printf("Student Name: %s\n", student.name);
    printf("\n\n******\n\n");
}
struct Node * createNode() {
    // Creates a new node in memory
    // returns node pointer
    struct Student student = fillStudent();
    struct Node * node;
    node = (struct Node *)malloc(sizeof(struct Node));
    if (node) {
        node->next = NULL;
        node->prev = NULL;
        node->student = student;
        listLength++;
    }
    return node;
};
int addNode() {
    // Adds a new node at the end of the list
    // returns 1 if success 0 if failed
    int success = 0;
    struct Node * node = createNode();
    if (node) {
        if (Tail) {
            node->prev = Tail;
            Tail->next = node;
        } else {
            Head = node;
        }
        Tail = node;
        success = 1;
    } else {
        printf("Allocation Failed...\n");
    }
    return success;
}
int insertNode() {
    // Adds a new node to an index in the list
    // returns 1 if success 0 if failed
    int success = 0;
    int index;
    struct Node * node = createNode();
    if (node) {
        printf("Enter index to save the node: ");
        scanf("%d", &index);
        if (index >= listLength) {// at the end
            if (Tail) {
                node->prev = Tail;
                Tail->next = node;
            } else {
                Head = node;
            }
            Tail = node;
        } else if (index == 0) {// at the beginning
            node->next = Head;
            Head->prev = node;
            Head = node;
        } else {// in the middle
            struct Node * ptr = Head->next;
            int i = 1;
            while(ptr && i != index) {
                i++;
                ptr = ptr->next;
            }
            ptr->next->prev = node;
            node->next = ptr->next;
            node->prev = ptr;
            ptr->next = node;
        }
        success = 1;
    } else {
        printf("Allocation Failed...\n");
    }
    return success;
}
struct Node * findNodeByStudentId(int id) {
    struct Node * ptr = Head;
    while (ptr && ptr->student.id != id) {
        ptr = ptr->next;
    }
    return ptr;
};
struct Student searchById() {
    int id;
    struct Node * node;
    struct Student student;
    printf("Enter student ID: ");
    scanf("%d", &id);
    node = findNodeByStudentId(id);
    if (node) {
        student = node->student;
    } else {
        student.id = -1;
    }
    return student;
};
struct Student searchByName() {
    char name[10];
    struct Student student;
    struct Node * node = Head;
    student.id = -1;
    do {
        printf("Enter student Name: ");
        scanf("%s", name);
        if (strlen(name) > 9) {
            printf("Invalid name, must be less than 10 characters\n");
        }
    } while(strlen(name) > 9);

    while(node && strcmp(name, node->student.name) != 0) {
        node = node->next;
    }
    if (node) {
        student = node->student;
    }
    return student;
};
void deleteStudent() {
    int id;
    printf("Enter student ID: ");
    scanf("%d", &id);
    // Deletes a node from the list
    struct Node * node = findNodeByStudentId(id);
    int success = 0;
    if (node) {
        if (listLength == 1) {
            Tail = Head = NULL;
        } else {
            if (Tail == node) {
                Tail = node->prev;
                node->prev->next = NULL;
            } else if (Head == node) {
                Head = node->next;
                node->next->prev = NULL;
            } else {
                node->prev->next = node->next;
                node->next->prev = node->prev;
            }
        }
        success = 1;
        free(node);
        listLength--;
        printf("Student Deleted Successfully...\n\n");
    } else {
        printf("ID Not Found...\n\n");
    }
}
void freeList() {
    // Deletes all elements of the list;
    // Resets List pointers
    struct Node * ptr;
    while (Head) {
        ptr = Head;
        Head = Head->next;
        free(ptr);
    }
    Head = Tail = NULL;
    listLength = 0;
}
void listAll() {
    // prints all students in the list;
    struct Node * nodePtr = Head;
    while (nodePtr) {
        printStudent(nodePtr->student);
        nodePtr = nodePtr->next;
    }
}
void printMenu() {//Print menu of options to user
    printf("\n\n1. Add Node\n");
    printf("2. Insert Node\n");
    printf("3. Search by ID\n");
    printf("4. Search by Name\n");
    printf("5. Delete Node\n");
    printf("6. Free List\n");
    printf("7. List All\n");
    printf("8. Clear screen\n");
    printf("0. Exit\n\n");
}
