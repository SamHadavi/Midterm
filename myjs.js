var checkMenu = 0;
var source = "";

function openMenu(){
    document.getElementById('control').style.bottom = "0px";
};

function closeMenu(){
    document.getElementById('control').style.bottom = "-123px";
};

document.getElementById("menu").addEventListener("click", function(){
    if(checkMenu == 0){
        openMenu();
        checkMenu = 1;
    }else{
        closeMenu();
        checkMenu = 0;
    }
});

function changeImage(){
        var value = document.getElementById("image").value;
        if( value.indexOf("epic") !== -1 ) {
            document.getElementById("topimage").src = "img/bg4.jpg";
        }else if(value == 'horse'){
            document.getElementById("topimage").src = "img/bg1.jpg";
        }else if(value == 'night'){
           document.getElementById("topimage").src = "img/bg2.jpg";      
        }else if (value == 'mountain'){
           document.getElementById("topimage").src = "img/bg3.jpg"; 
        }
}

document.getElementById("image").addEventListener("keydown",function(ev){
    //this refuses to work unless it is as is
    if(ev.keyCode == 13){
        changeImage()
    }
});

function changeTitle(){
    document.getElementById("toptitle").innerHTML = document.getElementById("title").value;
}

document.getElementById("title").addEventListener("keyup",function(ev){
        changeTitle();
});

function changeDesc(){
    document.getElementById("topdesc").innerHTML = document.getElementById("desc").value;
}

document.getElementById("desc").addEventListener("keyup",function(ev){
        changeDesc();
});

function changeColor(){
           document.getElementById('toptitle').style.color = document.getElementById("color").value;
        document.getElementById('topdesc').style.color = document.getElementById("color").value; 
}

document.getElementById("color").addEventListener("change",function(ev){
    changeColor();
});

document.getElementById("color").addEventListener("click",function(ev){
    changeColor();
});

document.getElementById("background").addEventListener("keydown",function(ev){
    if(ev.keyCode == 38){
    var up = (parseInt(document.getElementById('topimage').style.top, 10) || 270) - 5;
    document.getElementById('topimage').style.top = up + 'px';
    }
});

document.getElementById("add").addEventListener("click",function(ev){
        addThing();
});

function addThing(){
    var mdiv = document.getElementById("background");
    var ndiv = mdiv.cloneNode(true);
    document.getElementById("display").appendChild(ndiv);
}