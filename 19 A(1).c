#include<stdio.h>
int factorial(int);
int main()
{
	int a;
	printf("ENTER A NUMBER\n");
	scanf("%d",&a);
	int fac=factorial(a);
	printf("%d",fac);
	return 0;
}
int factorial(int v)
{
	int i,fac=1;
	for(i=1;i<=v;i++)
	{
		fac=fac*i;
	}
	return fac;
}
