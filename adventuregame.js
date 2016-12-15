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

function ifDontStart(){

	butt1.innerHTML = "cuz u dumb";
	butt1.setAttribute("onclick","javascript:gameover1()");
	
	butt2.innerHTML = "idk";
	butt2.setAttribute("onclick","javascript:iDont()");

	why.style.cssText = "display:block;";
	
}

function hide1(){
 	
	butt1.innerHTML= "Peek around the corner";
	butt1.setAttribute("onclick","javascript:corner1()");

	butt2.innerHTML= "Beat em up";
	butt2.setAttribute("onclick","javascript:beat1()");

	butt3.innerHTML= "Still run away";
	butt3.setAttribute("onclick","javascript:away1()");

	document.getElementById("peeps").style.display = "none";
}
function run1(){

	butt1.innerHTML = "Go Left";
	butt1.style.cssText = 'color:black;';
	butt1.setAttribute("onclick","javascript:left1()");

	butt2.innerHTML = "Go Right";
	butt2.style.cssText = 'color:black;';
	butt2.setAttribute("onclick","javascript:right1()");

	butt3.innerHTML = "Go straight ahead";
	butt3.setAttribute("onclick","javascript:forward1()");

	document.getElementById("peeps").style.display = "none";

}
function right1(){

	butt1.innerHTML = "Go to the casino";
	butt1.setAttribute("onclick","javascript:casino1()");

	butt2.innerHTML = "Go to the supermarket";
	butt2.setAttribute("onclick","javascript:supermarket1()");

	butt3.innerHTML = "Go to the local libary";
	butt3.setAttribute("onclick","javascript:libary1()");
}

function forward1(){
	
	butt1.innerHTML = "Go to the rubberduck factory";
	butt1.setAttribute("onclick","javascript:rubberduck1()");

	butt2.innerHTML = "Go to the bucket factory";
	butt2.setAttribute("onclick","javascript:bucket1()");

	butt3.innerHTML = "Go to the gun factory";
	butt3.setAttribute("onclick","javascript:gun1()");

}

function left1(){

	butt1.innerHTML = "Go to warehouse";

	butt2.innerHTML = "Jump off the bridge";
	
	butt3.innerHTML = "Try to fight them";
	butt3.setAttribute("onclick","javascript:fighthorde1()");
	
	document.getElementById("horde").style.display = "block";
}

function fighthorde1(){

	butt1.innerHTML = "Stik";
	butt3.setAttribute("onclick","javascript:woodstik1()");

	butt2.innerHTML = "Stone";
 
	butt3.innerHTML = "Toiletpaper";
	butt3.setAttribute("onclick","javascript:toilet1()");

	document.getElementById("horde").style.display = "none";
	document.getElementById("fighting").style.display = "block";
}

function woodstik1(){
		
		butt1.style.cssText = "display:none;";
		butt2.style.cssText = "display:none;";
		butt3.style.cssText = "display:none;";
		
		document.getElementById("stik").style.display = "block";


}

function toilet(){

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
	
	document.getElementById("toelet").style.display = "block";

}

function gameover1(){

	dumb.style.cssText = "display:block;";
	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	why.style.cssText = "display:none;";
}

function iDont(){
	
	butt1.style.cssText = "display:block;";
	butt2.style.cssText = "display:none;";
	

}

function gun1(){

	document.getElementById("glock").style.display = "block";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";

}



function rubberduck1(){

	document.getElementById("duck").style.display = "block";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";

}

function bucket1(){

	document.getElementById("bucket").style.display = "block";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";

}