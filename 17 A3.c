#include<stdio.h>
void main(){
	int a,b,*x,*y;
	printf("Enter value 1=");
	scanf("%d",&a);	
	printf("Enter value 2=");
	scanf("%d",&b);
	x=&a;
	y=&b;
	printf("Addition=%d",a+b);
	printf("\nAddition using pointer=%d",*x +*y);
}
