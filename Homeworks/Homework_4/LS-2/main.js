




document.querySelector('#write').addEventListener('click', ()=>{
   
   console.log('Записать в Local Storage');
   
   const identify = document.querySelector('#identify');
   const firstName = document.querySelector('#first-name');
   const lastName = document.querySelector('#last-name');
   const email = document.querySelector('#e-mail');

   const user = {
       id: identify.value,
       firstName: firstName.value,
       lastName: lastName.value,
       email: email.value
     };
//console.log(user);
localStorage.setItem('user', user)
   

})



document.querySelector('#read').addEventListener('click', ()=>{
    // console.log('Получить из Local Storage');

  

console.log(localStorage.getItem('user'));

   



})

document.querySelector('#clear').addEventListener('click', ()=>{
    localStorage.clear();

})