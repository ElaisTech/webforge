const whatsattrib = () => {
    const whatsabtns = document.querySelectorAll('#whatsappcontact');
    whatsabtns.forEach(element => {
        element.href = 'https://wa.me/3312843938'
        element.target = '_blank'
    });
   
}

export default whatsattrib