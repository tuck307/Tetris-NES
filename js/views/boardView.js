var boardView = function () {
        "use strict";
        var board = document.createElement("div");

//        board.addEventListener("click", function () {
//          photoController.handleEvent("click", photoModel);
//        });
        
        var render = function () {
                var result = "", x, i, j;
               //top two rows are hidden topout area
                for (i = 0; i < boardModel.buffer_zone; i += 1) {
                    result  += "<div>";
                    for (x = 0; x < boardModel.width; x += 1) {
                        result += "<div class='innerHidden'></div>";
                    }
                    result += "</div>";
                }
                for (i = boardModel.buffer_zone; i < boardModel.height; i += 1) {
                    result  += "<div>";
                    for (j = 0; j < boardModel.width; j += 1) {
                        if (boardModel.grid[i][j] !== undefined) {
                            result += "<div class='" + boardModel.grid[i][j] + "' ></div>";
                        } else {
                            result += "<div class='inner'></div>";
                        }
                    }
                    result += "</div>";
                }
                board.innerHTML = result;
            };

        var show = function () {
                board.style.display = "";
            };

        var hide = function () {
                board.style.display = "none";
            };

        return {
            showView: show,
            hideView: hide,
//            render: render,
            getBoard: board
        };

    };