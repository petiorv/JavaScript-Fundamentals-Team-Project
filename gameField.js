$(document).ready(main);
function main(endGameMsg, level) {
    //DEFINE ALL GLOBAL VARIABLES
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    let startSrc = new Image();
    let looser = new Image();
    let winner = new Image();
    let beatTheGameScreen = new Image();
    beatTheGameScreen.src = 'images/beatthegame.jpg'
    winner.src = 'images/levelWin.jpg';
    looser.src = 'images/looser.jpg';
    startSrc.src = 'images/startScreen.jpg';
    var background = new Image();
    background.src = 'images/background.png';
    var mainCharImg = new Image();
    mainCharImg.src = 'images/mainCharacter.gif';
    var needsToBe = new Image();
    needsToBe.src = 'images/toBePut.bmp';
    var land = new Image();
    land.src = "images/sprite.png";
    var box = new Image();
    box.src = "images/box.bmp";
    var waterTile = new Image();
    waterTile.src = "images/water.gif";
    var waterWall = new Image();
    waterWall.src = "images/waterroad.bmp";

    var levels = [
        [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 'b', 0, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 'H', 1, 1, 1, 1, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 'X', 1, 0, 0, 0, 0, 'w', 0, 0, 0, 0, 'b', 0, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 'b', 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ],
        [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 'X', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 'X', 1, 1],
            [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'X', 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 0, 1, 'b', 1, 1, 1, 1, 0, 1, 0, 1, 1],
            [1, 0, 1, 0, 1, 'w', 0, 'w', 'H', 1, 1, 0, 0, 0, 1, 1],
            [1, 0, 'b', 0, 1, 'w', 0, 'w', 0, 0, 1, 0, 0, 0, 1, 1],
            [1, 0, 'w', 1, 1, 0, 0, 0, 0, 'b', 1, 0, 0, 'w', 'w', 1],
            [1, 0, 'w', 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 'w', 'w', 1],
            [1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 'w', 'w', 1],
            [1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

            [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         [1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1],
         [1, 1, 0, 1, 0, 1, 0, 'w', 'w', 'w', 0, 0, 'b', 0, 1, 1],
         [1, 1, 0, 'b', 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 0, 0, '0', 1, 1, 1, 1, 0, 1, 0, 1, 1],
         [1, 'w', 0, 1, 0, 0, 'w', 0, "H", 1, 1, 0, 0, 0, 0, 1],
         [1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 1],
         [1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 0, 0, 1],
         [1, 1, 0, 'b', 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1],
         [1, 1, 0, 0, 0, 1, 'X', 'X', 'X', 1, 1, 1, 1, 1, 1, 1],
         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]],

         [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         [1, 'X', 'X', 'w', 1, 1, 1, 1, 1, 1, 0, 0, 1, 1, 1, 1],
         [1, 'X', 'X', 0, 0, 1, 0, 0, 0, 0, 0, 'b', 0, 0, 1, 1],
         [1, 0, 0, 'w', 0, 1, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 0, 0, 0, 1, 1, 1, 1, 0, 1, 0, 1, 1],
         [1, 1, 0, 1, 0, 0, 0, 0, 'H', 1, 1, 0, 'w', 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0, 0, 0, 0, 1, 0, 1, 1, 0, 1],
         [1, 1, 0, 1, 1, 0, 0, 0, 0, 'b', 0, 0, 0, 0, 0, 1],
         [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 'b', 0, 1],
         [1, 1, 0, 0, 0, 'b', 0, 'w', 0, 0, 0, 0, 1, 0, 0, 1],
         [1, 0, 0, 0, 'w', 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
         ]
    ];

    var blockWidth = canvas.height / 12;//gameField.length;
    var blockHeight = canvas.width / 16;//gameField[0].length;

//END DEFINE GLOBAL VARABLES

//DRAW MAIN MENU


    if (endGameMsg == 'lose') {
        ctx.drawImage(startSrc, 0, 0);
        location.reload()
        (window).addEventListener('click', function (event) {
            if (event.clientX >= 276 && event.clientX <= 509)
                if (event.clientY >= 244 && event.clientY <= 327) {
                    init(level);
                }
        });

    }

    else if (endGameMsg == 'win' && level != 4) {
        ctx.drawImage(winner, 0, 0);

        (window).addEventListener('click', function (event) {
            if (event.clientX >= 276 && event.clientX <= 509)
                if (event.clientY >= 244 && event.clientY <= 327) {
                    ctx.clearRect(0, 0, 800, 600);
                    init(level);
                }
            if (event.clientX >= 231 && event.clientX <= 579)
                if (event.clientY >= 370 && event.clientY <= 456) {
                    init(--level);
                }
        });
    }
    else if (endGameMsg == 'win' && level == 4) {
        ctx.drawImage(beatTheGameScreen, 0, 0);
    }
    else {
        level = 0;
        ctx.drawImage(startSrc, 0, 0);
        (window).addEventListener('click', function (event) {
            if (event.clientX >= 276 && event.clientX <= 509)
                if (event.clientY >= 244 && event.clientY <= 327) {
                    init(level);
                }
        });
    }


    function init(level) {
        let gameField = levels[level];
        console.log(gameField);
        let nextLvl = Number(level) + 1;
        let movesMade = 0;
        //DEFINE CHARACTER STARTING POSITION AND STARTER DIRECTION
        var charPos = {
            x: 4,
            y: 8
        };
        var direction = 'D';
        render(direction);
        if (!checkIfWin(gameField))
            update();


        function render(direction) {
            ctx.clearRect(0, 0, 800, 600);
            if (checkIfWin(gameField) && movesMade > 1) {
                setTimeout(win, 200);
                function win() {
                    main('win', nextLvl);
                }

                console.log(gameField);
                gameField = undefined;
                return;
            }
            ctx.drawImage(background, 0, 0, 480, 320, 0, 0, 800, 600);
            for (let row = 0; row < gameField.length; row++) {//redove na matrix
                for (let col = 0; col < gameField[row].length; col++) {//koloni na matrix

                    //PROVERKA KYDE E GEROQ
                    if (gameField[row][col] === 'H') {
                        ctx.save();
                        //PROVERKA NAKKYDE SE DVIJI
                        switch (direction) {
                            case 'R' :
                                //             IZMESTVANE NALQVO NADQSNO    ,//IZMESTVANO NAGORE NADOLO
                                ctx.translate(charPos.y * blockHeight + 100, charPos.x * blockWidth);
                                ctx.rotate(Math.PI / 2);
                                break;
                            case 'U' :
                                //           IZMESTVANE NALQVO NADQSNO, //IZMESTVANO NAGORE NADOLO
                                ctx.translate(charPos.y * blockHeight, charPos.x * blockWidth - 50);
                                ctx.rotate(Math.PI / 90);
                                break;
                            case 'L' :
                                //             IZMESTVANE NALQVO NADQSNO   , //IZMESTVANO NAGORE NADOLO
                                ctx.translate(charPos.y * blockHeight - 50, charPos.x * blockWidth + 50);
                                ctx.rotate(15 * Math.PI / 2);
                                break;
                            case 'D' :
                                //             IZMESTVANE NALQVO NADQSNO   , //IZMESTVANO NAGORE NADOLO
                                ctx.translate(charPos.y * blockHeight + 50, charPos.x * blockWidth + 100);
                                ctx.rotate(Math.PI);
                                break;
                        }
                        ctx.drawImage(mainCharImg, 0, 0, 64, 64, 0, 0, blockHeight, blockWidth);
                        charPos.x = row;
                        charPos.y = col;
                        ctx.restore();
                    }

                    //RISUVA STENI
                    if (gameField[row][col] == 1) {
                        ctx.drawImage(land, 0, 0, 58, 58, col * blockHeight, row * blockWidth, blockHeight, blockWidth)
                    }

                    //RISUVA KUTIIKITE
                    if (gameField[row][col] === 'b') {
                        ctx.drawImage(box, 0, 0, 65, 65, col * blockHeight, row * blockWidth, blockHeight, blockWidth);
                    }

                    //RISUVA KYDE TRQBVA DA SE BUTNAT KUTIIKITE
                    if (gameField[row][col] === 'X') {
                        ctx.drawImage(needsToBe, 0, 0, 64, 63, col * blockHeight, row * blockWidth, blockHeight, blockWidth)
                    }

                    //RISUVA VODA
                    if (gameField[row][col] == 'w') {
                        ctx.drawImage(waterTile, 0, 0, 32, 32, col * blockHeight, row * blockWidth, blockHeight, blockWidth)
                    }

                    //RISUVA VODEN PYT
                    if (gameField[row][col] == 'wr') {
                        ctx.drawImage(waterWall, 0, 0, 58, 58, col * blockHeight, row * blockWidth, blockHeight, blockWidth);
                    }
                }
            }

        }


        //PROVERKA DALI SE PECHELI, HAMALSKATA
        function checkIfWin(gameField) {
            for (let i = 0; i < gameField.length; i++) {
                for (let j = 0; j < gameField[i].length; j++) {
                    if (gameField[i][j] == 'X') {
                        return false;
                    }
                }
            }
            return true;
        }

        //proverka koe kopche e natisnato
        function update() {
            (window).addEventListener('keydown', function (event) {
                var nextTiles = {};
                movesMade++;
                switch (event.code) {
                    case 'ArrowLeft' :
                        nextTiles = checkNextTiles(charPos.x, charPos.y, 'L');
                        if (nextTiles.next == 'empty') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x][charPos.y - 1] = 'H';
                            direction = 'L';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box'
                            && (nextTiles.secondNext == 'empty')) {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x][charPos.y - 1] = 'H';
                            gameField[charPos.x][charPos.y - 2] = 'b';
                            direction = 'L';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box' && nextTiles.secondNext == 'hole') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x][charPos.y - 1] = 'H';
                            gameField[charPos.x][charPos.y - 2] = 0;
                            direction = 'L';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box' && nextTiles.secondNext == 'water') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x][charPos.y - 1] = 'H';
                            gameField[charPos.x][charPos.y - 2] = 'wr';
                            direction = 'L';
                            render(direction);
                        }
                        else if (nextTiles.next == 'water') {
                            handleGameOver('lose');
                        }
                        break;
                    case 'ArrowRight' :
                        nextTiles = checkNextTiles(charPos.x, charPos.y, 'R');
                        if (nextTiles.next == 'empty') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x][charPos.y + 1] = 'H';
                            direction = 'R';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box'
                            && (nextTiles.secondNext == 'empty')) {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x][charPos.y + 1] = 'H';
                            gameField[charPos.x][charPos.y + 2] = 'b';
                            direction = 'R';
                            render(direction);
                        } else if (nextTiles.next == 'box' && nextTiles.secondNext == 'hole') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x][charPos.y + 1] = 'H';
                            gameField[charPos.x][charPos.y + 2] = 0;
                            direction = 'R';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box' && nextTiles.secondNext == 'water') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x][charPos.y + 1] = 'H';
                            gameField[charPos.x][charPos.y + 2] = 'wr';
                            direction = 'R';
                            render(direction);
                        }
                        else if (nextTiles.next == 'water') {
                            handleGameOver('lose');
                        }
                        break;
                    case 'ArrowDown' :
                        nextTiles = checkNextTiles(charPos.x, charPos.y, 'D');
                        if (nextTiles.next == 'empty') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x + 1][charPos.y] = 'H';
                            direction = 'D';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box'
                            && (nextTiles.secondNext == 'empty')) {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x + 1][charPos.y] = 'H';
                            gameField[charPos.x + 2][charPos.y] = 'b';
                            direction = 'D';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box' && nextTiles.secondNext == 'hole') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x + 1][charPos.y] = 'H';
                            gameField[charPos.x + 2][charPos.y] = 0;
                            direction = 'D';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box' && nextTiles.secondNext == 'water') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x + 1][charPos.y] = 'H';
                            gameField[charPos.x + 2][charPos.y] = 'wr';
                            direction = 'D';
                            render(direction);
                        }
                        else if (nextTiles.next == 'water') {
                            handleGameOver('lose');
                        }
                        break;
                    case 'ArrowUp' :
                        nextTiles = checkNextTiles(charPos.x, charPos.y, 'U');
                        if (nextTiles.next == 'empty') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x - 1][charPos.y] = 'H';
                            direction = 'U';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box'
                            && (nextTiles.secondNext == 'empty')) {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x - 1][charPos.y] = 'H';
                            gameField[charPos.x - 2][charPos.y] = 'b';
                            direction = 'U';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box' && nextTiles.secondNext == 'hole') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x - 1][charPos.y] = 'H';
                            gameField[charPos.x - 2][charPos.y] = 0;
                            direction = 'U';
                            render(direction);
                        }
                        else if (nextTiles.next == 'box' && nextTiles.secondNext == 'water') {
                            gameField[charPos.x][charPos.y] = 0;
                            gameField[charPos.x - 1][charPos.y] = 'H';
                            gameField[charPos.x - 2][charPos.y] = 'wr';
                            direction = 'U';
                            render(direction);
                        }
                        else if (nextTiles.next == 'water') {
                            handleGameOver('lose');
                        }
                        break;
                }
                function checkNextTiles(charPosX, charPosY, direction) {
                    let next, secondNext;
                    let nextTilesObj = {};
                    switch (direction) {
                        case 'U' :
                            next = gameField[charPos.x - 1][charPos.y];
                            secondNext = gameField[charPos.x - 2][charPos.y];
                            switch (next) {
                                case 0 :
                                    nextTilesObj.next = 'empty';
                                    break;
                                case 1 :
                                    nextTilesObj.next = 'wall';
                                    break;
                                case 'X' :
                                    nextTilesObj.next = 'hole';
                                    break;
                                case 'b' :
                                    nextTilesObj.next = 'box';
                                    break;
                                case 'w' :
                                    nextTilesObj.next = 'water';
                                    break;
                                case 'wr' :
                                    nextTilesObj.next = 'waterWall';
                                    break;
                            }
                            switch (secondNext) {
                                case 0 :
                                    nextTilesObj.secondNext = 'empty';
                                    break;
                                case 1 :
                                    nextTilesObj.secondNext = 'wall';
                                    break;
                                case 'X' :
                                    nextTilesObj.secondNext = 'hole';
                                    break;
                                case 'b' :
                                    nextTilesObj.secondNext = 'box';
                                    break;
                                case 'w' :
                                    nextTilesObj.secondNext = 'water';
                                    break;
                            }
                            break;
                        case 'D' :
                            next = gameField[charPos.x + 1][charPos.y];
                            secondNext = gameField[charPos.x + 2][charPos.y];
                            switch (next) {
                                case 0 :
                                    nextTilesObj.next = 'empty';
                                    break;
                                case 1 :
                                    nextTilesObj.next = 'wall';
                                    break;
                                case 'X' :
                                    nextTilesObj.next = 'hole';
                                    break;
                                case 'b' :
                                    nextTilesObj.next = 'box';
                                    break;
                                case 'w' :
                                    nextTilesObj.next = 'water';
                                    break;
                                case 'wr' :
                                    nextTilesObj.next = 'waterWall';
                                    break;
                            }
                            switch (secondNext) {
                                case 0 :
                                    nextTilesObj.secondNext = 'empty';
                                    break;
                                case 1 :
                                    nextTilesObj.secondNext = 'wall';
                                    break;
                                case 'X' :
                                    nextTilesObj.secondNext = 'hole';
                                    break;
                                case 'b' :
                                    nextTilesObj.secondNext = 'box';
                                    break;
                                case 'w' :
                                    nextTilesObj.secondNext = 'water';
                                    break;
                            }
                            break;
                        case 'L' :
                            next = gameField[charPos.x][charPos.y - 1];
                            secondNext = gameField[charPos.x][charPos.y - 2];
                            switch (next) {
                                case 0 :
                                    nextTilesObj.next = 'empty';
                                    break;
                                case 1 :
                                    nextTilesObj.next = 'wall';
                                    break;
                                case 'X' :
                                    nextTilesObj.next = 'hole';
                                    break;
                                case 'b' :
                                    nextTilesObj.next = 'box';
                                    break;
                                case 'w' :
                                    nextTilesObj.next = 'water';
                                    break;
                                case 'wr' :
                                    nextTilesObj.next = 'waterWall';
                                    break;
                            }
                            switch (secondNext) {
                                case 0 :
                                    nextTilesObj.secondNext = 'empty';
                                    break;
                                case 1 :
                                    nextTilesObj.secondNext = 'wall';
                                    break;
                                case 'X' :
                                    nextTilesObj.secondNext = 'hole';
                                    break;
                                case 'b' :
                                    nextTilesObj.secondNext = 'box';
                                    break;
                                case 'w' :
                                    nextTilesObj.secondNext = 'water';
                                    break;
                                case 'wr':
                                    nextTilesObj.secondNext = 'waterWall';
                                    break;
                            }
                            break;
                        case 'R' :
                            next = gameField[charPos.x][charPos.y + 1];
                            secondNext = gameField[charPos.x][charPos.y + 2];
                            switch (next) {
                                case 0 :
                                    nextTilesObj.next = 'empty';
                                    break;
                                case 1 :
                                    nextTilesObj.next = 'wall';
                                    break;
                                case 'X' :
                                    nextTilesObj.next = 'hole';
                                    break;
                                case 'b' :
                                    nextTilesObj.next = 'box';
                                    break;
                                case 'w' :
                                    nextTilesObj.next = 'water';
                                    break;
                                case 'wr' :
                                    nextTilesObj.next = 'waterWall';
                                    break;
                            }
                            switch (secondNext) {
                                case 0 :
                                    nextTilesObj.secondNext = 'empty';
                                    break;
                                case 1 :
                                    nextTilesObj.secondNext = 'wall';
                                    break;
                                case 'X' :
                                    nextTilesObj.secondNext = 'hole';
                                    break;
                                case 'b' :
                                    nextTilesObj.secondNext = 'box';
                                    break;
                                case 'w' :
                                    nextTilesObj.secondNext = 'water';
                                    break;
                            }
                            break;
                    }
                    return nextTilesObj;
                }  //PROVERQVA SLEDVASHTITE POZICII, VRYSHTA OBEKT
            });
        }

        function handleGameOver(wayOfLosing) {
            switch (wayOfLosing) {
                case 'lose' :

                    ctx.clearRect(0, 0, 800, 600);

                    gameField = undefined;
                    main('lose');
                    break;
            }
            return;
        }
    }
}