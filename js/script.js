let currentScreen = 1;
const screenCache = new Map();

const screens = {
    1: 'images/screen1.svg',
    2: 'images/screen2.svg'
};

async function loadScreen(screenNumber) {
    if (screenCache.has(screenNumber)) {
        return screenCache.get(screenNumber);
    }
    
    try {
        const response = await fetch(screens[screenNumber]);
        const svgText = await response.text();
        screenCache.set(screenNumber, svgText);
        return svgText;
    } catch (error) {
        console.error('Ошибка загрузки:', error);
        return null;
    }
}

async function switchScreen() {
    const nextScreen = currentScreen === 1 ? 2 : 1;
    await showScreen(nextScreen);
}

async function showScreen(screenNumber) {
    const container = document.getElementById('screen-container');
    const svgContent = await loadScreen(screenNumber);
    
    if (!svgContent) return;
    
    // Быстрая замена контента
    container.innerHTML = svgContent;
    currentScreen = screenNumber;
    
    // Назначаем обработчик на кнопку
    const button = container.querySelector('[id="Button On/Off"]');
    if (button) {
        button.style.cursor = 'pointer';
        button.addEventListener('click', switchScreen);
    }
}

// Предзагружаем оба экрана при старте
document.addEventListener('DOMContentLoaded', async () => {
    await Promise.all([loadScreen(1), loadScreen(2)]);
    await showScreen(1);
});
