// Sélectionner tous les boutons de dépliage
const toggleButtons = document.querySelectorAll('.toggle-btn');

// Ajouter un écouteur d'événements pour chaque bouton
toggleButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Récupérer la cible à afficher/masquer
    const target = document.getElementById(button.getAttribute('data-target'));
    
    // Basculer la classe 'active' pour afficher ou masquer le contenu
    if (target.classList.contains('active')) {
      target.classList.remove('active');
    } else {
      // Masquer tous les autres contenus d'abord
      document.querySelectorAll('.toggle-content').forEach(content => {
        content.classList.remove('active');
      });
      // Afficher le contenu cible
      target.classList.add('active');
    }
  });
});

// Test animation machine à écrire 
const text = "Utilisez le formulaire ci-dessous pour partager votre projet de recrutement ou de mission :)";

let i = 0;
const speed = 50; // Vitesse de l'animation (en ms)

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter-text").textContent += text.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  } else {
    setTimeout(() => {
      i = 0;
      document.getElementById("typewriter-text").textContent = ''; // Réinitialise le texte
      typeWriter(); // Relance l'animation
    }, 3000); // Pause de 3 secondes avant de recommencer
  }
}

typeWriter();
