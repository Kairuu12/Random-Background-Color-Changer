function changeColor() {
    let randomcolor = Math.floor(Math.random()*16777215).toString(16);
    document.body.style.backgroundColor = "#" + randomcolor;
    document.getElementById("color-code").innerHTML = "Backgound Color: #" + randomcolor;
} 
