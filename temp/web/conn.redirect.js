(function () {
    var link = document.getElementById("a");
    if (!link) return;

    var originalHref = link.getAttribute("href");

    var redirectUrl =
        "https://www.conn.tw/conn/redirect_wa.php?k=1OT76&tourl=" +
        encodeURIComponent(originalHref);

    link.setAttribute("href", redirectUrl);

    window.location.replace(redirectUrl);

    link.addEventListener("click", function (e) {
        e.preventDefault();
        window.location.replace(redirectUrl);
    });
})();
