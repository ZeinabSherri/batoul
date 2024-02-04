document.addEventListener('DOMContentLoaded', function () {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form validation example (you can customize this based on your form structure)
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Simple validation example (you can add more sophisticated validation)
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '') {
            alert('Name and Email are required fields.');
            return;
        }

        // If validation passes, you can submit the form or perform other actions
        alert('Form submitted successfully!');
        // You may want to use AJAX to submit the form data asynchronously
    });

    // Drag-and-drop functionality
    const draggableElement = document.getElementById('draggable');
    const dropzone = document.getElementById('dropzone');

    draggableElement.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', 'Drag me!');
    });

    dropzone.addEventListener('dragover', function (e) {
        e.preventDefault();
    });

    dropzone.addEventListener('drop', function (e) {
        e.preventDefault();
        const data = e.dataTransfer.getData('text/plain');
        dropzone.innerText = data;
    });

    // Scroll to top button
    const scrollButton = document.getElementById('scrollToTop');

    window.addEventListener('scroll', function () {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            scrollButton.style.display = 'block';
        } else {
            scrollButton.style.display = 'none';
        }
    });

    scrollButton.addEventListener('click', function () {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});
