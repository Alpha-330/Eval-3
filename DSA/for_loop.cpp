#include<iostream>
#include <string>

using namespace std;

int main(){

		#ifndef a
		freopen("input.txt","r",stdin);
		freopen("output.txt","w",stdout);
		#endif

		for(int i = 5;i> 0;i = i -1){
			cout<<"Piyush "<<i<<endl;
		}

		return 0;

}