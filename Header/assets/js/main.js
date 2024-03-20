/*===== EXPANDER MENU  =====*/ 
const showMenu = (toggleId, navId)=>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)
  
    if(toggle && nav){
      toggle.addEventListener('click', ()=>{
        nav.classList.toggle('show')
        toggle.classList.toggle('bx-x')
      })
    }
  }
  showMenu('header-toggle','nav-menu')

  /*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');   

function linkAction(){
  /*Active link*/
  navLink.forEach(n => n.classList.remove('active'));
  this.classList.add('active');
}
navLink.forEach(n => n.addEventListener('click', linkAction));



// ------------------------------

function toggleDropdown() {
  document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



// ---------------------- this is for both


const dropdown = document.querySelector('.drop-down');
const dropdowns = document.querySelector('.drop-downs');
const list = document.querySelector('.list');
const lists = document.querySelector('.lists');
const selected = document.querySelector('.selected')
const selecteds = document.querySelector('.selecteds')
const selectedImg = document.querySelector('selectedImg');
const selectedImgs = document.querySelector('selectedImgs');
dropdown.addEventListener('click', ()=>{
    list.classList.toggle('show');
})
dropdowns.addEventListener('click', ()=>{
  lists.classList.toggle('show');
})
list.addEventListener('click',(e)=>{
    const img = e.target.querySelector('img');
    const text = e.target.querySelector('.text')

    selectedImg.src = img.src;
    selected.innerHTML = text.innerHTML;
    selectedImgs.src = img.src;
    selecteds.innerHTML = text.innerHTML;
})




///-------------for countries


// const dropdown = document.querySelector('.drop-down');

// const list = document.querySelector('.list');

// const selected = document.querySelector('.selected')

// const selectedImg = document.querySelector('selectedImg');

// dropdown.addEventListener('click', ()=>{
//     list.classList.toggle('show');
// })
// list.addEventListener('click',(e)=>{
//     const img = e.target.querySelector('img');
//     const text = e.target.querySelector('.text')

//     selectedImg.src = img.src;
//     selected.innerHTML = text.innerHTML;
// })




// const dropdown = document.querySelector('.drop-down');

// const list = document.querySelector('.list');

// const selecteds = document.querySelector('.selected')

// const selectedImgs = document.querySelector('selectedImg');

// dropdown.addEventListener('click', ()=>{
//     list.classList.toggle('show');
// })
// list.addEventListener('click',(e)=>{
//     const img = e.target.querySelector('img');
//     const text = e.target.querySelector('.text')

//     selectedImg.src = img.src;
//     selected.innerHTML = text.innerHTML;
// })