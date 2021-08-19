function verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('txtano')
    let res = document.getElementById('res')
    let img = document.getElementById('imagem')

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('Verifique os dados')
    }

    else{
        let fsex = document.getElementsByName('radsex')
        let idade = ano - Number(fano.value)
        let genero = ''

        if (fsex[0].checked){
            genero = 'Homem'

           
            if (idade >= 0 && idade < 10 ){
                img.src = 'bebemenino.png'
                document.body.style.background ='#48403b'
            }

            else if(idade < 21){
                img.src = 'jovemhomem.png'
                document.body.style.background ='#48403b'
            }


            else if (idade < 50){
                img.src = 'homemadulto.png'
                document.body.style.background ='#48403b'
            }

            else{
               
                img.src = 'senhorhomem.png'
                document.body.style.background ='#48403b'
            }
            
        }

        else if (fsex[1].checked){
            genero = 'Mulher'

           
            if(idade >= 1 && idade <= 10){
                img.src= 'bebemenina.png'
                document.body.style.background = '#e17d33'
            }
            
            if (idade >= 11 && idade <= 21){
                img.src='jovemmulher.png'
                document.body.style.background ='#e17d33'
                
            }

            if(idade < 50){
                img.src = 'adultamulher.png'
                document.body.style.background ='#e17d33'
            }

            else{
                img.src = 'senhoramulher.png'
                document.body.style.background = '#e17d33'
            }

            
            

        }

        res.innerHTML =`Detectamos um(a) ${genero} de ${idade} anos`
    }

    



} 