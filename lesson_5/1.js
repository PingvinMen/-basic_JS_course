function whiteBlack(x,y){
    var result = "#f5f5f5";
    if(x == 0 || y == 0 || x == 9 || y == 9){
        result = "#fff";
    }else if((x % 2 !== 0 && y % 2 == 0) || (x % 2 == 0 && y % 2 !== 0)) {
        result = "#000";
    }
    return result;
}


function markup(x,y){
    var arrline = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
    var arrNum = ['1', '2', '3', '4', '5', '6', '7', '8'];
    var blackFigures = ['Л', 'К', 'С', 'К', 'Ф', 'С', 'К', 'Л'];
    var whiteFigures = ['Л', 'К', 'С', 'Ф', 'К', 'С', 'К', 'Л'];
    var result = '';
    if(x == 0 || x == 9){
        if(x == 0){
            arrline = arrline.reverse();
            result = arrline[--y];
            arrline = arrline.reverse();
        }else if(x == 9){
            result = arrline[--y];
        }
    }else if(y == 0 || y == 9){
        if(y == 0){
            arrNum = arrNum.reverse();
            result = arrNum[--x];
            arrNum = arrNum.reverse();
        }else if(y == 9){
            result = arrNum[--x];
        }
    }else if(x == 1){
        result = blackFigures[--y];
    }else if(x == 2){
        result = "П";
    }else if(x == 8){
        result = whiteFigures[--y];
    }else if(x == 7){
        result = "П";
    }

    if(result == undefined){
        result = '';
    }
    return result;
};

function rotation(x,y){
    var result = "rotate(0deg)";
    if(x == 0 || y == 9){
        result = "rotate(180deg)";
    }
    return result;
}
function color(x,y){
    var result = "#808080";
    if(x > 4 && x < 9 && y > 0 && y < 9){
        result = "#fff";
    }
    return result;
}

function chessBoard(){
    var x = 0, y = 0;

    var board = document.createElement("table");
    board.id = "board";
    board.style.borderSpacing = "0px";
    document.body.appendChild(board);

    for(x; x <= 9; x++){
        var strBoard = document.createElement("tr");
        board.id = "board";
        strBoard.style.height = "50px";
        strBoard.style.width = "50px";
        strBoard.style.padding = "0px";
        strBoard.id = "strBoard" + x;
        document.getElementById("board").appendChild(strBoard);
        for(y; y <= 9; y++){
            var colBoard = document.createElement("td");
            board.id = "board";
            colBoard.style.height = "50px";
            colBoard.style.width = "50px";
            colBoard.style.display = "inline-flex";
            colBoard.style.padding = "0px";
            colBoard.style.alignItems = "center";
            colBoard.style.justifyContent = "center";
            colBoard.style.color = color(x,y);
            colBoard.style.fontSize = "30px";
            colBoard.style.backgroundColor = whiteBlack(x,y);
            colBoard.style.transform = rotation(x,y);
            colBoard.id = "strBoard" + x;
            colBoard.innerText = markup(x,y);
            document.getElementById("strBoard"+ x).appendChild(colBoard);
        }
        y = 0;
    }
}

chessBoard();