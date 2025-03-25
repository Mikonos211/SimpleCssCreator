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
         <div class="main-grid">
        <div class="left-part">
            <div class="left-part-inside">
                <label>
                  Input text
                  <input id="TextToButton" type="text" placeholder="Wpisz tekst">
                </label>
              
                <label>
                  Font Family
                  <input type="text" placeholder="to do">
                </label>
              
                <div class="font-style-options" >
                  <label style="display: flex; flex-direction: row; align-items: center; gap: 6px;">
                    <span>Bold?</span>
                    <input type="checkbox" id="isBold">
                  </label>
                  <label style="display: flex; flex-direction: row; align-items: center; gap: 6px;">
                    <span>Italic?</span>
                    <input type="checkbox" id="isItalic"> 
                  </label>
                </div>
              
                <label>
                  Font Color
                  <div class="palette">
                   
                  </div>
                </label>
              </div>
              
            <div class="left-part-inside">
                animations
            </div>
        </div>

        <div class="middle-part">
            <div class="midde-inside">
                <button id="Button-to-copy">Your Button</button>
            </div>
            <div class="midde-inside" style="display: flex; flex-direction: column;">
                <div style="font-weight: bold; font-size: 16px;">CSS:</div>
                <div style="
                padding: 5px;    
                width: 88%;
                height: 90%;
                border: 1px solid #ccc;
                border-radius: 8px;
                white-space: pre;
                box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.4);
                background-color: #fafafa;
                font-family: monospace;
                font-size: 14px;
                overflow-y: auto;" id="styleDisplay">
                
                </div>
                <div style="width: 90%;">
                    <button style="width: 100%; padding: 10px; font-size: 15px; border: none; background-color: #1976d2; color: white; border-radius: 6px; cursor: pointer;">
                        Copy
                      </button>
                    </div>
            </div>
        </div>

        <div class="right-part">
            <div class="right-part-inside">
                <div class="Chose-size">
                    <label for="">Size By</label>
                    <select name="" id="">
                    <option> Padding </option>
                    <option> Custom value </option>
                </select>
                </div>
                <label>Padding: Vertical & Horizontal</label>

                <div class="di-for-inputSizeValues">
                    <div class="size-control-row">
                      <div class="size-opiton-div">
                        <button class="decrese-button"><</button>
                        <input class="valueinput" type="number" value="5" id="horizontalPadding">
                        <button class="increse-button">></button>
                      </div>
                      <div class="size-opiton-div">
                        <button class="decrese-button"><</button>
                        <input class="valueinput" type="number" value="5" id="verticalPadding">
                        <button class="increse-button">></button>
                      </div>
                    </div>
                </div>
                <label for=""> Border </label>
                <div class="di-for-inputSizeValues">
                    <div class="size-control-row">
                        <div class="size-opiton-div">
                            <button class="decrese-button"><</button>
                            <input class="valueinput" type="number" value="5" id="BorderRadius">
                            <button class="increse-button">></button>
                        </div>
                        <div class="size-opiton-div">
                            <button class="decrese-button"><</button>
                            <input class="valueinput" type="number" value="1" id="BorderWidth">
                            <button class="increse-button">></button>
                        </div>
                      </div>
                </div>
                <label for="" style="display: flex; align-items: center; justify-content: space-between;">
                    Colors 
                    <label style="display: flex; align-items: center; column-gap: 5px;">click for bordercolor <input type="checkbox" id="border-color-checkbox"></label>  
                </label>
                <div class="palette-button">

                </div>
               
                
            </div>
            <div class="right-part-inside">
              
            </div>

            

        </div>
    </div>
    `;
    container.innerHTML = ""; 
    container.appendChild(ButtonCreatorSelection);

    const script = document.createElement("script");
    script.src = "scriptForDifrentParts/BCreator.js";
   
    document.body.appendChild(script);

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
