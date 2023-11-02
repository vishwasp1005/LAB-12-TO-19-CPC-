#include<stdio.h>
int main(){
	int a[20][2],i,j;
		for(i=0;i<20;i++){
		for(j=0;j<2;j++){
			printf("Enter value at a[%d][%d]: ",i,j);
			scanf("%d",&a[i][j]);
		}
	}
	for(i=0;i<20;i++){
		for(j=0;j<2;j++){
			printf("%d",a[i][j]);
		}
		printf("\n");
	}
	
	
}
