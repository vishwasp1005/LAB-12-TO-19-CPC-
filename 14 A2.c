#include<stdio.h>
int main(){
	int n,i;
	printf("enter the size of array:");
	scanf("%d",&n);
	int arr[n],neg=0,pos=0;
	for(i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	for(i=0;i<n;i++){
		if(arr[i]<0){
			neg++;
		}
		else{
			pos++;
		}
	}
	printf("negative=%d",neg);
	printf("positive=%d",pos);
}
