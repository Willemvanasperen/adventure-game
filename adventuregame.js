var  butt1 = document.getElementById("banaan");
var  butt2 = document.getElementById("appel");
var  butt3 = document.getElementById("kiwi");

var  why = document.getElementById("why");
var dumb = document.getElementById("stupid");



function ifYouStartYouGetCookie(){

	document.getElementById("peeps").style.display = "block";

	butt1.style.cssText = 'color: red;';
	butt1.innerHTML = "Run";
	butt1.setAttribute("onclick", "javascript:run1()");
	
	butt2.innerHTML = "Hide";
	butt2.style.cssText = 'color: green;';
	butt2.setAttribute("onclick", "javascript:hide1()");

	butt3.style.cssText = 'display:block';
	butt3.innerHTML= "Say hi";
	why.setAttribute("onclick","javascript:gameover2()");
	
	why.setAttribute("onclick","javascript:fight1()");
	why.innerHTML = "Fight";
	why.style.cssText = 'color: white;';
}

function hide1(){
 	
	

	butt1.innerHTML= "Peek around the corner";

	butt2.innerHTML= "Fuck em up";

	document.getElementById("peeps").style.display = "none";
}
function run1(){

	butt1.innerHTML = "Go Left";
	butt1.style.cssText = 'color:black;';
	butt1.setAttribute("onclick","javascript:left1()");

	butt2.innerHTML = "Go Right";
	butt2.style.cssText = 'color:black;';
	butt2.setAttribute("onclick","javascript:right1()");

	document.getElementById("peeps").style.display = "none";

}

function left1(){

	butt1.innerHTML = "Go to warehouse";

	butt2.innerHTML = "Jump off the bridge";
	document.getElementById("horde").style.display = "block";
	

}

function right1(){

}

function ifDontStart(){

	
	butt2.innerHTML = "idk";
	butt2.setAttribute("onclick","javascript:iDont()");


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

function iDont(){
	
	
	butt1.style.cssText = "display:block;";
	butt2.style.cssText = "display:none;";
	

}