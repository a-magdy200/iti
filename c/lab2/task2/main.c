#include <stdio.h>
#include <stdlib.h>
// Calculating sum of input numbers, closes if sum is greater than 100 #task 2
int main()
{
    double sum = 0;
    double input;
    while(sum <= 100) {
        printf("Current sum is: %lf\n", sum);
        printf("Input number to be summed\n");
        scanf("%lf", &input);
        sum += input;
    }
    printf("The sum of the input numbers has exceeded 100\n");
    printf("Current sum is: %lf\n", sum);
    return 0;
}
