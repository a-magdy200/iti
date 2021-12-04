#include <stdio.h>
#include <stdlib.h>
#include <ctype.h>
// binary search
// bubble sort by name
struct Student {
    int id;
    char name[10];
};
struct Student fillStudent();
void printMenu();
void printStudent(struct Student student);
void bubbleSort();
struct Student students[100];
struct Student search(char name[10], int lowerBound, int upperBound);
arrayLength;
int main()
{
    struct Student student;
    int j;
    char searchName[10];
    srand(1000000);
    for (j = 0; j < 10; j++) {//Generate Test Data
        student.id = j;
        student.name[0] = rand() % 20 + 65;
        students[j] = student;
    }
    arrayLength = 10;
    bubbleSort();
    for (j = 0; j < 10; j++) {
        printStudent(students[j]);
    }
    printf("Enter name to search: ");
    scanf("%s", searchName);
    student.id = -1;
    student = search(searchName, 0, 9);
    if (student.id == -1) {
        printf("Student not found!\n");
    } else {
        printStudent(student);
    }
    return 0;
}
struct Student search(char name[10], int lowerBound, int upperBound) {
    struct Student student;
    int LB = lowerBound;
    int UB = upperBound;
    int compareResult;
    student.id = -1;
    while (student.id == -1 && LB <= UB) {
        int mid = (LB + UB) / 2;
        compareResult = strcmp(students[mid].name, name);
        printf("%d\n", compareResult);
        if (compareResult == 0) {
            student = students[mid];
        } else if (compareResult > 0) {
            UB = mid - 1;
        } else {
            LB = mid + 1;
        }
    }
    return student;
};
void bubbleSort() {
    int didSwap = 1;
    int i = 0, j = 0, maxElement;
    struct Student student;
    maxElement = arrayLength - 1;
    while (i < maxElement && didSwap) {
        didSwap = 0;
        while(j < (maxElement - i)) {
            if (strcmp(students[j].name, students[j + 1].name) > 0) {
                student = students[j];
                students[j] = students[j + 1];
                students[j + 1] = student;
                didSwap = 1;
            }
            j++;
        }
        j = 0;
        i++;
    }
}
struct Student fillStudent() {
    // request student info
    // returns student structure
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
    return student;
}
void printStudent(struct Student student) {
    // print student details
    int i;
    printf("\n******\n");
    printf("Student ID: %d\n", student.id);
    printf("Student Name: %s\n", student.name);
    printf("******\n");
}
