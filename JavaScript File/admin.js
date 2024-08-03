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
});