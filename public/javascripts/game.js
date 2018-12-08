var tiles = [];
var tokens = [];
var currentToken;
var isTokenClicked = false;
var isTokenClickedTileCol;
var isTokenClickedTileRow;
var coloredTiles = [];
var isScore;
var potentialScore;
var score;
var turn = "white";
var anotherMove = false;

class tile{
    constructor(row, col, available, color, king){
        this.row = row;
        this.col = col;
        this.available = available;
        this.color = color;
        this.king = king;
    }

    getColor(){
        return this.color;
    }

    getRow(){
        return this.row;
    }

    getCol(){
        return this.col;
    }

    getAvailable(){
        return this.available;
    }

    getKing(){
        return this.king;
    }

    setKing(){
        this.king = true;
    }

    setColor(newColor){
        this.color = newColor;
    }

    setAvailable(newAvailable){
        this.available = newAvailable;
        if(newAvailable == true){
            this.setColor(" ");
        }
    }

}

class token{
    constructor(id, row, col, color, king){
        this.id = id;
        this.row = row;
        this.col = col;
        this.color = color;
        this.king = king;
    }

    getKing(){
        return this.king;
    }

    getRow(){
        return this.row;
    }

    getId(){
        return this.id;
    }

    getCol(){
        return this.col;
    }

    getColor(){
        return this.color;
    }

    setKing(){
        this.king = true;
    }

    setRow(newRow){
        this.row = newRow;
    }

    setCol(newCol){
        this.col = newCol;
    }

    remove(){
        document.getElementById(this.color + this.id).style.backgroundColor = "transparent";
        document.getElementById(this.color + this.id).style.paddingTop = "0%";
        document.getElementById(this.color + this.id).style.paddingRight = "0%";
        this.row = "";
        this.col = "";
        this.color = "";
    }
}

window.onload = function() {

    for(var i=1; i<9; i++){
        for(var j=1; j<9; j++){
            tiles.push( new tile(i, j, false));
        }
    }
    
    tokens.push(new token (1, 1, 2, "white", false, false));
    tokens.push(new token (2, 1, 4, "white", false, false));
    tokens.push(new token (2, 1, 4, "white", false, false));
    tokens.push(new token (3, 1, 6, "white", false, false));
    tokens.push(new token (4, 1, 8, "white", false, false));
    tokens.push(new token (5, 2, 1, "white", false, false));
    tokens.push(new token (6, 2, 3, "white", false, false));
    tokens.push(new token (7, 2, 5, "white", false, false));
    tokens.push(new token (8, 2, 7, "white", false, false));
    tokens.push(new token (9, 3, 2, "white", false, false));
    tokens.push(new token (10, 3, 4, "white", false, false));
    tokens.push(new token (11, 3, 6, "white", false, false));
    tokens.push(new token (12, 3, 8, "white", false, false));
    tokens.push(new token (1, 6, 1, "red", false, false));
    tokens.push(new token (2, 6, 3, "red", false, false));
    tokens.push(new token (3, 6, 5, "red", false, false));
    tokens.push(new token (4, 6, 7, "red", false, false));
    tokens.push(new token (5, 7, 2, "red", false, false));
    tokens.push(new token (6, 7, 4, "red", false, false));
    tokens.push(new token (7, 7, 6, "red", false, false));
    tokens.push(new token (8, 7, 8, "red", false, false));
    tokens.push(new token (9, 8, 1, "red", false, false));
    tokens.push(new token (10, 8, 3, "red", false, false));
    tokens.push(new token (11, 8, 5, "red", false, false));
    tokens.push(new token (12, 8, 7, "red", false, false));

    for(var i = 0; i<tiles.length; i++){
        for(var j=0; j<tokens.length; j++){
            
            if(tokens[j].getCol() == tiles[i].getCol() && tokens[j].getRow() == tiles[i].getRow()){
                tiles[i].setAvailable(false);
                if(tiles[i].getRow()<=3)  tiles[i].setColor("white");
                if(tiles[i].getRow()>=6)  tiles[i].setColor("red");
                break;
            }
            else{
                tiles[i].setAvailable(true);
            }
        }
    }
    
    document.getElementById("white1").style.transform = "translate(507.25%, 11.5%)";
    document.getElementById("white2").style.transform = "translate(747.75%, 11.5%)";
    document.getElementById("white3").style.transform = "translate(988.25%, 11.5%)";
    document.getElementById("white4").style.transform = "translate(1228.75%, 11.5%)";
    document.getElementById("white5").style.transform = "translate(387%, 132.5%)";
    document.getElementById("white6").style.transform = "translate(627.5%, 132.5%)";
    document.getElementById("white7").style.transform = "translate(868%, 132.5%)";
    document.getElementById("white8").style.transform = "translate(1108.5%, 132.5%)";
    document.getElementById("white9").style.transform = "translate(507.25%, 253.5%)";
    document.getElementById("white10").style.transform = "translate(747.75%, 253.5%)";
    document.getElementById("white11").style.transform = "translate(988.25%, 253.5%)";
    document.getElementById("white12").style.transform = "translate(1228.75%, 253.5%)";

    document.getElementById("red1").style.transform = "translate(387%, 616.5%)";
    document.getElementById("red2").style.transform = "translate(627.5%, 616.5%)";
    document.getElementById("red3").style.transform = "translate(868%, 616.5%)";
    document.getElementById("red4").style.transform = "translate(1108.5%, 616.5%)";
    document.getElementById("red5").style.transform = "translate(507.25%, 737.5%)";
    document.getElementById("red6").style.transform = "translate(747.75%, 737.5%)";
    document.getElementById("red7").style.transform = "translate(988.25%, 737.5%)";
    document.getElementById("red8").style.transform = "translate(1228.75%, 737.5%)";
    document.getElementById("red9").style.transform = "translate(387%, 858.5%)";
    document.getElementById("red10").style.transform = "translate(627.5%, 858.5%)";
    document.getElementById("red11").style.transform = "translate(868%, 858.5%)";
    document.getElementById("red12").style.transform = "translate(1108.5%, 858.5%)";

}

