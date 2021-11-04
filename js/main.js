'use strict';

const accordion = document.getElementsByClassName('contentBox');

for( let item of accordion ){
    item.addEventListener('click', function(){
        this.classList.toggle('active');
    })
}