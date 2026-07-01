const Promiseone = new Promise(function(resolve,reject){
  setTimeout(function(){
    console.log('Promise created');
    resolve();
  },1000)
})
Promiseone.then(function(){
  console.log('Promise resolved');
})
