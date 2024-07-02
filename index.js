// Seleciona a imagem pelo ID
const imagem = document.getElementById('eye-off');

// Adiciona um event listener para o evento de clique na imagem
imagem.addEventListener('click', function() {
    // Seleciona o elemento a ser removido pelo ID
    const img_remove = document.getElementById('img_remove');
    
    // Verifica se o elemento existe antes de tentar removê-lo
    if (img_remove) {
        img_remove.remove(); // Remove o elemento
    }
});

