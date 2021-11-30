#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>

// Esc -> 27
// enter -> 13
// down arrow -> 80
// up arrow -> 72/76
void drawMenu(void);
int sum(int x, int y);
int subtract(int x, int y);
int multiply(int x, int y);
double divide(int x, int y);
int requestNumberInput(int sequence);
int gotoxy(int x, int y);
int moveCursor(int x, int y);
int main()
{
    int userEntry = 0,
        x = 0,
        y = 0,
        row = 1,
        col = 8,
        operation;
    double result;
    do {
        system("cls");
        printf("Choose an operation: \n");
        drawMenu();
        row = gotoxy(col, 1);
        operation = 0;// reset operation
        do {// detect arrows and enter keys
            userEntry = getch();
            if (userEntry == 224) {// if extended key
                userEntry = getch();
            }
            switch (userEntry) {
                case 13:
                    operation = row + 48;
                    row = moveCursor(0, 7);
                    break;
                case 80:
                    row = gotoxy(col, row + 1);
                    break;
                case 72:
                    row = gotoxy(col, row - 1);
                   break;
                case 71:
                    row = gotoxy(col, 1);
                    break;
            }
        } while (userEntry == 80 || userEntry == 72 || userEntry == 71);
        if (userEntry == 27) {// case of escape key
            continue;
        }
        if (userEntry == 53 || operation == 53) {// case of exit option "5"
            break;
        }
        switch(operation) {// operation to be executed
            case 49:
                // add
                x = requestNumberInput(1);
                y = requestNumberInput(2);
                result = sum(x, y);
                break;
            case 50:
                // subtract
                x = requestNumberInput(1);
                y = requestNumberInput(2);
                result = subtract(x, y);
                break;
            case 51:
                // multiply
                x = requestNumberInput(1);
                y = requestNumberInput(2);
                result = multiply(x, y);
                break;
            case 52:
                // divide
                x = requestNumberInput(3);
                y = requestNumberInput(4);
                result = divide(x, y);
                break;
        }
        if (operation >= 49) {// case of operation was executed
            printf("Operation Result: %f\n", result);
        }
        while (userEntry != 27 && userEntry != 53) {
            userEntry = getch();
        }
    } while(userEntry != 53);
    return 0;
}
int moveCursor(int x, int y) {// moving cursor to coords
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
    return y;
}
int gotoxy(int x, int y) {// checks conditions before moving cursor
    if (y < 1) {
        y = 1;
    }
    if (y > 5) {
        return 5;
    }
    return moveCursor(x, y);
}
int sum(int x, int y) {// sum two numbers
    return x + y;
}
int subtract(int x, int y) {// subtract two numbers
    return x - y;
}
int multiply(int x, int y) {// multiply two numbers
    return x * y;
}
double divide(int x, int y) {// divide two numbers
    return x / y;
}
int requestNumberInput(int sequence) {// display input message and returns input value
    int x;
    switch (sequence) {
        case 1:
            printf("Enter first number:\n");
            break;
        case 2:
            printf("Enter second number:\n");
            break;
        case 3:
            printf("Enter nominator:\n");
            break;
        case 4:
            printf("Enter dominator:\n");
            break;
    }
    scanf("%d", &x);
    return x;
}
void drawMenu(void) {// display menu options
    printf("\t1. Add\n");
    printf("\t2. Substract\n");
    printf("\t3. Multiply\n");
    printf("\t4. Divide\n");
    printf("\t5. Exit\n");
}
