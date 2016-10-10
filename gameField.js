$(document).ready(init);
function init() {
    var background = new Image();
    background.src = 'images/background.png';
    var mainCharImg = new Image();
    mainCharImg.src = 'images/mainCharacter.gif';
    var needsToBe = new Image();
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var matrix = [
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 'H', 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
    ];
    var land = new Image();
    land.src = "images/sprite.png";
    let row = "";
    var charPos = {
        x: 6,
        y: 8
    };

    function update() {
        ctx.clearRect(0, 0 , 800, 600);
        ctx.drawImage(background, 0, 0, 480, 320, 0, 0, 800, 600);
        for (let i = 0; i < 16; i++) {//redove na matrix
            for (let j = 0; j < 12; j++) {//koloni na matrix
                if (matrix[j][i] === 1) {
                    ctx.drawImage(land, 0, 0, 58, 58, i * 50, j * 50, 50, 50)
                }
                if (matrix[j][i] === 'H') {
                    ctx.save();
                    //ctx.translate(i*50+50, j*50);
                    //ctx.rotate(Math.PI/2);
                    ctx.drawImage(mainCharImg, 0, 0, 64, 64, 0, 0, 50, 50)
                    charPos.x = j;
                    charPos.y = i;
                    ctx.restore();
                    ctx.strokeRect(charPos.y*50,charPos.x*50,50, 50);
                }
            }
        }
    }

    (window).addEventListener('keydown', function (event) {
        switch (event.code) {
            case 'ArrowLeft' :
                if(matrix[charPos.x][charPos.y-1] != 1){
                matrix[charPos.x][charPos.y] = 0;
                matrix[charPos.x][charPos.y-1] = 'H';
                update();
                }
                break;
            case 'ArrowRight' :
                if(matrix[charPos.x][charPos.y+1] != 1){
                    matrix[charPos.x][charPos.y] = 0;
                    matrix[charPos.x][charPos.y+1] = 'H';
                    update();
                }
                break;
            case 'ArrowDown' :
                if(matrix[charPos.x+1][charPos.y] != 1){
                    matrix[charPos.x][charPos.y] = 0;
                    matrix[charPos.x+1][charPos.y] = 'H';
                    update();
                }
                break;
            case 'ArrowUp' :
                if(matrix[charPos.x-1][charPos.y] != 1){
                    matrix[charPos.x][charPos.y] = 0;
                    matrix[charPos.x-1][charPos.y] = 'H';
                    update();
                }
                break;
        }
    })

}
