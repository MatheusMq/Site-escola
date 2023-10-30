const detalhesSection = document.querySelector('.detalhes');
const overlay = document.getElementById('overlay');

// Função para mostrar os detalhes do livro
function exibirDetalhesLivro(index) {
    // Dados dos livros
    const livros = [
        {
            imagem: 'img/Imagens acervo - Copia/1.jpeg',
            titulo: 'Titulo: Cantigas de Adolescer',
            autor: '<strong>Autor:</strong> Elias José',
            sinopse: '<strong>Sinopse:</strong>',
        },
        {
            imagem: 'img/Imagens acervo - Copia/2.jpeg',
            titulo: 'Título: O sitio no descobrimento',
            autor: '<strong>Autor:</strong> Autor 2',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 2',
        },
        {
            imagem: 'img/Imagens acervo - Copia/3.jpeg',
            titulo: 'Título: O dia em que a minha vida mudou',
            autor: '<strong>Autor:</strong> Autor 3',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 3',
        },
        {
            imagem: 'img/Imagens acervo - Copia/4.jpeg',
            titulo: 'Título: Júnior e os biscoitos zumbis',
            autor: '<strong>Autor:</strong> Autor 4',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 4',
        },
        {
            imagem: 'img/Imagens acervo - Copia/5.jpeg',
            titulo: 'Título: Chá das cinco',
            autor: '<strong>Autor:</strong> Autor 5',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 5',
        },
        {
            imagem: 'img/Imagens acervo - Copia/6.jpeg',
            titulo: 'Título: Cantigas para entender o tempo',
            autor: '<strong>Autor:</strong> Autor 6',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 6',
        },
        {
            imagem: 'img/Imagens acervo - Copia/7.jpeg',
            titulo: 'Título: Mensagem para você',
            autor: '<strong>Autor:</strong> Autor 7',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 7',
        },
        {
            imagem: 'img/Imagens acervo - Copia/8.jpeg',
            titulo: 'Título: Confissões de um amigo imaginário',
            autor: '<strong>Autor:</strong> Autor 8',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 8',
        },
        {
            imagem: 'img/Imagens acervo - Copia/9.jpeg',
            titulo: 'Título: Antes do depois',
            autor: '<strong>Autor:</strong> Autor 9',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 9',
        },
        {
            imagem: 'img/Imagens acervo - Copia/10.jpeg',
            titulo: 'Título: Romeu e Julieta',
            autor: '<strong>Autor:</strong> Autor 10',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 10',
        },
        {
            imagem: 'img/Imagens acervo - Copia/11.jpeg',
            titulo: 'Título: Estrelas Tortas',
            autor: '<strong>Autor:</strong> Autor 11',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 11',
        },
        {
            imagem: 'img/Imagens acervo - Copia/12.jpeg',
            titulo: 'Título: Era uma vez Dom Quixote',
            autor: '<strong>Autor:</strong> Autor 12',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 12',
        },
        {
            imagem: 'img/Imagens acervo - Copia/13.jpeg',
            titulo: 'Título: O Gato Xadrez',
            autor: '<strong>Autor:</strong> Autor 13',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 13',
        },
        {
            imagem: 'img/Imagens acervo - Copia/14.jpeg',
            titulo: 'Título: Biblioteca do Sr. Lemoncello',
            autor: '<strong>Autor:</strong> Autor 14',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 14',
        },
        {
            imagem: 'img/Imagens acervo - Copia/15.jpeg',
            titulo: 'Título: Histórias para Refrescar a Alma',
            autor: '<strong>Autor:</strong> Autor 15',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 15',
        },
        {
            imagem: 'img/Imagens acervo - Copia/16.jpeg',
            titulo: 'Título: Quase Caio',
            autor: '<strong>Autor:</strong> Autor 16',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 16',
        },
        {
            imagem: 'img/Imagens acervo - Copia/17.jpeg',
            titulo: 'Título: Lola e Ervilha',
            autor: '<strong>Autor:</strong> Autor 17',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 17',
        },
        {
            imagem: 'img/Imagens acervo - Copia/18.jpeg',
            titulo: 'Título: Oxente! A Mulher Enterrada Viva',
            autor: '<strong>Autor:</strong> Autor 18',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 18',
        },
        {
            imagem: 'img/Imagens acervo - Copia/19.jpeg',
            titulo: 'Título: Filho de Peixe',
            autor: '<strong>Autor:</strong> Autor 19',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 19',
        },
        {
            imagem: 'img/Imagens acervo - Copia/20.jpeg',
            titulo: 'Título: Pra Ficar com Ela',
            autor: '<strong>Autor:</strong> Autor 20',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 20',
        },
        {
            imagem: 'img/Imagens acervo - Copia/21.jpeg',
            titulo: 'Título: A Caravana do Oriente',
            autor: '<strong>Autor:</strong> Autor 21',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 21',
        },
        {
            imagem: 'img/Imagens acervo - Copia/22.jpeg',
            titulo: 'Título: Confissões de um Vira-lata',
            autor: '<strong>Autor:</strong> Autor 22',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 22',
        },
        {
            imagem: 'img/Imagens acervo - Copia/23.jpeg',
            titulo: 'Título: Cuidado Gato Apaixonado',
            autor: '<strong>Autor:</strong> Autor 23',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 23',
        },
        {
            imagem: 'img/Imagens acervo - Copia/24.jpeg',
            titulo: 'Título: A Cara da Rua',
            autor: '<strong>Autor:</strong> Autor 24',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 24',
        },
        {
            imagem: 'img/Imagens acervo - Copia/25.jpeg',
            titulo: 'Título: O Menino que Caiu no Buraco',
            autor: '<strong>Autor:</strong> Autor 25',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 25',
        },
        {
            imagem: 'img/Imagens acervo - Copia/26.jpeg',
            titulo: 'Título: Informe do Planeta Azul e Outras Histórias',
            autor: '<strong>Autor:</strong> Autor 26',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 26',
        },
        {
            imagem: 'img/Imagens acervo - Copia/27.jpeg',
            titulo: 'Título: O Menino Nelson Mandela',
            autor: '<strong>Autor:</strong> Autor 27',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 27',
        },
        {
            imagem: 'img/Imagens acervo - Copia/28.jpeg',
            titulo: 'Título: Fuja Coelhinho Fuja',
            autor: '<strong>Autor:</strong> Autor 28',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 28',
        },
        {
            imagem: 'img/Imagens acervo - Copia/29.jpeg',
            titulo: 'Título: Histórias de Antigamente',
            autor: '<strong>Autor:</strong> Autor 29',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 29',
        },
        {
            imagem: 'img/Imagens acervo - Copia/30.jpeg',
            titulo: 'Título: Minha Vida Não é Cor-de-Rosa',
            autor: '<strong>Autor:</strong> Autor 30',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 30',
        },
        {
            imagem: 'img/Imagens acervo - Copia/31.jpeg',
            titulo: 'Título: Cinco Crianças e um Segredo',
            autor: '<strong>Autor:</strong> Autor 31',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 31',
        },
        {
            imagem: 'img/Imagens acervo - Copia/32.jpeg',
            titulo: 'Título: Borboletas na Chuva',
            autor: '<strong>Autor:</strong> Autor 32',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 32',
        },
        {
            imagem: 'img/Imagens acervo - Copia/33.jpeg',
            titulo: 'Título: Minha Querida Assombração',
            autor: '<strong>Autor:</strong> Autor 33',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 33',
        },
        {
            imagem: 'img/Imagens acervo - Copia/34.jpeg',
            titulo: 'Título: Pedro Bandeira Os Karas a Droga do Amor',
            autor: '<strong>Autor:</strong> Autor 34',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 34',
        },
        {
            imagem: 'img/Imagens acervo - Copia/35.jpeg',
            titulo: 'Título: Esperos, Espertinhos, Espertalhões',
            autor: '<strong>Autor:</strong> Autor 35',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 35',
        },
        {
            imagem: 'img/Imagens acervo - Copia/36.jpeg',
            titulo: 'Título: As Palavras Voam',
            autor: '<strong>Autor:</strong> Autor 36',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 36',
        },
        {
            imagem: 'img/Imagens acervo - Copia/37.jpeg',
            titulo: 'Título: Rita Varwel à Procura do Rusdimepe',
            autor: '<strong>Autor:</strong> Autor 37',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 37',
        },
        {
            imagem: 'img/Imagens acervo - Copia/38.jpeg',
            titulo: 'Título: A Esperança é uma Torta de Maçã',
            autor: '<strong>Autor:</strong> Autor 38',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 38',
        },
        {
            imagem: 'img/Imagens acervo - Copia/39.jpeg',
            titulo: 'Título: Berimbau e Outros Poemas',
            autor: '<strong>Autor:</strong> Autor 39',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 39',
        },
        {
            imagem: 'img/Imagens acervo - Copia/40.jpeg',
            titulo: 'Título: Uma Mulher Chamada Guitarra',
            autor: '<strong>Autor:</strong> Autor 40',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 40',
        },
        {
            imagem: 'img/Imagens acervo - Copia/41.jpeg',
            titulo: 'Título: Nas Pernas da Mentira',
            autor: '<strong>Autor:</strong> Autor 41',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 41',
        },
        {
            imagem: 'img/Imagens acervo - Copia/42.jpeg',
            titulo: 'Título: Sabino o Menino no Espelho',
            autor: '<strong>Autor:</strong> Autor 42',
            sinopse: '<strong>Sinopse:</strong> Outra sinopse 42',
        },
        {
            imagem: 'img/Imagens acervo - Copia/43.jpeg',
            titulo: 'Macapacarana',
            autor: '<strong>Autor:</strong> Autor 43',
            sinopse: '<strong>Sinopse:</strong> Sinopse 43',
        },
        {
            imagem: 'img/Imagens acervo - Copia/44.jpeg',
            titulo: 'Dani das Nuvens',
            autor: '<strong>Autor:</strong> Autor 44',
            sinopse: '<strong>Sinopse:</strong> Sinopse 44',
        },
        {
            imagem: 'img/Imagens acervo - Copia/45.jpeg',
            titulo: 'O Menino Negro',
            autor: '<strong>Autor:</strong> Autor 45',
            sinopse: '<strong>Sinopse:</strong> Sinopse 45',
        },
        {
            imagem: 'img/Imagens acervo - Copia/46.jpeg',
            titulo: 'Malasartes Histórias de um Camarada Chamado Pedro',
            autor: '<strong>Autor:</strong> Autor 46',
            sinopse: '<strong>Sinopse:</strong> Sinopse 46',
        },
        {
            imagem: 'img/Imagens acervo - Copia/47.jpeg',
            titulo: 'O mistério do 5 estrelas',
            autor: '<strong>Autor:</strong> Autor 47',
            sinopse: '<strong>Sinopse:</strong> Sinopse 47',
        },
        {
            imagem: 'img/Imagens acervo - Copia/48.jpeg',
            titulo: 'Caixa de desejos',
            autor: '<strong>Autor:</strong> Autor 48',
            sinopse: '<strong>Sinopse:</strong> Sinopse 48',
        },
        {
            imagem: 'img/Imagens acervo - Copia/49.jpeg',
            titulo: 'A árvore que dava dinheiro',
            autor: '<strong>Autor:</strong> Autor 49',
            sinopse: '<strong>Sinopse:</strong> Sinopse 49',
        }
    ];

    const imagemLivro = document.getElementById('imagemLivro');
    const tituloLivro = document.getElementById('tituloLivro');
    const autorLivro = document.getElementById('autorLivro');
    const sinopseLivro = document.getElementById('sinopseLivro');

    imagemLivro.src = livros[index].imagem;
    tituloLivro.innerHTML = livros[index].titulo;
    autorLivro.innerHTML = livros[index].autor;
    sinopseLivro.innerHTML = livros[index].sinopse;

    // Adicione uma classe ao elemento body para impedir a rolagem
    document.body.classList.add('noscroll');
    overlay.style.display = 'block';
    detalhesSection.style.display = 'block';
}

// Adicione um evento de clique a cada elemento da lista de livros
const listaLivros = document.querySelectorAll('.card-livro');
listaLivros.forEach((livro, index) => {
    livro.addEventListener('click', () => {
        exibirDetalhesLivro(index);
    });
});

const fecharDetalhesBotao = document.querySelector('#fecharDetalhes');
fecharDetalhesBotao.addEventListener('click', () => {
    detalhesSection.style.display = 'none';

    // Remova a classe do elemento body para permitir a rolagem novamente
    document.body.classList.remove('noscroll');
    overlay.style.display = 'none';
});     