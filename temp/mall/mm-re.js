(function () {
    function loadRedirectScript(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    }

    // momo 使用自己的 redirect.js
    loadRedirectScript("mm-point.js");

    // 若要改用其他（例如共用版本），只要改這裡即可
    // loadRedirectScript("../web/book.redirect.js");
})();
