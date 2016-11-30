var  butt1 = document.getElementById("banaan");
var  butt2 = document.getElementById("appel");

var  why = document.getElementById("why");
var dumb = document.getElementById("stupid")


function ifYouStartYouGetCookie(){

	butt1.style.cssText = 'color: red;';
	butt1.innerHTML = "Run";
	butt1.setAttribute("onclick", "javascript:run1()");

	butt2.style.cssText = "display:none;";
	

	
}
function run1(){
	butt1.style.cssText = "color: green;";
	butt1.innerHTML = "bastiaanzeergoedbezighooorhoertje";
}
function ifDontStart(){

	butt2.style.cssText = 'color: red;';
	butt2.innerHTML = "idk";
	butt2.setAttribute("onclick","javascript:idk1()");


	butt1.innerHTML = "cuz u dumb";
	butt1.setAttribute("onclick","javascript:yesdumb()");

	why.style.cssText = "display:block;";
	

}

function yesdumb(){

	dumb.style.cssText = "display:block;";
	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	why.style.cssText = "display:none;";
}

function idk1 (){
	
	run1.style.cssText = "display:block;";
	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	why.style.cssText = "display:none;";

}