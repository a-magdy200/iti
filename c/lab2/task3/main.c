#include <stdio.h>
#include <stdlib.h>
#include <math.h>
// Solve a second degree equation #task3
int main()
{
    double a, b, c, rootValue, imaginaryPart, realPart, x1, x2;
    printf("Solve a second degree equation\n");
    printf("Equation on the form: a*x^2 + b*x + c = 0\n");
    printf("Enter the value of a:\n");
    scanf("%lf", &a);
    printf("Enter the value of b:\n");
    scanf("%lf", &b);
    printf("Enter the value of c:\n");
    scanf("%lf", &c);
    printf("Solving equation:\t (%lf*x^2) + (%lf*x) + (%lf) = 0\n", a, b, c);
    rootValue = b * b - 4 * a * c;
    realPart = -1 * b / (2 * a);
    if (rootValue > 0) {//Case of two distinct real roots
        printf("Roots case: two distinct real roots\n");
        x1 = realPart + sqrt(rootValue) / (2 * a);
        x2 = realPart - sqrt(rootValue) / (2 * a);
        printf("root #1:\tx=%lf\n", x1);
        printf("root #2:\tx=%lf\n", x2);
        printf("Original equation:\t(x + (%lf))(x + (%lf))=0\n", x1, x2);
    } else if (rootValue < 0) {//Case of two imaginary roots
        printf("Roots case: two imaginary roots\n");
        imaginaryPart = sqrt((rootValue * -1)) / (2 * a);
        printf("root #1:\tx=%lf+i%lf\n", realPart, imaginaryPart);
        printf("root #2:\tx=%lf-i%lf\n", realPart, imaginaryPart);
        printf("Original equation:\t(x + (%lf+i%lf))(x + (%lf-i%lf))=0\n", realPart, imaginaryPart, realPart, imaginaryPart);
    } else {//Case of two identical roots
        printf("Roots case: two identical roots\n");
        x1 = x2 = realPart;
        printf("roots are:\tx=%lf\n", x1);
        printf("Original equation:\t(x + (%lf))^2=0\n", x1);
    }
    return 0;
}
