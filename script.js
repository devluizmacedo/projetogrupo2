// Seleciona elementos do DOM
const productForm = document.getElementById('productForm');
const productNameInput = document.getElementById('productName');
const productQuantityInput = document.getElementById('productQuantity');
const productList = document.getElementById('productList');

// Função para adicionar um produto à lista
function addProduct(event) {
    event.preventDefault();

    const productName = productNameInput.value.trim();
    const productQuantity = parseInt(productQuantityInput.value);

    // Validação de dados
    if (productName === '' || productQuantity <= 0) {
        alert('Por favor, insira um nome válido e uma quantidade positiva.');
        return;
    }

    // Cria um novo item de lista
    const li = document.createElement('li');
    li.textContent = `${productName} - Quantidade: ${productQuantity}`;
    
    // Cria um botão de remover
    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remover';
    removeButton.onclick = () => {
        productList.removeChild(li);
    };

    li.appendChild(removeButton);
    productList.appendChild(li);

    // Limpa os campos do formulário
    productNameInput.value = '';
    productQuantityInput.value = '';
}

// Adiciona um evento ao formulário
productForm.addEventListener('submit', addProduct);
