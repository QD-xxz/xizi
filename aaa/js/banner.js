let redomswiperTopFn = () => {
	swiperJson=getArrayItems(listJson,20)
	let str = "";
	swiperJson.forEach((item, i) => {
		str += `<div class="swiper-slide primary-selection-item" onclick="jumpLink('game.html?id=${item.id}')">
		<div class="framed-button">
			<div class="image-frame themed-background">
				<img class="avatar"
					src="${item.thumb}"
					alt="${item.title}">
			</div>
			<div class="title-show">${item.title}</div>
		</div>
	</div>`
	})
	$$('.primary-selection .swiper-wrapper').innerHTML = str;
}

redomswiperTopFn()


let swiperTwoFn = () => {
	swiperJson=getArrayItems(listJson,5)
	let str = "";
	swiperJson.forEach((item, i) => {
		str += `<div class="swiper-slide link" style="margin-right: 20px;" onclick="jumpLink('game.html?game=${item.id}')">
		<div style="background-image: url('${item.thumb}')"
			class="background-image swiper-lazy" role="img">
			<div class="content-container">
				<div class="show-text-container">
					<div class="lhs">
						<div class="show-name">${item.title}</div>
					</div>
					<div class="rhs"></div>
				</div>
			</div>
		</div>
	</div>`
	})
	$$('.swiper-hero .swiper-wrapper').innerHTML = str;
}

swiperTwoFn()


