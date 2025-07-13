
function palindroma(string){
  const reversed = string.split("").reverse().join('').toLowerCase();
  console.log(reversed);
}



const word = prompt('inserisci una parola');

if(palindroma(word) === true){
  console.log('è palindroma')
}
else{
  console.log('non è palindroma');
}


function randomnumber(){
  return Math.floor(Math.random() * 5)+1;
}

