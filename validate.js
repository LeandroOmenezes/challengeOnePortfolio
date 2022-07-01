//Seu JavaScript de validação aqui

//valida campo Nome
function validateForm() {
    let inputNome = document.getElementById("nome").value;
    if (inputNome === "") {
        alert("O campo *Nome completo* deve ser preenchido")
    }
    if (inputNome.length > 50){
        alert("Máximo de 50 caracteres no campo *Nome completo*")
    }
}
//valida campo email
function validaEmail() {
    let inputEmail = document.getElementById("email").value;
    if (inputEmail === "") {
        alert("O campo *Email* deve ser preenchido")
    }
}
//valida campo assunto
function validaAssunto() {
    let inputAssunto = document.getElementById("assunto").value;
    if (inputAssunto === "") {
        alert("O campo *Assunto* deve ser preenchido")
    }
    if (inputAssunto.length > 50){
        alert("Máximo de 50 caracteres no campo *Assunto*")
    }
}

    //valida campo mensagem
    function validaMensagem() {
        let inputMensagem = document.getElementById("mensagem").value;
        if (inputMensagem === "") {
            alert("O campo *Mensagem* deve ser preenchido")
        }
        if (inputMensagem.length > 300){
            alert("Máximo de 50 caracteres no campo *Mensagem*")
        }
    }
