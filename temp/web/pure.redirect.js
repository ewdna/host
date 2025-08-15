(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var link = document.getElementById("a");
        if (!link) return; // 沒有 #a 就不處理

        var redirect = link.getAttribute("href");
        if (!redirect) return; // 沒有 href 就不處理

        // 保持原本 href（可省略，但留著較直觀）
        link.setAttribute("href", redirect);

        // 立即跳轉到原本連結
        window.location.replace(redirect);

        // 攔截點擊事件，確保仍跳同一個連結
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.replace(redirect);
        });
    });
})();
