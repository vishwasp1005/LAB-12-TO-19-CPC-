#include<stdio.h>
void main(){
	int a,*x;
	
	
	printf("Enter value=");
	scanf("%d",&a);
	x=&a;
	printf("Adress of variable a=%d",x);
	printf("\nValue of a=%d",*x);
	printf("\nAdress of pointer=%d",&x);
	printf("\nAdress of variable a=%d",&a);
}
