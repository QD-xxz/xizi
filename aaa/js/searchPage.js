let searchFn=()=>{
	let value=window.location.search.split("?").pop().split('=').pop();
	function search(keyword) {
			keyword = keyword.toLowerCase();
			let gameJson=getArrayItems(listJson,65);
			const result = gameJson.filter(item => {
				const name = item.title.toLowerCase();
				const del = item.description.toLowerCase();
				return name.includes(keyword) || del.includes(keyword);
			});
			return result;
		}

	let gameJson=search(value);
	$$(".classTitle i").innerHTML=`Search "${value}" games ${gameJson.length}`
	let str = '';
	gameJson.forEach((item) => {
		let className = "span2 gr-s11";
		str += `<a title="${item.title}" class="${className}"  onclick=jumpLink("game.html?id=${item.id}")>
	                 <img src="${item.thumb}">
	                 <span class="game-title">${item.title}</span>
                </a>`;
	})
	if(gameJson.length>0){
		$$('.grd').innerHTML=str;
	}else{
		$$('.grd').innerHTML='<img src="./images/searchBg.png" alt="" class="searchBg">';
	}
}
searchFn();
