// button -> style, text, events

document.getElementById("demo").innerHTML = "Hi There!!";
document.getElementsByTagName("button");
document.getElementById("demo").setAttribute("style", "color:blue");

document.getElementById("demo").addEventListener("click", paraclicked);

function paraclicked(){
    document.getElementById("demo").setAttribute("style", "color:green");
}

function buttonclicked(){
    document.getElementById("submit").setAttribute("style", "color:red");
}


function buttonOnMouseOver(){
    document.getElementById("submit").setAttribute("style", "color:yellow");
}
