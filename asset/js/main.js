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
      newFavicon.href = "../../asset/pic/up.svg";
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
  } else {
    htmlElement.style.colorScheme = "light";
    toggleButton.textContent = "🌑";
  }
}
