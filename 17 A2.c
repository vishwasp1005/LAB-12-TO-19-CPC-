#include<stdio.h>
void main(){
	int x;
	int *a;
	char *b;
	float y;
	float *c;
	double *d;
		
	printf("Enter value of x=");
	scanf("%d",&x);
	printf("Enter value of y=");
	scanf("%d",&y);
	a=&x;
	b=&x;
	c=&y;
	d=&x;
	printf("Adress of variable x in int=%d",a);
	printf("\nAdress of variable x in char=%d",b);
	printf("\nAdress of variable y in float=%d",c);
	printf("\nAdress of variable x in double=%d",d);
	printf("\nValue of x in int=%d",*a);
	printf("\nValue of x in char=%c",*b);
	printf("\nValue of y in float=%f",*c);
	printf("\nValue of x in double=%ld",*d);
	printf("\nAdress of variable x=%d",&x);
	printf("\nAdress of variable y=%d",&y);
}
