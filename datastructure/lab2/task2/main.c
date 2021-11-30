#include <stdio.h>
#include <stdlib.h>
// queue using array
// enqueue
// dequeue
// exit
struct Student {
    int id;
    char name[10];
    int grade[5];
};
struct Student fillStudent();
void printMenu();
void printStudent(struct Student student);
void shiftArray(struct Student * students, int count);
int main()
{
    struct Student students[100];
    int studentsCount = 0;
    int userEntry;
    struct Student student;
    do {
        userEntry = 0;
        printMenu();
        printf("Choose an option from the menu: ");
        scanf("%d", &userEntry);
        switch(userEntry) {
            case 1:
                // enqueue
                if (studentsCount != 100) {
                    student = fillStudent();
                    students[studentsCount] = student;
                    studentsCount++;
                    printf("Student enqueued successfully!\n");
                } else {
                    printf("No space left in the queue\n");
                }
                break;
            case 2:
                // dequeue
                if (studentsCount != 0) {
                    student = students[0];
                    shiftArray(students, studentsCount);
                    studentsCount--;
                    printStudent(student);
                } else {
                    printf("The queue is empty\n");
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
    return 0;
}
void shiftArray(struct Student * students, int count) {
    int i;
    for (i = 0; i < (count - 1); i++) {
        *(students + i) = *(students + i + 1);
    }
}
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
void printMenu() {//Print menu of options to user
    printf("\n\n1. Enqueue\n");
    printf("2. Dequeue\n");
    printf("0. Exit\n\n");
}
