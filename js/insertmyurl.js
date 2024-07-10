// this is to edit automatically the metatag og:url 
// so u can't forget to edit it and if we change url, it automatically will apply the mod

// getting the url
function getCurrentURL() {
    return window.location.href;
}
// assing to my const 
const currentURL = getCurrentURL();
// selecting my meta target
const metaurl = document.querySelector('#metaurl')

// inner ''content'' with the url i've got 
const insertmyurl = () => {

metaurl.content = currentURL

}


export default insertmyurl