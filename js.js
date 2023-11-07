function getDate(){
    document.getElementById('demo').innerHTML = Date();
    document.getElementById("demo").style.fontSize = "25px";
    document.getElementById("demo").style.color = "red";
    document.getElementById("demo").style.backgroundColor = "yellow";
}

function shout(){
    document.getElementById('demo').innerHTML = "AAAARGH";
}

function alertMe(){
    alert("hello there!");
}