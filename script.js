function insert(num){
    var numero = document.getElementById('res').innerHTML
    document.getElementById('res').innerHTML = numero + num
    
}
function clean(limpar){
    document.getElementById('res').innerHTML = ""
}
function beck(){
    const resultado = document.getElementById('res').innerHTML;
    document.getElementById('res').innerHTML = resultado.substring(0, resultado.length -1);
}
function resultado(){
    let resultado = document.getElementById("res").innerHTML;
    if(resultado){
        document.getElementById('res').innerHTML = eval(resultado)
    }
    else{
        alert("Por favor digite um número para ser calculado")
    }
}
