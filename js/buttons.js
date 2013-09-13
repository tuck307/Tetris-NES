Tetris.Buttons = (function () {
    "use strict";
    var create = function (options) {
        var btn;
        btn = document.getElementById(options.id);
        btn.addEventListener("click", options.click);
        return btn;
    };
    return {
        create: create
    };
}());


