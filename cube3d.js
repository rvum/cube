/*var cube3d = document.getElementById("cube3d");
//alert(cube3d);
cube3d.style.webkitTransition = '-webkit-transform 3s linear';
setInterval(cube,1000);
function cube(){
    var x,y;
    x=Math.random()*360;
    y=Math.random()*360;
//cube3d.style.webkitTransform = "rotateX(" + 45deg) rotateY(" + 70 + "deg)";
    cube3d.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y+ "deg)";
}*/
/*-------------------------wholeRand------------------------------------------------------------*/

var cube3d = document.getElementById("cube3d");
var intervalWhole;
var intervalSheet;
var intervalSmCube;
var whole = document.getElementById("whole");
whole.addEventListener('click',wholeRand);
function wholeRand() {

//alert(cube3d);
    cube3d.style.webkitTransition = '-webkit-transform 3s linear';
    intervalWhole = setInterval(cube, 1000);
    function cube() {
        var x, y;
        x = Math.random() * 360;
        y = Math.random() * 360;
//cube3d.style.webkitTransform = "rotateX(" + 45deg) rotateY(" + 70 + "deg)";
        cube3d.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    }
}


/*-------------------------sheetRand------------------------------------------------------------*/
var oneSheet = document.getElementById("oneSheet");
oneSheet.addEventListener('click',oneSheetRand);
var sheet;
var first = document.getElementById("sheet1");
var second = document.getElementById("sheet2");
var third = document.getElementById("sheet3");

//var oneOneOne = document.getElementById("111");
/*var threeOneone = document.getElementById("311");
var fiveOneOne = document.getElementById("511");
var oneOneThree = document.getElementById("113");
var threeOneThree = document.getElementById("313");
var fiveOneThree = document.getElementById("513");
var oneOneFive = document.getElementById("115");
var threeOneFive = document.getElementById("315");
var fiveOneFive = document.getElementById("515");*/


function oneSheetRand(){
    intervalSheet = setInterval(cubeSheet,1000);
    function cubeSheet(){
        var randSheet = Math.round(Math.random()*3);
        switch (randSheet) {
            case 0:
                sheet = first;
                break;
            case 1:
                sheet = second;
                break;
            case 2:
                sheet = third;
                break;
        }
        sheet.style.webkitTransition = '-webkit-transform 3s linear';
        var x, y;
        x = Math.random() * 360;
        y = Math.random() * 360;
        sheet.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    }

}

/*-------------------------smCubeRand------------------------------------------------------------*/


var oneSmCube = document.getElementById("oneSmCube");
oneSmCube.addEventListener('click',oneSmCubeRand);
function oneSmCubeRand(){
    var sm_cube = [];
    sm_cube = document.getElementsByClassName("sm_cube");
    intervalSmCube = setInterval(smCube,1000);
    function smCube(){
        var randCube = Math.round(Math.random()*27);
        sm_cube[randCube].firstElementChild.style.webkitTransition = '-webkit-transform 3s linear';
        var x, y;
        x = Math.random() * 360;
        y = Math.random() * 360;
        sm_cube[randCube].firstElementChild.style.webkitTransform = "rotateX(" + x + "deg) rotateY(" + y + "deg)";
    }

}

/*-------------------------reset----------------------------------------------------------------*/


var reset = document.getElementById("reset");
reset.addEventListener('click',allReset);
function allReset(){
    clearInterval(intervalWhole);
    clearInterval(intervalSheet);
    clearInterval(intervalSmCube);


    cube3d.style.webkitTransition = '-webkit-transform 2.5s linear';
    cube3d.style.webkitTransform = 'rotateX(0deg) rotateY(0deg)';


    var sheets = [];
    var widths = [-104,0,104];
    sheets = document.getElementsByClassName("sheet");
    for(var j=0;j< sheets.length;j++){
        var width = widths[j]+'px';
        sheets[j].style.webkitTransition = '-webkit-transform 1.5s lenear';
        sheets[j].style.webkitTransform = "rotateX(0deg) rotateY(0deg) translateZ(" + width + ")";
    }



    var ulList = [];
    ulList = document.getElementsByClassName("ul");
    for(var i=0;i< ulList.length;i++){
        ulList[i].style.webkitTransition = '-webkit-transform 1s linear';
        ulList[i].style.webkitTransform = 'rotateX(0deg) rotateY(0deg)';
    }
}


