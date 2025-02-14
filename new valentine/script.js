function animateHeart() {
    const heart = document.querySelector('.heart');
    heart.style.animation = 'none';
    void heart.offsetWidth; // Trigger reflow
    heart.style.animation = 'pulse 2s infinite, gradient 5s ease infinite';
    
    // Добавляем дополнительную анимацию при клике
    heart.classList.add('clicked');
    setTimeout(() => heart.classList.remove('clicked'), 300);
}

document.addEventListener('DOMContentLoaded', function() {
    var audio = document.querySelector('audio');
    if (audio) {
        audio.play().catch(function(err) {
            console.log('Autoplay blocked: ', err);
            // Fallback: wait for a user click to play audio
            document.addEventListener('click', function() {
                audio.play().catch(function(err) {
                    console.error('Failed to play audio on user interaction: ', err);
                });
            }, { once: true });
        });
    }
});