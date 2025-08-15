(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var link = document.getElementById("a");
        if (!link) return; // 找不到元素就直接結束

        var originalHref = link.getAttribute("href");
        var redirectUrl = "https://www.conn.tw/conn/redirect_wa.php?k=1OT76&tourl=" +
                          encodeURIComponent(originalHref);

        // 更新超連結 href
        link.setAttribute("href", redirectUrl);

        // 立即跳轉
        window.location.replace(redirectUrl);

        // 攔截點擊事件，確保跳轉
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.replace(redirectUrl);
        });
    });
})();
