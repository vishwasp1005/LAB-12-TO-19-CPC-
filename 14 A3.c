#include<stdio.h>
int main(){
	int n,i,even=0,odd=0;
	
	printf("enter the size of array:");
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	for(i=0;i<n;i++){
		if(arr[i]%2==0){
			even++;
		}
		else{
			odd++;
		}	
	}
	printf("odd=%d",odd);
	printf("even=%d",even);
}
