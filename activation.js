const activateButtons = document.querySelectorAll(".click-me");
const activeSocial = document.querySelector(".active-social");

activateButtons.forEach(activateButton => {
    activateButton.addEventListener("click", function(){
        if(activeSocial.classList.contains("active-social-clicked")){
            activeSocial.classList.remove("active-social-clicked");
        }else{
            activeSocial.classList.add("active-social-clicked");
        }        
    });
});
