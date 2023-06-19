const ratingContainer = document.querySelector('.rating-container');
const ratings = document.querySelectorAll('.rating');
const panel = document.getElementById('panel');
const sendBtn = document.getElementById('send');

let selected;
ratingContainer.addEventListener('click',(e) =>{
    if(e.target.parentNode.classList.contains('rating')){
        removeActive();
        e.target.parentNode.classList.add('active')
        selected = e.target.nextElementSibling.innerHTML;
        // console.log(selected);
        // console.log(e.target.nextElementSibling);
    }
});

function removeActive(){
    for(let i=0 ;i<ratings.length ;i++){
        ratings[i].classList.remove('active');
    }
}

sendBtn.addEventListener('click',()=>{
    panel.innerHTML =`
        <img src="image/heart.svg" alt="" class="img-completed">
        <strong>Thank you for your Satisfaction</strong>
        <br>
        <strong>Your Satisfaction : ${selected}</strong>
    `
});