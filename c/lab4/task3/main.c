#include <stdio.h>
#include <stdlib.h>
long calcPower(int base, int power);
int main()
{
    int base, power;
    long result;
    printf("Enter base number\n");
    scanf("%d", &base);
    printf("Enter power\n");
    scanf("%d", &power);
    result = calcPower(base, power);
    printf("Result of %d^%d = %ld", base, power, result);
    return 0;
}
long calcPower(int base, int power) {
    if (power == 1) {
        return base;
    }
    return base * calcPower(base, power - 1);
}
