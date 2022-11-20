var blocos = document.getElementsByClassName("bloco");
var botao = document.getElementById("remover");
botao.addEventListener("click", removerListeners);
let i = 0;

for(i = 0; i < blocos.length; i++) {
    blocos[i].addEventListener("mouseover", corNaBorda);
    blocos[i].addEventListener("mouseout", removerCorNaBorda);
}

function corNaBorda(obj) {
    obj.target.style.border = "5px solid yellow";
}

function removerCorNaBorda(obj) {
    obj.target.style.border = "5px solid blue";
}

function removerListeners() {
    for(i = 0; i < blocos.length; i++) {
        blocos[i].removeEventListener("mouseover", corNaBorda);
        blocos[i].removeEventListener("mouseout", removerCorNaBorda);
    }
}

// function exibirMensagem(this) {
//     alert("Oioi");
// }

// funcao(Function funcaoCallback) {
//     // funcao faz diversas coisas
//     funcaoCallback.call(); // chama a função passada por parâmetro
// }

// function a(function b()){
//     ...
//     ...
//     ...
//     ...
//     ...
//     function b();
// }

// function b() {

// }


// const pai = document.getElementById('pai');
// const filho = document.getElementById('filho');
// const neto = document.getElementById("neto");

// pai.addEventListener('click', x=>console.log("pai foi clicado"));
// filho.addEventListener('click', x=>console.log("filho foi clicado"));
// neto.addEventListener('click', x=>console.log("neto foi clicado"));

// const pai = document.getElementById('pai');
// const filho = document.getElementById('filho');
// const neto = document.getElementById("neto");

// pai.addEventListener('click', x=>console.log("pai foi clicado"));
// filho.addEventListener('click', x=>console.log("filho foi clicado"));
// neto.addEventListener('click', x=>{
//     console.log("neto foi clicado");
//     event.stopPropagation()});
