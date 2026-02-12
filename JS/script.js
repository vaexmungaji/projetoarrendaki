let btnMenu = document.getElementById('btnMenu');
let menuOverlay = document.getElementById('menuOverlay');
let btnClose = document.getElementById('btnClose');

btnClose.addEventListener('click', function() {
        menuOverlay.style.display = 'none';
});

btnMenu.addEventListener('click', function() {
        menuOverlay.style.display = 'block';
});