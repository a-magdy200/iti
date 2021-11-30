#include <stdio.h>
#include <stdlib.h>
#define STRING_SIZE 6

void myCopyFn(char array[STRING_SIZE]);
int main()
{
    char testString[STRING_SIZE] = "Ahmed";
    myCopyFn(testString);
    return 0;
}
void myCopyFn(char array[STRING_SIZE]) {
    char arrayCopy[STRING_SIZE];
    int i;
    for (i = 0; i < STRING_SIZE; i++) {
        arrayCopy[i] = array[i];
    }
    for (i = 0; i < STRING_SIZE; i++) {
        printf("%c\n", arrayCopy[i]);
    }
    for (i = 0; i < STRING_SIZE; i++) {
        printf("%c", arrayCopy[i]);
    }
    printf("\n\n");
}
