(function () {
    // 從網址參數 ?url= 取值
    var params = new URLSearchParams(window.location.search);
    var url = params.get("url");

    // 如果沒有 ?url=，退而抓 <a id="a"> 的 href
    if (!url) {
        var link = document.getElementById("a");
        if (link) {
            url = link.getAttribute("href");
        }
    }

    if (!url) return; // 找不到網址就不處理

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

    // 解析 domain
    var a = document.createElement("a");
    a.href = url;
    var hostname = a.hostname;

    // 判斷是否屬於 *.books.com.tw
    if (hostname.endsWith(".books.com.tw")) {
        // 判斷是否已是 affiliate 連結
        var isAffiliate = url.includes("/exep/assp.php/books_werdna/");
        if (isAffiliate) {
            console.log("偵測到已是 affiliate 連結，直接跳轉");
            window.location.replace(url);
            return;
        }

        // 替換成 affiliate 連結
        url = url.replace("https://www.books.com.tw/",
                          "https://www.books.com.tw/exep/assp.php/books_werdna/");
        url = url.replace("https://activity.books.com.tw/",
                          "https://www.books.com.tw/exep/assp.php/books_werdna/http_activity/");

        var redirect = url;
        console.log("跳轉 affiliate URL:", redirect);

        // 更新 #a 的 href（如果存在）
        var link = document.getElementById("a");
        if (link) {
            link.setAttribute("href", redirect);
            link.addEventListener("click", function (e) {
                e.preventDefault();
                window.location.replace(redirect);
            });
        }

        // 直接跳轉
        window.location.replace(redirect);

    } else {
        // 非 books.com.tw domain → 跳到指定 fallback 頁
        var fallback = "../books/@event.html";
        console.log("非 books.com.tw 網域，跳轉至:", fallback);
        window.location.replace(fallback);
    }
})();
