#include <stdio.h>
#include <stdlib.h>
#include <conio.h>
#include <windows.h>
// The Line Editor
#define STRING_LENGTH 11
#define HOME 71
#define END 79
#define RIGHT_ARROW 77
#define LEFT_ARROW 75
#define ENTER 13
#define DELETE 83
#define INSERT 82
#define BACKSPACE 8
#define DEFAULT_X 5
#define DEFAULT_Y 3
int goToPosition(int x, int y);
void printAllChars(char * string, int count);
void shiftRight(int index, char * string, int total);
void shiftLeft(int index, char * string, int total);
void overrideAtIndex(int index, char * string, char ch);
void goToLetter(int * atLetter, int * posX, int newPosition, int count);
int main()
{
    int appRunning = 1;
    int numberOfChars = 0;
    int shouldOverride = 0;
    int posX = DEFAULT_X;
    int posY = DEFAULT_Y;
    int atLetter = 1;
    char userEntry;
    char string[STRING_LENGTH];
    goToPosition(posX, posY);
    while (appRunning) {
        goToPosition(DEFAULT_X, DEFAULT_Y);
        printAllChars(string, numberOfChars);
        goToPosition(posX, posY);
        userEntry = getch();
        if (userEntry == 224 || userEntry == -32) {// if extended key
            userEntry = getch();
        }
        switch (userEntry) {
            case HOME:
                //go to first letter
                goToLetter(&atLetter, &posX, 1, numberOfChars);
                break;
            case END:
                //go to last letter
                goToLetter(&atLetter, &posX, numberOfChars + 1, numberOfChars);
                break;
            case RIGHT_ARROW:
                // move to right and loop
                goToLetter(&atLetter, &posX, atLetter + 1, numberOfChars);
                break;
            case LEFT_ARROW:
                // move to left and loop
                goToLetter(&atLetter, &posX, atLetter - 1, numberOfChars);
                break;
            case ENTER:
                // go to position 20, 20 and print all letters
                goToPosition(20, 20);
                printAllChars(string, numberOfChars);
                printf("\n\n");
                appRunning = 0;
                break;
            case DELETE:
                // delete the letter on right, shift, and accept new char
                if (atLetter < numberOfChars && numberOfChars > 0) {
                    shiftLeft(atLetter - 1, string, numberOfChars);
                    numberOfChars--;
                }
                break;
            case INSERT:
                // insert to the end or override last letter
                shouldOverride = 1;
                break;
            case BACKSPACE:
                // delete the letter on left, shift, and accept new char
                if (atLetter > 1 && numberOfChars > 0) {
                    shiftLeft(atLetter - 2, string, numberOfChars);
                    posX--;
                    if (posX < DEFAULT_X) {
                        posX = DEFAULT_X;
                    }
                    atLetter--;
                    numberOfChars--;
                }
                break;
            default:
                if (numberOfChars < (STRING_LENGTH - 1)) {
                    if (atLetter == (numberOfChars + 1)) {
                        *(string + numberOfChars) = userEntry;
                    } else {
                        if (shouldOverride == 0 && numberOfChars < (STRING_LENGTH - 1)) {
                            shiftRight(atLetter - 1, string, numberOfChars);
                        }
                        *(string + atLetter - 1) = userEntry;
                    }
                    if (shouldOverride == 0) {
                        numberOfChars++;
                        atLetter++;
                        posX++;
                    } else {
                        shouldOverride = 0;
                    }
                } else if (shouldOverride != 0) {
                    if (atLetter == STRING_LENGTH) {
                        *(string + atLetter - 2) = userEntry;
                    }
                    *(string + atLetter - 1) = userEntry;
                    shouldOverride = 0;
                }
                break;
        }
        if (appRunning) {
            system("cls");
            printf("current x position %d\n", posX);
            printf("number of characters %d\n", numberOfChars);
            printf("At letter %d\n", atLetter);

        }
    }
    return 0;
}
void goToLetter(int * atLetter, int * posX, int newPosition, int count) {
    if (newPosition > (count + 1)) {
        *atLetter = 1;
        *posX = DEFAULT_X;
    }  else if (newPosition == 0) {
        *atLetter = count + 1;
        *posX = DEFAULT_X + count;
    } else {
        *atLetter = newPosition;
        *posX = DEFAULT_X + newPosition - 1;
    }
}
void printAllChars(char * string, int count) {
    int i = 0;
    while (i < count) {
        printf("%c", *(string + i));
        i++;
    }
}
void overrideAtIndex(int index, char * string, char ch) {
    *(string + index) = ch;
}
void shiftLeft(int index, char * string, int total) {
    int currentIndex = index;
    while (currentIndex < (total - 1)) {
        *(string + currentIndex) = *(string + currentIndex + 1);
        currentIndex++;
    }
    *(string + total - 1) = '\0';
}
void shiftRight(int index, char * string, int total) {
    int currentIndex = total;
    while (currentIndex > index) {
        *(string + currentIndex) = *(string + currentIndex - 1);
        currentIndex--;
    }
    *(string + total + 1) = '\0';
}
int goToPosition(int x, int y) {// moving cursor to coords
    COORD coord;
    coord.X = x;
    coord.Y = y;
    SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), coord);
    return y;
}
