

const identify = document.querySelector('#identify')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#e-mail')





document.querySelector('#write').addEventListener('click', ()=>{
    localStorage.setItem('id', identify.value );
    localStorage.setItem('firstName', firstName.value );
    localStorage.setItem('lastName', lastName .value );
    localStorage.setItem('email', email.value )

})

document.querySelector('#read').addEventListener('click', ()=>{
    // console.log('Получить');

    identify.value = localStorage.getItem('id')
    firstName.value = localStorage.getItem('firstName')
    lastName.value = localStorage.getItem('lastName')
    email.value = localStorage.getItem('email')



    // console.log(localStorage.getItem('id'));
    // console.log(localStorage.getItem('firstName'));
    // console.log(localStorage.getItem('lastName'));
    // console.log(localStorage.getItem('email'));
    
    // console.log(localStorage);
    

})

document.querySelector('#clear').addEventListener('click', ()=>{
    localStorage.clear();

})