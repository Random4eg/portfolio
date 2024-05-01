function projects() {
	const toggleButton = document.getElementById('toggleButton');
	const lastSixCards = document.querySelectorAll('.hiddens');

	toggleButton.addEventListener('click', () => {
		lastSixCards.forEach(card => {
			card.classList.toggle('hidden');
		});

		if (toggleButton.textContent === 'Show') {
			toggleButton.textContent = 'Hidden';
		} else {
			toggleButton.textContent = 'Show';
		}
	});
}

export default projects;
