let currentJSStep = 0;

function startJS() {
  displayJSStep();
}

function displayJSStep() {
  const step = jsSteps[currentJSStep];
  document.getElementById('instruction').textContent = step.instruction;
  document.getElementById('progression').textContent = `Étape ${currentJSStep + 1} / ${jsSteps.length}`;
  document.getElementById('codeInput').value = '';
  document.getElementById('message').textContent = '';
  document.getElementById('explanation').textContent = '';
}

function validateJS() {
  const input = document.getElementById('codeInput').value.trim();

  try {
    // On exécute le code
    new Function(input)();
  } catch (error) {
    document.getElementById('message').textContent = "❌ Erreur dans ton code.";
    return;
  }

  const isCorrect = jsSteps[currentJSStep].test();

  if (isCorrect) {
    playSuccessSound();
    document.getElementById('message').textContent = "✅ Bravo, c’est correct !";
    document.getElementById('explanation').textContent = jsSteps[currentJSStep].explanation;

    currentJSStep++;
    if (currentJSStep < jsSteps.length) {
      setTimeout(() => {
        displayJSStep();
      }, 1500);
    } else {
      document.getElementById('instruction').textContent = "🎉 Tu as terminé la formation JavaScript !";
      document.getElementById('progression').textContent = "";
    }
  } else {
    document.getElementById('message').textContent = "❌ La commande n’a pas produit l’effet attendu.";
  }
}

function playSuccessSound() {
  let sound;
  if (currentJSStep < 7) sound = document.getElementById('success1');
  else if (currentJSStep < 11) sound = document.getElementById('success2');
  else sound = document.getElementById('success3');

  if (sound) sound.play();
}
function toggleJSTheory() {
    const box = document.getElementById('jsTheory');
    if (box.style.display === 'none' || box.style.display === '') {
      box.style.display = 'block';
      box.innerHTML = `
        <h3>📘 Notions JavaScript utilisées dans le jeu</h3>
        <ul>
          <li>
            <strong>document.querySelector()</strong><br>
            Permet de sélectionner un élément HTML par son sélecteur (ex : <code>'h1'</code>, <code>'.classe'</code>, <code>'#id'</code>).
          </li>
          <li>
            <strong>document.getElementById()</strong><br>
            Sélectionne un élément par son <code>id</code>. Exemple : <code>document.getElementById('nut')</code>.
          </li>
          <li>
            <strong>style.property</strong><br>
            Permet de modifier dynamiquement le style CSS d’un élément HTML.  
            Exemple : <code>element.style.color = 'red';</code>
          </li>
          <li>
            <strong>innerText / textContent</strong><br>
            Permet de lire ou modifier le texte d’un élément.  
            Exemple : <code>element.innerText = 'Bravo !';</code>
          </li>
          <li>
            <strong>innerHTML</strong><br>
            Modifie le contenu HTML complet d’un élément.
          </li>
          <li>
            <strong>createElement()</strong><br>
            Crée dynamiquement un nouvel élément HTML.  
            Exemple : <code>document.createElement('p')</code>
          </li>
          <li>
            <strong>appendChild()</strong><br>
            Ajoute un élément enfant à un autre.  
            Exemple : <code>document.body.appendChild(nouveauParagraphe)</code>
          </li>
          <li>
            <strong>play()</strong><br>
            Joue un élément audio. Exemple : <code>document.getElementById('success1').play();</code>
          </li>
          <li>
            <strong>setAttribute()</strong><br>
            Modifie ou ajoute un attribut HTML à un élément.  
            Exemple : <code>element.setAttribute('id', 'nouvelId')</code>
          </li>
          <li>
            <strong>if</strong> + <strong>condition</strong><br>
            Permet de vérifier si une condition est vraie pour exécuter du code.
          </li>
          <li>
            <strong>function</strong><br>
            Déclare une fonction JavaScript. Exemple : <code>function direBonjour() { alert('Hello'); }</code>
          </li>
          <li>
            <strong>new Function(code)</strong><br>
            Exécute dynamiquement une ligne JS écrite par l’utilisateur. (utilisé dans ce jeu pour valider les étapes).
          </li>
        </ul>
      `;
    } else {
      box.style.display = 'none';
      box.innerHTML = '';
    }
  }
  
window.onload = () => {
  startJS();
};