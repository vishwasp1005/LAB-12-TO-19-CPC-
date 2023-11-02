#include<stdio.h>
int main(){
	int n,i,sum=0,min,max,avg;
	printf("enter the size of array:");
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	max=arr[0];
	min=arr[0];
	for(i=0;i<n;i++){
		sum=arr[i]+sum;
		if(max<arr[i]){
			max=arr[i];
		}
		if(min>arr[i]){
		min=arr[i];
		}
		}
		avg=sum/i;
	printf("sum=%d",sum);
	printf("min=%d",min);
	printf("max=%d",max);
	printf("avg=%d",avg);
}
