var navegcao = document.querySelector
('header nav ul');
var button = document.querySelector('header nav button');

button.addEventListener('click', function (){
    navegacao.classList.add('active');
    if(navegacao.classList.contains('active')){
    navegacao.classList.add('remove');
    }else{
        navegacao.classList.togle('active');
    }
});