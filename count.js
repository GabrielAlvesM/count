let count = 0;

document.querySelector('#increaseBtn').addEventListener('click', () => {
    count+=1;
    document.querySelector('#myLabel').innerHTML = count;
})

document.querySelector('#reset').addEventListener('click', () => {
    count = 0;
    document.querySelector('#myLabel').innerHTML = count;
})

document.querySelector('#decreaseBtn').addEventListener('click', () =>{
    count-=1;
    document.querySelector('#myLabel').innerHTML = count;
})