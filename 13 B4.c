#include<stdio.h>
int main(){
	int i,j,n=5;
	int ch=65,a=1;
	for(i=1;i<=5;i++){
		a=1;
		for(j=1;j<=n-i;j++){
			printf(" ");
		}
		for(j=1;j<=2*i-1;j++){
			if(j%2==1){
			   if(i%2==1){
				printf("%d",a);
				a++;
			    }
			  else{
				printf("%c",ch);
				ch++;
			   }
			   }
			else{
			printf(" ");
			}
			
		}printf("\n");
		
	}
}
