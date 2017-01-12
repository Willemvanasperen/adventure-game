var  butt1 = document.getElementById("banaan");
var  butt2 = document.getElementById("appel");
var  butt3 = document.getElementById("kiwi");

var  why = document.getElementById("why");
var dumb = document.getElementById("stupid");
	
document.getElementById("mystart").style.display = "block";
document.body.style.backgroundImage = "url('start.jpg')";

function ifYouStartYouGetCookie(){

    document.getElementById("mystart").style.display = "none";
	document.getElementById("hi").style.display = "none";
	document.getElementById("peeps").style.display = "block";
	document.body.style.backgroundImage = "url('peoep.jpg')";

	butt1.style.cssText = 'color: red;';
	butt1.innerHTML = "Run";
	butt1.setAttribute("onclick", "javascript:run1()");
	
	butt2.innerHTML = "Hide";
	butt2.style.cssText = 'color: green;';
	butt2.setAttribute("onclick", "javascript:hide1()");

	butt3.style.cssText = 'display:block';
	butt3.innerHTML= "Say hi";
	butt3.setAttribute("onclick", "javascript:hi1()");
	
	why.setAttribute("onclick","javascript:fight1()");
	why.innerHTML = "Fight";
	why.style.cssText = 'color: white;';
}  //The start of the game

function hi1(){

	document.getElementById("hi").style.display = "block";
	document.getElementById("peeps").style.display = "none";
	document.body.style.backgroundImage = "url('cannibal.jpg')";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
} //This happens if you click on Say hi

function ifDontStart(){

	document.body.style.backgroundImage = "url('snape.jpg')";

	butt1.innerHTML = "cuz u dumb";
	butt1.setAttribute("onclick","javascript:gameover1()");
	
	butt2.innerHTML = "idk";
	butt2.setAttribute("onclick","javascript:iDont()");

	why.style.cssText = "display:block;";

	document.getElementById("mystart").style.display = "none";
	document.getElementById("imgstart").style.display = "none";
}//This happens if you click on dont start 

function hide1(){
 	
	butt1.innerHTML= "Peek around the corner";
	butt1.setAttribute("onclick","javascript:corner1()");

	butt2.innerHTML= "Beat em up";
	butt2.setAttribute("onclick","javascript:beat1()");

	butt3.innerHTML= "Still run away";
	butt3.setAttribute("onclick","javascript:run1()");

	document.getElementById("peeps").style.display = "none";
}

function beat1(){

	document.getElementById("beating").style.display = "block";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
}

function corner1(){

	document.getElementById("stupidshit").style.display = "block";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
}

function run1(){

	document.body.style.backgroundImage = "url('run.jpg')";

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

	document.getElementById("horde").style.display = "none";

	butt1.innerHTML = "Go to the casino";
	butt1.setAttribute("onclick","javascript:casino1()");

	butt2.innerHTML = "Go to the supermarket";
	butt2.setAttribute("onclick","javascript:supermarket1()");

	butt3.innerHTML = "Go to the local libary";
	butt3.setAttribute("onclick","javascript:libary1()");
}

function supermarket1(){

	document.getElementById("supersuup").style.display = "block";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
}

function libary1(){

	document.getElementById("liebbie").style.display = "block";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
}

function casino1(){

	butt1.innerHTML = "Watch out for the running zombies.";
	butt1.setAttribute("onclick","javascript:running1()");

	butt2.innerHTML = "Watch out for the crawling zombies.";
	butt2.setAttribute("onclick","javascript:crawling1()");

	butt3.innerHTML = "Watch out for the retarted zombies.";
	butt3.setAttribute("onclick","javascript:retarted1()");
}

function running1(){

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
		
	document.getElementById("run").style.display = "block";
}

function crawling1(){

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
		
	document.getElementById("crawl").style.display = "block";
}

function retarted1(){

	butt1.innerHTML = "Go to a church named hell.";
	butt1.setAttribute("onclick","javascript:hell1()");

	butt2.innerHTML = "Go to a stripclub named heaven.";
	butt2.setAttribute("onclick","javascript:heaven1()");


	butt3.style.cssText = "display:none;";
		
	document.getElementById("retard").style.display = "block";
}


function hell1(){

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
		
	document.getElementById("hell").style.display = "block";
	document.getElementById("retard").style.display = "none";
}

function heaven1(){

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
		
	document.getElementById("heaven").style.display = "block";
	document.getElementById("retard").style.display = "none";
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
	butt1.setAttribute("onclick","javascript:warehouse1()");

	butt2.innerHTML = "Jump off the bridge";
	butt2.setAttribute("onclick","javascript:right1()");
	
	butt3.innerHTML = "Try to fight them";
	butt3.setAttribute("onclick","javascript:fighthorde1()");
	
	document.getElementById("horde").style.display = "block";
}

function warehouse1(){

	document.getElementById("warhous").style.display= "block";
	document.getElementById("horde").style.display = "none";

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
}

function fighthorde1(){

	butt1.innerHTML = "Stik";
	butt1.setAttribute("onclick","javascript:woodstik1()");

	butt2.innerHTML = "Stone";
	butt2.setAttribute("onclick","javascript:stone1()");
 
	butt3.innerHTML = "Toiletpaper";
	butt3.setAttribute("onclick","javascript:toilet1()");

	document.getElementById("horde").style.display = "none";
	document.getElementById("fighting").style.display = "block";
}

function woodstik1(){
		
	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
		
	document.getElementById("fighting").style.display = "none";
	document.getElementById("stik").style.display = "block";
}

function stone1(){

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
		
	document.getElementById("stone").style.display = "block";
	document.getElementById("fighting").style.display = "none";
}

function toilet1(){

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	butt3.style.cssText = "display:none;";
	
	document.getElementById("fighting").style.display = "none";	
	document.getElementById("toelet").style.display = "block";
}

function gameover1(){

	butt1.style.cssText = "display:none;";
	butt2.style.cssText = "display:none;";
	why.style.cssText = "display:none;";

	document.body.style.backgroundImage = "url('grin.jpg')";
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