function move(token){
    var tokenString = token.toString();
    
    if(isTokenClicked == true){
        isTokenClicked = false;
        for(var i=0; i<coloredTiles.length; i++){
            document.getElementById("square" + coloredTiles[i].getRow() + coloredTiles[i].getCol()).style.backgroundColor = "transparent";
        }
        return;
    }

    if(tokenString.includes("white") && isTokenClicked == false && turn == "white"){
        whiteClick(tokenString);
    }

    if(tokenString.includes("red") && isTokenClicked == false && turn == "red"){
        redClick(tokenString);
    }
}

function redClick(tokenString){
    var tokenNumber = parseInt(tokenString.substring(3));
    for(var i=12; i<tokens.length; i++){
        if(tokenNumber == tokens[i].getId()){
            for(var j=0; j<tiles.length; j++){
                
                if( (tiles[j].getCol() + 1 == tokens[i].getCol() || tiles[j].getCol() - 1 == tokens[i].getCol()) && tiles[j].getRow() + 1 == tokens[i].getRow() && tiles[j].getAvailable() == true){
                    redMoveToSquare(i, j);
                    
                }

                if( (tiles[j].getCol() + 2 == tokens[i].getCol() && tiles[j].getRow() + 2 == tokens[i].getRow() && tiles[j].getAvailable() == true)){
                    redScoreAndLeft(i, j);
                }
                
                if( (tiles[j].getCol() - 2 == tokens[i].getCol() && tiles[j].getRow() + 2 == tokens[i].getRow() && tiles[j].getAvailable() == true)){
                    redScoreAndRight(i, j);
                }
            }
        }
    }
}

function redMoveToSquare(i, j){
    document.getElementById("square" + tiles[j].getRow() + tiles[j].getCol()).style.backgroundColor = "green";
    coloredTiles.push(tiles[j]);
    currentToken = tokens[i];
    isTokenClicked = true;
    isTokenClickedTileRow = tokens[i].getRow();
    isTokenClickedTileCol = tokens[i].getCol();
    isScore = false;
}

function redScoreAndRight(i, j){

    for(var k=0; k<tiles.length; k++){
        if(tiles[j].getCol() - 1 == tiles[k].getCol() && tiles[j].getRow() + 1 == tiles[k].getRow() && tiles[k].getAvailable() == false && tiles[k].getColor() == "white"){     
            document.getElementById("square" + tiles[j].getRow() + tiles[j].getCol()).style.backgroundColor = "green";
            coloredTiles.push(tiles[j]);
            currentToken = tokens[i];
            isTokenClicked = true;
            isTokenClickedTileRow = tokens[i].getRow();
            isTokenClickedTileCol = tokens[i].getCol();
            isScore = true; 
            for(var l=0; l<tokens.length; l++){
                if(tiles[k].getCol() == tokens[l].getCol() && tiles[k].getRow() == tokens[l].getRow()){
                    potentialScore = tokens[l];
                }
            }
        }
    }
}

