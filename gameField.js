function init() {
    var matrix = [
        [1, 1, 1, 1, 1, 1, 1, 1],
        [1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0],
        [1, 0, 0, 0, 0, 0, 0, 0],
        [1, 1, 1, 1, 1, 1, 1, 1]
    ];

    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    var land = new Image();
    land.src="images/sprite.png";
    let row = "";
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 6; j++) {
            if ( matrix[j][i] === 1 ){
                ctx.drawImage(land,0,0,58,58,i*100,j*100,101,101)
            }
        }
    }

}
