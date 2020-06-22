for (var y = 1; y<3 ;y++)
{
	for(var x = 1; x<6 ;x++) {
		var element = document.querySelector("#league-match-lineup"+ y +" > li:nth-child("+ x +") > div")
		if (element != null) {

			element.innerHTML = "<a href='https://euw.op.gg/summoner/userName="+element.textContent + "'> "+ element.textContent + "</a>";

		}
	}
}

function changeToLink() {
	for (var y = 1; y<3 ;y++)
	{
		for(var x = 1; x<6 ;x++) {
			var element = document.querySelector("#league-match-lineup"+ y +" > li:nth-child("+ x +") > div")
			if (element != null) {

				element.innerHTML = "<a href='https://euw.op.gg/summoner/userName="+element.textContent + "'> "+ element.textContent + "</a>";

			}
		}
	}

	for (var x = 0; x<20 ;x++) {
		var element = document.querySelector("#container > section:nth-child(3) > div.section-content > ul > li:nth-child(" + x +") > div.txt-info > span:nth-child(1)");
		if (element != null) {

				element.innerHTML = "<a href='https://euw.op.gg/summoner/userName="+element.textContent + "'> "+ element.textContent + "</a>";

		}
	}
}

function sleep(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function main(){
	while (true) {
		await sleep(700);
		changeToLink();
		console.log("Changed Links")
	}
}

main();