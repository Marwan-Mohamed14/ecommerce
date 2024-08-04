
function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
    document.getElementById(sectionId).classList.add('active');
    if (sectionId === 'manage') {
        document.querySelector('.button-container').style.display = 'flex';
    } else {
        document.querySelector('.button-container').style.display = 'none';
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    var icon = document.getElementById('icon'); 
    if (document.body.classList.contains('dark-mode')) {
        icon.src = '/Pictures/sun_120349 (1).png'; 
        icon.alt = 'Light Mode Icon'; 
    } else {
        icon.src = '/Pictures/moon_icon-icons.com_48261 (1).png'; 
        icon.alt = 'Dark Mode Icon'; 
    }
}

document.addEventListener('DOMContentLoaded', function() {
    showSection('home');
    document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

    // Add event listeners for add buttons
    document.querySelectorAll('.add-button').forEach(button => {
        button.addEventListener('click', function() {
            showModal(button.dataset.type);
        });
    });
    document.querySelectorAll('.view-button').forEach(button => {
        button.addEventListener('click', function() {
            showModal(button.dataset.type);
        });
    });
    document.querySelectorAll('.remove-button').forEach(button => {
        button.addEventListener('click', function() {
            showModal(button.dataset.type);
        });
    });
    document.querySelectorAll('.edit-button').forEach(button => {
        button.addEventListener('click', function() {
            showModal(button.dataset.type);
        });
    });
    // Close modal event listener
    document.getElementById('modalCloseButton').addEventListener('click', closeModal);
    document.getElementById('modalCancelButton').addEventListener('click', closeModal);
    document.getElementById('modalSaveButton').addEventListener('click', saveData);
});

// function showModal(type) {
//     const modalTitle = document.getElementById('modalTitle');
//     const modalForm = document.getElementById('modalForm');
//     modalForm.innerHTML = '';

//     switch (type) {
//         case 'user':
//             modalTitle.innerText = 'Add User';
//             modalForm.innerHTML = `
//                 <label for="modalUsername">Username:</label>
//                 <input type="text" id="modalUsername" name="username" required>
//                 <label for="modalEmail">Email:</label>
//                 <input type="email" id="modalEmail" name="email" required>
//                 <label for="modalPassword">Password:</label>
//                 <input type="password" id="modalPassword" name="password" required>
//                 <label for="modalImage">Image:</label>
//                 <input type="file" id="modalImage" name="image">
//             `;
//             break;
//         case 'addProduct':
//             modalTitle.innerText = 'Add Product';
//             modalForm.innerHTML = `
//                 <div>
//                     <label for="name">Product Name:</label>
//                     <input type="text" id="name" name="name" required>
//                 </div>
//                 <div>
//                     <label for="product-id">Product ID:</label>
//                     <input type="text" id="product-id" name="product-id" required>
//                 </div>
//                 <div>
//                     <label for="description">Description:</label>
//                     <textarea id="description" name="description" required></textarea>
//                 </div>
//                 <div>
//                     <label for="price">Price:</label>
//                     <input type="text" id="price" name="price" required>
//                 </div>
//                 <div>
//                     <label for="image">Product Image:</label>
//                     <input type="file" id="image" name="image" accept="image/*" required>
//                 </div>
//                 <div id="image-preview">
//                     <!-- Image preview will be displayed here -->
//                 </div>
//                 <button type="submit">Add Product</button>
//             `;
//             break;
//         case 'viewProduct':
//             modalTitle.innerText = 'View Product';
//             modalForm.innerHTML = `
//                 <main>
//                     <p>List of products will be displayed here.</p>
//                     <section id="product-list">
//                         <h2>Products</h2>
//                         <div id="products"></div>
//                     </section>
//                 </main>
//             `;
//             break;
//         case 'removeProduct':
//             modalTitle.innerText = 'Remove Product';
//             modalForm.innerHTML = `
//                 <label for="product-id">Product ID:</label>
//                 <input type="text" id="product-id" name="product-id" required>
//                 <label for="product-name">Product Name:</label>
//                 <input type="text" id="product-name" name="product-name" required>
//                 <button type="submit">Remove Product</button>
//             `;
//             break;
//             case 'editProduct':
//                 modalTitle.innerText = 'Edit Product';
//                 modalForm.innerHTML = `
//                     <label for="edit-product-id">Product ID:</label>
//                     <input type="text" id="edit-product-id" name="product-id" required>
//                     <label for="edit-product-name">Product Name:</label>
//                     <input type="text" id="edit-product-name" name="name" required>
//                     <label for="edit-product-description">Description:</label>
//                     <textarea id="edit-product-description" name="description" required></textarea>
//                     <label for="edit-product-price">Price:</label>
//                     <input type="text" id="edit-product-price" name="price" required>
//                     <label for="edit-product-image">Product Image:</label>
//                     <input type="file" id="edit-product-image" name="image" accept="image/*">
//                     <button type="submit">Save Changes</button>
//                 `;
//                 break;
//     }

