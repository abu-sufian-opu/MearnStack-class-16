//get elements

const acc_header = document.querySelectorAll('.accordion-header');


acc_header.forEach(items => {
    items.addEventListener('click', function(){

        acc_header.forEach( items => {

            if( items !== this){
                items.classList.remove('active');
                items.nextElementSibling.style.height = '0px';
            }
        });
        
        items.classList.toggle('active');
        
        if(items.classList.contains('active')){
            items.nextElementSibling.style.height = items.nextElementSibling.scrollHeight + 'px';
        }else{
            items.nextElementSibling.style.height = '0px';
        }
    });
});

