const apiUrl = 'http://localhost:3030/';

document.addEventListener('DOMContentLoaded', () => {
	let animalButton = document.querySelector('#animalButton');
	animalButton.addEventListener('click', checkIfAnimal);
	let numberButton = document.querySelector('#numberButton');
	numberButton.addEventListener('click', getRandomNumber);
})


const checkIfAnimal = async () => {
	let input = document.querySelector('#animalInput').value;
	console.log(input);
	let response = await axios.get(`${apiUrl}animal/${input}`);
	console.log(response);
	let animalBoard = document.querySelector('.resultsAnimals');
	let answer = document.createElement('h3');
	if(response.data.message){
		answer.innerText = `Yes!!! ${input} is an animal!!!`
	}
	else{
		answer.innerText = `Nope, ${input} is not an animal...`
	}
	animalBoard.appendChild(answer);
}

const getRandomNumber = async () => {
	let num1 = document.querySelector('#num1').value;
	console.log(num1);
	let num2 = document.querySelector('#num2').value;
	let response = await axios.get(`${apiUrl}random?floor=${num1}&ceil=${num2}`);
	let numberBoard = document.querySelector('.resultsNumber');
	let answer = document.createElement('h3');
	answer.innerText = `Your random number is ${response.data}`;
	numberBoard.appendChild(answer);
}
