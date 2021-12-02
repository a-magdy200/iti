#include <stdlib.h>
#define SUBJECTS_COUNT 4
#define STUDENT_NAME_LENGTH 5
struct Student {
    int id;
    char name[STUDENT_NAME_LENGTH];
    int grades[SUBJECTS_COUNT];
};
struct Student fillStudent(int number);
void printStudent(struct Student * student);
void printMenu(void);
int main()
{
    int isRunning = 1;
    int userChoice;
    int STUDENTS_COUNT = 0;
    int userId;
    int i;
    int userIndex = -1;
    struct Student * students = (struct Student *)malloc(sizeof(struct Student) * STUDENTS_COUNT);
    if (students == NULL) {
        printf("Could not allocate required memory\n");
    } else {
        while(isRunning) {
            printMenu();
            scanf("%d", &userChoice);
            switch(userChoice) {
                case 1:
                    STUDENTS_COUNT++;
                    students = (struct Student *)realloc(students, sizeof(struct Student) * STUDENTS_COUNT);
                    if (students == NULL) {
                        printf("Could not allocate required memory\n");
                    } else {
                        *(students + STUDENTS_COUNT - 1) = fillStudent(STUDENTS_COUNT);
                        printf("Student entered successfully...\n");
                    }
                    break;
                case 2:
                    printf("Enter a user ID to display: ");
                    scanf("%d", &userId);
                    for (i = 0; i < STUDENTS_COUNT; i++) {
                        if ((students + i)->id == userId) {
                            userIndex = i;
                            break;
                        }
                    }
                    if (userIndex == -1) {
                        printf("ID (%d) not found...\n", userId);
                    } else {
                        printf("\n");
                        printStudent(students + userIndex);
                        printf("\n");
                        userIndex = -1;
                    }
                    break;
                case 3:
                    if (STUDENTS_COUNT == 0) {
                        printf("There's no students yet...\n");
                    } else {
                        printf("\n\nStudents Details...\n\n");
                        for (i = 0; i < STUDENTS_COUNT; i++) {
                            printf("\n");
                            printStudent(&students[i]);
                            printf("\n");
                            printf("************\n");
                            printf("\n");
                        }
                    }
                    break;
                case 0:
                    isRunning = 0;
                    break;
                default:
                    printf("Invalid choice...\n");
                    break;
            }
        }
        free(students);
    }
    return 0;
}
void printMenu(void) {
    printf("Enter an option\n");
    printf("1. Add student\n");
    printf("2. Display student\n");
    printf("3. Display all students\n");
    printf("0. Exit\n");
}
struct Student fillStudent(int number) {
    struct Student student;
    int i;
    int isValidNameLength = 0;
    printf("Input Student #%d Data\n", number);
    printf("Enter student ID: ");
    scanf("%d", &student.id);
    do {
        printf("Enter student Name: ");
        scanf("%s", student.name);
        if (strlen(student.name) >= STUDENT_NAME_LENGTH) {
            printf("Invalid name length, max 4 characters\n");
        } else {
            isValidNameLength = 1;
        }
    } while(isValidNameLength == 0);
    for (i = 0; i < SUBJECTS_COUNT; i++) {
        printf("Enter student grade for subject #%d: ", i + 1);
        scanf("%d", &student.grades[i]);
    }
    return student;

}
void printStudent(struct Student * student) {
    int sum = 0, i;
    for (i = 0; i < SUBJECTS_COUNT; i++) {
        sum += student->grades[i];
    }
    printf("ID: %d\n", student->id);
    printf("Name: %s\n", student->name);
    printf("Sum of grades: %d\n", sum);
}
