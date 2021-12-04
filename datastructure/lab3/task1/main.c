#include <stdio.h>
#include <stdlib.h>
// merge sort by id
struct Student {
    int id;
    char name[10];
};
struct Student fillStudent();
void printMenu();
void printStudent(struct Student student);
void sort(int lowerBound, int upperBound);
void merge(int lowerBound, int upperBound, int mid);
struct Student students[100];
int arr[10] = {1,3,8,2,6,0,4,5,9,7};
int arrayLength;
int main()
{
    int j;
    srand(99);
    struct Student student;
    for (j = 0; j < 10; j++) {// Generate Test data
        student.id = rand() % 50;
        strcpy(student.name, "student");
        students[j] = student;
    }
    for (j = 0; j < 10; j++) {
        printStudent(students[j]);
    }
    printf("********\nSorting\n*********");
    sort(0,9);
    for (j = 0; j < 10; j++) {
        printStudent(students[j]);
    }
    /*int i;
    for (i = 0; i < 10; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
    sortInt(0, 9);
    for (i = 0; i < 10; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");*/

    return 0;
}
/*
[4 6 8 7 2 3 4 5 1 9 0]
sort(0 10)
mid = 5
    sort(0 5)
        mid = 2
        sort(0 2)
            mid = 1
            sort(0 1)
                mid = 0
                sort(0 0)
                    void
                sort(1 1)
                    void
                merge(0, 1, 0)
                    if (ar1 < ar0) {
                        tempar0 = ar1
                        tempar1 = ar0
                    }
            sort(2, 2)
                void
            merge(0 2 1)

*/
void sortInt(int lowerBound, int upperBound) {
    int mid;
    printf("Boundaries: LB=%d, UB=%d\n", lowerBound, upperBound);
    if (lowerBound < upperBound) {
        mid = (lowerBound + upperBound) / 2;
        sortInt(lowerBound, mid);
        sortInt(mid + 1, upperBound);
        mergeInt(lowerBound, upperBound, mid);
    }
}
void mergeInt(int lowerBound, int upperBound, int mid) {
    int leftArr[10];
    int rightArr[10];
    int i = 0, j = 0, k, L1, L2;
    L1 = mid - lowerBound + 1;
    L2 = upperBound - mid;
    for (k = 0; k <= L1; k++) {
        leftArr[k] = arr[(lowerBound + k)];
    }
    for (k = 0; k < L2; k++) {
        rightArr[k] = arr[(mid + k + 1)];
    }
    k = lowerBound;

    while (i < L1 && j < L2) {
        if (rightArr[j] <= leftArr[i]) {
            arr[k] = rightArr[j];
            j++;
        } else {
            arr[k] = leftArr[i];
            i++;
        }
        k++;
    }
    while (i < L1) {
        arr[k] = leftArr[i];
        k++;
        i++;
    }
    while (j < L2) {
        arr[k] = rightArr[j];
        j++;
        k++;
    }
}
void sort(int lowerBound, int upperBound) {
    int mid;
    if (lowerBound < upperBound) {
        mid = (lowerBound + upperBound) / 2;
        sort(lowerBound, mid);
        sort(mid + 1, upperBound);
        merge(lowerBound, upperBound, mid);
    }
}
void merge(int lowerBound, int upperBound, int mid) {
    struct Student leftArr[50];
    struct Student rightArr[50];
    int i = 0, j = 0, k, L1, L2;
    L1 = mid - lowerBound + 1;
    L2 = upperBound - mid;
    for (k = 0; k <= L1; k++) {
        leftArr[k] = students[(lowerBound + k)];
    }
    for (k = 0; k < L2; k++) {
        rightArr[k] = students[(mid + k + 1)];
    }
    k = lowerBound;

    while (i < L1 && j < L2) {
        if (rightArr[j].id <= leftArr[i].id) {
            students[k] = rightArr[j];
            j++;
        } else {
            students[k] = leftArr[i];
            i++;
        }
        k++;
    }
    while (i < L1) {
        students[k] = leftArr[i];
        k++;
        i++;
    }
    while (j < L2) {
        students[k] = rightArr[j];
        j++;
        k++;
    }
}
struct Student fillStudent() {
    // request student info
    // returns student struct
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
    arrayLength++;
    return student;
}
void printStudent(struct Student student) {
    // print student details
    int i;
    printf("\n\n******\n\n");
    printf("Student ID: %d\n", student.id);
    printf("Student Name: %s\n", student.name);
    printf("\n\n******\n\n");
}
