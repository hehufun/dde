document.addEventListener("DOMContentLoaded", async function () {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    async function fetchData() {
        try {
            // 尝试从localStorage中获取数据
            const cachedData = localStorage.getItem('dde_ics_data');
            if (cachedData) {
                return JSON.parse(cachedData);
            }

            const response = await fetch("../asset/json/dde_ics.json");
            const data = await response.json();
            const headers = data[0];
            const rows = data.slice(1);
            const objects = rows.map((row) => {
                let obj = {};
                row.forEach((value, index) => {
                    obj[headers[index]] = value;
                });
                return obj;
            });

            // 将数据存储到localStorage中
            localStorage.setItem('dde_ics_data', JSON.stringify(objects));

            return objects;
        } catch (error) {
            console.error("Error loading JSON:", error);
        }
    }

    function displayResults(results) {
        // 清空之前的搜索结果
        searchResults.innerHTML = "";
        // 没结果的提示
        if (results.length === 0) {
            searchResults.innerHTML = "<p>未找到相关结果，请尝试重新输入搜索词</p>";
            return;
        }
        results.forEach((item) => {
            const resultItem = document.createElement("div");
            let displayText = "";

            // 按展示每列的数据
            if (item.dde_ics) displayText += `${item.dde_ics} | `;
            if (item.zh_name) displayText += ` ${item.zh_name} `;
            if (item.name) displayText += ` ${item.name} | 时间范围：`;
            if (item.top_time != null) {
                if (item.top_time == "0") {
                    displayText += "现在";
                } else {
                    displayText += ` ${item.top_time}`;
                }
            }
            if (item.top_time_error) {
                if (item.top_time_error != "-") {
                    displayText += `±${item.top_time_error}Ma`;
                } else if (item.top_time == "0") {
                    displayText += ` `;
                } else {
                    displayText += `Ma`;
                }
            };
            if (item.bottom_time != null) {
                if (item.bottom_time == "0") {
                    displayText += "现在";
                } else {
                    displayText += ` 至 ${item.bottom_time}`;
                }
            }
            if (item.bottom_time_error) {
                if (item.bottom_time_error != "-") {
                    displayText += `±${item.bottom_time_error} Ma<br>`;
                } else if (item.bottom_time == "0") {
                    displayText += ` <br>`;
                } else {
                    displayText += `Ma <br>`;
                }
            }

            // 使用innerHTML以支持HTML格式，如<br>换行
            resultItem.innerHTML = displayText.trim();
            // 添加双击复制功能
            resultItem.addEventListener("dblclick", async () => {
                const text = resultItem.innerText;
                try {
                    await navigator.clipboard.writeText(text);
                    alert("所选项结果已复制到剪贴板：" + text);
                } catch (err) {
                    console.error('Failed to copy text: ', err);
                }
            });
            // 添加触摸屏双击复制功能
            let lastTouchTime = 0;
            resultItem.addEventListener("touchstart", (event) => {
                const currentTime = new Date().getTime();
                if (currentTime - lastTouchTime <= 300) {
                    // 双击事件
                    const text = resultItem.innerText;
                    navigator.clipboard.writeText(text).then(() => {
                        alert("所选项结果已复制到剪贴板：" + text);
                    }).catch((err) => {
                        console.error('Failed to copy text: ', err);
                    });
                }
                lastTouchTime = currentTime;
            });
            searchResults.appendChild(resultItem);
        });
    }

    async function search() {
        const keywords = searchInput.value.trim().toLowerCase().split(" ");
        if (keywords == "") {
            searchResults.innerHTML = "<p>已载入，请输入关键词进行搜索 ⌨️ <br> Just Search</p>";
            return;
        }

        try {
            const data = await fetchData();
            const results = data.filter((item) => {
                return keywords.every(keyword =>
                    (item.dde_ics && item.dde_ics.toLowerCase().includes(keyword)) ||
                    (item.name && item.name.toLowerCase().includes(keyword)) ||
                    (item.zh_name && item.zh_name.toLowerCase().includes(keyword)) ||
                    (item.bottom_time && String(item.bottom_time).toLowerCase().includes(keyword)) ||
                    (item.top_time && String(item.top_time).toLowerCase().includes(keyword))
                );
            });
            displayResults(results);
        } catch (error) {
            console.error("Error during search:", error);
        }
    }

    let isComposing = false;

    searchInput.addEventListener("compositionstart", () => {
        isComposing = true;
    });

    searchInput.addEventListener("compositionend", () => {
        isComposing = false;
        if (!isComposing) {
            search();
        }
    });

    searchInput.addEventListener("input", () => {
        if (!isComposing) {
            search();
        }
    });

    // 页面加载时自动执行搜索
    search();
});
