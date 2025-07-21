const cssSteps = [
    {
        instruction: "donne un fond noir a l'aire de jeu.",
        solution: "background-color: black;",
        explanation: "background-color: black; colore l’arrière-plan en noir de l'aire de jeu."
      },
    {
      instruction: "Fais aller la poule à gauche.",
      solution: "justify-content: flex-start;",
      explanation: "justify-content: flex-start; aligne les éléments au début du conteneur (à gauche)."
    },
    {
      instruction: "Fais aller la poule au centre.",
      solution: "justify-content: center;",
      explanation: "justify-content: center; centre les éléments horizontalement dans un conteneur flex."
    },
    {
      instruction: "Fais aller la poule à droite.",
      solution: "justify-content: flex-end;",
      explanation: "justify-content: flex-end; aligne les éléments à droite dans un conteneur flex."
    },
    {
      instruction: "Aligne la poule en haut du cadre.",
      solution: "align-items: flex-start;",
      explanation: "align-items: flex-start; aligne les éléments en haut (verticalement) dans un flex."
    },
    {
      instruction: "Centre la poule verticalement.",
      solution: "align-items: center;",
      explanation: "align-items: center; aligne les éléments au centre verticalement dans un conteneur flex."
    },
    {
      instruction: "Aligne la poule en bas du cadre.",
      solution: "align-items: flex-end;",
      explanation: "align-items: flex-end; aligne les éléments en bas dans un conteneur flex."
    },
    {
      instruction: "Espaces les éléments équitablement sur la ligne.",
      solution: "justify-content: space-between;",
      explanation: "justify-content: space-between; met un espace égal entre les éléments sur l’axe horizontal."
    },
    {
      instruction: "Mets un fond bleu clair au terrain.",
      solution: "background-color: lightblue;",
      explanation: "background-color: lightblue; colore l’arrière-plan en bleu clair."
    },
    {
      instruction: "Ajoute une bordure rouge de 2px solide.",
      solution: "border: 2px solid red;",
      explanation: "border: 2px solid red; trace une bordure rouge autour de l’élément."
    },
    {
      instruction: "Rends la bordure arrondie à 10px.",
      solution: "border-radius: 10px;",
      explanation: "border-radius: 10px; rend les coins arrondis avec un rayon de 10 pixels."
    },
    {
      instruction: "Agrandis la poule à 100px de largeur.",
      solution: "width: 100px;",
      explanation: "width: 100px; fixe la largeur de l’élément à 100 pixels."
    },
    {
      instruction: "Fais que l'oeuf' soit tout à droite.",
      solution: "margin-left: auto;",
      explanation: "margin-left: auto; pousse l’élément vers la droite dans un flex."
    },
    {
      instruction: "Ajoute 40px d’espace entre les éléments.",
      solution: "gap: 40px;",
      explanation: "gap: 40px; crée un espacement de 40 pixels entre les enfants d’un conteneur flex ou grid."
    },
    {
      instruction: "Transforme le terrain en conteneur flex.",
      solution: "display: flex;",
      explanation: "display: flex; active le mode Flexbox sur l’élément pour gérer les enfants facilement."
    },
    {
      instruction: "Change la couleur du texte en violet.",
      solution: "color: violet;",
      explanation: "color: violet; modifie la couleur du texte."
    },
    {
      instruction: "Centre le texte horizontalement.",
      solution: "text-align: center;",
      explanation: "text-align: center; aligne le texte horizontalement au centre."
    },
    {
      instruction: "Ajoute un padding de 20px au terrain.",
      solution: "padding: 20px;",
      explanation: "padding: 20px; ajoute de l’espace intérieur autour du contenu de l’élément."
    },
    {
      instruction: "Ajoute une ombre autour du terrain.",
      solution: "box-shadow: 0 0 10px gray;",
      explanation: "box-shadow: 0 0 10px gray; crée une ombre floue grise autour de l’élément."
    },
    {
      instruction: "Fais pivoter la poule de 45 degrés.",
      solution: "transform: rotate(45deg);",
      explanation: "transform: rotate(45deg); applique une rotation de 45° à l’élément."
    },
    {
      instruction: "Agrandis la taille du texte à 2rem.",
      solution: "font-size: 2rem;",
      explanation: "font-size: 2rem; augmente la taille du texte."
    },
    {
      instruction: "Change la police du texte en Courier New.",
      solution: "font-family: 'Courier New';",
      explanation: "font-family: 'Courier New'; applique la police Courier New."
    },
    {
      instruction: "Mets le fond du body en gris clair.",
      solution: "background-color: #f3f3f3;",
      explanation: "background-color: #f3f3f3; donne un fond gris clair à l’élément."
    },
    {
      instruction: "Ajoute une animation de transition au terrain.",
      solution: "transition: all 0.5s ease;",
      explanation: "transition: all 0.5s ease; permet d’animer les changements de style en douceur."
    },
    {
      instruction: "Affiche les éléments en colonne.",
      solution: "flex-direction: column;",
      explanation: "flex-direction: column; aligne les enfants verticalement dans un conteneur flex."
    },
    {
        instruction: "Dernier défi : avec deja tout ce que tu tu as appris, aligne la poule à droite, en bas, avec 20px de padding et un fond bleu clair.",
        solution: "justify-content: flex-end; align-items: flex-end; padding: 20px; background-color: lightblue;",
        explanation: `Ici tu combines plusieurs propriétés CSS :
      - \`justify-content: flex-end;\` pour aligner à droite,
      - \`align-items: flex-end;\` pour aligner en bas,
      - \`padding: 20px;\` pour ajouter de l’espace intérieur,
      - \`background-color: lightblue;\` pour changer le fond.`
      }
      
  ];