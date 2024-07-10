const header = document.querySelector('header');

const scrollHeaderBgChanger = () => {
    if (window.scrollY > 0) { // Usa window.scrollY per la posizione verticale dello scroll
        header.classList.add('headerBgCustom');
        
    } else {
        header.classList.remove('headerBgCustom');
        
    }
};

export default scrollHeaderBgChanger