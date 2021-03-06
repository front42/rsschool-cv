"use strict";

let overlay = document.querySelector('.overlay');

function openOverlay() {
	let modalProgress = document.querySelectorAll('.modal-progress');

	for (let i = 0; i < modalProgress.length; i++) {
		modalProgress[i].onclick = () => {
			overlay.style.display = 'block';
		}
	}
}

document.querySelector('.modal-btn').onclick = () => {
	overlay.style.display = 'none';
}

openOverlay();