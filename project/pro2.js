console.log("JS LOAD");

const form=document.querySelector('form')

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height= parseInt(document.querySelector('#h').value)
  const weight= parseInt(document.querySelector('#w').value)
  const result = document.querySelector('#result')
  if (!height || !weight) {
    result.innerHTML = "Please enter valid numbers";
    return;
  }
  const bmi = (weight/((height*height)/10000)).toFixed(2);
  result.innerHTML=`<span>${bmi}</span>`;
})