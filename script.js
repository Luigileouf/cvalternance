document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.animate-section');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 }); // Le seuil détermine quand l'animation se déclenche

  sections.forEach(section => {
    observer.observe(section);
  });
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.experience-slider');
    const items = document.querySelectorAll('.experience-item');
    
    // Duplique les éléments pour créer un défilement infini
    items.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });

    // Ajuste la durée de l'animation en fonction du nombre d'éléments
    const totalItems = slider.children.length;
    const animationDuration = totalItems * 5; // 5 secondes par élément
    slider.style.animationDuration = `${animationDuration}s`;
});

document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.education-slider');
    const items = document.querySelectorAll('.education-item');
    
    // Duplique les éléments pour créer un défilement infini
    items.forEach(item => {
        const clone = item.cloneNode(true);
        slider.appendChild(clone);
    });

    // Ajuste la durée de l'animation en fonction du nombre d'éléments
    const totalItems = slider.children.length;
    const animationDuration = totalItems * 5; // 5 secondes par élément
    slider.style.animationDuration = `${animationDuration}s`;
});

document.addEventListener('DOMContentLoaded', function() {
    const skillToggles = document.querySelectorAll('.skill-toggle');

    skillToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            // Toggle active class on the button
            this.classList.toggle('active');

            // Toggle active class on the content
            const content = this.nextElementSibling;
            content.classList.toggle('active');

            // Adjust max-height for smooth animation
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = 0;
            }

            // Close other open skills
            skillToggles.forEach(otherToggle => {
                if (otherToggle !== this) {
                    otherToggle.classList.remove('active');
                    const otherContent = otherToggle.nextElementSibling;
                    otherContent.classList.remove('active');
                    otherContent.style.maxHeight = 0;
                }
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const text = `Vous considérez l'alternance comme un investissement d'avenir pour votre entreprise.

Vous envisagez de recruter un alternant pour le faire monter en compétence comme ingénieur développement fullstack ou ingénieur logiciel pour l'intégrer durablement dans votre équipe.

La mission et le projet que vous lui confiez s'inscrivent dans le développement de votre entreprise permettant une montée en compétence progressive grâce à un plan de professionnalisation cohérent avec le programme du Master of science développement cloud et mobile de Supinfo.

Alors organisons un échange pour mieux nous connaître et construire une collaboration réussie.

Pour préparer notre échange, partagez des informations sur votre projet et votre entreprise grâce au formulaire de contact à suivre.`;

    const typewriterElement = document.getElementById('typewriter-text');
    let i = 0;

    function typeWriter() {
        if (i < text.length) {
            typewriterElement.innerHTML = text.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
            i++;
            setTimeout(typeWriter, 30); // Ajustez cette valeur pour modifier la vitesse de frappe
        } else {
            typewriterElement.innerHTML = text + '<span class="typewriter-cursor"></span>';
        }
    }

    // Démarrez l'animation lorsque la section est visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                typeWriter();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    observer.observe(document.getElementById('call-to-action'));
});

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Ici, vous pouvez ajouter le code pour envoyer les données du formulaire
        // Par exemple, en utilisant fetch() pour envoyer les données à un serveur
        
        console.log('Formulaire soumis');
        // Réinitialisez le formulaire ou affichez un message de confirmation
        form.reset();
        alert('Merci pour votre message. Nous vous contacterons bientôt.');
    });
});
