window.addEventListener("load", function(event){
    listenForInput()

    function listenForInput(){
    const fullNameInput = document.querySelector("#fullname")
    fullNameInput.addEventListener("input", function(event){
        console.log(fullNameInput.value)
    })

    const bio = document.querySelector("#bio")
    bio.addEventListener("input", function(event){
        console.log(bio.value)
    })

    const emailInput = document.querySelector("#email")
    emailInput.addEventListener("input", function(event){
        console.log(emailInput.value)
    })

    const education = document.querySelector("#education")
    education.addEventListener("input", function(event){
        console.log(education.value)
    })

    const experience = document.querySelector("#experience")
    experience.addEventListener("input", function(event){
        console.log(experience.value)
    })

    const skills = document.querySelector("#skills")
    skills.addEventListener("input", function(event){
        console.log(skills.value)
    })
}
}
) 