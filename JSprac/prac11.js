const product2 = {
  name : 'shirt',
  'delivery-time' : '2 day',
  rating : {
    stars : 4.5,
    count : 87
  },
  fun : function function1(){
    console.log('function inside object');
  }
 };
//  console.log(product2.name)
//  console.log(product2['name'])
//  console.log(product2['delivery-time'])
//  console.log(product2.rating.stars)
//  console.log(product2.rating.count)
 product2.fun();
//  console.log(typeof console.log);
// Convert JS object to json
 console.log(JSON.stringify(product2));
 const jsonString = JSON.stringify(product2)
 console.log(JSON.parse(jsonString))