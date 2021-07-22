const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var strl= [];
app.use(express.json());

/*
A representacao de numeros romanos obedece as seguintes regras
1-Algarismos de menor ou igual valor à direita são somados ao algarismo de maior valor;
2-Algarismos de menor valor à esquerda são subtraídos do algarismo de maior valor.
*/


function conversor(digito) {
    switch (digito) {
        case 'I':
            return 1;
            break;

        case 'V':
            return 5;
            break;

        case 'X':
            return 10;
            break;

        case 'L':
            return 50;
            break;

        case 'C':
            return 100;
            break;
        case 'D':
            return 500;
            break;
        case 'M':
            return 1000;
            break;

        default: 
            return -1;
            break

            
    }
}

function pegar(str) {
    var total=0;
    
    for (var i = 0; i < str.length; i++) {
        strl[i]=conversor(str.charAt(i));
      }

    for (let index = 0; index < strl.length; index++) {
        console.log("ind"+index+" st"+strl.length);
        if(index+1<strl.length){
            
            if(strl[index]>=strl[index+1]){
                console.log("1st: "+strl[index])
                console.log("2st: "+strl[index+1])
                total+=strl[index]
            }else{
                total+=(strl[index+1]-strl[index]);
                console.log("1st: "+strl[index])
                console.log("2st: "+strl[index+1])
                index++;
            }
        }else{
            
            total+=strl[index]
        }
        
        console.log("e: "+total)
        
    }
    
    return total;

}


app.get('/roman/:id',(req,res)=>{
    var {id} = req.params;
    var total = 0;
    strl= [];
    total = pegar(id);
    res.send({
        strl, total
    });
})

app.get('/',(req,res)=>{
    res.send("Hello world");
})

app.listen(port, () => console.log(`Correndo o projeto no `+port))