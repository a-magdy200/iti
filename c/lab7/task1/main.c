#include <stdio.h>
#include <stdlib.h>
#define SUBJECTS_COUNT 4
struct Student {
    int id;
    char name[5];
    int grades[SUBJECTS_COUNT];
};
struct Student fillStudent(void);
void printStudent(struct Student student);
int main()
{
    struct Student student = fillStudent();
    printStudent(student);
    return 0;
}

struct Student fillStudent(void) {
    struct Student student;
    int i;

    printf("Input Student Data\n");
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
void printStudent(struct Student student) {
    int sum = 0, i;
    for (i = 0; i < SUBJECTS_COUNT; i++) {
        sum += student.grades[i];
    }
    printf("Student Details...\n");
    printf("ID: #%d\n", student.id);
    printf("Name: %s\n", student.name);
    printf("Sum of grades: %d\n", sum);
}
