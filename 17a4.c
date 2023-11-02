#include<stdio.h>
void main(){
	int j=1,i,n,a,Arr[n];
	printf("Enter size of array");
	scanf("%d",&n);
	a=&Arr[n];
	for(i=0,i<n,i++){
		printf("Enter value of %d array",j);
		scanf("%d",Arr[i]);
		j++;
	}
	printf("%d",*a);
	
	
	
	
	
	
	
	
	
	
}
