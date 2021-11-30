#include <stdio.h>
#include <stdlib.h>
// Magic Box #task4

int main()
{
    int number = 1, size, row = 1, column = 1;
    printf("Enter box size (odd number)...\n");
    scanf("%d", &size);
    if (size % 2 == 0) {
        printf("You entered an even number\n");
        printf("Exiting...\n");
    } else {
        while (number <= size * size) {
            if (number == 1) {
                row = 1;
                column = (size + 1) / 2 ;
            } else {
                if ((number - 1) % size) {
                        row--;
                        column--;
                        if (row == 0) {
                            row = size;
                        }
                        if (column == 0) {
                            column = size;
                        }

                } else {
                    row++;
                    if (row > size) {
                        row = 1;
                    }
                }
            }
            printf("Row= %d \t Column= %d \t : %d\n", row, column, number);
            number++;
        }
    }
    return 0;
}
