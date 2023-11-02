#include<stdio.h>
int main(){
    int i,j,c=5;
	for(i=1;i<=5;i++){
		for(j=1;j<=i;j++){
			printf("%d",c);
			c--;
		}
		c=5;
		printf("\n");
	}
}
