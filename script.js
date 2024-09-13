document.addEventListener('DOMContentLoaded', function () {
    // Animation pour les sections avec la classe 'animate-section'
    const sections = document.querySelectorAll('.animate-section');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        },
        { threshold: 0.1 }
    );
  
    sections.forEach((section) => {
        observer.observe(section);
    });
  
    // Gestion des sliders pour l'expérience et l'éducation
    const experienceSlider = document.querySelector('.experience-slider');
    const educationSlider = document.querySelector('.education-slider');
    [experienceSlider, educationSlider].forEach((slider) => {
        if (slider) {
            const items = slider.children;
            Array.from(items).forEach((item) => {
                const clone = item.cloneNode(true);
                slider.appendChild(clone);
            });
            const totalItems = slider.children.length;
            const animationDuration = totalItems * 5;
            slider.style.animationDuration = `${animationDuration}s`;
        }
    });
  
    // Gestion de l'accordéon des compétences
    const skillToggles = document.querySelectorAll('.skill-toggle');
    skillToggles.forEach((toggle) => {
        toggle.addEventListener('click', function () {
            this.classList.toggle('active');
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            if (content.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + 'px';
            } else {
                content.style.maxHeight = 0;
            }
            skillToggles.forEach((otherToggle) => {
                if (otherToggle !== this) {
                    otherToggle.classList.remove('active');
                    const otherContent = otherToggle.nextElementSibling;
                    otherContent.classList.remove('active');
                    otherContent.style.maxHeight = 0;
                }
            });
        });
    });
  
    // Animation du texte de la machine à écrire
    const typewriterText = `🔍 Vous recherchez un collaborateur à intégrer durablement en MOA...`;
    const typewriterElement = document.getElementById('typewriter-text');
    let i = 0;
    function typeWriter() {
        if (i < typewriterText.length) {
            typewriterElement.innerHTML = typewriterText.substring(0, i + 1) + '<span class="typewriter-cursor"></span>';
            i++;
            setTimeout(typeWriter, 30);
        } else {
            typewriterElement.innerHTML = typewriterText + '<span class="typewriter-cursor"></span>';
        }
    }
    const typeObserver = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    typeWriter();
                    typeObserver.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.1 }
    );
    typeObserver.observe(document.getElementById('call-to-action'));
  
    // Gestion du formulaire de contact
    const form = document.getElementById('contact-form');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        // Collecte des données du formulaire
        const formData = new FormData(form);
        const jsonData = {};
        formData.forEach((value, key) => {
            jsonData[key] = value;
        });
  
        // Envoi des données en JSON via une requête POST
        fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jsonData),
        })
        .then(response => response.json())
        .then(data => {
            console.log('Succès:', data);
            alert('Merci pour votre message. Nous vous contacterons bientôt.');
        })
        .catch((error) => {
            console.error('Erreur:', error);
            alert('Une erreur s\'est produite. Veuillez réessayer.');
        });
  
        form.reset();
    });
  
    // Gestion des boutons "En savoir plus"
    const buttons = document.querySelectorAll('.details-button');
    buttons.forEach((button) => {
        button.addEventListener('click', function () {
            const detailsId = this.getAttribute('data-details');
            const detailsContent = document.getElementById(detailsId);
            if (detailsContent.style.display === 'block') {
                detailsContent.style.display = 'none';
            } else {
                detailsContent.style.display = 'block';
            }
        });
    });
  });
  