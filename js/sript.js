document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('.nav-link');
  const sections = document.querySelectorAll('.content-section');

  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();

      // Troca link ativo
      links.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      // Troca conteúdo visível
      const target = link.getAttribute('data-section');
      sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === target) {
          section.classList.add('active');
        }
      });
    });
  });
});


// Carrossel de Imagens da Galeria
document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = Array.from(track.children);
  const nextBtn = document.getElementById('nextBtn');
  const prevBtn = document.getElementById('prevBtn');
  let currentIndex = 0;

  function updateSlidePosition() {
    const slideWidth = slides[0].getBoundingClientRect().width;
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
  }

  nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlidePosition();
  });

  prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlidePosition();
  });

  window.addEventListener('resize', updateSlidePosition);

  updateSlidePosition();
});

// Torna a logo clicável para voltar à seção "Início"
document.querySelector('.logo-completa').addEventListener('click', () => {
 document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById('inicio').classList.add('active');
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector('.nav-link[data-section="inicio"]').classList.add('active');
});
