const SocialMediaLinks = {
    github: 'Bruno-R-Viana',
    instagram: 'bruno.r.viana',
    behance: 'bruno_r_viana',
    linkedin: 'in/bruno-rodrigues-viana',
}

function ChangeSocialMediaLinks(){
    for (let Li of SocialLinks.children){
        let SocialNames = Li.getAttribute('name')
        Li.children[0].href = `https://${SocialNames}.com/${SocialMediaLinks[SocialNames]}`
    }
}

ChangeSocialMediaLinks()

function GetGithubProfileInfo(){
    const UrlApiGithub = `https://api.github.com/users/${SocialMediaLinks.github}`

    fetch(UrlApiGithub)
    .then(UrlApiGithubResponse => UrlApiGithubResponse.json())
    .then(DataGithub => {
        UserName.textContent = DataGithub.name 
        UserBio.textContent = DataGithub.bio 
        UserLink.href = DataGithub.html_url
        UserLogin.textContent = DataGithub.login
        UserAvatar.src = DataGithub.avatar_url
    })
}

GetGithubProfileInfo()