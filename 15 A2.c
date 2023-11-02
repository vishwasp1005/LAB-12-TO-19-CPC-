#include<stdio.h>
int main(){
	int n,i,j,c=0;
	printf("enter the size of array:");
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		printf("Enter value at arr[%d]: ",i);
		scanf("%d",&arr[i]);
	} 
	for(i=0;i<n;i++){
		if(arr[i]<0){
			c++;
		}
	}
	printf("%d",c);
}
