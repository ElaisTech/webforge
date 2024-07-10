
const menu = document.querySelector('#top-nav')


const menuextend = () => {
    if (menu.classList.contains('invisible')){
        menu.className = 'top-nav visible top-52';
    }
 else if (menu.classList.contains('visible')) {
    menu.className = 'top-nav invisible -top-96';
 }
} 


 export default menuextend