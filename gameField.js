$(document).ready(init);
function init() {

    const BLOCK_HEIGHT = 50;
    const BLOCK_WIDTH = 50;

    var background = new Image();
    background.src = 'images/background.png';
    var mainCharImg = new Image();
    mainCharImg.src = 'images/mainCharacter.gif';
    var needsToBe = new Image();
    needsToBe.src = 'images/toBePut.bmp';
    var land = new Image();
    land.src = "images/sprite.png";

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');

    var gameField = [    //----------------------------> X RASTE HORIZONTALNO
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],    //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'X', 1],  //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |  Y RASTE NADOLO
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |
        [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],    //  |
        [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]     //  |
    ];

    var charPos = {
        x: 5,
        y: 8
    };

    var direction = '';

    function update(direction) {
        ctx.clearRect(0, 0, 800, 600);
        ctx.drawImage(background, 0, 0, 480, 320, 0, 0, 800, 600);
        for (let row = 0; row < gameField.length; row++) {//redove na matrix
            for (let col = 0; col < gameField[row].length; col++) {//koloni na matrix
                //PROVERKA KYDE SA STENI
                if (gameField[row][col] === 1) {
                    ctx.drawImage(land, 0, 0, 58, 58, col * BLOCK_HEIGHT, row * BLOCK_WIDTH, BLOCK_HEIGHT, BLOCK_WIDTH)
                }
                //PROVERKA KYDE E GEROQ
                if (gameField[row][col] === 'H') {
                    ctx.save();
                    //PROVERKA NAKKYDE SE DVIJI
                    switch (direction) {
                        case 'R' :
                            //             IZMESTVANE NALQVO NADQSNO    ,//IZMESTVANO NAGORE NADOLO
                            ctx.translate(charPos.y * BLOCK_HEIGHT + 100, charPos.x * BLOCK_WIDTH);
                            ctx.rotate(Math.PI / 2);
                            break;
                        case 'U' :
                            //           IZMESTVANE NALQVO NADQSNO, //IZMESTVANO NAGORE NADOLO
                            ctx.translate(charPos.y * BLOCK_HEIGHT, charPos.x * BLOCK_WIDTH - 50);
                            ctx.rotate(Math.PI / 90);
                            break;
                        case 'L' :
                            //             IZMESTVANE NALQVO NADQSNO   , //IZMESTVANO NAGORE NADOLO
                            ctx.translate(charPos.y * BLOCK_HEIGHT - 50, charPos.x * BLOCK_WIDTH + 50);
                            ctx.rotate(15 * Math.PI / 2);
                            break;
                        case 'D' :
                            //             IZMESTVANE NALQVO NADQSNO   , //IZMESTVANO NAGORE NADOLO
                            ctx.translate(charPos.y * BLOCK_HEIGHT + 50, charPos.x * BLOCK_WIDTH + 100);
                            ctx.rotate(Math.PI);
                            break;
                    }
                    ctx.drawImage(mainCharImg, 0, 0, 64, 64, 0, 0, BLOCK_HEIGHT, BLOCK_WIDTH)
                    charPos.x = row;
                    charPos.y = col;
                    ctx.restore();
                }
                //PROVERKA KYDE TRQBVA DA SE BUTNAT KUTIIKITE
                // if (gameField[row][col] === 'X') {
                //     ctx.drawImage(needsToBe, 0, 0, 64, 63, col*BLOCK_HEIGHT, row*BLOCK_WIDTH, BLOCK_HEIGHT, BLOCK_WIDTH)
                //  }
            }
        }
    }

    //proverka koe kopche e natisnato
    (window).addEventListener('keydown', function (event) {
        switch (event.code) {
            case 'ArrowLeft' :
                if (gameField[charPos.x][charPos.y - 1] != 1) {
                    gameField[charPos.x][charPos.y] = 0;
                    gameField[charPos.x][charPos.y - 1] = 'H';
                    direction = 'L';
                    update(direction);
                }

                break;
            case 'ArrowRight' :
                if (gameField[charPos.x][charPos.y + 1] != 1) {
                    gameField[charPos.x][charPos.y] = 0;
                    gameField[charPos.x][charPos.y + 1] = 'H';
                    direction = 'R';
                    update(direction);
                }
                break;
            case 'ArrowDown' :
                if (gameField[charPos.x + 1][charPos.y] != 1) {
                    gameField[charPos.x][charPos.y] = 0;
                    gameField[charPos.x + 1][charPos.y] = 'H';
                    direction = 'D';
                    update(direction);
                }
                break;
            case 'ArrowUp' :
                if (gameField[charPos.x - 1][charPos.y] != 1) {
                    gameField[charPos.x][charPos.y] = 0;
                    gameField[charPos.x - 1][charPos.y] = 'H';
                    direction = 'U';
                    update(direction);
                }
                break;
        }
    })

}
