#include<iostream>
#include <string>

using namespace std;

int main(){

		#ifndef a
		freopen("input.txt","r",stdin);
		freopen("output.txt","w",stdout);
		#endif

		// int arr[5];
		// cin >>arr[0]>> arr[1] >> arr[2] >> arr[3] >> arr[4];
		// cout<<arr[3];

		// 2D ARRAY
		int arr[3][5];
		arr[1][0] = 56;
		arr[1][0] += 2;
		cout<<arr[1][0];
		// string s = "Piyush";
		// int len; 
		// len= s.size();
		// cout<<endl<<s[1];
		// s[len-1] = 'p';
		// cout<<s;

		return 0;

}
