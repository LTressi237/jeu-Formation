let currentCSSStep = 0;

function startCSS() {
  displayCSSStep();
  randomNutPosition();
}

function displayCSSStep() {
  const step = cssSteps[currentCSSStep];
  document.getElementById('instruction').textContent = step.instruction;
  document.getElementById('progression').textContent = `Étape ${currentCSSStep + 1} / ${cssSteps.length}`;
  document.getElementById('cssInput').value = '';
  document.getElementById('message').textContent = '';
  document.getElementById('explanation').textContent = '';
}

function randomNutPosition() {
  const positions = ['flex-start', 'center', 'flex-end'];
  const nut = document.getElementById('nut');
  const random = Math.floor(Math.random() * positions.length);
  nut.dataset.position = positions[random];

  const playground = document.getElementById('playground');
  playground.style.justifyContent = positions[random];
}
function applyMultipleStyles(target, input) {
    const declarations = input.split(';').map(s => s.trim()).filter(Boolean);
    declarations.forEach(decl => {
      const [prop, val] = decl.split(':');
      if (prop && val) {
        target.style[prop.trim()] = val.trim();
      }
    });
  }

function validateCSS() {
    const input = document.getElementById('cssInput').value.trim();
    const [property, valueRaw] = input.split(':');

    if (!property || !valueRaw) {
        document.getElementById('message').textContent = "❌ Erreur de syntaxe. Format : propriété: valeur;";
        return;
    }

    const value = valueRaw.replace(';', '').trim();
    const playground = document.getElementById('playground');

    // Réinitialise certaines propriétés à chaque test
    applyMultipleStyles(playground, input);

    const entered = input.replace(/\s+/g, ' ').replace(/;$/, '').trim();
    const expected = cssSteps[currentCSSStep].solution.replace(/\s+/g, ' ').replace(/;$/, '').trim();

    // Vérifie si la valeur entrée correspond à la solution attendue
    if (entered === expected) {
        playSuccessSound();
        document.getElementById('message').textContent = "✅ Bien joué !";
        document.getElementById('explanation').textContent = cssSteps[currentCSSStep].explanation;

        currentCSSStep++;
        if (currentCSSStep < cssSteps.length) {
            setTimeout(() => {
                displayCSSStep();
                randomNutPosition();
            }, 1500);
        } else {
            document.getElementById('instruction').textContent = "🎉 Formation CSS terminée ! Tu as un bon niveau maintenant. Entraîne-toi régulièrement et ne lâche rien 🥳!";
            document.getElementById('progression').textContent = "";
        }
    } else {
        document.getElementById('message').textContent = "❌ Mauvaise réponse. Essaie encore.";
    }
}

function playSuccessSound() {
  let sound;
  if (currentCSSStep < 7) sound = document.getElementById('success1');
  else if (currentCSSStep < 18) sound = document.getElementById('success2');
  else sound = document.getElementById('success3');

  if (sound) sound.play();
}
function toggleCSSTheory() {
    const box = document.getElementById('cssTheory');
    if (box.style.display === 'none') {
      box.style.display = 'block';
      box.innerHTML = `
        <h3>📘 Notions CSS utilisées dans le jeu</h3>
        <ul>
          <li>
            <strong>display: flex;</strong><br>
            Active le modèle de boîte flexible (Flexbox). Il permet d’aligner facilement des éléments enfants sur un axe (horizontal ou vertical).
          </li>
          <li>
            <strong>justify-content</strong><br>
            Définit l’alignement horizontal des éléments dans un conteneur flex.  
            Principales valeurs :
            <ul>
              <li><code>flex-start</code> : aligne les éléments à gauche.</li>
              <li><code>center</code> : les centre horizontalement.</li>
              <li><code>flex-end</code> : les aligne à droite.</li>
              <li><code>space-between</code> : espace égal entre les éléments.</li>
              <li><code>space-around</code> : espace autour de chaque élément.</li>
            </ul>
          </li>
          <li>
            <strong>align-items</strong><br>
            Contrôle l’alignement vertical dans le conteneur.  
            Valeurs utiles :
            <ul>
              <li><code>flex-start</code> : en haut</li>
              <li><code>center</code> : centré verticalement</li>
              <li><code>flex-end</code> : en bas</li>
            </ul>
          </li>
          <li>
            <strong>margin-left: auto;</strong><br>
            Repousse un élément vers la droite dans un flex. Pratique pour aligner un élément tout à droite.
          </li>
          <li>
            <strong>padding</strong><br>
            Ajoute de l’espace **intérieur** entre le contenu et la bordure d’un élément.
          </li>
          <li>
            <strong>border / border-radius</strong><br>
            <code>border</code> ajoute une bordure. <code>border-radius</code> arrondit les coins (ex : 10px pour des coins doux).
          </li>
          <li>
            <strong>background-color</strong><br>
            Change la couleur de fond d’un élément. Tu peux utiliser des noms (lightblue), des codes hexa (#f3f3f3) ou rgb.
          </li>
          <li>
            <strong>width / height</strong><br>
            Définissent la largeur et hauteur fixes d’un élément (ex : 100px).
          </li>
          <li>
            <strong>box-shadow</strong><br>
            Ajoute une ombre autour de l’élément.  
            Exemple : <code>0 0 10px gray</code> = ombre floue grise autour.
          </li>
          <li>
            <strong>transform: rotate()</strong><br>
            Permet de faire tourner un élément (ex : <code>rotate(45deg)</code> pour tourner de 45°).
          </li>
          <li>
            <strong>transition</strong><br>
            Permet d'animer les changements de style.  
            Exemple : <code>all 0.5s ease</code> → tout changement se fait en 0.5s.
          </li>
          <li>
            <strong>text-align / color / font-size</strong><br>
            Contrôle respectivement l’alignement du texte, sa couleur, et sa taille.
          </li>
          <li>
            <strong>flex-direction</strong><br>
            Contrôle l’orientation principale du flex :
            <ul>
              <li><code>row</code> : en ligne (par défaut)</li>
              <li><code>column</code> : en colonne</li>
            </ul>
          </li>
          <li>
            <strong>gap</strong><br>
            Ajoute un espacement constant entre les éléments enfants d’un conteneur flex.
          </li>
        </ul>
      `;
    } else {
      box.style.display = 'none';
      box.innerHTML = '';
    }
}
// CSS Game Steps
window.onload = () => {
  startCSS();
};
