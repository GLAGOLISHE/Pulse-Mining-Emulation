document.addEventListener('DOMContentLoaded', function() {
    let currentScreen = 1;
    
    // Функция для переключения экранов
    function switchScreen() {
        const screen1 = document.getElementById('screen1');
        const screen2 = document.getElementById('screen2');
        
        if (currentScreen === 1) {
            screen1.classList.remove('active');
            screen2.classList.add('active');
            currentScreen = 2;
        } else {
            screen2.classList.remove('active');
            screen1.classList.add('active');
            currentScreen = 1;
        }
    }
    
    // Обработчик для первого экрана
    const screen1Object = document.querySelector('#screen1 object');
    screen1Object.addEventListener('load', function() {
        const svgDoc = screen1Object.contentDocument;
        const buttonOnOff = svgDoc.getElementById('Button On/Off');
        
        if (buttonOnOff) {
            buttonOnOff.style.cursor = 'pointer';
            buttonOnOff.addEventListener('click', switchScreen);
        }
    });
    
    // Обработчик для второго экрана
    const screen2Object = document.querySelector('#screen2 object');
    screen2Object.addEventListener('load', function() {
        const svgDoc = screen2Object.contentDocument;
        const buttonOnOff = svgDoc.getElementById('Button On/Off');
        
        if (buttonOnOff) {
            buttonOnOff.style.cursor = 'pointer';
            buttonOnOff.addEventListener('click', switchScreen);
        }
    });
});