function handleScroll() {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const halfWindowHeight = windowHeight / 2;

  const backToTopButton = document.getElementById("backToTop");
  if (scrollPosition > halfWindowHeight) {
    backToTopButton.classList.remove("hidden");
  } else {
    backToTopButton.classList.add("hidden");
  }
}

// 当页面加载完成时，初始化按钮状态
document.addEventListener("DOMContentLoaded", () => {
  handleScroll();
});

// 监听滚动事件，实时更新按钮状态
window.addEventListener("scroll", handleScroll);
