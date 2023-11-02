#include<stdio.h>
float SI(float p,float r,float t);
int main(){
	float p,r,t;
	scanf("%f%f%f",&p,&r,&t);
	SI(p,r,t);
}
float SI(float p,float r,float t){
	float si;
	si=(p*r*t)/100.0;
	printf("%f",si);
}
