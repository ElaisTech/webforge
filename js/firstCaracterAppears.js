const firstCaracter = document.querySelector('#firstCaracter');


const firstCaracterAppears = () => {
    // if firstCaracter.classList = contain
    firstCaracter.className = ""
    firstCaracter.classList = "absolute bottom-0 right-8 md:right-16 w-96 md:w-4/12 duration-700"
}

export default firstCaracterAppears