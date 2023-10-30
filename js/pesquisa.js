document.addEventListener("DOMContentLoaded", function () {
    const searchbar = document.getElementById('searchbar');

    searchbar.addEventListener('input', function () {
        searchBooks();
    });
});

function searchBooks() {
    const input = document.getElementById('searchbar').value.trim().toLowerCase();
    const cardLivros = document.querySelectorAll('.card-livro');

    cardLivros.forEach(cardLivro => {
        const tituloLivro = cardLivro.querySelector('.titulo-livro').textContent.trim().toLowerCase();
        if (tituloLivro.includes(input)) {
            cardLivro.style.display = "block";
        } else {
            cardLivro.style.display = "none";
        }
    });
}
