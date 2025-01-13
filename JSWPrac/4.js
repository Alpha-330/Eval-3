arr = [1,2,3,4,5,6,7,8,9,10]

 let e = arr.filter( function (i){
  return i%2 == 0; 
  // Only can fiter the array no operation
  
 });
 let f = arr.map( function (i){
  return i*i

  
 });

 console.log(e)
 console.log(f)