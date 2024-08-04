// function showSection(sectionId) {
//     document.querySelectorAll('.content-section').forEach(section => section.classList.remove('active'));
//     document.getElementById(sectionId).classList.add('active');
//     if (sectionId === 'manage') {
//         document.querySelector('.button-container').style.display = 'flex';
//     } else {
//         document.querySelector('.button-container').style.display = 'none';
//     }
// }

// function toggleDarkMode() {
//     document.body.classList.toggle('dark-mode');

//     var icon = document.getElementById('icon'); 
//     if (document.body.classList.contains('dark-mode')) {
//         icon.src = '/Pictures/sun_120349 (1).png'; 
//         icon.alt = 'Light Mode Icon'; 
//     } else {
//         icon.src = '/Pictures/moon_icon-icons.com_48261 (1).png'; 
//         icon.alt = 'Dark Mode Icon'; 
//     }
// }

// document.addEventListener('DOMContentLoaded', function() {
//     showSection('home');
//     document.getElementById('darkModeToggle').addEventListener('click', toggleDarkMode);

//     // Add event listeners for add buttons
//     document.querySelectorAll('.add-button').forEach(button => {
//         button.addEventListener('click', function() {
//             showModal(button.innerText.split(' ')[1].toLowerCase());
//         });
//     });
//     document.querySelectorAll('.view-button').forEach(button => {
//         button.addEventListener('click', function() {
//             showModal(button.innerText.split(' ')[1].toLowerCase());
//         });
//     });
//     document.querySelectorAll('.remove-button').forEach(button => {
//         button.addEventListener('click', function() {
//             showModal(button.innerText.split(' ')[1].toLowerCase());
//         });
//     });

//     // Close modal event listener
//     document.getElementById('modalCloseButton').addEventListener('click', closeModal);
//     document.getElementById('modalCancelButton').addEventListener('click', closeModal);
//     document.getElementById('modalSaveButton').addEventListener('click', saveData);
// });

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
//         case 'product':
//             modalTitle.innerText = 'Add Product';
//             modalForm.innerHTML = `
//                           <div>
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
          
//         `;

//         break;
//         case 'product':
//             modalTitle.innerText = 'View Product';
//             modalForm.innerHTML = `
//                           <main>
//         <p>List of products will be displayed here.</p>
//         <section id="product-list">
//             <h2>Products</h2>
//             <div id="products"></div>
//         </section>
//     </main>
          
//         `;
//         break;
//         case 'product':
//             modalTitle.innerText = 'Remove Product';
//             modalForm.innerHTML = `
//               <label for="product-id">Product ID:</label>
//             <input type="text" id="product-id" name="product-id" required>
            
//             <label for="product-name">Product Name:</label>
//             <input type="text" id="product-name" name="product-name" required>

//             <button type="submit">Remove Product</button>
      
          
//         `;
//     }

//     document.getElementById('modal').style.display = 'block';
// }

// function closeModal() {
//     document.getElementById('modal').style.display = 'none';
// }

// function saveData() {
//     const formData = new FormData(document.getElementById('modalForm'));

 

//     closeModal();
// }


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

    // Close modal event listener
    document.getElementById('modalCloseButton').addEventListener('click', closeModal);
    document.getElementById('modalCancelButton').addEventListener('click', closeModal);
    document.getElementById('modalSaveButton').addEventListener('click', saveData);
});

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
                <label for="product-id">Product ID:</label>
                <input type="text" id="product-id" name="product-id" required>
                <label for="product-name">Product Name:</label>
                <input type="text" id="product-name" name="product-name" required>
                <button type="submit">Remove Product</button>
            `;
            break;
    }

    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}

function saveData() {
    const formData = new FormData(document.getElementById('modalForm'));
    // Implement your data saving logic here
    closeModal();
}
