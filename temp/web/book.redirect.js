(function () {
    document.addEventListener("DOMContentLoaded", function () {
        var link = document.getElementById("a");
        if (!link) return; // 沒有 #a 就不處理

        var originalHref = link.getAttribute("href");
        if (!originalHref) return; // 沒有 href 就不處理

        // ===== 判斷是否已經是 affiliate 連結 =====
        var isAffiliate = originalHref.includes("/exep/assp.php/books_werdna/");
        if (isAffiliate) {
            console.log("偵測到已是 affiliate 連結，直接跳轉");
            window.location.replace(originalHref);
            return;
        }

        // ===== 轉成 books affiliate 連結 =====
        var redirectUrl = originalHref
            .replace("https://www.books.com.tw/",
                     "https://www.books.com.tw/exep/assp.php/books_werdna/")
            .replace("https://activity.books.com.tw/",
                     "https://www.books.com.tw/exep/assp.php/books_werdna/http_activity/");
        // =====================================

        // 更新超連結 href
        link.setAttribute("href", redirectUrl);

        // 立即跳轉
        window.location.replace(redirectUrl);

        // 攔截點擊事件，確保點擊仍跳轉同一個 affiliate 連結
        link.addEventListener("click", function (e) {
            e.preventDefault();
            window.location.replace(redirectUrl);
        });
    });
})();
