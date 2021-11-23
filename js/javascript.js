//definir variável caixa
let caixa = document.getElementById('caixa');

//definir os eventos do mouse na variável caixa
caixa.addEventListener('click', clicar);
caixa.addEventListener('mouseenter', entrar);
caixa.addEventListener('mouseout', sair);

//Criar função da variável clicar
function clicar(){
    caixa.innerHTML = 'Você Clicou';
    caixa.style.background = 'red';
    caixa.style.color = 'black';
    caixa.style.textTransform = 'uppercase'; 
}

//criar a função da variável entrar
function entrar(){
    caixa.innerHTML = 'Você vai clicar que eu tô ligado';
    caixa.style.background = 'yellow';
    caixa.style.color = 'black';
    
}

//criar função sair
function sair(){
    caixa.innerHTML = '<strong>Passe o mouse</strong>';
    caixa.style.background = 'brown';
    caixa.style.color = 'burlywood';

}