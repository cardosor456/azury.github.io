const myImage = document.querySelector("img");

myImage.width = myImage.width;

myImage.addEventListener("click", () => {
	const mySrc = myImage.getAttribute("src");
	if (mySrc === "imgs/1.png"){
		myImage.setAttribute("src", "imgs/2.jpg");
	} else {
		myImage.setAttribute("src", "imgs/1.png");
	}
});