function Product(title, price, description) {
  this.title = title;
  this.price = price;
  this.description = description;
}

function addProduct() {
  // Get entered values
  const title = document.getElementById('title').value;
  const price = document.getElementById('price').value;
  const desc = document.getElementById('description').value;

  // Create Product
  const product = new Product(title, price, desc);

  // Display
  displayProduct(product);
}

function displayProduct(product) {
  // Creating a new div element inside productList
  const productList = document.getElementById('productList');
  const productCard = document.createElement('div');
  productCard.classList.add('productCard');

  // Creating elements for product details
  const title = document.createElement('h2');
  title.textContent = product.title;
  const price = document.createElement('p');
  price.textContent = `Price: $${product.price}`;
  const description = document.createElement('p');
  description.textContent = product.description;

  productCard.appendChild(title);
  productCard.appendChild(price);
  productCard.appendChild(description);

  productList.appendChild(productCard);
}

function resetForm() {
  document.getElementById('title').value = '';
  document.getElementById('price').value = '';
  document.getElementById('description').value = '';
}

document.getElementById('addProductBtn').addEventListener('click', () => {
  document.getElementById('productForm').style.display = 'block';
  resetForm();
});

document.getElementById('saveBtn').addEventListener('click', () => {
  addProduct();
  document.getElementById('productForm').style.display = 'none';
});

document.getElementById('cancelBtn').addEventListener('click', () => {
  document.getElementById('productForm').style.display = 'none';
});
