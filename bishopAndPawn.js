function bishopAndPawn(bishop, pawn) {
    var x = ["a", "b", "c", "d", "e", "f", "g", "h"];
    var y = ["1", "2", "3", "4", "5", "6", "7", "8"];
    var spots = [];
    var bishopPosition = bishop.split("");
    var xPosition = x.indexOf(bishopPosition[0]);
    var yPosition = y.indexOf(bishopPosition[1]);
    function topLeft(xPos, yPos) {
        while (xPos >= 1 && yPos < 7) {
            xPos--;
            yPos++;
            spots.push(x[xPos] + y[yPos])
        }
    }
    function topRight(xPos, yPos) {
        while (xPos < 7 && yPos < 7) {
            xPos++;
            yPos++;
            spots.push(x[xPos] + y[yPos])
        }
    }
    function bottomLeft(xPos, yPos) {
        while (xPos >= 1 && yPos >= 1) {
            xPos--;
            yPos--;
            spots.push(x[xPos] + y[yPos]);
        }
    }
    function bottomRight(xPos, yPos){
        while (xPos < 7 && yPos >= 1){
            xPos++;
            yPos--;
            spots.push(x[xPos] + y[yPos]);
        }
    }
    topLeft(xPosition, yPosition);
    topRight(xPosition, yPosition);
    bottomLeft(xPosition, yPosition);
    bottomRight(xPosition, yPosition);
    console.log(spots);
    if (spots.indexOf(pawn) != -1){
        return true;
    } else {
        return false;
    }

}

bishopAndPawn("e7", "a3")