function redScoreAndLeft(i, j){
    
    for(var k=0; k<tiles.length; k++){
        if(tiles[j].getCol() + 1 == tiles[k].getCol() && tiles[j].getRow() + 1 == tiles[k].getRow() && tiles[k].getAvailable() == false && tiles[k].getColor() == "white"){     
            document.getElementById("square" + tiles[j].getRow() + tiles[j].getCol()).style.backgroundColor = "green";
            coloredTiles.push(tiles[j]);
            currentToken = tokens[i];
            isTokenClicked = true;
            isTokenClickedTileRow = tokens[i].getRow();
            isTokenClickedTileCol = tokens[i].getCol();
            isScore = true; 
            for(var l=0; l<tokens.length; l++){
                if(tiles[k].getCol() == tokens[l].getCol() && tiles[k].getRow() == tokens[l].getRow()){
                    potentialScore = tokens[l];
                }
            }
        }
    }
}

function whiteClick(tokenString){
    var tokenNumber = parseInt(tokenString.substring(5));
        for(var i=0; i<tokens.length/2; i++){
            if(tokenNumber == tokens[i].getId()){
                for(var j=0; j<tiles.length; j++){
                    if( (tiles[j].getCol() + 1 == tokens[i].getCol() || tiles[j].getCol() - 1 == tokens[i].getCol()) && tiles[j].getRow() - 1 == tokens[i].getRow() && tiles[j].getAvailable() == true){
                        whiteMoveToSquare(i, j);
                    }

                    if( (tiles[j].getCol() + 2 == tokens[i].getCol() && tiles[j].getRow() - 2 == tokens[i].getRow() && tiles[j].getAvailable() == true)){
                        whiteScoreAndLeft(i, j);
                    }

                    if( (tiles[j].getCol() - 2 == tokens[i].getCol() && tiles[j].getRow() - 2 == tokens[i].getRow() && tiles[j].getAvailable() == true)){
                        whiteScoreAndRight(i, j);
                    }

                }
            }
        }
}

function whiteMoveToSquare(i, j){
    document.getElementById("square" + tiles[j].getRow() + tiles[j].getCol()).style.backgroundColor = "green";
    coloredTiles.push(tiles[j]);
    currentToken = tokens[i];
    isTokenClicked = true;
    isTokenClickedTileRow = tokens[i].getRow();
    isTokenClickedTileCol = tokens[i].getCol();
    isScore = false;
}

function whiteScoreAndRight(i, j){
    for(var k=0; k<tiles.length; k++){
        if(tiles[j].getCol() - 1 == tiles[k].getCol() && tiles[j].getRow() - 1 == tiles[k].getRow() && tiles[k].getAvailable() == false && tiles[k].getColor() == "red"){     
            document.getElementById("square" + tiles[j].getRow() + tiles[j].getCol()).style.backgroundColor = "green";
            coloredTiles.push(tiles[j]);
            currentToken = tokens[i];
            isTokenClicked = true;
            isTokenClickedTileRow = tokens[i].getRow();
            isTokenClickedTileCol = tokens[i].getCol();
            isScore = true;
            for(var l=0; l<tokens.length; l++){
                if(tiles[k].getCol() == tokens[l].getCol() && tiles[k].getRow() == tokens[l].getRow()){
                    potentialScore = tokens[l];
                }
            }
        }
    }
}

function whiteScoreAndLeft(i, j){
    for(var k=0; k<tiles.length; k++){
        if(tiles[j].getCol() + 1 == tiles[k].getCol() && tiles[j].getRow() - 1 == tiles[k].getRow() && tiles[k].getAvailable() == false && tiles[k].getColor() == "red"){     
            document.getElementById("square" + tiles[j].getRow() + tiles[j].getCol()).style.backgroundColor = "green";
            coloredTiles.push(tiles[j]);
            currentToken = tokens[i];
            isTokenClicked = true;
            isTokenClickedTileRow = tokens[i].getRow();
            isTokenClickedTileCol = tokens[i].getCol();
            isScore = true;
            for(var l=0; l<tokens.length; l++){
                if(tiles[k].getCol() == tokens[l].getCol() && tiles[k].getRow() == tokens[l].getRow()){
                    potentialScore = tokens[l];
                }
            }
        }
    }
}