//     document.getElementById('modal').style.display = 'block';
// }

function showModal(type) {
    const modalTitle = document.getElementById('modalTitle');
    const modalForm = document.getElementById('modalForm');
    modalForm.innerHTML = '';

    switch (type) {
        case 'user':
            modalTitle.innerText = 'Add User';
            modalForm.innerHTML = `
                <label for="modalUsername">Username:</label>
                <input type="text" id="modalUsername" name="username" required>
                <label for="modalEmail">Email:</label>
                <input type="email" id="modalEmail" name="email" required>
                <label for="modalPassword">Password:</label>
                <input type="password" id="modalPassword" name="password" required>
                <label for="modalImage">Image:</label>
                <input type="file" id="modalImage" name="image">
            `;
            break;
        case 'addProduct':
            modalTitle.innerText = 'Add Product';
            modalForm.innerHTML = `
                <div>
                    <label for="name">Product Name:</label>
                    <input type="text" id="name" name="name" required>
                </div>
                <div>
                    <label for="product-id">Product ID:</label>
                    <input type="text" id="product-id" name="product-id" required>
                </div>
                <div>
                    <label for="description">Description:</label>
                    <textarea id="description" name="description" required></textarea>
                </div>
                <div>
                    <label for="price">Price:</label>
                    <input type="text" id="price" name="price" required>
                </div>
                <div>
                    <label for="category">Category:</label>
                    <select id="category" name="category" required>
                        <option value="electronics">Electronics</option>
                        <option value="clothing">Clothing</option>
                        <option value="home">Home</option>
                        <option value="books">Books</option>
                        <option value="toys">Toys</option>
                        <!-- Add more categories as needed -->
                    </select>
                </div>
                <div>
                    <label for="image">Product Image:</label>
                    <input type="file" id="image" name="image" accept="image/*" required>
                </div>
                <div id="image-preview">
                    <!-- Image preview will be displayed here -->
                </div>
                <button type="submit">Add Product</button>
            `;
            break;
        case 'viewProduct':
            modalTitle.innerText = 'View Product';
            modalForm.innerHTML = `
                <main>
                    <p>List of products will be displayed here.</p>
                    <section id="product-list">
                        <h2>Products</h2>
                        <div id="products"></div>
                    </section>
                </main>
            `;
            break;
        case 'removeProduct':
            modalTitle.innerText = 'Remove Product';
            modalForm.innerHTML = `
                <label for="remove-product-id">Product ID:</label>
                <input type="text" id="remove-product-id" name="product-id" required>
                <label for="remove-product-name">Product Name:</label>
                <input type="text" id="remove-product-name" name="product-name" required>
                <button type="submit">Remove Product</button>
            `;
            break;
        case 'editProduct':
            modalTitle.innerText = 'Edit Product';
            modalForm.innerHTML = `
                <label for="edit-product-id">Product ID:</label>
                <input type="text" id="edit-product-id" name="product-id" required>
                <button type="button" onclick="loadProductDetails()">Load Product</button>
                <div id="edit-product-details" style="display:none;">
                    <label for="edit-product-name">Product Name:</label>
                    <input type="text" id="edit-product-name" name="name" required>
                    <label for="edit-product-description">Description:</label>
                    <textarea id="edit-product-description" name="description" required></textarea>
                    <label for="edit-product-price">Price:</label>
                    <input type="text" id="edit-product-price" name="price" required>
                    <label for="edit-product-discount">Discount:</label>
                    <input type="text" id="edit-product-discount" name="discount">
                    <label for="edit-product-image">Product Image:</label>
                    <input type="file" id="edit-product-image" name="image" accept="image/*">
                    <button type="submit">Save Changes</button>
                </div>
            `;
            break;
    }

    document.getElementById('modal').style.display = 'block';
}

function loadProductDetails() {
    const productId = document.getElementById('edit-product-id').value;
    // Simulate loading product details
    const product = {
        name: 'Sample Product',
        description: 'This is a sample product description.',
        price: '29.99',
        discount: '5.00',
        image: 'sample-image.jpg'
    };

    if (product) {
        document.getElementById('edit-product-name').value = product.name;
        document.getElementById('edit-product-description').value = product.description;
        document.getElementById('edit-product-price').value = product.price;
        document.getElementById('edit-product-discount').value = product.discount;
        document.getElementById('edit-product-details').style.display = 'block';
    } else {
        alert('Product not found.');
    }
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function saveData() {
    const formData = new FormData(document.getElementById('modalForm'));
    // Implement your data saving logic here
    closeModal();
}
