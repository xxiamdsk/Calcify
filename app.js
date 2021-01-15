const buttons= document.querySelectorAll("input[type='button']");
const dispalyInput= document.getElementById("displayInput");
const opeartion= document.getElementById("operation")

// opeartion.innerHTML= "test js22 2 "

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        if(btn.value == "="){
            opeartion.innerHTML= dispalyInput.value
            dispalyInput.value= eval(dispalyInput.value)
        }else if(btn.value== "C"){
            opeartion.innerHTML= ""
            dispalyInput.value= ""
        }else if(btn.value == "Del"){
            dispalyInput.value= dispalyInput.value.slice(0, -1)
        }else{
            dispalyInput.value += btn.value;
        }
    })
})