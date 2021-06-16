let string = "";
addEventListener("click",(e)=>{
    if(e.target.className == 'grid-item'){
        if(e.target.innerText == 'AC'){
            string = "";
        }else if(e.target.innerText === '='){
            string = evaluate(string)
            evaluate(string)
        }else{
            string+=e.target.innerText
        }
        var x = document.getElementById("input");
        x.innerHTML =  `<h1>${string}</h1>`;
    }
})

function evaluate(string){
    try {
        return eval(string)
    }
    catch(err) {
        return "Are you dumb ?"
    }
}