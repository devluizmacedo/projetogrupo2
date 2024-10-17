const productForm = document.getElementById('productForm');
const productNameInput = document.getElementById('productName');
const productQuantityInput = document.getElementById('productQuantity');
const productList = document.getElementById('productList');

function addProduct(event) {
    event.preventDefault();

    const productName = productNameInput.value.trim();
    const productQuantity = parseInt(productQuantityInput.value);

    if (productName === '' || productQuantity <= 0) {
        alert('Por favor, insira um nome válido e uma quantidade positiva.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = `${productName} - Quantidade: ${productQuantity}`;
    

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Excluir';
    removeButton.onclick = () => {
        productList.removeChild(li);
    };

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => {
        productNameInput.value = productName;
        productQuantityInput.value = productQuantity;
        productList.removeChild(li);
    };

    li.appendChild(editButton);
    li.appendChild(removeButton);
    productList.appendChild(li);

    productNameInput.value = '';
    productQuantityInput.value = '';
}

productForm.addEventListener('submit', addProduct);
