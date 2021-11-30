#include <stdio.h>
#include <stdlib.h>
// Calculating max and min of 5 numbers #task1
int main()
{
    double num1, num2, num3, num4, num5, min, max;
    printf("Enter the first number\n");
    scanf("%lf", &num1);
    printf("Enter the second number\n");
    scanf("%lf", &num2);
    printf("Enter the third number\n");
    scanf("%lf", &num3);
    printf("Enter the forth number\n");
    scanf("%lf", &num4);
    printf("Enter the fifth number\n");
    scanf("%lf", &num5);
    printf("numbers are:\tA: %lf\tB:%lf\tC:%lf\tD:%lf\tE:%lf\n", num1, num2, num3, num4, num5);
    min = num1;
    max = num1;
    if (num2 > max) {
        max = num2;
    } else if (num2 < min) {
        min = num2;
    }
    if (num3 > max) {
        max = num3;
    } else if (num3 < min) {
        min = num3;
    }
    if (num4 > max) {
        max = num4;
    } else if (num4 < min) {
        min = num4;
    }
    if (num5 > max) {
        max = num5;
    } else if (num5 < min) {
        min = num5;
    }
    printf("Maximum number is: %lf\n", max);
    printf("Minimum number is: %lf\n", min);
    return 0;
}
