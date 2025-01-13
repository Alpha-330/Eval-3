// HIgh Order Function and callback 

function add(a,b,cb){
  let result =  a+b;
  cb(result);

  return function(){
    console.log(result)
  }
}

function showResult(result){
  console.log(result)
};
// add(2,4,showResult);
// add(20,200,showResult)
let resultFunction =  add(20,200,()=>{});
resultFunction();