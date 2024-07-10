const contact = () => {
    const text = document.querySelector('#contact-module-text').value;
    const number = document.querySelector('#contact-module-number').value;
   

    if (text != ' ') {
        const textEncoded = encodeURIComponent(text)
        const numberEncoded =encodeURIComponent(number)
        const message = textEncoded + ' ' + "potete ricontattarmi qui -->" + " " + numberEncoded;
        window.open('https://wa.me/3312843938?text=' + message)
    }
}

export default contact