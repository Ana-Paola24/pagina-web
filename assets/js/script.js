const nome = document.querySelector('#nome')
const email = document.querySelector('#email')
const assunto = document.querySelector('#assunto')
const map = document.querySelector('#map')


let nomeOk = false;
let emailOk = false;
let mensagemOk = false;

function validaNome() {
    let txtNome = document.querySelector("#txtNome")
  
    if (nome.value.length < 3) {
      txtNome.innerHTML = 'INVÁLIDO'
      txtNome.style.color = 'red'
      nome.style.color = '#FF147F'
      nomeOk = false
    } else {
      txtNome.innerHTML = 'válido'
      txtNome.style.color = '#FF147F'
      nome.style.color= 'red'
      nomeOk = true
    }
  }

function validaEmail() {

    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.match(regex)) {
        txtEmail.innerHTML = 'email válido'
        txtEmail.style.color = '#FF147F'
        email.style.color = 'red'
        emailOk = true
    } else {
        txtEmail.innerHTML = 'EMAIL INVÁLIDO'
        txtEmail.style.color = 'red'
        email.style.color = '#FF147F'
        emailOk = false
    }
}
  
function validaAssunto() {

    let txtMsg = document.querySelector('#txtAssunto')

    if(assunto.value.length > 100) {
        txtMsg.innerHTML = 'POR FAVOR, RESUMA!'
        txtMsg.style.color = '#d90429'
        assunto.style.color = '#FFFF'
        mensagemOk = false
      } else {
        txtMsg.innerHTML = assunto.value.length + '/100'
        txtMsg.style.color = '#FF147F'
        assunto.style.color = 'red'
        mensagemOk = true
      }
}

function enviarForm(){

    if(nomeOk && emailOk && mensagemOk) {
        alert(nome.value + ', sucesso no envio, aguarde o retorno, que pode acontecer algum dia')
    } else {
        alert('Por favor, verifique se todos os campos estão preenchidos corretamente')
    }
}

function mapaZoom() {
    /*map.style.aspectRatio = '16/10'*/
    map.style.width = '85%'
    map.style.higth =' 0'
  }
  
  function mapaNormal() {
    map.style.width = '40em'
  }