document.getElementById('toggle-theme').addEventListener('click', function() {
    document.body.classList.toggle('dark-mode');
  });
  
  document.getElementById('language-select').addEventListener('change', function(event) {
    const lang = event.target.value;
    if (lang === 'en') {
      document.title = "José Ángel Castro González Resume";
      document.querySelector('h1').innerText = "José Ángel Castro González";
      document.querySelector('h3').innerText = "Computer Systems Engineer";
      document.querySelector('#about p').innerText = "Computer Systems Engineer focused on web development. I am a proactive person, a team player, and dedicated to my work. Always looking for new challenges in my personal life and professional career.";
      document.querySelector('#resume h2').innerText = "Resume";
      document.querySelector('#resume h3').innerText = "Work Experience";
      // Add more translations as needed
    } else {
      document.title = "Currículum de José Ángel Castro González";
      document.querySelector('h1').innerText = "José Ángel Castro González";
      document.querySelector('h3').innerText = "Ingeniero en Sistemas Computacionales";
      document.querySelector('#about p').innerText = "Ingeniero en sistemas computacionales orientado al desarrollo web. Soy una persona proactiva, trabajo en equipo y dedicada a mi trabajo. Siempre busco nuevos desafíos en mi vida personal y carrera profesional.";
      document.querySelector('#resume h2').innerText = "Currículum";
      document.querySelector('#resume h3').innerText = "Experiencia Laboral";
      // Add more translations as needed
    }
  });
  