document.addEventListener('DOMContentLoaded', () => {
    console.log('Eurolegal Consulting website loaded.');

    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            // Simple toggle for demonstration
            // In a real app we'd toggle a class to slide in the menu
            const isFlex = navLinks.style.display === 'flex';
            navLinks.style.display = isFlex ? 'none' : 'flex';
            
            if (!isFlex) {
                navLinks.style.flexDirection = 'column';
                navLinks.style.position = 'absolute';
                navLinks.style.top = '70px';
                navLinks.style.right = '20px';
                navLinks.style.background = '#121212';
                navLinks.style.padding = '20px';
                navLinks.style.borderRadius = '8px';
                navLinks.style.border = '1px solid #333';
            } else {
                 navLinks.style = ''; // Reset
            }
        });
    }
});
