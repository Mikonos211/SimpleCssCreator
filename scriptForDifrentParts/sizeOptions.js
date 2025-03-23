const descButton = document.querySelector(".decrese-button");
const incButton = document.querySelector(".increse-button");

descButton.addEventListener("click", function(){
    let valSize = +document.getElementById("valueinput").value;

    if(valSize >= 0){
        valSize -= 1;
        document.getElementById("valueinput").value = valSize;
    }
})

incButton.addEventListener("click", function(){
    let valSize = +document.getElementById("valueinput").value;

    if(valSize >= 0){
        valSize += 1;
        document.getElementById("valueinput").value = valSize;
    }

})