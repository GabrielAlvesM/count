let count = 0;

document.querySelector('#decrease').addEventListener('click', () =>{
    count -=1;
    document.querySelector('#count').innerHTML = count;
})
document.querySelector('#reset').addEventListener('click', () =>{
    count = 0;
    document.querySelector('#count').innerHTML = count;
})
document.querySelector('#increase').addEventListener('click', () =>{
    count += 1;
    document.querySelector('#count').innerHTML = count;
})