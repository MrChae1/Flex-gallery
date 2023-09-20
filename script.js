const click = Array.from(document.querySelectorAll('.panel'));

for(const getClick of click){
    getClick.addEventListener('click', () => {
        const panelNum = getClick.classList[1];
        // console.log(getClick);
        // console.log(panelNum);
        const bg = document.querySelector(`.${panelNum}`);
        change(bg);
    })
}
function change(bgChange){
    click.forEach(key => key.classList.remove('open'));
    click.forEach(key => lastChild = key.querySelector(':last-child').style.transform = 'translateY(190px)');
    click.forEach(key => firstChild = key.querySelector(':first-child').style.transform = 'translateY(-158px)');
    bgChange.classList.add('open');
    lastP(bgChange);
    
}
function lastP(x){
    const getAgain = x.classList[1];
    const pan = document.querySelector(`.${getAgain}`);
    const last = pan.querySelector(':last-child');
    last.style.transform = 'translateY(0px)';
    const first = pan.querySelector(':first-child');
    first.style.transform = 'translateY(0px)';
}