#include<stdio.h>
int main(){
	int n,i,sum=0;
	float avg;
	printf("enter the size of array:");
	scanf("%d",&n);
	int arr[n];
	for(i=0;i<n;i++){
		scanf("%d",&arr[i]);
	}
	for(i=0;i<n;i++){
		sum=sum+arr[i];
	}
	printf("sum=%d\n",sum);
	avg=sum/n;
	printf("avg=%f\n",avg);
	for(i=0;i<n;i++){
		if(arr[i]>avg){
			printf("number greater than avg=%d\n",arr[i]);
		}
		}
	}

