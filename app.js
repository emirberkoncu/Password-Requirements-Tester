const password = document.querySelector(".pass-field input");
const showHide = document.querySelector(".pass-field i");
const requirementList = document.querySelectorAll(".requirement-list li");

const requirements = [
    { regex: /.{8,}/, index: 0 }, 
    { regex: /[0-9]/, index: 1 }, 
    { regex: /[a-z]/, index: 2 }, 
    { regex: /[^A-Za-z0-9]/, index: 3 }, 
    { regex: /[A-Z]/, index: 4 }
]

password.addEventListener("keyup" , (e) => {
    requirements.forEach(item => {
        const isValid = item.regex.test(e.target.value);
        const requirementItem = requirementList[item.index];

        if(isValid){
            requirementItem.classList.add("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-check"
        } else {
            requirementItem.classList.remove("valid");
            requirementItem.firstElementChild.className = "fa-solid fa-circle"
        }
    });
});



showHide.addEventListener("click", () => {
    password.type = password.type === "password" ? "text" : "password";

    showHide.className = `fa-solid fa-eye${password.type === "password" ? "" : "-slash"}`;
})