const botcomecar = document.getElementById('bot-comecar')
const perguntacontainer = document.getElementById('pergunta-container')
const pergunta = document.getElementById

const perguntasembaralhadas, perguntasatuais()

botcomecar.addEventListener('click', comecarquiz)
function comecarquiz(){
    console.log('started')
    botcomecar.classList.add('hide')
    perguntasembaralhadas = perguntas.sort(() => Math.random() - .5) 
    perguntacontainer.classList.remove('hide')
    proximapergunta()
}

function proximaquestao() {
    mostrarpergunta(perguntasembaralhadas[perguntasatuais])
}
function mostrarpergunta(pergunta){

}

function escolheropcao() {

}
const perguntas = [
    {
        pergunta: 'x?'
        respostas: [
            { text: '4', correct: true}
            { text: '4', incorrect: false}        
        ]
    }
]