let input=document.getElementById('inputBox');
let button=document.querySelectorAll('button');

let string = " ";
let arr = Array.from(button);
arr.forEach(button => {
     button.addEventListener('click',(e) =>{
        if(e.target.innerText =='=')
        {
            string =  String(eval(string));
            inputBox.value =string;
        }
        else if(e.target.innerText == 'AC'){
            string ="";
            inputBox.value=string;
        }

        else if(e.target.innerText == 'DEL'){
            string = string.substring(0,string.length-1);
            inputBox.value = string;
        }

        else{ string += e.target.innerText;
              inputBox.value = string;
        }
     })
    })