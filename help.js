/* At least: 2 DOM queries, 1 function called in 
response to DOM event, function should update page content*/

// make button change Gotcha project to the next project

let proj = document.getElementById('project').textContent;

let desc = document.getElementById('description').textContent;

let btnName = document.querySelector('button').textContent;

function updateProject(){
	let x = document.getElementById('project').textContent;
	if(x.localeCompare(proj) == 0){
		// change text Contents
		let nextProj = "Course Registration System";
		document.getElementById('project').textContent = nextProj;
		let nextDesc = "This project is an Object Oriented Java Program that acts as a Course Registration System. To log in as an administrator, the username is 'admin' and the password is 'admin001'. The student usernames and passwords can actually be creeated and accessed by adminstrators.";
		document.getElementById('description').textContent = nextDesc;
		let nextBtnName = "Previous Project";
		document.querySelector('button').textContent = nextBtnName;

		// change source code link
		let lnk = document.getElementById("code");
		lnk.setAttribute("href", "https://github.com/bjr366/courses");
	}
	//change back
	else{
		document.getElementById('project').textContent = proj;
		document.getElementById('description').textContent = desc;
		document.querySelector('button').textContent = btnName;
	}
}

// access button
let btn = document.querySelector('button');

btn.addEventListener('click', updateProject);





































// let home = document.getElementById('home-link');
// let resume = document.getElementById('resume-link');
// let exp = document.getElementById('exp-link');
// let project = document.getElementById('project-link');
// let contact = document.getElementById('contact-link');

// // let homeSec = document.getElementById('a');
// // let resumeSec = document.querySelector('[name = "resume"]');
// // let expSec = document.querySelector('[name = "exp"]');
// // let projectSec = document.querySelector('[name = "projects"]');
// // let contactSec = document.querySelector('[name = "contact"]');



// function updateScroll(){


// 	let str = location.href;
// 	console.log(str);
// 	console.log(home.style.color); 
// 	console.log(home.textContent);
// 	// event.currentTarget.style.color.white;

// 	//Home
// 	if (str.endsWith("#home")){
// 		console.log(1);
// 		home.style.color = "white";

// 	}

// 	// Resume
// 	else if(str.endsWith("#resume")){
// 		console.log(2);
// 		resume.style.color = "white";
// 	}

// 	// Experience
// 	else if(str.endsWith("#exp")){
// 		console.log(3);
// 		exp.style.color = "white";
// 	}


// 	// Projects
// 	else if(str.endsWith("#projects")){
// 		console.log(4);
// 		project.style.color = "white";
// 	}

// 	// Contact Me
// 	else if(str.endsWith("#contact")){
// 		console.log(5);
// 		contact.style.color = "white";
// 	}
// }

// document.querySelectorAll('.wrapper').forEach(item => {
//   item.addEventListener('mouseover', updateScroll());
// })
// window.querySelector('a').onscroll = updateScroll();