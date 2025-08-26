// Array com os links de todas as imagens e do GIF
const sources = [
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjTs6s-IkRgfwEVaKbWEiOJo4nfw6L943h0_LFs1vYzVRCEd_DCVn72WP2D9rgfFlAXPztdOl56WQqiWY0Ti0xGCrgVVmXKUjbb4KNB2OeGZLcndqYqYbbWPgeVnRYdLRHdbglutgjnrs4/s400/bola_panico_01.jpg",
    "https://portalatualidade.com.br/images/noticias/3800/06032018104442_bola.jpg",
    "https://f.i.uol.com.br/agora/images/11108690.jpeg",
    "https://veja.abril.com.br/wp-content/uploads/2018/03/entretenimento-brasil-bola-marcos-chiesa-20150209-0001.jpg?crop=1&resize=1212,909",
    "https://ocemiterio.wordpress.com/wp-content/uploads/2010/05/bolapanico1.png?w=252&h=300",
    "https://imagem.natelinha.uol.com.br/original/marcoschiesa-bola-panico_e5525fc456c4680fff6cfaa98a348ccb1fec3a5a.jpeg",
    "https://media.tenor.com/t8Td3UfeuqoAAAAC/bola-panico-na-tv-panico-avaémemo.gif"
];

// Pega o container do HTML onde as imagens serão adicionadas
const container = document.getElementById('animation-container');

/**
 * Função principal que cria e anima uma imagem na tela.
 */
function showRandomImage() {
    // 1. Cria um novo elemento de imagem
    const img = document.createElement('img');
    
    // 2. Escolhe um link aleatório do nosso array
    const randomSource = sources[Math.floor(Math.random() * sources.length)];
    img.src = randomSource;

    // 3. Define um tamanho aleatório para a imagem
    const randomSize = Math.random() * (400 - 150) + 150; // Largura entre 150px e 400px
    img.style.width = `${randomSize}px`;
    img.style.height = 'auto'; // Altura se ajusta para não distorcer

    // 4. Calcula uma posição aleatória na tela
    // Usamos a largura/altura da janela menos o tamanho da imagem para garantir que ela apareça inteira
    const maxTop = window.innerHeight - randomSize;
    const maxLeft = window.innerWidth - randomSize;
    img.style.top = `${Math.random() * maxTop}px`;
    img.style.left = `${Math.random() * maxLeft}px`;

    // 5. Adiciona a imagem ao container (ainda invisível)
    container.appendChild(img);

    // --- Ciclo de Animação ---

    // 6. Fade In: Adiciona a classe 'visible' para a imagem aparecer
    // Usamos um pequeno timeout para garantir que o navegador aplique o estilo inicial antes de animar
    setTimeout(() => {
        img.classList.add('visible');
    }, 100);

    // 7. Fade Out: Remove a classe 'visible' depois de um tempo para a imagem desaparecer
    // A imagem ficará visível por 3 segundos (3000 ms)
    setTimeout(() => {
        img.classList.remove('visible');
    }, 3000);

    // 8. Limpeza: Remove a imagem do HTML depois que a animação de fade out terminar
    // (3000ms visível + 1500ms da animação de fade out = 4500ms)
    setTimeout(() => {
        img.remove();
    }, 4500);
}

/**
 * Função que agenda a próxima aparição de uma imagem em um intervalo de tempo aleatório.
 */
function scheduleNextImage() {
    // Chama a função para mostrar uma imagem imediatamente
    showRandomImage();

const randomInterval = Math.random() * 1000;
    
    // Agenda a próxima chamada a esta mesma função, criando um loop infinito
    setTimeout(scheduleNextImage, randomInterval);
}

// Inicia o ciclo de animação!
scheduleNextImage();