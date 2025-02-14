function animateHeart() {
    const heart = document.querySelector('.heart');
    heart.style.animation = 'none';
    void heart.offsetWidth; // Trigger reflow
    heart.style.animation = 'pulse 2s infinite, gradient 5s ease infinite';
    
    // Добавляем дополнительную анимацию при клике
    heart.classList.add('clicked');
    setTimeout(() => {
        heart.classList.remove('clicked');
        sendTelegramMessage(); // Отправляем сообщение в Telegram
    }, 300);
}

// Изменяем функцию sendTelegramMessage для отображения сообщения в случайном месте
function sendTelegramMessage() {
    const loveMessage = document.createElement('div');
    loveMessage.textContent = "Я тебя люблю ❤️";
    loveMessage.style.position = "absolute";
    loveMessage.style.fontSize = "24px";
    loveMessage.style.fontWeight = "bold";
    loveMessage.style.color = "#ff0066";
    loveMessage.style.zIndex = "1000";
    
    // Вычисляем случайные координаты так, чтобы сообщение было видно на экране
    const maxX = window.innerWidth - 200; // учитывая ширину сообщения
    const maxY = window.innerHeight - 50; // учитывая высоту сообщения
    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;
    
    loveMessage.style.left = randomX + "px";
    loveMessage.style.top = randomY + "px";
    
    document.body.appendChild(loveMessage);
    
    // Удаляем сообщение через 2 секунды
    setTimeout(() => {
        loveMessage.remove();
    }, 2000);
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