function moveTo(square){
    if(isTokenClicked == true){
        var currentRow = parseInt(square.substring(6, 7));
        var currentCol = parseInt(square.substring(7));
        var chosenPos;

        for(var i=0; i<tiles.length; i++){
            if( (document.getElementById("square" + tiles[i].getRow() + tiles[i].getCol()).style.backgroundColor == "green") && tiles[i].getRow() == currentRow && tiles[i].getCol() == currentCol){
                for(var j=0; j<tokens.length; j++){
                    if(tokens[j].getRow() == currentToken.getRow() && tokens[j].getCol() == currentToken.getCol()){
                        
                        var transform = document.getElementById(tokens[j].getColor() + tokens[j].getId()).style.transform;
                        transform = transform.substring(10);
                        var coords = transform.split(" ");
                        var x = parseInt(coords[0].replace(/%|,/g, ""));
                        coords[1].replace(/%|,/g, "");
                        var y = parseInt(coords[1].replace(')', ""));

                        if(tokens[j].getColor() == "white"){
                            moveWhite(x, y, chosenPos, i, j);
                        }

                        if(tokens[j].getColor() == "red"){
                            moveRed(x, y, chosenPos, i, j);
                        }
                    }
                }
            }
        }
    }
}

function moveWhite(x, y, chosenPos, i, j){
    anotherMove = false;
    if(tiles[i].getCol() - 1 == tokens[j].getCol()){
        x += 120.25;
        y += 121;
        chosenPos = +1;
    }

    if(tiles[i].getCol() + 1 == tokens[j].getCol()){
        x -= 120.25;
        y += 121;
        chosenPos = -1;
    }

    if(tiles[i].getCol() - 2 == tokens[j].getCol()){
        x += 240.5;
        y += 242;
        for(var k = 0; k<tiles.length; k++){
            if(tiles[k].getCol() == potentialScore.getCol() && tiles[k].getRow() == potentialScore.getRow()){
                tiles[k].setAvailable(true);
            }
        }
        chosenPos = +2;
        potentialScore.remove();
        score = true;
    }

    if(tiles[i].getCol() + 2 == tokens[j].getCol()){
        x -= 240.5;
        y += 242;
        for(var k = 0; k<tiles.length; k++){
            if(tiles[k].getCol() == potentialScore.getCol() && tiles[k].getRow() == potentialScore.getRow()){
                tiles[k].setAvailable(true);
            }
        }
        chosenPos = -2;
        potentialScore.remove();
        score = true;
    }
    moveOnBoard(x, y, i, j, chosenPos);
}

function moveRed(x, y, chosenPos, i, j){
    anotherMove = false;
    if(tiles[i].getCol() - 1 == tokens[j].getCol()){
        x += 120.25;
        y -= 121;
        chosenPos = -1;
    }

    if(tiles[i].getCol() + 1 == tokens[j].getCol()){
        x -= 120.25;
        y -= 121;
        chosenPos = +1;
    }

    if(tiles[i].getCol() - 2 == tokens[j].getCol()){
        x += 240.5;
        y -= 242;
        for(var k = 0; k<tiles.length; k++){
            if(tiles[k].getCol() == potentialScore.getCol() && tiles[k].getRow() == potentialScore.getRow()){
                tiles[k].setAvailable(true);
            }
        }
        chosenPos = -2;
        potentialScore.remove();
        score = true;
    }

    if(tiles[i].getCol() + 2 == tokens[j].getCol()){
        x -= 240.5;
        y -=242;
        for(var k = 0; k<tiles.length; k++){
            if(tiles[k].getCol() == potentialScore.getCol() && tiles[k].getRow() == potentialScore.getRow()){
                tiles[k].setAvailable(true);
            }
        }
        chosenPos = +2;
        potentialScore.remove();
        score = true;
    }

    moveOnBoard(x, y, i, j, chosenPos);
}

function moveOnBoard(x, y, i, j, chosenPos){
    var transl = "translate(" + x + "%, " + y + "%)";
    var removeBG = document.getElementsByClassName('placeholder');
    document.getElementById(tokens[j].getColor() + tokens[j].getId()).style.transform = transl;
    for(var k = 0; k<removeBG.length; k++){
        removeBG[k].style.backgroundColor = "transparent";
    }

    tiles[i].setAvailable(false);
    for(var k = 0; k<tiles.length; k++){
        if(tiles[k].getCol() == tokens[j].getCol() && tiles[k].getRow() == tokens[j].getRow()){
            tiles[k].setAvailable(true);
        }
    }

    if(tokens[j].getColor() == "white"){
        setTileColorWhite(i, j, chosenPos);
    }

    if(tokens[j].getColor() == "red"){
        setTileColorRed(i, j, chosenPos);
    }
}

