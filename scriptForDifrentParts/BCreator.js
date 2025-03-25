const buttonToCopy = document.getElementById("Button-to-copy");
        const borderColorCheckbox = document.getElementById("border-color-checkbox")

        const colors = [
               "#000000", "#333333", "#666666", "#999999", "#cccccc", "#ffffff", "#ff0000", "#ff8000", "#ffff00", "#00ff00", 
                "#00ffff", "#0000ff", "#ff00ff", "#ffcccc", "#ffeecc", "#ffffcc", "#ccffcc", "#ccffff", "#ccccff", "#ffccff",
                "#ff9999", "#ffcc99", "#ffff99", "#99ff99", "#99ffff", "#9999ff", "#ff99ff", "#ff6666", "#ffb366", "#ffff66", "#66ff66",
                "#66ffff", "#6666ff", "#ff66ff", "#ff3333", "#ff9933", "#ffcc33", "#33ff33", "#33ffff", "#3333ff", "#ff33ff",
                "#cc0000", "#cc6600", "#cc9900", "#009900", "#009999", "#000099", "#990099", "#660000", "#663300", "#666600",
                "#006600", "#006666", "#000066", "#660066"
            ];
        const palette = document.querySelector(".palette");
        colors.forEach(color => {
            let div = document.createElement("div");
            div.className = "color-box";
            div.style.backgroundColor = color;
            div.addEventListener('click', () => {
            buttonToCopy.style.color = color;
            updateStyleDisplay()
        });
             palette.appendChild(div);

            });

        const buttonBackGroundPalette = document.querySelector(".palette-button");
        colors.forEach(color => {
            let divBack = document.createElement("div");
            divBack.className = "color-box-forBackground";
            divBack.style.backgroundColor = color;
            divBack.addEventListener('click', () => {
                if(borderColorCheckbox.checked){
                    buttonToCopy.style.borderColor = color
                    updateStyleDisplay()
                } else {
                    buttonToCopy.style.backgroundColor = color;
                    updateStyleDisplay()
                }
        });
            buttonBackGroundPalette.appendChild(divBack);
        });

        
        //JS dla aktualizowania tekstu z inputu
        const inputButtonTextField = document.getElementById("TextToButton");

        inputButtonTextField.addEventListener('input', function () {
            buttonToCopy.textContent = inputButtonTextField.value || "Your Button"; // domyślny tekst, gdy puste
        });

        const BoldCheckBox = document.getElementById("isBold");

        BoldCheckBox.addEventListener("change", function(){
            if(BoldCheckBox.checked){
                buttonToCopy.style.fontWeight = "bold";
            }  else if(!BoldCheckBox.checked){
                buttonToCopy.style.fontWeight = "normal"
                
            }
            updateStyleDisplay()

        })
        
        const ItalicCheckBox = document.getElementById("isItalic");

        ItalicCheckBox.addEventListener("change", function(){
            if(ItalicCheckBox.checked){
                buttonToCopy.style.fontStyle = "italic";
            }  else if(!ItalicCheckBox.checked){
                buttonToCopy.style.fontStyle = "normal"
            }
            updateStyleDisplay()
        })

        //System zwiekszania przycisków
        const descButtons = document.querySelectorAll(".decrese-button");
        const incButtons = document.querySelectorAll(".increse-button");
        const inputs = document.querySelectorAll(".valueinput");
        const horizontalPaddingInput = document.getElementById("horizontalPadding");
        const verticalPadding = document.getElementById("verticalPadding");
        const BorderRadiusInput = document.getElementById("BorderRadius")
        const BorderWidthInput = document.getElementById("BorderWidth")

        function IncreaseBorderWidth(){
            const width = BorderWidthInput.value + "px"
            buttonToCopy.style.borderWidth = width;
            updateStyleDisplay()
        }

        function IncreaseBorderRadius(){
            const radius = BorderRadiusInput.value + "px";
            buttonToCopy.style.borderRadius = radius;
            updateStyleDisplay()
        }

        function IncreseHotisontalPadding() {
            const padding = horizontalPaddingInput.value + "px";
            buttonToCopy.style.paddingLeft = padding;
            buttonToCopy.style.paddingRight = padding;
            updateStyleDisplay()
        }

        function IncreseVerticalPadding() {
            const padding = verticalPadding.value + "px";
            buttonToCopy.style.paddingTop = padding;
            buttonToCopy.style.paddingBottom = padding;
            updateStyleDisplay()
        }

        descButtons.forEach((button, index) => {
            button.addEventListener("click", function () {
                let valSize = +inputs[index].value;
                if (valSize > 0) {
                    valSize -= 1;
                    inputs[index].value = valSize;
                    if (inputs[index] === horizontalPaddingInput) {
                        IncreseHotisontalPadding();
                    } else if (inputs[index] === verticalPadding){
                        IncreseVerticalPadding();
                    } else if (inputs[index] === BorderRadiusInput){
                        IncreaseBorderRadius();
                    } else if (inputs[index] === BorderWidthInput){
                        IncreaseBorderWidth();
                    }
                }
            });
        });

        incButtons.forEach((button, index) => {
            button.addEventListener("click", function () {
                let valSize = +inputs[index].value;
                valSize += 1;
                inputs[index].value = valSize;
                if (inputs[index] === horizontalPaddingInput) {
                    IncreseHotisontalPadding();
                }else if (inputs[index] === verticalPadding){
                        IncreseVerticalPadding();
                    }else if (inputs[index] === BorderRadiusInput){
                        IncreaseBorderRadius();
                    }else if (inputs[index] === BorderWidthInput){
                        IncreaseBorderWidth();
                    }
            });
        });

        horizontalPaddingInput.addEventListener("input", IncreseHotisontalPadding);
        verticalPadding.addEventListener("input", IncreseVerticalPadding)
        BorderRadiusInput.addEventListener("input", IncreaseBorderRadius);
        BorderWidthInput.addEventListener("input", IncreaseBorderWidth);
        
        function updateStyleDisplay(){
            const computed = window.getComputedStyle(buttonToCopy);
            const display = document.getElementById("styleDisplay");

            display.textContent = 
                `padding-top: ${computed.paddingTop};\n` + 
                `padding-bottom: ${computed.paddingBottom};\n` +
                `padding-left: ${computed.paddingLeft};\n` +
                `padding-right: ${computed.paddingRight};\n` +
                `border-radius: ${computed.borderRadius};\n`+
                `border-width: ${computed.borderWidth};\n` +
                `background-color: ${computed.backgroundColor};\n` +
                `border-color: ${computed.borderColor};\n` +
                `color: ${computed.color};\n` +
                `font-weight: ${computed.fontWeight};\n` +
                `font-style: ${computed.fontStyle};\n`;
        }