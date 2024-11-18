let readomFn = () => {
	let str = "";
	let num=w>960?65:18
	let readomJson = listJson.slice(0, num);
	readomJson.forEach((item, i) => {
		let className = "span2 gr-s11";
		str += `<a title="${item.title}" class="${className}"  onclick=jumpLink("game.html?id=${item.id}")>
	                 <img src="${item.thumb}">
	                 <span class="game-title">${item.title}</span>
					 <span class="featured_icon"></span>
                </a>`;
	})
	$$('.grd1').innerHTML = str;
}
readomFn();



let readomThreeFn = () => {
	let str = "";
	let num=w>960?18:18
	let readomJson = getArrayItems(listJson,num);
	readomJson.forEach((item, i) => {
		str += `<a href="game.html?id=${item.id}" class="game-container">
		<img
			class="pic fmt" src="${item.thumb}"
			alt="${item.thumb}">
		<div class="game-introduction">
			<div class="row-1">
				<div class="appName">${item.title}</div>
			</div>
		</div>
	</a> `;
	})
	$$('.hotGamesContent').innerHTML = str;

}
readomThreeFn();


let indexClassFn=()=>{
	let str="";
	navJson.forEach(item=>{
		str+=`
		<li><a href="classify.html?type='${item.name}'">${item.name} Game</a></li>
		`
	})

	$$(".ulDom").innerHTML=str;
}
indexClassFn()




