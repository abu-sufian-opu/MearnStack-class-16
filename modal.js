
//get elements

const apply_btn = document.getElementById('apply-btn');
const keep = document.getElementById('keep');
const discard = document.getElementById('discard');
const modal = document.querySelector('.sufian-modal');
const mclose_btn = document.querySelector('.modal-header .close');
const aclose_btn = document.querySelector('.alart-header .close');
const alart = document.querySelector('.sufian-alart');


apply_btn.addEventListener('click', function(){
    modal.classList.add('active');
});

mclose_btn.addEventListener('click', function(){
    alart.style.display = ('flex');
});

aclose_btn.addEventListener('click', function(){
    alart.style.display = ('none');
});

keep.addEventListener('click', function(){
    alart.style.display = ('none');
});

discard.addEventListener('click', function(){
    alart.style.display = ('none');
    modal.classList.remove('active');
});

modal.addEventListener('click', function(e){

    if( e.target == this ){
        modal.classList.remove('active');
    }
});
