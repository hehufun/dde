document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('searchInput');
    const searchResults = document.getElementById('searchResults');

    async function fetchData() {
        try {
            const response = await fetch('../asset/json/test.json');
            const data = await response.json();
            const headers = data[0];
            const rows = data.slice(1);
            const objects = rows.map(row => {
                let obj = {};
                row.forEach((value, index) => {
                    obj[headers[index]] = value;
                });
                return obj;
            });
            return objects;
        } catch (error) {
            console.error('Error loading JSON:', error);
        }
    }

    function displayResults(results) {
        searchResults.innerHTML = ''; // 清空之前的搜索结果
        results.forEach(item => {
            const resultItem = document.createElement('div');
            let displayText = '';

            // 按需展示更多列的数据，这里以'name', 'short_name', 'zh_name'为例
            if (item.dde_ics) displayText += `${item.dde_ics}| `;
            if (item.zh_name) displayText += ` ${item.zh_name} `;
            if (item.name) displayText += ` ${item.name} `;
            if (item.bottom_time) displayText += `${item.bottom_time}`;
            if (item.bottom_time_error != "-") displayText += `±${item.bottom_time_error}`;
            if (item.top_time) displayText += ` 至 ${item.top_time}`;
            if (item.top_time_error != "-") displayText += `±${item.top_time_error} <br>`;

            resultItem.innerHTML = displayText.trim(); // 使用innerHTML以支持HTML格式，如<br>换行
            searchResults.appendChild(resultItem);
        });
    }

    async function search() {
        const keyword = searchInput.value.trim().toLowerCase();
        if (keyword === '') {
            searchResults.innerHTML = '<p>请输入关键词进行搜索。</p>';
            return;
        }

        try {
            const data = await fetchData();
            const results = data.filter(item =>
                (item.dde_ics && item.dde_ics.toLowerCase().includes(keyword)) ||
                (item.name && item.name.toLowerCase().includes(keyword)) ||
                (item.zh_name && item.zh_name.toLowerCase().includes(keyword))
            );
            displayResults(results);
        } catch (error) {
            console.error('Error during search:', error);
        }
    }

    searchInput.addEventListener('input', search); // 监听输入框变化实时搜索
});