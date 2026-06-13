const button = document.querySelectorAll(".button")
const body =document.querySelector('body');

button.forEach( function(button){
  button.addEventListener('click',function(e){
    if(e.target.id === 'red'){
      body.style.backgroundColor='rgb(248, 37, 37)';
    }
    if(e.target.id === 'yellow'){
      body.style.backgroundColor='rgb(226, 244, 32)';
    }
    if(e.target.id === 'green'){
      body.style.backgroundColor='rgb(6, 212, 57)';
    }
    if(e.target.id === 'pink'){
      body.style.backgroundColor='rgb(255, 0, 238)';
    }
  })
  
});