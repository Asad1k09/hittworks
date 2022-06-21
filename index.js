var buyBtn = document.getElementById('buy');
var sellBtn = document.getElementById('sell');
var buySection = document.getElementById('buySection');
var sellSection = document.getElementById('sellSection');

buyBtn.onclick = function() {
	sellBtn.classList.remove('headingbutton');
	sellBtn.classList.add('buygrey')
	buyBtn.classList.add('headingbutton');
	sellSection.classList.toggle('show');
	buySection.classList.toggle('hidden');
}

sellBtn.onclick = function() {
	buyBtn.classList.remove('headingbutton');
	buyBtn.classList.add('buygrey')
	sellBtn.classList.add('headingbutton');
	buySection.classList.remove('show');
	sellSection.classList.toggle('show');
	buySection.classList.toggle('hidden');
}
