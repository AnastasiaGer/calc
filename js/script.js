let resultContainer = document.querySelector(".counter__result");
let btnResult = document.querySelector(".form__submit-button");
let caloriesNorm = document.getElementById("calories-norm");
let caloriesMinimal = document.getElementById("calories-minimal");
let caloriesMaximal = document.getElementById("calories-maximal");
let ageInput = document.getElementById("age");
let heightInput = document.getElementById("height");
let weightInput = document.getElementById("weight");

let genderInput = Array.from(document.querySelectorAll("input[data-gender]"))
let genderArr = []
genderInput.forEach(radio => radio.addEventListener('change', function() {
  genderArr = 
      genderInput.filter(ii => ii.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(iii => iii.value) // Use Array.map to extract only the checkbox values from the array of objects.
      
    //console.log(genderArr)
}))

let activityInput = Array.from(document.querySelectorAll("input[data-active]"))
let enabledSettings = []
activityInput.forEach(input => input.addEventListener('change', function() {
  enabledSettings = 
      activityInput.filter(i => i.checked) // Use Array.filter to remove unchecked checkboxes.
      .map(i => i.value) // Use Array.map to extract only the checkbox values from the array of objects.
      
    //console.log(enabledSettings)
}))

let q = {
  min: 1.2,
  low: 1.375,
  medium: 1.55,
  high: 1.725,
  max: 1.9,
};

// if (ageInput.value > 0 && heightInput.value > 0 && weightInput.value > 0) {
//   btnResult.removeAttribute("disabled");
// }

btnResult.removeAttribute("disabled");

function showContainer(event) {
  event.preventDefault();

  resultContainer.classList.remove("counter__result--hidden");

  let key = enabledSettings[0];
  let genderKey = genderArr[0];
  let a = (10 * weightInput.value)
  let b = (6.25 * heightInput.value)
  let c = (5 * ageInput.value)
  let sum = a + b - c

  if(genderKey === 'male') {
    sum + 5
  } else if(genderKey === 'female') {
    sum - 160
  }

  let norm = sum * q[key]
  let minimal = norm - norm * 0.15;
  let maximal = norm + norm * 0.15;

  caloriesNorm.textContent = Math.round(norm)
  caloriesMinimal.textContent = Math.round(minimal)
  caloriesMaximal.textContent = Math.round(maximal)

  //TODO: 
  // 1. Кнопка «Рассчитать» - Становится активна, когда хотя бы одно числовое поле заполнено
  // 2. Кнопка «Рассчитать» - повторный клик по кнопке обновляет расчёты, выводится актуальная информация
  // 3. Кнопка «Очистить поля и расчёт» -  При клике все элементы приложения сбрасываются до состояния по умолчанию: числовые поля очищаются (плейсхолдер 0), пол становится мужской, физическая активность «минимальная», блок с информацией о калориях скрывается.
}

btnResult.addEventListener("click", showContainer);
