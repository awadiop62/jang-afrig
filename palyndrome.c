#include <stdio.h>
#include <string.h>
#include <stdbool.h>
#define N 100

void afficheMsg()
{
}

int palyndrome(char tab[], int n)
{
    int i, j, trouve;
    i = 0;
    j = n - 1;
    trouve = 1;
    while (j >= n / 2 && trouve)
    {
        if (tab[i] == tab[j])
        {
            i++;
            j--;
        }
        else
            trouve = 0;
    }
    return trouve;
}
int main()
{
    int tab[10];
    int tailleOctets = sizeof tab;
    printf("taille entier = %d octets \n", sizeof(int));
    printf("taille tableau = %d \n", sizeof(tab) / sizeof(int));

    char mot[N];
    printf("Donnez un mot : ");
    scanf("%s", mot);
    int trouve = palyndrome(mot, strlen(mot));
    if (trouve)
    {
        printf("C'est un palyndrome.");
    }
    else
        printf("On a pas un palyndrome.");
    return 0;
}