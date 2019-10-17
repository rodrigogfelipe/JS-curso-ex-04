function tabuada(){

    var num= document.getElementById('txt1')
    var tab= document.getElementById('seltab')

    // Se o valores for igual a zero o null 
    if(num.value.length == 0) {
        window.alert('Por favor digite um número.')

    } else {

    // Conversão dos números. VAR E LET tem as mesma finalidade
    var n= Number(num.value)
    var c= 1
    /* tab.innerText o campo vazio */
    tab.innerText= '' 
    while(c <= 10) {
        /* Criando um elemento option, dentro do select*/
        var item= document.createElement('option')
        item.text = `${n} x ${c} = ${n * c}`
        /*item.value marca a TAB no campo*/
        item.value= `tab${c}`
        tab.appendChild(item)
        c++
    }
    }
   }
       
   
