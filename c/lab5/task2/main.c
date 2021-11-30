#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define USERS_COUNT 5
int main()
{
    char firstNames[USERS_COUNT][6];
    char lastNames[USERS_COUNT][6];
    char fullNames[USERS_COUNT][12];
    int i;
    int isAllowed;
    char tempName[6];
    for (i = 0; i < USERS_COUNT; i++) {// Get users first names
        isAllowed = 0;
        while (isAllowed == 0) {// keep asking for input if not valid
            printf("Please input first name of user # %d\n", i + 1);
            scanf("%s", tempName);
            if (strlen(tempName) < 6) {// check valid string length
                strcpy(firstNames[i],tempName);
                isAllowed = 1;
            } else {
                printf("Maximum allowed number of characters is 5\n");
                isAllowed = 0;
            }
        }
    }

    for (i = 0; i < USERS_COUNT; i++) {// Get users last names
        isAllowed = 0;
        while (isAllowed == 0) {// keep asking for input if not valid
            printf("Please input last name of user # %d\n", i + 1);
            scanf("%s", tempName);
            if (strlen(tempName) < 6) {// check valid string length
                strcpy(lastNames[i], tempName);
                isAllowed = 1;
            } else {
                printf("Maximum allowed number of characters is 5\n");
                isAllowed = 0;
            }
        }
    }
    for (i = 0; i < USERS_COUNT; i++) {// Get users full names
        strcpy(fullNames[i], firstNames[i]);
        strcat(fullNames[i], " ");
        strcat(fullNames[i], lastNames[i]);
    }
    for (i = 0; i < USERS_COUNT; i++) {// Print users full names
        printf("User #%d: %s\n", i + 1, fullNames[i]);
    }
    return 0;
}
