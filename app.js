var inp = document.querySelector('#inpFil');
var btn = document.querySelector('#btn');
var Div = document.querySelector('#text');

btn.addEventListener('click', function(){

  function vlCounter(string) {
    var lol = 0;
    for(var i=0; i < inp.value.length; i++){
    if(string[i] === 'a'  || string[i] === 'e'  || string[i] === 'i'  || string[i] === 'o'  || string[i] === 'u' ){
      lol++
    }
    }
    alert(lol);
  }
  vlCounter(inp.value);
  inp.value = '';
});