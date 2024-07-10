
// this gives an authomatic alt to imgs, getting the img name and using as an ALT
const altAttribution = () => {
    const imgs = document.querySelectorAll('img');
    imgs.forEach(element => {
        const imgUrl = element.src;
        const fileName = imgUrl.substring(imgUrl.lastIndexOf('/')+1)
        const fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.'); // Rimuove l'estensione del file
        
        element.alt = fileNameWithoutExtension;
       
        
    });
}
export default altAttribution