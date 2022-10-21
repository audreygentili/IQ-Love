var mirror_checked = false;
var selected = 1;
var pieces = [];
var basex, basey;

function setup() {
	createCanvas(910, 1500);
	background(50);
	//vert clair
	piece1 = new Piece4(1, 4, "o", color(134,207,11),[80,205,205,330,205,205], [205,205,125,125], [330,205,125,125], [330,80,125,125]);
	//bleu foncé
	piece2 = new Piece4(2, 4, "o", color(3,13,182), [80,205,205,330,205,205], [205,205,125,125], [330,205,125,125], [330,205,455,80,455,205]);
	//jaune
	piece3 = new Piece4(3, 4, "o", color(235,238,24), [80,205,205,330,205,205], [205,205,125,125], [330,205,125,125], [330,330,330,455,455,330]);
	//orange 
	piece4 = new Piece5(4, 5, "o", color(214,122,21), [205,330,330,455,330,330], [205,205,125,125], [330,330,125,125], [330,330,330,205,455,330], [455,330,455,455,580,455]);
	//violet 
	piece5 = new Piece5(5, 5, "o", color(88,0,138), [205,330,330,205,330,330], [205,330,330,455,330,330], [330,330,125,125], [330,330,330,205,455,330], [455,330,455,455,580,455]);
	//rouge
	piece6 = new Piece3(6, 3, "o", color(255,0,0),[330,455,125,125], [455,455,125,125], [455,455,580,455,580,330]);
	//bleu clair
	piece7 = new Piece3(7, 3, "o", color(83,225,230),[205,455,330,455,330,330], [330,330,125,125], [455,455,455,330,580,330]);
	//vert foncé
	piece8 = new Piece3(8, 3, "o", color(2,122,36),[705,330,125,125], [705,455,125,125], [830,330,830,205,705,330]);
	//rose
	piece9 = new Piece5(9, 5, "o", color(253,50,158), [80,205,205,205,205,80], [80,205,205,205,205,330], [205,80,205,205, 330,205], [205,205,125,125], [330,205,125,125]);
	//cyan
	piece10 = new Piece5(10, 5, "o", color(76,207,184), [580,80,125,125], [705,80,125,125], [455,80,580,80,580,205], [580,205,705,205,705,330], [830,205,705,205,705,330]);
	append(pieces, piece1);
	append(pieces, piece2);
	append(pieces, piece3);
	append(pieces, piece4);
	append(pieces, piece5);
	append(pieces, piece6);
	append(pieces, piece7);
	append(pieces, piece8);
	append(pieces, piece9);
	append(pieces, piece10);
	print(pieces);
}

function selectedPiece() {
  sX = mouseX;
  sY = mouseY;
  for (let i = 0; i < pieces.length; i++) {
	if(sX >= pieces[i].p2[0] && sX <= pieces[i].p2[0] + 125 && sY >= pieces[i].p2[1] && sY <= pieces[i].p2[1] + 125) {
	  selected = i+1;
	  print(selected);
	}
  }
}
  
function mousePressed() {
  selectedPiece();
  basex = mouseX;
  basey = mouseY;
}

function movePiece(x, y) {
  for (let i = 0; i < pieces.length; i++) {
	if (pieces[i].nom == selected) {
	  pieces[i].deplacement(x, y);
	}
  }
}
  
function mouseDragged() {
  if (mirror_checked == false && mouseX > 50 && mouseX < 750 && mouseY > 50 && mouseY < 625) {
	basex = mouseX-basex;
	basey = mouseY-basey;
	movePiece(basex, basey);
  }
}

function rotationR() {
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
		  pieces[i].rotationR();
		}
	}
}

function rotationL() {
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
		  pieces[i].rotationL();
		}
	}
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    rotationL();
  } else if (keyCode === RIGHT_ARROW) {
    rotationR();
  }
}

function draw() { 
  fill(0);
  strokeWeight(1);
  rect(80,80,750,625);
  strokeWeight(1);
  fill(255);
  stroke(0); 
  //canva
  for( i = 1; i <= 6;i++){
	for( j=1; j <= 5; j++){
	  rect(i*125-45, j*125-45, 125,125);
	}
  }
  
  textSize(32);
  text("Grab pieces on their center",270, 40);
  
  rotate_left = createButton("rotate left <--");
  rotate_left.position(50,800);
  rotate_left.size(200,100);
  rotate_left.mousePressed(rotationL);

  rotate_right = createButton("rotate right -->");
  rotate_right.position(350,800);
  rotate_right.size(200,100);
  rotate_right.mousePressed(rotationR)
  
  mirror = createButton("|| mirror ||");
  mirror.position(650,800);
  mirror.size(200,100);
  mirror.mousePressed();

  piece1.afficher();
  
  /*
  //piece verte claire
  fill('rgba(134,207,11,0.8)');
  triangle(80,205,205,330,205,205);
  rect(205,205,125,125);
  rect(330,205,125,125);
  rect(330,80,125,125);
  
  //piece bleue foncée

  fill('rgba(3,13,182,0.8)');
  triangle(80,205,205,330,205,205);
  rect(205,205,125,125);
  rect(330,205,125,125);
  triangle(330,205,455,80,455,205);
  
  //piece jaune

  fill('rgba(235,238,24,0.8)');
  triangle(80,205,205,330,205,205);
  rect(205,205,125,125);
  rect(330,205,125,125);
  triangle(330,330,330,455,455,330);
  
  //piece orange

  fill('rgba(214,122,21,0.8)');
  triangle(205,330,330,455,330,330);
  rect(205,205,125,125);
  rect(330,330,125,125);
  triangle(330,330,330,205,455,330);
  triangle(455,330,455,455,580,455);
  
  //piece violette

  fill('rgba(88,0,138,0.8)');
  triangle(205,330,330,205,330,330);
  triangle(205,330,330,455,330,330);
  rect(330,330,125,125);
  triangle(330,330,330,205,455,330);
  triangle(455,330,455,455,580,455); */
}