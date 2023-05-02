console.log("Coucou");

const form = document.querySelector("#quiz-form")
console.log(form)
const results = document.querySelector('#results');
console.log(results)

form.addEventListener('submit', (event) => {
  event.preventDefault(); // empêcher le rechargement de la page
  let score = 0;

  // Vérifier chaque réponse et incrémenter le score si elle est correcte
  if (form.q1.value === 'oui') {
    score++;
    document.querySelector('#q1-oui').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q1-non').parentNode.classList.add('incorrect');
  }

  if (form.q2.value === 'oui') {
    score++;
    document.querySelector('#q2-oui').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q2-non').parentNode.classList.add('incorrect');
  }

  if (form.q3.value === 'oui') {
    score++;
    document.querySelector('#q3-oui').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q3-non').parentNode.classList.add('incorrect');
  }

  if (form.q4.value === 'oui') {
    score++;
    document.querySelector('#q4-oui').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q4-non').parentNode.classList.add('incorrect');
  }

  if (form.q5.value === 'non') {
    score++;
    document.querySelector('#q5-non').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q5-oui').parentNode.classList.add('incorrect');
  }

  if (form.q6.value === 'oui') {
    score++;
    document.querySelector('#q6-oui').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q6-non').parentNode.classList.add('incorrect');
  }

  if (form.q7.value === 'oui') {
    score++;
    document.querySelector('#q7-oui').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q7-non').parentNode.classList.add('incorrect');
  }

  if (form.q8.value === 'non') {
    score++;
    document.querySelector('#q8-non').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q8-oui').parentNode.classList.add('incorrect');
  }

  if (form.q9.value === 'non') {
    score++;
    document.querySelector('#q9-non').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q9-oui').parentNode.classList.add('incorrect');
  }

  if (form.q10.value === 'oui') {
    score++;
    document.querySelector('#q10-oui').parentNode.classList.add('correct');
  } else {
    document.querySelector('#q10-non').parentNode.classList.add('incorrect');
  }

  // Afficher le score final
  results.innerHTML = `Votre score est de ${score}/10. Merci d'avoir participé !`;
});
