window.onload = function () {
	lazyImg()
}

let menuFlag = true;
let searchFlag = true;



let centerFn = () => {
	let str = "";
	navJson.map(item => {
		str += `
	<div class="centerLi">
	<img src="${item.img}">
	${item.name}</div>
	`
	})
	$$('.center').innerHTML = str;

	let centerLis = document.querySelectorAll('.centerLi');
	navJson.map((item, i) => {
		centerLis[i].onclick = function () {
			jumpLink(`classify.html?type=${item.name}`);
			if (w < 960) {
				$$('.center').style.left = "-100vw";
				menuFlag = true;
				$$('html').style.overflowY = 'auto';
				$$('.menu img').src = "./images/menu.png"
			}
		}
	})
}
centerFn()


let searchBtn = () => {
	$$('#zsearch').onclick = function () {
		if (window.innerWidth < 960) {
			if (searchFlag) {
				$$('.searchBox').style.display = "flex";
				searchFlag = false;
				$$('html').style.overflowY = 'hidden';
				$$('.center').style.left = "-100vw";
				menuFlag = true;
				$$('.menu img').src = "./images/menu.png";
				$$('.search img').src = "./images/close.png"
			} else {
				$$('.searchBox').style.display = "none";
				searchFlag = true;
				$$('html').style.overflowY = 'auto';
				$$('.search img').src = "./images/search.png";
			}
		}
	}
}
searchBtn()


let menuFn = () => {
	$$('.menu').onclick = function () {
		if (menuFlag) {
			$$('.center').style.left = "0px";
			menuFlag = false;
			$$('html').style.overflowY = 'hidden';
			$$('.menu img').src = "./images/close.png"
			$$('.searchBox').style.display = "none";
			$$('.search img').src = "./images/search.png"
			searchFlag = true;
		} else {
			$$('.center').style.left = "-100vw";
			menuFlag = true;
			$$('html').style.overflowY = 'auto';
			$$('.menu img').src = "./images/menu.png"
		}
	}
}
menuFn()
