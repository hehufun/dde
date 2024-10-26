document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("searchInput");
    const searchResults = document.getElementById("searchResults");

    async function fetchData() {
        try {
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
            resultItem.addEventListener("dblclick", () => {
                const text = resultItem.innerText;
                const textarea = document.createElement("textarea");
                textarea.value = text;
                document.body.appendChild(textarea);
                textarea.select();
                // document.execCommand("copy");
                document.body.removeChild(textarea);
                alert("所选项结果已复制到剪贴板：" + text);
            });
            searchResults.appendChild(resultItem);
        });
    }

    async function search() {
        const keywords = searchInput.value.trim().toLowerCase().split(" ");
        if (keywords == "") {
            searchResults.innerHTML = "<p>请输入关键词进行搜索 ⌨️</p>";
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
});
