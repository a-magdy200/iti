#include <stdio.h>
#include <stdlib.h>
// Menu options #task5
int main()
{
    char userInput;
    while(userInput != '4') {
        printf("Enter a choice from the menu\n");
        printf("1. Print\n");
        printf("2. Edit\n");
        printf("3. Save\n");
        printf("4. Exit\n");
        printf("Any other key to reset\n");
        userInput = getch();
        system("cls");
        if (userInput == '1') {
            printf("Print\n\n");
        } else if (userInput == '2') {
            printf("Edit\n\n");
        } else if (userInput == '3') {
            printf("Save\n\n");
        }
    }
    printf("Exiting...");
    return 0;
}
