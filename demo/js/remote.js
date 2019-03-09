var Remote = function() {
    //游戏对象
    var game;
    //开始
    var start = function(type,dir) {
        var doms = {
            gameDiv: document.getElementById('remote_game'),
            nextDiv: document.getElementById('remote_next'),
            timeDiv: document.getElementById('remote_time'),
            scoreDiv: document.getElementById('remote_score'),
            resultDiv: document.getElementById('remote_gameover')
        }
        game = new Game();
        game.init(doms,type, dir);
    }
    //绑定事件按钮
    var bindEvents = function() {
        document.getElementById('left').onclick = function() {
            game.left();
        }
        document.getElementById('down').onclick = function() {
            game.down();
        }
        document.getElementById('right').onclick = function() {
            game.right();
        }
        document.getElementById('rotate').onclick = function() {
            game.rotate();
        }
        document.getElementById('fixed').onclick = function() {
            game.fixed();
        }
        document.getElementById('performNext').onclick = function() {
            game.performNext(2,2);
        }
        document.getElementById('checkClear').onclick = function() {
            game.checkClear();
        }
        document.getElementById('checkGameOver').onclick = function() {
            game.checkGameOver();
        }
        document.getElementById('setTime').onclick = function() {
            game.setTime(20);
        }
        document.getElementById('addScore').onclick = function() {
            game.addScore(Math.ceil(Math.random()*4) - 1);//生成一个介于1~4之间的整数
        }
        document.getElementById('gameover').onclick = function() {
            game.gameover();
        }
        document.getElementById('addTailLines').onclick = function() {
            game.addTailLines([[0,1,0,1,0,0,1,0,1,0]]);
        }
        document.getElementById('fall').onclick = function() {
            game.fall();
        }
    }
    //导出
    this.start = start;
    this.bindEvents = bindEvents;
}