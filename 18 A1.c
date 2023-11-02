#include<stdio.h>
int add();
void main(){
	int a,b;
	scanf("%d %d",&a,&b);
	printf("sum=%d",a+b);
	add();
}
int add(a,b){
	return(a+b);
}
