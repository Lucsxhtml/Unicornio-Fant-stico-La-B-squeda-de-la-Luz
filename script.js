body {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: Arial, sans-serif;
    background-color: #000;
    color: #fff;
}

#game-container {
    position: relative;
    width: 400px;
    height: 400px;
    background-color: #222;
    border: 2px solid #fff;
    overflow: hidden;
}

#unicorn {
    width: 30px;
    height: 30px;
    background-image: url('https://png.pngtree.com/png-vector/20240705/ourmid/pngtree-unicorn-cartoon-clipart-vector-png-image_12983571.png');
    background-size: cover;
    position: absolute;
    transition: all 0.1s;
}

#cat {
    width: 30px;
    height: 30px;
    background-image: url('https://png.pngtree.com/png-vector/20230817/ourmid/pngtree-cute-angry-cat-sticker-clipart-vector-png-image_7003814.png');
    background-size: cover;
    position: absolute;
}

.dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
}

/* Posicionando los puntos */
.dot:nth-child(2) { top: 30px; left: 30px; }
.dot:nth-child(3) { top: 30px; left: 300px; }
.dot:nth-child(4) { top: 350px; left: 30px; }
.dot:nth-child(5) { top: 350px; left: 300px; }
.dot:nth-child(6) { top: 150px; left: 150px; }
.dot:nth-child(7) { top: 100px; left: 100px; }
.dot:nth-child(8) { top: 200px; left: 250px; }
.dot:nth-child(9) { top: 250px; left: 50px; }
.dot:nth-child(10) { top: 100px; left: 250px; }
.dot:nth-child(11) { top: 250px; left: 200px; }
.dot:nth-child(12) { top: 50px; left: 200px; }
.dot:nth-child(13) { top: 200px; left: 150px; }

.decoration {
    width: 50px;
    height: 50px;
    background-size: cover;
    position: absolute;
}

/* Posicionando las decoraciones */
.decoration:nth-child(14) { top: 50px; left: 100px; }
.decoration:nth-child(15) { top: 250px; left: 150px; }
.decoration:nth-child(16) { top: 100px; left: 300px; }
