#include<stdio.h>
void max(float a,float b,float c);
float d;
int main(){
	float a,b,c;
	scanf("%f %f %f",&a,&b,&c);
	max(a,b,c);
}
void max(float a,float b,float c){
	if(a>b &&a>c){
		printf("%f",a);
	}
	else if(b>a &&b>c){
		printf("%f",b);
	}
	else{
		printf("%f",c);
	}
}