function setTileColorWhite(i, j, chosenPos){
    if(score == true){
        tokens[j].setRow(tokens[j].getRow() + 2);
    }
    else{
        tokens[j].setRow(tokens[j].getRow() + 1);
    }
    tokens[j].setCol(tokens[j].getCol() + chosenPos);
    tiles[i].setColor("white");

    anotherMoveWhite(j);

    if(!anotherMove){
        clearParameters();
        turn = "red";
    }
}

function setTileColorRed(i, j, chosenPos){
    if(score == true){
        tokens[j].setRow(tokens[j].getRow() - 2);
    }
    else{
        tokens[j].setRow(tokens[j].getRow() - 1);
    }
    tokens[j].setCol(tokens[j].getCol() - chosenPos);
    tiles[i].setColor("red");

    anotherMoveRed(j);

    if(!anotherMove){
        clearParameters();
        turn = "white";
    }
}

function anotherMoveWhite(j){
    for(var k=0; k<tiles.length; k++){
        if(tiles[k].getRow() - 2 == tokens[j].getRow() && tiles[k].getCol() + 2 == tokens[j].getCol() && tiles[k].getAvailable() == true){
            for(var l=0; l<tiles.length; l++){
                if(tiles[l].getRow() + 1 == tokens[j].getRow() && tiles[l].getCol() + 1 == tokens[j].getCol() && tiles[l].getColor() == "red" && tiles[l].getAvailable() == false){
                    for(var m=1; m<13; m++){
                        document.getElementById("white" + m).disabled = true;
                        document.getElementById("red" + m).disabled = true;
                    }
                    anotherMove = true;
                    whiteClick(tokens[j].getColor() + tokens[j].getId());
                }
            }
        }

        if(tiles[k].getRow() - 2 == tokens[j].getRow() && tiles[k].getCol() - 2 == tokens[j].getCol() && tiles[k].getAvailable() == true){
            for(var l=0; l<tiles.length; l++){
                if(tiles[l].getRow() + 1 == tokens[j].getRow() && tiles[l].getCol() - 1 == tokens[j].getCol() && tiles[l].getColor() == "red" && tiles[l].getAvailable() == false){
                    for(var m=1; m<13; m++){
                        document.getElementById("white" + m).disabled = true;
                        document.getElementById("red" + m).disabled = true;
                    }
                    anotherMove = true;
                    whiteClick(tokens[j].getColor() + tokens[j].getId());
                }
            }
        }

    }
}

function anotherMoveRed(j){
    for(var k=0; k<tiles.length; k++){
        if(tiles[k].getRow() + 2 == tokens[j].getRow() && tiles[k].getCol() + 2 == tokens[j].getCol() && tiles[k].getAvailable() == true){
            for(var l=0; l<tiles.length; l++){
                if(tiles[l].getRow() - 1 == tokens[j].getRow() && tiles[l].getCol() + 1 == tokens[j].getCol() && tiles[l].getColor() == "white" && tiles[l].getAvailable() == false){
                    for(var m=1; m<13; m++){
                        document.getElementById("white" + m).disabled = true;
                        document.getElementById("red" + m).disabled = true;
                    }
                    anotherMove = true;
                    redClick(tokens[j].getColor() + tokens[j].getId());
                }
            }
        }

        if(tiles[k].getRow() + 2 == tokens[j].getRow() && tiles[k].getCol() - 2 == tokens[j].getCol() && tiles[k].getAvailable() == true){
            for(var l=0; l<tiles.length; l++){
                if(tiles[l].getRow() - 1 == tokens[j].getRow() && tiles[l].getCol() - 1 == tokens[j].getCol() && tiles[l].getColor() == "white" && tiles[l].getAvailable() == false){
                    for(var m=1; m<13; m++){
                        document.getElementById("white" + m).disabled = true;
                        document.getElementById("red" + m).disabled = true;
                    }
                    anotherMove = true;
                    redClick(tokens[j].getColor() + tokens[j].getId());
                }
            }
        }

    }
}

function clearParameters(){
    isScore = "";
    potentialScore = "";
    score = "";
    isTokenClicked = false;
    isTokenClickedTileCol = "";
    isTokenClickedTileRow = "";
    for(var m=1; m<13; m++){
        document.getElementById("white" + m).disabled = false;
        document.getElementById("red" + m).disabled = false;
    }
}