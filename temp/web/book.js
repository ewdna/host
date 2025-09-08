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

        document.addEventListener("DOMContentLoaded", function () {
            var redirect = url;

            try {
                var parsed = new URL(url);
                var domain = parsed.hostname;

                if (domain === "books.com.tw" || domain.endsWith(".books.com.tw")) {
                    // === 在 books.com.tw domain 下才檢查 affiliate ===
                    var isAffiliate = url.includes("/exep/assp.php/books_werdna/");
                    if (isAffiliate) {
                        console.log("偵測到已是 affiliate 連結，直接跳轉");
                        redirect = url;
                    } else {
                        // 轉換成 affiliate
                        redirect = url
                            .replace("https://www.books.com.tw/",
                                     "https://www.books.com.tw/exep/assp.php/books_werdna/")
                            .replace("https://activity.books.com.tw/",
                                     "https://www.books.com.tw/exep/assp.php/books_werdna/http_activity/");
                    }
                } else {
                    // 非 books.com.tw → 跳轉到指定頁面
                    redirect = "../books/@event.html";
                }
            } catch (e) {
                console.error("URL 解析失敗，跳轉到預設頁面");
                redirect = "../books/@event.html";
            }

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
