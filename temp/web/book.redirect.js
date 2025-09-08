(function () {
    var link = document.getElementById("a");
    if (!link) return;

    var originalHref = link.getAttribute("href");
    if (!originalHref) return;

    var redirectUrl = originalHref;

    // 如果不是 books.com.tw 網址，直接轉到指定的本機頁面
    if (!originalHref.includes("books.com.tw")) {
        // 這裡會導到 /temp/books/@event.html
        redirectUrl = "../books/@event.html";
    } else {
        // 如果不是 affiliate，就轉換成 affiliate 連結
        var isAffiliate = originalHref.includes("/exep/assp.php/books_werdna/");
        if (!isAffiliate) {
            redirectUrl = originalHref
                .replace("https://www.books.com.tw/",
                         "https://www.books.com.tw/exep/assp.php/books_werdna/")
                .replace("https://activity.books.com.tw/",
                         "https://www.books.com.tw/exep/assp.php/books_werdna/http_activity/");
        }
    }

    // 更新 href
    link.setAttribute("href", redirectUrl);

    // 立即跳轉
    window.location.replace(redirectUrl);

    // 點擊仍跳轉
    link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(redirectUrl);
    });
})();
