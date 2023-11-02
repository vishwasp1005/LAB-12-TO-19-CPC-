#include<stdio.h>
int main(){
	int i,j,c=1;
	for(i=1;i<=5;i++){
		for(j=5;j>=i;j--){
			printf("%d",c);
			c++;
		}
		c=1;
		printf("\n");
	}
}
