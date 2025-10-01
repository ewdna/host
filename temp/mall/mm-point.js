// momo點點賺 自動轉址 (純JS版)
(function () {
    var link = document.getElementById("a");
    if (!link) return;

    var originalHref = link.getAttribute("href");
    if (!originalHref) return;

    // 加上 momo 的參數
    var redirectUrl = originalHref +
        "&memid=6000007978&cid=apuad&oid=1&osm=league";

    // 更新連結
    link.setAttribute("href", redirectUrl);

    // 立即跳轉
    window.location.replace(redirectUrl);

    // 點擊仍跳轉
    link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(redirectUrl);
    });
})();
