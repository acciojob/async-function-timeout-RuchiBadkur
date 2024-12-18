//your JS code here. If required.
const text = document.getElementById("text");
const delay = document.getElementById("delay");
const btn = document.getElementById("btn");
const output = document.getElementById("output");

text.value = "";
delay.value = "";
output.innerHTML = "";

function displayAfterDelay(delayValue, textValue) {
	const myPromise = new Promise((res, rej) => {
		setTimeout(() => {
			res(`${textValue}`);
		}, delayValue)
	})

	return myPromise;
}


const fetchData = async (delayValue, textValue) => {
	try {
		console.log(delayValue, textValue)
		const res = await displayAfterDelay(delayValue, textValue);
		output.innerHTML = `${res}`;
	} catch (error) {
		output.innerHTML = `${error}`;
	}
	
	textValue = "";
	delayVlaue = "";
	// output.innerHTML = "";
}


btn.addEventListener("click", ()=>{
	if(parseInt(delay.value) >= 1000 && text.value !== ""){
		
	fetchData(parseInt(delay.value), text.value)}
})


