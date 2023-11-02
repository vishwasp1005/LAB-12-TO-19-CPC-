#include<stdio.h>
int main(){
	int h[5],w[5],i,count=0;
	for(i=0;i<5;i++){
		printf("height=");
		scanf("%d",&h[i]);
	}
	for(i=0;i<5;i++){
		printf("\fweight=");
		scanf("%d",&w[i]);
	}
	for(i=0;i<5;i++){
		if(h[i]>170 && w[i]<50){
		count++;
		}
	}
	printf("%d",count);
return 0;	
}
