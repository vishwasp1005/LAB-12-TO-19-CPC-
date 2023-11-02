#include<stdio.h>
int main(){
	int n,i,s;
	printf("enter the size of array:");
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	printf("enter the element :");
	scanf("%d",&s);
	for(i=0;i<n;i++){
		if(arr[i]==s){
			printf("arr[%d]",i);
		}
	}
	}
