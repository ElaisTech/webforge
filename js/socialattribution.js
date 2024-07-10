
const socialattribution = () => {
    const fbicon = document.querySelector('#facebookicon')
    // const linkedinicon = document.querySelector('#linkedinicon')
    const instagramicon = document.querySelector('#instagramicon')
    // replacing with social links
    fbicon.href = 'https://www.facebook.com/profile.php?id=61556702574554'
    fbicon.target = "_blank"
    // linkedinicon.href = '#'
    instagramicon.href = 'https://www.instagram.com/webcraftersitalia?fbclid=IwAR1Ba6AMnG6AMHpfnNhXwQuUrzgPOW49mHFNGtFCjegEi3wraQl7CKw5QyQ'
    instagramicon.target = "_blank"

}

export default socialattribution