var tiles = [];
var tokens = [];

class tile{
    constructor(row, col, available){
        this.row = row;
        this.col = col;
        this.available = available;
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

    setAvailable(newAvailable){
        this.available = newAvailable;
    }

}

class token{
    constructor(id, row, col, color){
        this.id = id;
        this.row = row;
        this.col = col;
        this.color = color;
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

    setRow(newRow){
        this.row = newRow;
    }

    setCol(newCol){
        this.col = newCol;
    }
}

window.onload = function() {
    

    for(var i=1; i<9; i++){
        for(var j=1; j<9; j++){
            tiles.push( new tile(i, j, true));
        }
    }

    tokens.push(new token (1, 1, 2, "white"));
    tokens.push(new token (2, 1, 4, "white"));
    tokens.push(new token (3, 1, 6, "white"));
    tokens.push(new token (4, 1, 8, "white"));
    tokens.push(new token (5, 2, 1, "white"));
    tokens.push(new token (6, 2, 3, "white"));
    tokens.push(new token (7, 2, 5, "white"));
    tokens.push(new token (8, 2, 7, "white"));
    tokens.push(new token (9, 3, 2, "white"));
    tokens.push(new token (10, 3, 4, "white"));
    tokens.push(new token (11, 3, 6, "white"));
    tokens.push(new token (12, 3, 8, "white"));
    tokens.push(new token (1, 6, 1, "red"));
    tokens.push(new token (2, 6, 3, "red"));
    tokens.push(new token (3, 6, 5, "red"));
    tokens.push(new token (4, 6, 7, "red"));
    tokens.push(new token (5, 7, 2, "red"));
    tokens.push(new token (6, 7, 4, "red"));
    tokens.push(new token (7, 7, 6, "red"));
    tokens.push(new token (8, 7, 8, "red"));
    tokens.push(new token (9, 8, 1, "red"));
    tokens.push(new token (10, 8, 3, "red"));
    tokens.push(new token (11, 8, 5, "red"));
    tokens.push(new token (12, 8, 7, "red"));

    for(var i = 0; i<tiles.length; i++){
        for(var j=0; j<tokens.length; j++){
            if(tokens[j].getCol() == tiles[i].getCol() && tokens[j].getRow() == tiles[i].getRow()){
                tiles[i].setAvailable(false);
            }
            else{
                tiles[i].setAvailable(true);
            }


        }
        console.log(tiles[i].getCol() + " " + tiles[i].getRow() + " " + tiles[i].getAvailable())

    }

    console.log(tiles[1].getAvailable());
    
}

function move(token){
    document.getElementById("" + token + "").style.transform = "translate(200%, 300%)";
}