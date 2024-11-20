document.addEventListener("DOMContentLoaded", function () {
  // 创建并插入切换颜色主题按钮
  const toggleColorSchemeButton = document.createElement("button");
  toggleColorSchemeButton.id = "toggle-color-scheme-change";
  toggleColorSchemeButton.title = "切换深色模式/浅色模式";
  toggleColorSchemeButton.className = "common-button";
  toggleColorSchemeButton.textContent = "🌑";
  toggleColorSchemeButton.addEventListener("click", toggleColorSchemeMode);
  document.querySelector("body").appendChild(toggleColorSchemeButton);

  // 创建并插入回到顶端按钮
  const backToTopButton = document.createElement("button");
  backToTopButton.type = "button";
  backToTopButton.id = "backToTop";
  backToTopButton.title = "回到顶端";
  backToTopButton.className = "common-button";
  backToTopButton.textContent = "🔺";
  backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  document.querySelector("body").appendChild(backToTopButton);

  (function () {
    // 检查是否存在已有的favicon链接元素
    var existingFavicon = document.querySelector(
      'link[rel="shortcut icon"], link[rel="icon"]'
    );

    if (!existingFavicon) {
      // 如果不存在，创建并添加新的favicon链接
      var newFavicon = document.createElement("link");
      newFavicon.rel = "shortcut icon";
      newFavicon.href = "../../asset/pic/search.svg";
      newFavicon.type = "image/x-icon";

      document.head.appendChild(newFavicon);
    }
  })();

  // 页面载入时检查color-scheme并更新按钮文字
  (function checkColorSchemeOnLoad() {
    const htmlElement = document.documentElement;
    const computedStyle = window.getComputedStyle(htmlElement);
    // 获取按钮元素
    const toggleButton = document.getElementById("toggle-color-scheme-change");
    let currentColorScheme =
      computedStyle.getPropertyValue("color-scheme") || "light";

    if (currentColorScheme === "light") {
      toggleButton.textContent = "🌑";
    } else {
      toggleButton.textContent = "☀️";
    }
  })();
});

// 切换颜色主题按钮
function toggleColorSchemeMode() {
  const htmlElement = document.documentElement;
  const computedStyle = window.getComputedStyle(htmlElement);
  toggleButton = document.getElementById("toggle-color-scheme-change");

  // 判断当前color-scheme，切换为相反的模式
  let currentColorScheme =
    computedStyle.getPropertyValue("color-scheme") || "light";

  if (currentColorScheme === "light") {
    htmlElement.style.colorScheme = "dark";
    toggleButton.textContent = "☀️";
    setCookie("color-scheme", "dark", 365); // 保存为深色模式
  } else {
    htmlElement.style.colorScheme = "light";
    toggleButton.textContent = "🌑";
    setCookie("color-scheme", "light", 365); // 保存为浅色模式
  }
}

// 设置cookie
function setCookie(name, value, days) {
  const expires = new Date();
  expires.setTime(expires.getTime() + (days * 24 * 60 * 60 * 1000));
  const expiresString = "expires=" + expires.toUTCString();
  document.cookie = name + "=" + value + ";" + expiresString + ";path=/";
}

// 获取cookie
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

// 页面加载时检查cookie并应用颜色模式
(function applyColorSchemeFromCookie() {
  const colorScheme = getCookie("color-scheme");
  if (colorScheme) {
    const htmlElement = document.documentElement;
    const toggleButton = document.getElementById("toggle-color-scheme-change");
    if (colorScheme === "dark") {
      htmlElement.style.colorScheme = "dark";
      toggleButton.textContent = "☀️";
    } else {
      htmlElement.style.colorScheme = "light";
      toggleButton.textContent = "🌑";
    }
  }
})();
