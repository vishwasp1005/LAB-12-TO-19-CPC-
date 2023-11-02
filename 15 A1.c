#include<stdio.h>
int main(){
	int n,i,j;
	printf("enter the size of array:");
	scanf("%d",&n);
	int arr1[n],arr2[n];
	for(i=0;i<n;i++){
		printf("Enter value at arr[%d]: ",i);
		scanf("%d",&arr1[i]);
		arr2[i]=arr1[i];
	} 
	for(i=0;i<n;i++){
		printf("%d",arr2[i]);
	}
	return 0;
	}
