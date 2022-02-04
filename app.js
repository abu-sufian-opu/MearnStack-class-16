
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


//custom-accordion

//get elements

const acc_header = document.querySelectorAll('.accordion-header');


acc_header.forEach(items => {
    items.addEventListener('click', function(){

        const curr_activeHeader = document.querySelector('.accordion-header.active');

        if( curr_activeHeader && curr_activeHeader !== items){
            curr_activeHeader.classList.remove('active');
            curr_activeHeader.nextElementSibling.style.height = 0;
        }
        
        items.classList.toggle('active');
        
        if(items.classList.contains('active')){
            items.nextElementSibling.style.height = items.nextElementSibling.scrollHeight + 'px';
        }else{
            items.nextElementSibling.style.height = '0';
        }
    })
});

