document.addEventListener("DOMContentLoaded", function () {
    // 页面载入时检查color-scheme并更新按钮文字
    (function checkColorSchemeOnLoad() {
        const htmlElement = document.documentElement;
        const computedStyle = window.getComputedStyle(htmlElement);
        // 获取按钮元素
        const toggleButton = document.getElementById('toggle-color-scheme-change');
        let currentColorScheme = computedStyle.getPropertyValue('color-scheme') || 'light';

        if (currentColorScheme === 'light') {
            toggleButton.textContent = '🌑';
        } else {
            toggleButton.textContent = '☀️';
        }
    })();
});

// 切换颜色主题按钮
function toggleColorSchemeMode() {
    const htmlElement = document.documentElement;
    const computedStyle = window.getComputedStyle(htmlElement);
    toggleButton = document.getElementById('toggle-color-scheme-change');

    // 判断当前color-scheme，切换为相反的模式
    let currentColorScheme = computedStyle.getPropertyValue('color-scheme') || 'light';

    if (currentColorScheme === 'light') {
        htmlElement.style.colorScheme = 'dark';
        toggleButton.textContent = '☀️';
    } else {
        htmlElement.style.colorScheme = 'light';
        toggleButton.textContent = '🌑';
    }
}


