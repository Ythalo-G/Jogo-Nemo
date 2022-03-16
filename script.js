const nemo = document.querySelector('.nemo');
const background = document.querySelector('.background');

let isJumping = false;
let position = 0;

let contador = 0;
//pular
function handleKeyup(event){
    if (event.keyCode === 32 || event.keyCode === 38){
        if(!isJumping){
            jump();
        }
    }
}
function jump(){
    isJumping = true;
    let upInterval =setInterval(() => {
        if(position >= 150){
            clearInterval(upInterval);

            let downInterval = setInterval(() => {
                if(position <= 0){
                    clearInterval(downInterval);
                    isJumping = false;
                }else{
                    position -= 20;
                    nemo.style.bottom = position + 'px';
                } 
            }, 20);
        }else{
        position += 20;
        nemo.style.bottom = position + 'px';
        }
    }, 20);
}

function createCactus(){
    contador += 1;
    console.log(contador);
    const tubarao = document.createElement('div');
    let tubaraoPositions = 1000;
    let randomTime = Math.random() * 6000;

     tubarao.classList.add('tubarao');
     tubarao.style.left = 3000 + 'px';
    background.appendChild(tubarao);

    let lefInterval = setInterval(() => {
        tubaraoPositions -= 10;
        tubarao.style.left = tubaraoPositions + 'px';
       
        if (tubaraoPositions <= -60){
            clearInterval(lefInterval);
            background.removeChild(tubarao);

        }else if (tubaraoPositions > 0  && tubaraoPositions < 60 && position < 60) {
            
            clearInterval(lefInterval);
            alert(`Seu score foi : ${contador}`)
            window.location.href = "pagina.html"
        }else{  
            tubaraoPositions -= 10;
            tubarao.style.left = tubaraoPositions + 'px';
        }
    },40);
    setTimeout(createCactus, randomTime);
}
createCactus();
document.addEventListener('keyup',handleKeyup);