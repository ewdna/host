(function () {
    function loadRedirectScript(src) {
        var script = document.createElement('script');
        script.src = src;
        script.onload = function () {
            console.log(src + " 已載入並執行");
        };
        document.head.appendChild(script);
    }

    loadRedirectScript("mm-point.js");
})();
