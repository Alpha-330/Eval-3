#include<iostream>
#include<string>
using namespace std;
int main(){
// #ifndef a
// freopen("input.txt","r",stdin);
// freopen("output.txt","w",stdout);
// #endif
// school --------grading system
// below 25 f
// 25-44 e
// 45 - 49 - d
// 50 - 59 c
// 60 - 79 b
// 80 - 100 a
int marks;
cin>>marks;

if (marks < 25){
	cout<<"F";
}

else if (marks >=25 && marks < 45){
	cout<<"E";
}

else if (marks >= 45 && marks < 50){
	cout<<"D";
}


else if (marks >=50 && marks < 60){
	cout<<"C";
}

else if (marks >=60 && marks < 80){
	cout<<"B";
}

else {
	cout<<"A";
}



return 0;

}
