#include<iostream>
#include <string>

using namespace std;

int main(){

		#ifndef a
		freopen("input.txt","r",stdin);
		freopen("output.txt","w",stdout);
		#endif
		int i = 1;
		while(i<=5){

			cout<<"Piyush"<<i<<endl;
			i = i + 1;
		}

		return 0;


	}