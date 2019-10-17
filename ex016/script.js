function contar() {
    var ini= document.getElementById('txt1')
    var fim= document.getElementById('txt2')
    var passo= document.getElementById('txt3')
    var res= document.getElementById('res')

    // Se o valores for igual a zero o null 
    if(ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        window.alert('ERROR faltou dados')

    } else {
        res.innerHTML = 'Contando'
        // Conversão dos números. VAR E LET tem as mesma finalidade
        let i= Number(ini.value)
        let f= Number(fim.value)
        let p= Number(passo.value)

        if(p <= 0) {
            window.alert('Passo invalido ! Considerando PASSO 1')
            p= 1 
        }

        if(i < f) {
            //Contagem crescente
            for(let c = i; c <= f; c += p) {
            res.innerHTML +=` ${c} \u{1f449}` //emojs
        }
        } else {
            //Contagem regressiva
            for(let c = i; c >= f; c -= p) {
            res.innerHTML +=` ${c} \u{1f449}` //emojs
        }
        }
        res.innerHTML +=` ${c} \u{1F3c1}` //emojs
        
    }
}