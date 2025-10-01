(function () {
    // 動態載入 redirect.js，並可自由切換路徑
    function loadRedirectScript(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = true; // 非同步載入
        document.head.appendChild(script);
    }

    // ===== 自行選擇要載入的 redirect.js =====
	// loadRedirectScript("../web/book.redirect.js");
    loadRedirectScript("../web/mm-point.js");
    // =========================================
})();
