let resultContainer = document.querySelector('.counter__result')
let btnResult = document.querySelector('.form__submit-button')

let caloriesNorm = document.getElementById('calories-norm')
let caloriesMinimal = document.getElementById('calories-minimal')
let caloriesMaximal = document.getElementById('calories-maximal')

let genderMale = document.getElementById('gender-male')
let genderFemale = document.getElementById('gender-female')

let ageInput = document.getElementById('age')
let heightInput = document.getElementById('height')
let weightInput = document.getElementById('weight')

let minActivityInput = document.getElementById('activity-minimal')
let lowActivityInput = document.getElementById('activity-low')
let mediumActivityInput = document.getElementById('activity-medium')
let highActivityInput = document.getElementById('activity-high')
let maxActivityInput = document.getElementById('activity-maximal')

let q = {
  min: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  max: 1.9
}


if(ageInput.value>0 && heightInput.value>0 && weightInput.value>0) {
  btnResult.removeAttribute('disabled')
}

btnResult.removeAttribute('disabled')

function showContainer(event) {
  event.preventDefault();
  resultContainer.classList.remove('counter__result--hidden')
  console.log(ageInput.value)
  console.log(heightInput.value)
  console.log(weightInput.value)
}

let key = minActivityInput.value

console.log(key);
console.log(Object.values(q))

let norm = ((10 * weightInput.value) + (6,25 * heightInput.value) - (5 * ageInput.value) - 161) * Object.values(q)[key];
let minimal = norm - (norm * 0.15);
let maximal = norm + (norm * 0.15);



btnResult.addEventListener('click', showContainer)