#include<iostream>
#include <string>

using namespace std;

int main(){

		#ifndef a
		freopen("input.txt","r",stdin);
		freopen("output.txt","w",stdout);
		#endif
		int day;
		cin >>  day;
		switch(day){
		case 1:
			cout<<"Monday";
			break;
		case 2:
			cout<<"Tuesday";
			break;
		case 3:
			cout<<"Wednesday";
			break;
		case 4:
			cout<<"Thrusday";
			break;
		case 5:
			cout<<"Friday";
			break;
		case 6:
			cout<<"Saturday";
			break;
		case 7:
			cout<<"Sunday";
			break;
		default:
			cout<<"Fuckday";
		}

		return 0;

}