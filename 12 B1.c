#include<stdio.h>
int main(){
	int i,j,n,sum=0,innersum;
	printf("enter number");
	scanf("%d",&n);
	for(i=1;i<=n;i++){
		innersum=0;
		for(j=1;j<=i;j++){
			innersum=innersum+j;
		}
		sum=innersum+sum;
		
}
	printf("%d",sum);
}
