document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('jokeModal');
    const closeButton = document.getElementById('closeModal');

    // Ticket counter animation
    const ticketCount = document.getElementById('ticketCount');
    let currentCount = 150;
    let isCounting = false;

    function animateCount() {
        if (currentCount > 0) {
            currentCount -= Math.floor(Math.random() * 3) + 1;
            if (currentCount < 0) currentCount = 0;
            ticketCount.textContent = currentCount;
            
            // Add a small delay between updates
            setTimeout(animateCount, Math.random() * 2000 + 1000);
        }
    }

    // Start counting when the page loads
    setTimeout(animateCount, 2000);

    // Global function for the onclick event
    window.showModal = function() {
        modal.style.display = 'flex';
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.opacity = '1';
            modal.classList.add('show');
        }, 10);
    };

    closeButton.addEventListener('click', () => {
        modal.classList.remove('show');
        modal.style.opacity = '0';
        setTimeout(() => {
            modal.style.display = 'none';
        }, 300);
    });

    // Close modal when clicking outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            modal.style.opacity = '0';
            setTimeout(() => {
                modal.style.display = 'none';
            }, 300);
        }
    });

    // Add hover effect to footballs
    const footballs = document.querySelectorAll('.football');
    footballs.forEach(football => {
        football.addEventListener('mouseover', () => {
            football.style.transform = 'scale(1.1)';
            football.style.transition = 'transform 0.3s ease';
        });
        
        football.addEventListener('mouseout', () => {
            football.style.transform = 'scale(1)';
        });
    });
}); 