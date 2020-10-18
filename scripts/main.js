document.querySelector('html').onclick = function(){
	alert('(っ◔◡◔)っ ♥ curse ♥');
}

let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/tenor.gif') {
      myImage.setAttribute('src','images/eye.png');
    } else if ((mySrc === 'images/eye.png')){
      myImage.setAttribute('src','images/tenor.gif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName(){
	let myName = prompt('𝘗𝘭𝘦𝘢𝘴𝘦 𝘦𝘯𝘵𝘦𝘳 𝘺𝘰𝘶𝘳 𝘯𝘢𝘮𝘦.')
	if (!myName){
		setUserName();
	}
	else{
		localStorage.setItem('name', myName);
		myHeading.textContet = 'Hello, ' + myName;
	}
}

if(!localStorage.getItem('name')){
	setUserName();
}
else {
	let storedName = localStorage.getItem('name');
	myHeading.textContent = 'You have been here before, ' + storedName;
}

myButton.onclick = function(){setUserName();}
