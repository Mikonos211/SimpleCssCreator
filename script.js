const mainButton = document.getElementById("SimpleCssCreatorMainButton");
mainButton.addEventListener("click" , function(){
    document.querySelector(".Title-info").style.display = "flex";
    document.querySelector(".grid-offer").style.display = "grid";
    document.querySelector(".tonone").style.display = "none";
    window.history.pushState({ page: "home" }, "", "?page=home");
    
})
const container = document.getElementById("container");

function PickTwojaStara(Id) {
document.querySelector(".Title-info").style.display = "none";
document.querySelector(".grid-offer").style.display = "none";

if(document.getElementById("container").children.length > 0){
document.getElementById("container").innerHTML= ""
}

if (!document.querySelector(`.${Id}class`)) {
if (Id === "ButtonCreator") {
    const ButtonCreatorSelection = document.createElement("div");
    ButtonCreatorSelection.className = Id + "class";
    ButtonCreatorSelection.innerHTML = ` 
        <div>
            <button> Your button </button>
        </div>
        <div class="ButtonCreator-options">
            Button Creator
        </div>
    `;
    container.innerHTML = ""; 
    container.appendChild(ButtonCreatorSelection);

}else if (Id === "LoginCreator") {
    const ButtonCreatorSelection = document.createElement("div");
    ButtonCreatorSelection.className = Id + "class";
    ButtonCreatorSelection.innerHTML = ` 
        <div>
            <button> Your button </button>
        </div>
        <div class="LoginCreator-options">
            Login Creator
        </div>
    `;
    container.innerHTML = ""; 
    container.appendChild(ButtonCreatorSelection);
}else if (Id === "SideBarCreator") {
    const ButtonCreatorSelection = document.createElement("div");
    ButtonCreatorSelection.className = Id + "class";
    ButtonCreatorSelection.innerHTML = ` 
        <div>
            <button> Your button </button>
        </div>
        <div class="SideBarCreator-options">
            SideBarCreator Creator
        </div>
    `;
    container.innerHTML = ""; 
    container.appendChild(ButtonCreatorSelection);
}
}

document.querySelector(".tonone").style.display = "block";
}

const buttonButton = document.getElementById("ButtonCreator");
const buttonLogin = document.getElementById("LoginCreator");
const buttonSideBar = document.getElementById("SideBarCreator");

buttonButton.addEventListener("click", function () {
PickTwojaStara(buttonButton.id);
});
buttonLogin.addEventListener("click", function () {
PickTwojaStara(buttonLogin.id);
});
buttonSideBar.addEventListener("click", function () {
PickTwojaStara(buttonSideBar.id);
});        



const nightmodeButton = document.getElementById("nightmod")
nightmodeButton.addEventListener("click", function(){
if(document.body.className === "darkmode"){
document.body.className = ""
}else{
document.body.className = "darkmode";

}

})
