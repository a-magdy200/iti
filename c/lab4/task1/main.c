#include <stdio.h>
#include <stdlib.h>

int main()
{
    int numbers[5];
    int max, min, i;
    for (i = 0; i < 5; i++) {// Get numbers input
        printf("Enter Number # %d\n", i + 1);
        scanf("%d", &numbers[i]);
    }
    max = min = numbers[0];
    for (i = 1; i < 5; i++) {// Find min, max
        if (numbers[i] < min) {
            min = numbers[i];
        } else if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    for (i = 0; i < 5; i++) {// Print numbers, min, max
        printf("Entered Number #%d = %d\n", i + 1, numbers[i]);

    }
    printf("Max value = %d\n", max);
    printf("Min value = %d\n", min);
    return 0;
}
