let navLink2 = document.querySelector('#nav_link-2');
let navLink3 = document.querySelector('#nav_link-3');
let navLink4 = document.querySelector('#nav_link-4');
let nav_link6 = document.querySelector('#nav_link-6')
let trendsSection = document.querySelector('.trends');
let posts = document.querySelector('.news');
let shop = document.querySelector('.products-section');
let contacts = document.querySelector('.dropdown__list')

navLink2.addEventListener('click', () => {
  trendsSection.scrollIntoView(true);
})
navLink3.addEventListener('click', () => {
  posts.scrollIntoView(true);
})
navLink4.addEventListener('click', () => {
  shop.scrollIntoView(true);
})
nav_link6.addEventListener('click', () => {
  if(document.querySelector('.dropdown__list-active')){
    document.querySelector('.dropdown__list-active').classList.remove('dropdown__list-active');
  } else {
    contacts.classList.add('dropdown__list-active'); 
  }
})