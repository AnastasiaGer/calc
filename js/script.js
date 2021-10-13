let resultContainer = document.querySelector('.counter__result')
let btnResult = document.querySelector('.form__submit-button')

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


if(ageInput.value>0 && heightInput.value>0 && weightInput.value>0) {
  btnResult.removeAttribute('disabled')

}

btnResult.removeAttribute('disabled')

function showContainer() {
  resultContainer.classList.remove('counter__result--hidden')
  console.log(document.getElementsByTagName("input")[2].value
  )
}

btnResult.addEventListener('click', showContainer)