#include <stdio.h>
#include <stdlib.h>
//stack using linked list
// push
// pull
// exit
struct Student {
    int id;
    char name[10];
    int grade[5];
};
struct Node {
    struct Student student;
    struct Node * prev;
};
struct Node * Tail;
struct Student fillStudent();
void printMenu();
void printStudent(struct Student student);
void freeList();
int push();
struct Student pop();
struct Node * createNode();
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
                // push
                success = push();
                if (success) {
                    printf("Node pushed successfully!\n");
                } else {
                    printf("Failed to add node!\n");
                }
                break;
            case 2:
                // pop
                if (Tail) {
                    student = pop();
                    printStudent(student);
                } else {
                    printf("No students in the stack\n");
                }
                break;
            case 0:
                // exit
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
struct Student pop() {
    struct Node * ptr = Tail;
    struct Student student = ptr->student;
    Tail = Tail->prev;
    free(ptr);
    return student;
};

struct Student fillStudent() {
    // request student info
    // returns pointer to student
    char temp[10];
    int i;
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
    for (i = 0; i < 5; i++) {
        printf("Enter student grade for subject # %d: ", i + 1);
        scanf("%d", &student.grade[i]);
    }
    return student;
};
void printStudent(struct Student student) {
    // print student details
    int i;
    printf("\n\n******\n\n");
    printf("Student ID: %d\n", student.id);
    printf("Student Name: %s\n", student.name);
    for (i = 0; i < 5; i++) {
        printf("Subject # %d: %d\n", i + 1, student.grade[i]);
    }
    printf("\n\n******\n\n");
}
struct Node * createNode() {
    // Creates a new node in memory
    // returns node pointer
    struct Student student = fillStudent();
    struct Node * node;
    node = (struct Node *)malloc(sizeof(struct Node));
    if (node) {
        node->prev = NULL;
        node->student = student;
    }
    return node;
};
int push() {
    // Adds a new node at the end of the list
    // returns 1 if success 0 if failed
    int success = 0;
    struct Node * node = createNode();
    if (node) {
        if (Tail) {
            node->prev = Tail;
        }
        Tail = node;
        success = 1;
    } else {
        printf("Allocation Failed...\n");
    }
    return success;
}
void freeList() {
    // Deletes all elements of the list;
    // Resets List pointers
    struct Node * ptr;
    while (Tail) {
        ptr = Tail;
        Tail = Tail->prev;
        free(ptr);
    }
    Tail = NULL;
}
void printMenu() {//Print menu of options to user
    printf("\n\n1. Push\n");
    printf("2. Pop\n");
    printf("0. Exit\n\n");
}
