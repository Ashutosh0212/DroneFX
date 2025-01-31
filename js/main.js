// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!mobileMenuButton?.contains(e.target) && !mobileMenu?.contains(e.target)) {
            mobileMenu?.classList.add('hidden');
        }
    });

    // Handle contact form submission
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(contactForm);
            const formProps = Object.fromEntries(formData);

            // Here you would typically send the form data to a server
            // For now, we'll just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            contactForm.reset();
        });
    }

    // Handle simulation form submission
    const simulationForm = document.getElementById('simulation-form');
    if (simulationForm) {
        simulationForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const formData = new FormData(simulationForm);
            const file = formData.get('video');
            const droneCount = formData.get('droneCount');

            if (!file) {
                alert('Please select a video file.');
                return;
            }

            if (!droneCount || droneCount < 1) {
                alert('Please enter a valid number of drones (minimum 1).');
                return;
            }

            // Here you would typically handle the video processing
            // For now, we'll just show a success message
            alert('Thank you! Your simulation request has been received.');
            simulationForm.reset();
        });
    }
}); 