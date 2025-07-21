const jsSteps = [
    {
      instruction: "Change la couleur du titre en rouge.",
      test: () => document.querySelector("h1").style.color === "red",
      explanation: "document.querySelector('h1').style.color = 'red'; modifie la couleur du texte du titre en rouge."
    },
    {
      instruction: "Change le fond du body en jaune.",
      test: () => document.body.style.backgroundColor === "yellow",
      explanation: "document.body.style.backgroundColor = 'yellow'; modifie la couleur de fond de la page."
    },
    {
      instruction: "Cache la noisette.",
      test: () => document.getElementById("nut").style.display === "none",
      explanation: "document.getElementById('nut').style.display = 'none'; rend la noisette invisible."
    },
    {
      instruction: "Réduis la largeur de l’écureuil à 50px.",
      test: () => document.getElementById("squirrel").style.width === "50px",
      explanation: "document.getElementById('squirrel').style.width = '50px'; réduit la taille de l’écureuil."
    },
    {
      instruction: "Fais apparaître le message “Bravo !” dans le paragraphe #message.",
      test: () => document.getElementById("message").innerText.includes("Bravo"),
      explanation: "document.getElementById('message').innerText = 'Bravo !'; affiche le texte dans l’élément #message."
    },
    {
      instruction: "Mets le texte du message en majuscules.",
      test: () => {
        const msg = document.getElementById("message").innerText;
        return msg === msg.toUpperCase() && msg !== "";
      },
      explanation: "element.innerText = element.innerText.toUpperCase(); met le texte en majuscules."
    },
    {
      instruction: "Change la couleur du bouton en vert.",
      test: () => document.querySelector("button").style.backgroundColor === "green",
      explanation: "document.querySelector('button').style.backgroundColor = 'green'; change la couleur du bouton."
    },
    {
      instruction: "Ajoute un nouveau paragraphe avec du texte dans la page.",
      test: () => document.querySelectorAll("p").length > 3,
      explanation: "document.body.appendChild(document.createElement('p')).innerText = 'Nouveau paragraphe'; ajoute un paragraphe."
    },
    {
      instruction: "Joue un des sons de réussite.",
      test: () => {
        return !document.getElementById("success1").paused ||
               !document.getElementById("success2").paused ||
               !document.getElementById("success3").paused;
      },
      explanation: "document.getElementById('success1').play(); joue un son."
    },
    {
      instruction: "Change le texte du bouton en “Valide”.",
      test: () => document.querySelector("button").innerText === "Valide",
      explanation: "document.querySelector('button').innerText = 'Valide'; modifie le texte du bouton."
    },
    {
      instruction: "Aligne les éléments de la zone de jeu au centre (horizontalement).",
      test: () => document.getElementById("playground").style.justifyContent === "center",
      explanation: "document.getElementById('playground').style.justifyContent = 'center'; centre les enfants horizontalement."
    },
    {
      instruction: "Donne un nouvel ID 'hero' à l’écureuil.",
      test: () => document.getElementById("hero") !== null,
      explanation: "document.getElementById('squirrel').id = 'hero'; change l'ID de l’écureuil."
    }
  ];