(function () {
    // 解析網址參數
    var params = new URLSearchParams(window.location.search);
    var url = params.get("url");

    if (url) {
        // 嘗試解碼，避免 %3A%2F%2F 這種情況
        try {
            var decodedUrl = decodeURIComponent(url);
            if (/^https?:\/\//i.test(decodedUrl)) {
                url = decodedUrl;
            }
        } catch (e) {
            console.warn("URL 解碼失敗，使用原始字串");
        }

        console.log("原始或解碼後的 URL:", url);

        // 判斷是否已是 affiliate 連結（避免無限跳轉）
        var isAffiliate = url.includes("/exep/assp.php/books_werdna/");
        if (isAffiliate) {
            console.log("偵測到已是 affiliate 連結，直接跳轉");
            window.location.replace(url);
            return;
        }

        document.addEventListener("DOMContentLoaded", function () {
            // 替換成 affiliate 連結
            url = url.replace("https://www.books.com.tw/",
                              "https://www.books.com.tw/exep/assp.php/books_werdna/");
            url = url.replace("https://activity.books.com.tw/",
                              "https://www.books.com.tw/exep/assp.php/books_werdna/http_activity/");

            var redirect = url;
            console.log("跳轉 URL:", redirect);

            var link = document.getElementById("a");
            if (link) {
                link.setAttribute("href", redirect);
            }

            // 無論有沒有 #a 都直接跳轉
            window.location.replace(redirect);
        });
    }
})();
