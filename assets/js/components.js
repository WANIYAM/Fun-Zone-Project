// footer

function loadComponent(elementId, filePath) {
    fetch(filePath)
        .then(response => response.text())
        .then(data => {
            document.getElementById(elementId).innerHTML = data;
        })
        .catch(error => console.error('Error loading component:', error));
}

Promise.all([
    // loadComponent('navbar', 'components/navbar.html'),
    loadComponent('reviews', 'components/reviews.html'),
    loadComponent('brands', 'components/brands.html'),
    loadComponent('footer', 'components/footer.html')
]);