function showScreen(screenId) {
    // Скрыть все экраны
    const screens = document.querySelectorAll('.screen');
    screens.forEach(screen => {
        screen.classList.remove('active');
    });
    
    // Показать выбранный экран
    const activeScreen = document.getElementById(screenId);
    activeScreen.classList.add('active');
}

// Показываем первый экран при загрузке
document.addEventListener('DOMContentLoaded', function() {
    showScreen('screen1');
});