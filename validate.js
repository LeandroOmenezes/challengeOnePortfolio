//Seu JavaScript de validação aqui

const inputs = document.querySelectorAll('input, textarea')
const enviar = document.querySelector('[nome="enviar"]')

inputs.forEach(input => {
    input.addEventListener('blur', (evento) => {
        validar(evento.target)
        verificaCamposVazios()
    })
})

function validar(input) {
    const tiposDeInput = input.dataset.tipo

    if(validadores[tiposDeInput]) {
        validadores[tiposDeInput](input)
    }
}

function verificaCamposVazios() {
    let campoNome = document.querySelector("[nome='nome']")
    let campoEmail = document.querySelector("[nome='email']")
    let campoAssunto = document.querySelector("[nome='assunto']")
    let campoMensagem = document.querySelector("[nome='mensagem']")

    if (campoNome.value != ''&& campoEmail.value != '' && campoAssunto.value != ''&& campoMensagem.value != '') {
        enviar.disable = false
    } else {
        enviar.disable = true
    }

}

const validadores = {
    nome:input => verificaNome(input),
    email:input => verificaEmail(input),
    assunto:input => verificaAssunto(input),
    mensagem:input => verificaMensagem(input),
}

const tiposDeErro = [
    'valueMissing',
    'typeMismatch',
    'patternMismatch',
    'customError'
]

const mensagensDeErro = {
    nome: {
        valueMissing: 'Este campo nome não deve estar vazio.',
        customError: 'Este campo não deve conter mais de 50 caracteres.',
    },
    email: {
        valueMissing: 'Este campo e-mail não pode estar vazio.',
        customError: 'Campo inválido',
    },
    assunto: {
        valueMissing: 'Este campo assunto não pode estar vazio.',
        customError: 'Este campo não deve conter mais de 50 caracteres'
    },
    mensagem: {
        valueMissing: 'Este campo mensagem não pode estar vazio',
        customError: 'Este campo não deve conter mais de 300 caracteres'
    }
}

function mostraMensagemDeErro(tiposDeInput, input) {
    let mensagem = ''
    tiposDeErro.forEach(erro => {
        if(input.validity[erro]) {
            mensagem = mensagensDeErro[tiposDeInput][erro]
        }
    })
    
    return mensagem
}

function verificaNome(input) {
    let mensagem = ''
    if (input.value.length >= 50){
        mensagem = 'Este campo não deve conter mais de 50 caracteres.'
    }
    if (!input.value.length){
        mensagem = 'Este campo não pode estar vazio.'
    }

    input.setCustomValidity(mensagem)
}

function verificaEmail(input) {
    let mensagem = ''
    let mailRegex = new RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}')

    if (!mailRegex.test(input.value)){
        mensagem = 'Este formato de e-mail é inválido.'
    }
    if (!input.value.length){
        mensagem = 'Este campo não pode estar vazio.'
    }

    input.setCustomValidity(mensagem)
    
}

function verificaAssunto(input) {
    let mensagem = ''
    if (input.value.length >= 50){
        mensagem = 'Este camo não pode conter mais de 50 caracteres.'
    }

    if (!input.value.length) {
        mensagem = 'Este campo não pode estar vazio.'
    }

    input.setCustomValidity(mensagem)
}

function verificaMensagem(input) {
    let mensagem = ''

    if (input.value.length >= 300){
        mensagem = 'Este campo não permite mais de 300 caracteres.'
    }

    if (!input.value.length) {
        mensagem = 'Este campo não pode estar vazio.'
    }

    input.setCustomValidity(mensagem)
}
    alert("Formulário enviado!");
