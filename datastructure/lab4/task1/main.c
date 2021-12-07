#include <stdio.h>
#include <stdlib.h>
// Binary Search Tree
struct Node {
    int data;
    struct Node * left;
    struct Node * right;
};
void printMenu();
void traversePreOrder(struct Node * root);
void traverseInOrder(struct Node * root);
void traversePostOrder(struct Node * root);
void freeTree(struct Node * root);
struct Node * Head;
int insertData(int data);
struct Node * createNode(int data);
int main()
{
    int userOperation = -1;
    int data, success;
    while (userOperation != 0) {
        printMenu();
        scanf("%d", &userOperation);
        switch(userOperation) {
        case 1:
            printf("Enter data: ");
            scanf("%d", &data);
            success = insertData(data);
            if (success) {
                printf("Node added successfully...\n");
            } else {
                printf("Failed to add node...\n");
            }
            break;
        case 2:
            printf("************************\n");
            printf("Printing Tree PreOrder\n");
            printf("************************\n");
            traversePreOrder(Head);
            break;
        case 3:
            printf("************************\n");
            printf("Printing Tree InOrder\n");
            printf("************************\n");
            traverseInOrder(Head);
            break;
        case 4:
            printf("************************\n");
            printf("Printing Tree PostOrder\n");
            printf("************************\n");
            traversePostOrder(Head);
            break;
        case 0:
            break;
        default:
            printf("Invalid choice\n");
            userOperation = -1;
        }
    }
    freeTree(Head);
    return 0;
}
struct Node * createNode(int data) {
    struct Node * ptr = (struct Node *) malloc(sizeof(struct Node));
    if (ptr) {
        ptr->data = data;
        ptr->left = NULL;
        ptr->right = NULL;
    }
    return ptr;
}
int insertData(int data) {
    struct Node * ptr = createNode(data);
    struct Node * current = Head;
    struct Node * parent = NULL;
    int returnValue = 0;
    if (ptr) {
        if (!Head) {
            Head = ptr;
        } else {
            while (!parent) {
                if (data < current->data) {
                    if (current->left) {
                        current = current->left;
                    } else {
                        parent = current;
                    }
                } else {
                    if (current->right) {
                        current = current->right;
                    } else {
                        parent = current;
                    }
                }
            }
            if (data < parent->data) {
                parent->left = ptr;
            } else {
                parent->right = ptr;
            }
        }
        returnValue = 1;
    }
    return returnValue;
}
void traversePreOrder(struct Node * root) {
    if (root) {
        printf("%d\n", root->data);
        traversePreOrder(root->left);
        traversePreOrder(root->right);
    }
}
void traverseInOrder(struct Node * root) {
    if (root) {
        traverseInOrder(root->left);
        printf("%d\n", root->data);
        traverseInOrder(root->right);
    }
}
void traversePostOrder(struct Node * root) {
    if (root) {
        traversePostOrder(root->left);
        traversePostOrder(root->right);
        printf("%d\n", root->data);
    }
}
void freeTree(struct Node * root) {
    if (root) {
        traversePostOrder(root->left);
        traversePostOrder(root->right);
        free(root);
    }
}
void printMenu() {
    printf("\n");
    printf("1. Insert\n");
    printf("2. Traverse PreOrder\n");
    printf("3. Traverse InOrder\n");
    printf("4. Traverse PostOrder\n");
    printf("0. Exit\n");
    printf("\n");
}
