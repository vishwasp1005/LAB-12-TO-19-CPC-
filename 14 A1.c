#include<stdio.h>
int main(){
	int n,i;
	
	printf("enter the size of array:");
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	for(i=0;i<n;i++){
		printf(" normal= %d\n",arr[i]);
	}
	for(i=n-1;i>=0;i--){
		printf("reverse= %d\n",arr[i]);
	}
}
