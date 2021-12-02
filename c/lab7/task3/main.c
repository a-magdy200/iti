#include <stdlib.h>
#define SUBJECTS_COUNT 4
struct Student {
    int id;
    char name[5];
    int grades[SUBJECTS_COUNT];
};
struct Student fillStudent(int number);
void printStudent(struct Student * student);
int main()
{
    int STUDENTS_COUNT;
    printf("Enter number of students\n");
    scanf("%d", &STUDENTS_COUNT);
    struct Student * students = (struct Student *)malloc(sizeof(struct Student) * STUDENTS_COUNT);
    if (students == NULL) {
        printf("Could not allocate required memory\n");
    } else {
        int i;
        for (i = 0; i < STUDENTS_COUNT; i++) {
            *(students + i) = fillStudent(i + 1);
            printf("\n");
            printf("************\n");
            printf("\n");
        }

        printf("Students Details...\n");

        for (i = 0; i < STUDENTS_COUNT; i++) {
            printf("\n");
            printStudent(&students[i]);
            printf("\n");
            printf("************\n");
            printf("\n");
        }
        free(students);
    }
    return 0;
}

struct Student fillStudent(int number) {
    struct Student student;
    int i;
    printf("Input Student #%d Data\n", number);
    printf("Enter student ID\n");
    scanf("%d", &student.id);
    printf("Enter student Name\n");
    scanf("%s", student.name);
    for (i = 0; i < SUBJECTS_COUNT; i++) {
        printf("Enter student grade for subject #%d\n", i + 1);
        scanf("%d", &student.grades[i]);
    }
    return student;

}
void printStudent(struct Student * student) {
    int sum = 0, i;
    for (i = 0; i < SUBJECTS_COUNT; i++) {
        sum += student->grades[i];
    }
    printf("ID: #%d\n", student->id);
    printf("Name: %s\n", student->name);
    printf("Sum of grades: %d\n", sum);
}
