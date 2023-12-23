document.addEventListener("DOMContentLoaded", function() {
    const html = document.getElementById("html");
    const css = document.getElementById("css");
    const js = document.getElementById("js");
  
    let pourcenHtml = 0;
    let pourcenCss = 0;
    let pourcenJs = 0;
  
    // Fonction pour mettre à jour le cercle de progression
    function updateCircle(object, progressPercentage, pourcentageMax, compteur) {
      const circles = object.querySelectorAll('circle');
  
      // Vérifier si le deuxième cercle existe
      if (circles.length >= 2) {
        const circleObject = circles[1];
        const circleTextObject = object.querySelector('text');
  
        const radius = 70;
        const circumference = 2 * Math.PI * radius;
        const strokeDashArray = circumference;
  
        // Calcul de stroke-dashoffset pour progressPercentage de progression
        const strokeDashOffset = circumference * ((100 - progressPercentage) / 100);
  
        // Appliquer les valeurs au cercle de progression
        circleObject.style.strokeDasharray = strokeDashArray;
        circleObject.style.strokeDashoffset = strokeDashOffset;
        circleTextObject.innerHTML = progressPercentage;
  
        // Vérifier si le pourcentage maximal est atteint
        if (progressPercentage >= pourcentageMax) {
          clearTimeout(compteur);
        } else {
          // Augmenter le pourcentage pour la prochaine mise à jour
          progressPercentage++;
          // Relancer la fonction de mise à jour avec le nouveau pourcentage
          compteur = setTimeout(function() {
            updateCircle(object, progressPercentage, pourcentageMax, compteur);
          }, 30);
        }
      } else {
        console.error("Le deuxième cercle n'a pas été trouvé dans l'élément spécifié.");
      }
    }
  
    // Démarrer la mise à jour du cercle pour HTML avec un pourcentage maximal de 95
    const CompteurHtml = setTimeout(function() {
      updateCircle(html, pourcenHtml, 95, CompteurHtml);
    }, 30);
  
    // Tu peux faire de même pour les autres compétences (CSS, JS) si nécessaire
    const CompteurCss = setTimeout(function() {
      updateCircle(css, pourcenCss, 70, CompteurCss);
    }, 30);
  
    const CompteurJs = setTimeout(function() {
      updateCircle(js, pourcenJs, 40, CompteurJs);
    }, 30);
  });
  document.addEventListener("DOMContentLoaded", function () {
    const presentation = `Je m'appelle BOUZID Mehdy, J'ai 22 ans\nje suis actuellement en formation de développeur web\n web mobile pour
    monter en compétence par la suite trouver un emploi ou 
    une alternance`;
  
    const texte=document.getElementById('text');
    let char = 0;
  
    function auto() {
      if (char < presentation.length) {
        texte.innerHTML += presentation.charAt(char);
        char++;
        requestAnimationFrame(auto);
      }
    }
    auto();
  });
  
  