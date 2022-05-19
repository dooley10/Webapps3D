//Functions to be used by the x3d model in browser
function frontcam(){
    document.getElementById('model__FrontCam').setAttribute('bind', 'true');
}

function backcam(){
    document.getElementById('model__BackCam').setAttribute('bind', 'true');
}

function leftcam(){
    document.getElementById('model__LeftCam').setAttribute('bind', 'true');
}

function rightcam(){
    document.getElementById('model__RightCam').setAttribute('bind', 'true');
}

function topcam(){
    document.getElementById('model__TopCam').setAttribute('bind', 'true');
}

function bottomcam(){
    document.getElementById('model__BottomCam').setAttribute('bind', 'true');
}
//NOT WORKING
function wireframe(){
    var e = document.getElementById('model');
	e.runtime.togglePoints(true);
	e.runtime.togglePoints(true);
}