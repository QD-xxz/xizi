let gameFun = () => {
	let gameid = window.location.search.split("=").pop();
	if (gameid > listJson.length||gameid=="") {
		gameid = randomNum(0, listJson.length)
	}
	const data = listJson.filter(item => item.id == gameid);
	$$(".gameCon").innerHTML = `
	<div class="gamePlay"></div>
	<div class="gamedet">
		<div class="gamedetLeft">
			<div class="baifenbaiBox">
				<div class="gameimgBox">
					<img src="${data[0].thumb}" alt="">
				</div>
			</div>
				<div class="buttonBox">
					<button id="sdk__splash-button" onclick=jumpLink("./gamedet.html?url=${data[0].url}")>Play Game</button>
			    </div>
		</div>
	</div>
	`
			$$(".gamePlay").style.backgroundImage = `url(${data[0].thumb})`;
			$$(".gameDetBottom").innerHTML = `<b>${data[0].title}</b></br>${data[0].description}`;
}
gameFun();



let readomgameTuiFn = () => {
	let str = "";
	let num = window.innerWidth > 960 ? 22 : 9;
	gameJson = getArrayItems(listJson, num)
	gameJson.forEach(item => {
		let className = "span2 gr-s11";
		str += `<a title="${item.title}" class="${className}"  onclick=jumpLink("game.html?id=${item.id}")>
	                 <img src="${item.thumb}">
	                 <span class="game-title">${item.title}</span>
                </a>`;
	});
	$$(".grd").innerHTML = str;
}

readomgameTuiFn();
lazyImg()
