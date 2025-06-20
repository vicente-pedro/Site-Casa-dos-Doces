document.addEventListener('DOMContentLoaded', () => { // Aguarda todo o conteúdo HTML ser carregado antes de executar
  const links = document.querySelectorAll('.nav-link');  // Seleciona todos os links do menu de navegação
  const sections = document.querySelectorAll('.content-section'); // Seleciona todas as seções do conteúdo

  links.forEach(link => { // Para cada link de navegação
    link.addEventListener('click', e => { // Adiciona um ouvinte de evento de clique
      e.preventDefault(); // Impede o comportamento padrão do link (não recarrega a página)

      // Troca link ativo
      links.forEach(l => l.classList.remove('active')); // Remove a classe 'active' de todos os links (para desmarcar)
      link.classList.add('active'); // Adiciona a classe 'active' no link que foi clicado (destacar ele)

      // Troca conteúdo visível
      const target = link.getAttribute('data-section'); // Pega o valor do atributo 'data-section' para saber qual seção mostrar
      sections.forEach(section => { // Para cada seção de conteúdo
        section.classList.remove('active'); // Remove a classe 'active' (esconde a seção)
        if (section.id === target) { // Se o id da seção for igual ao target do link, adiciona 'active' (mostra a seção)
          section.classList.add('active');
        }
      });
    });
  });
});


// Carrossel de Imagens da Galeria
document.addEventListener('DOMContentLoaded', () => { // Aguarda o carregamento total do DOM
  const track = document.querySelector('.carousel-track'); // Seleciona o container que segura os slides
  const slides = Array.from(track.children); // Cria um array com todos os slides (elementos filhos do track)
  const nextBtn = document.getElementById('nextBtn'); // Seleciona os botões de avançar e voltar do carrossel
  const prevBtn = document.getElementById('prevBtn');
  let currentIndex = 0; // Índice que controla qual slide está visível (começa no 0)

  function updateSlidePosition() {  // Função que atualiza a posição dos slides, movendo o track
    const slideWidth = slides[0].getBoundingClientRect().width; // Pega a largura de um slide
    track.style.transform = `translateX(-${slideWidth * currentIndex}px)`; // Move o track na horizontal, conforme o slide atual
  }

  nextBtn.addEventListener('click', () => { // Quando clica no botão de avançar
    currentIndex = (currentIndex + 1) % slides.length; // Incrementa o índice e volta para 0 se passar do último
    updateSlidePosition(); // Atualiza a posição
  });

  prevBtn.addEventListener('click', () => { // Quando clica no botão de voltar
    currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Decrementa o índice e, se for menor que 0, vai para o último slide
    updateSlidePosition(); // Atualiza a posição
  });

  window.addEventListener('resize', updateSlidePosition); // Faz o carrossel se ajustar automaticamente se a janela for redimensionada

  updateSlidePosition(); // Garante que a posição inicial esteja correta ao carregar
});

// Torna a logo clicável para voltar à seção "Início"
document.querySelector('.logo-completa').addEventListener('click', () => { // Seleciona o bloco da logo

  // Remove a classe 'active' de todas as seções (esconde todas)
 document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  document.getElementById('inicio').classList.add('active');  // Adiciona a classe 'active' na seção "Início" (mostra o Início)
  
  // Remove a classe 'active' de todos os links do menu (desmarca)
  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.remove('active');
  });
  document.querySelector('.nav-link[data-section="inicio"]').classList.add('active'); // Adiciona 'active' no link do menu correspondente ao Início
});
