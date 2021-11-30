#include <stdio.h>
#include <stdlib.h>
#define STUDENTS_COUNT 3
#define SUBJECTS_COUNT 4
int main()
{
    int i,
        j;
    float totals[STUDENTS_COUNT],
          studentsSubjects[STUDENTS_COUNT][SUBJECTS_COUNT],
          averages[SUBJECTS_COUNT],
          subjectTotal;
    for (i = 0; i < STUDENTS_COUNT; i++) {
        for (j = 0; j < SUBJECTS_COUNT; j++) {
            printf("Enter marks for student #%d for subject #%d\n", i + 1, j + 1);
            scanf("%f", &studentsSubjects[i][j]);
        }
    }
    for (i = 0; i < STUDENTS_COUNT; i++) {
        totals[i] = 0;
        for (j = 0; j < SUBJECTS_COUNT; j++) {
            totals[i] += studentsSubjects[i][j];
        }
    }
    for (j = 0; j < SUBJECTS_COUNT; j++) {
        subjectTotal = 0;
        for (i = 0; i < STUDENTS_COUNT; i++) {
            subjectTotal += studentsSubjects[i][j];
        }
        averages[j] = subjectTotal / STUDENTS_COUNT;
    }
    printf("\n");
    printf("Students\t");
    for (j = 0; j < SUBJECTS_COUNT; j++) {
        printf("Subject #%d\t", j + 1);
    }
    printf("Total\n");
    for (i = 0; i < STUDENTS_COUNT; i++) {
        printf("Student #%d\t", i + 1);
        for (j = 0; j < SUBJECTS_COUNT; j++) {
            printf("%.2f\t\t", studentsSubjects[i][j]);
        }
        printf("%.2f\t", totals[i]);
        printf("\n");
    }
    printf("Average\t\t");
    for (j = 0; j < SUBJECTS_COUNT; j++) {
        printf("%.2f\t\t", averages[j]);
    }
    printf("\n");
    return 0;
}
