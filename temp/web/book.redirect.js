(function () {
    var link = document.getElementById("a");
    if (!link) return;

    var originalHref = link.getAttribute("href");
    if (!originalHref) return;

    var isAffiliate = originalHref.includes("/exep/assp.php/books_werdna/");
    var redirectUrl = originalHref;

    if (!isAffiliate) {
        redirectUrl = originalHref
            .replace("https://www.books.com.tw/",
                     "https://www.books.com.tw/exep/assp.php/books_werdna/")
            .replace("https://activity.books.com.tw/",
                     "https://www.books.com.tw/exep/assp.php/books_werdna/http_activity/");
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
