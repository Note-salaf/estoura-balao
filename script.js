const balao = document.querySelector('#balao')
const explode = document.querySelector('#explode')
const pontos = document.querySelector('#pontos')
let velocidade = 10
let pontuacao = 0
const body = document.querySelector('body');
const modal1 = document.querySelector('#modal1')
const botFechaModal1 = document.querySelector('#botFechaModal1')
let subidaAutomatica
const miniBalao2 = document.querySelector('#miniBalao2')
const miniBalao1 = document.querySelector('#miniBalao1')
const balaoEscolhido = document.querySelector('#balaoEscolhido')
const escolhePersonagem = document.querySelector('#escolhePersonagem')
const barraProgresso = document.querySelector('#barraProgresso')
let largura = 0
const tutorial = document.querySelector('#tutorial')
const botTutorial = document.querySelector('#botTutorial')
const trofeuOuro = document.querySelector('#trofeu-ouro')
const trofeuOuro2 = document.querySelector('#trofeu-ouro2')
const ganhaTrofeu = document.querySelector('#ganhaTrofeu')
const trofeuouroG = document.querySelector('#trofeu-ouroG')
const miniDiscoVoador = document.querySelector('#miniDiscoVoador')
const desbloqDiscoVoador = document.querySelector('#desbloqDiscoVoador')
const tutorialClicaBalao = document.querySelector('#tutorialClicaBalao')
const botProximoTutorial1 = document.querySelector('#botProximoTutorial1')
const somFase1 = document.querySelector('#somFase1')
const somFase2 = document.querySelector('#somFase2')
const somFase3 = document.querySelector('#somFase3')
const credits = document.querySelector('#credits')
const botReinicia = document.querySelector('#botReinicia')


function tocaSomFase1() {
    somFase1.play()
}
somFase1.addEventListener('canplaythrough', tocaSomFase1);

function subir() {
   if (balao.offsetTop > -200) {
    balao.style.top = balao.offsetTop - velocidade + 'px'

   } else {
        balao.style.top = '420px';
        balao.style.visibility = 'visible'
        deslocar()

    }
}
function intervaloSubida() {
subidaAutomatica = setInterval( () =>  {
    subir();

},100)
}
intervaloSubida()

function sumir() {
    explode.play()
    balao.style.visibility = 'hidden'
}

function deslocar() {
    let xAleatorio = parseInt(Math.random() * 1100)
    balao.style.left = xAleatorio + 'px'
}

function contaPontos() {
    pontuacao++
    pontos.textContent = pontuacao
}

function zeraPontos() {
    pontuacao = 0
    pontos.textContent = pontuacao

}
function trocaFundo() {
    body.style.backgroundImage = 'url(floresta.jpg)'
     
}
function trocaFundoEspaco() {
    body.style.backgroundImage = 'url(espaco.jpg)'
     
}

function trocaPersonagem() {
    balao.src = 'aranha1.png' 
}
function trocaPersonagemEspaco() {
    balao.src = 'animated-spaceship-image-0037.gif' 
}

function aumentaVelocidade() {
    velocidade += 10
}
function faseUm() {
    somFase2.pause()
    somFase3.pause()
    somFase1.play()
    trofeuOuro.style.visibility = 'hidden'
    trofeuOuro2.style.visibility = 'hidden'
    miniDiscoVoador.style.visibility = 'hidden'
    body.style.backgroundImage = 'url(ceu.jpg)'
    balao.src = 'balao.gif'
    velocidade = 10
}
function faseDois() {
    if (pontuacao == 5) {
        somFase1.pause()
        somFase2.play()
        trocaFundo()
        trocaPersonagem()
        aumentaVelocidade()
        mostraTrofeuOuro()
        mostraTrofeuGrande()
        setTimeout(escondeTrofeuGrande, 1000)
    }
}
function faseTres() {
    if (pontuacao == 10) {
        somFase2.pause()
        somFase3.play()
        trocaFundoEspaco()
        trocaPersonagemEspaco()
        mostraTrofeuOuroEspaco()
        mostraTrofeuGrande()
        setTimeout(escondeTrofeuGrande, 1000)
    }
}
function abreModal1() {
    modal1.show()
}

function fechaModal1() {
    modal1.close()
}

function escolheBalaoRosa() {
balao.src = 'balao-rosa.gif'    
balaoEscolhido.textContent = 'Balão rosa selecionado.'
}

function escolheBalaoAzul() {
balao.src = 'balao.gif' 
balaoEscolhido.textContent = 'Balão azul selecionado.'   

}
function escolheDiscoVoador() {
    balao.src = 'animated-spaceship-image-0037.gif' 
    balaoEscolhido.textContent = 'Disco voador selecionado.'   
    
    }

function aumentaBarraProgresso() {
   if (largura < 100) {
        largura += 100 / 15
        barraProgresso.style.width = largura + '%'
        barraProgresso.textContent = parseInt(largura) + '%'
    }
}
function zeraBarraProgresso() {
    largura = 0
    barraProgresso.style.width = largura + '%'
    barraProgresso.textContent = parseInt(largura) + '%' 
}

function mostraTutorial() {
    tutorial.style.visibility = 'visible'
    setTimeout(escondeTutorial,10000)
}
function escondeTutorial() {
    tutorial.style.visibility = 'hidden'
}
function mostraTutorialClicaBalao() {
    tutorialClicaBalao.style.visibility = 'visible'
}
function escondeTutorialClicaBalao() {
    tutorialClicaBalao.style.visibility = 'hidden'
}
function mostraTrofeuOuro() {
    ganhaTrofeu.play()
    trofeuOuro.style.visibility = 'visible'
}
function mostraTrofeuOuroEspaco() {
    ganhaTrofeu.play()
    trofeuOuro2.style.visibility = 'visible'
}
function mostraTrofeuGrande() {
    trofeuouroG.style.visibility = 'visible'
    
}
function escondeTrofeuGrande() {
    trofeuouroG.style.visibility = 'hidden'
}
function ganhaDiscoVoador() {
    if (pontuacao == 10) {
        miniDiscoVoador.style.visibility = 'visible'
        mostraMsgDiscoVoador()
        setTimeout(escondeMsgDiscoVoador,5000)
    }
    
}
function mostraMsgDiscoVoador() {
    desbloqDiscoVoador.style.visibility = 'visible'
}
function escondeMsgDiscoVoador() {
    desbloqDiscoVoador.style.visibility = 'hidden'

}
function mostraCreditos() {
    credits.style.visibility = 'visible'
}
function escondeCreditos() {
    credits.style.visibility = 'hidden'

}
function fimDoJogo() {
    if (pontuacao == 15) {
        mostraCreditos() 
    }
    }
function reiniciar() {
   zeraPontos() 
   zeraBarraProgresso()
   faseUm()
}

balao.addEventListener('click', () => {
    sumir()
    contaPontos()
    faseDois()
    faseTres()
    fimDoJogo()
    aumentaBarraProgresso()
    ganhaDiscoVoador()
    })
botFechaModal1.addEventListener('click', () => {
    fechaModal1()
    
})
miniBalao2.addEventListener('click', escolheBalaoRosa)
miniBalao1.addEventListener('click', escolheBalaoAzul)
miniDiscoVoador.addEventListener('click', escolheDiscoVoador)
escolhePersonagem.addEventListener('click', abreModal1)
botTutorial.addEventListener('click', mostraTutorialClicaBalao)
botProximoTutorial1.addEventListener('click', () => {
    escondeTutorialClicaBalao()
    mostraTutorial()
})
botReinicia.addEventListener('click', () => {
    reiniciar()
    escondeCreditos()
})


