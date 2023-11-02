#include<stdio.h>
int max();
int c;
void main(){
	int a,b;
	scanf("%d %d",&a,&b);
	max(a,b);
	printf("%d",c);
}
int max(a,b){
	 if(a>b){
	 	c=a;
	 }
	 else{
	 	c=b;
	 }
	 return c;
}
