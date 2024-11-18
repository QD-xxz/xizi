function show(classifyName) {
	return classifyName.replace(/%20/g, " ");
  }




const classifyFn = () => {
	let classifyName = window.location.search.split("=").pop();
	classifyName = show(classifyName);
	$$('.listTitle').innerHTML = `<p>${classifyName} Games</p>`;
	let str = '';
	let num=randomNum(5,15)
	let classGames=getArrayItems(listJson,num)
	classGames.forEach((item) => {
		let className = "span2 gr-s11";
		str += `<a title="${item.title}" class="${className}"  onclick=jumpLink("game.html?id=${item.id}")>
	                 <img src="${item.thumb}">
	                 <span class="game-title">${item.title}</span>
                </a>`;
	})
	$$('.grd').innerHTML += str;
	lazyImg()
}
classifyFn()


