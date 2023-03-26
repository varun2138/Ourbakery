let search =  document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
search.classList.toggle('active');
navbar.classList.remove('active');
 
}
let navbar =  document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
navbar.classList.toggle('active');
search.classList.remove('active');
 
}
let logIn =  document.querySelector('.container');
document.querySelector('#user-btn').onclick = () =>{
    logIn.classList.toggle('active');
 reg.classList.remove('active');    


    

 
}
let reg =  document.querySelector('.box-container');
document.querySelector('#reg').onclick = () =>{
    reg.classList.toggle('active');
    logIn.classList.remove('active');
    
    

 
}
 
window.onscroll =()=>{
    navbar.classList.remove('active');
    search.classList.remove('active');
    logIn.classList.remove('active');
    reg.classList.remove('active');
}
