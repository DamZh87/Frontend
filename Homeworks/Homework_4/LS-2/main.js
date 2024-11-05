

const identify = document.querySelector('#identify')
const firstName = document.querySelector('#first-name')
const lastName = document.querySelector('#last-name')
const email = document.querySelector('#e-mail')






const user = {
    id: identify.value,
    firstName: 'Jack',
    lastName: 'Black',
    email: 'jack-black@gmail.com'
  };

document.querySelector('#write').addEventListener('click', ()=>{
    localStorage.setItem('id', identify.value );
    localStorage.setItem('firstName', firstName.value );
    localStorage.setItem('lastName', lastName .value );
    localStorage.setItem('email', email.value )

})



document.querySelector('#read').addEventListener('click', ()=>{
    // console.log('Получить');

console.log(user);



})

document.querySelector('#clear').addEventListener('click', ()=>{
    localStorage.clear();

})