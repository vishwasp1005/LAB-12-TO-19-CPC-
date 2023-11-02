#include<stdio.h>
int main(){
	int a[3][3],i,j,cn=0,cp=0,cz=0;
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			scanf("%d",&a[i][j]);
		}
	}
	for(i=0;i<3;i++){
		for(j=0;j<3;j++){
			if(a[i][j] <0){
				cn++;
			}
			else if(a[i][j]>0){
				cp++;
			}
			else
			cz++;
			}
		}
	
	printf("cp=%d",cp);
	printf("cn=%d",cn);
	printf("cz=%d",cz);
}
