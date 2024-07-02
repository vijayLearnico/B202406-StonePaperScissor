// image
// user -> option
// user option's display
// Computer play
// Calc -> result

const cpuPlay = () => {
    const options = ['stone','paper','scissor'];
    const randomNum = Math.ceil(Math.random() * 3) - 1;
    return options[randomNum];
}

const userOption = (val) =>{
    const userOptionTag = document.querySelector('#user');
    const cpuOptionTag = document.querySelector('#cpu');

    const resultTag = document.querySelector('.result')
    userOptionTag.innerHTML = `<img src='./assets/${val}.png'>`
    const cpuOption = cpuPlay()
    console.log('cpuOption',cpuOption);
    cpuOptionTag.innerHTML = `<img src='./assets/${cpuOption}.png'>`

    let result = ''

    // stone > scissor
    // scissor > paper
    // paper > stone

    if(val == cpuOption){
        result = 'Match Draw'
    } else if(val == 'stone' && cpuOption == 'paper'){
        result = 'CPU Wins'
    } else if(val == 'paper' && cpuOption == 'scissor'){
        result = 'CPU Wins'
    } else if(val == 'scissor' && cpuOption == 'stone'){
        result = 'CPU Wins'
    } else {
        result = 'User Wins'
    }

    resultTag.innerHTML = `<h1>${result}</h1>`
};

window.onload = () => {
    const stone = document.querySelector('#stone');
    const paper = document.querySelector('#paper');
    const scissor = document.querySelector('#scissor');

    stone.addEventListener('click',() => {
        userOption('stone')
    });
    paper.addEventListener('click',() => {
        userOption('paper')
    });
    scissor.addEventListener('click',() => {
        userOption('scissor')
    });


} 