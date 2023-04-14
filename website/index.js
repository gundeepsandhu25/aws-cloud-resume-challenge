const counter = document.querySelector(".counter-number");
async function updateCounter() {
	let response = await fetch("https://k7o2lcgb5honl72zulsf3pnb2e0hlxnm.lambda-url.us-east-1.on.aws/");
	let data = await response.json();
	counter.innerHTML = ` View: ${data}`;

}

updateCounter();