//fonctions de déplacement inspirées de :
//https://editor.p5js.org/enickles/sketches/H1n19TObz


var mirror_checked = false;
var selected = null;
var pieces = [];
var jeu = false;
var a = [];

function setup() {
	jeu = false;
	createCanvas(910, 1500);
	background(50);
	textSize(32);
	fill(0, 102, 153);
	start = createButton("Commencez");
	start.position(width/2,height/2);
	start.size(200,100);
	start.mousePressed(state);
}

function draw() { 
	if (jeu) {
		background(50);
		fill(0);
		strokeWeight(1);
		rect(80,80,750,625);
		strokeWeight(1);
		fill(255);
		stroke(0); 
		//canva
		for(i = 1; i <= 6;i++) {
			for(j=1; j <= 5; j++) {
				rect(i*125-45, j*125-45, 125,125);
			}
		}
	
		textSize(32);
		text("Grab pieces on their center",270, 40)
	
		if (mirror_checked) {
			rotate_left.hide();
			rotate_right.hide();
		} else {
			rotate_left.show();
			rotate_right.show();
		}
		
		a.forEach(element => element.afficher(mouseX, mouseY));
	}
}

function jouer() {
	start.hide();
	rotate_left = createButton("rotate left <--");
	rotate_left.position(50,1000);
	rotate_left.size(200,100);
	rotate_left.mousePressed(rotationL);

	rotate_right = createButton("rotate right -->");
	rotate_right.position(350,1000);
	rotate_right.size(200,100);
	rotate_right.mousePressed(rotationR);

	mirror = createButton("|| mirror ||");
	mirror.position(650,1000);
	mirror.size(200,100);
	mirror.mousePressed(rotationM);

	home = createButton("Menu");
	home.position(width/2,1200);
	home.size(200,100);
	home.mousePressed(state);

	//vert clair
	piece1 = new Piece4(1, 4, "e", false, color(134,207,11), [205,80,125,125], [80,80,125,125], [330,80,455,205,330,205], [80,205,125,125]);
	//new Piece4(1, 4, "o", color(134,207,11),[80,205,205,330,205,205], [330,205,125,125], [205,205,125,125], [330,80,125,125]);
	//bleu foncé
	piece2 = new Piece4(2, 4, "s", false, color(3,13,182), [705,205,125,125], [705,80,125,125], [830,330,705,455,705,330], [705,205,705,80,580,80]);
	//new Piece4(2, 4, "o", color(3,13,182), [80,205,205,330,205,205], [205,205,125,125], [330,205,125,125], [330,205,455,80,455,205]);
	//jaune
	piece3 = new Piece4(3, 4, "n", false, color(235,238,24), [705,455,125,125], [705,580,125,125], [705,455,830,330,830,455], [580,580,705,705,705,580]);
	//new Piece4(3, 4, "o", color(235,238,24), [80,205,205,330,205,205], [205,205,125,125], [330,205,125,125], [330,330,330,455,455,330]);
	//orange 
	piece4 = new Piece5(4, 5, "o", false, color(214,122,21), [455,580,125,125], [330,455,125,125], [330,580,455,705,455,580], [455,580,455,455,580,580], [580,580,580,705,705,705]);
	//new Piece5(4, 5, "o", color(214,122,21), [205,330,330,455,330,330], [205,205,125,125], [330,330,125,125], [330,330,330,205,455,330], [455,330,455,455,580,455]);
	//violet 
	piece5 = new Piece5(5, 5, "o", false, color(88,0,138), [455,80,125,125], [580,330,580,205, 455,205], [705,205,580,205,580,330], [705,205,580,205,580,80], [455,205,455,80,330,80]);
	//new Piece5(5, 5, "o", color(88,0,138), [205,330,330,205,330,330], [205,330,330,455,330,330], [330,330,125,125], [330,330,330,205,455,330], [455,330,455,455,580,455]);
	//rouge
	piece6 = new Piece3(6, 3, "n", false, color(255,0,0),[80,455,125,125], [205,455,125,125], [80,330,80,455,205,455]);
	//new Piece3(6, 3, "o", color(255,0,0),[330,455,125,125], [455,455,125,125], [455,455,580,455,580,330]);
	//bleu clair
	piece7 = new Piece3(7, 3, "o", false, color(83,225,230), [205,330,125,125],  [330,330,330,455,455,455], [205,455,205,330,80,330]);
	//new Piece3(7, 3, "o", color(83,225,230),[205,455,330,455,330,330], [330,330,125,125], [455,455,455,330,580,330]);
	//vert foncé
	piece8 = new Piece3(8, 3, "e", false, color(2,122,36), [205,580,125,125], [80,580,125,125], [330,705,455,705,330,580]);
	//new Piece3(8, 3, "o", color(2,122,36),[705,330,125,125], [705,455,125,125], [830,330,830,205,705,330]);
	//rose
	piece9 = new Piece5(9, 5, "o", false, color(253,50,158), [330,205,125,125], [205,205,125,125], [455,455,455,330,330,330], [580,330,455,330,455,455], [580,330,455,330,455,205]);
	//new Piece5(9, 5, "o", color(253,50,158), [80,205,205,205,205,80], [80,205,205,205,205,330], [205,80,205,205, 330,205], [205,205,125,125], [330,205,125,125]);
	//cyan
	piece10 = new Piece5(10, 5, "o", false, color(76,207,184), [580,330,125,125], [580,455,125,125], [580,580,580,455,455,455], [580,330,580,455,455,455], [705,205,705,330,580,330]);
	//new Piece5(10, 5, "o", color(76,207,184), [580,80,125,125], [705,80,125,125], [455,80,580,80,580,205], [580,205,705,205,705,330], [830,205,705,205,705,330]);
	pieces = [];
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

	a = [];
	for (let i = 0; i < pieces.length; i++) {
			append(a, pieces[i]);
	}
}
  
function state() {
	if (jeu) {
		rotate_left.hide();
		rotate_right.hide();
		mirror.hide();
		home.hide();
		jeu = false;
		setup();
	} else {
		start.hide();
		jouer();
		jeu = true;
	}	
}
function selectedPiece() {
	sX = mouseX;
	sY = mouseY;
	for (let i = 0; i < pieces.length; i++) {
		if (sX >= pieces[i].p1[0] && sX <= pieces[i].p1[0] + 125 && sY >= pieces[i].p1[1] && sY <= pieces[i].p1[1] + 125) {
			selected = i+1;
			print("selectionnee : "+selected);
		}
	}

	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
			var fromIndex = a.indexOf(pieces[i]);
			var len = a.length;
			var elt = a.splice(fromIndex, 1)[0];
			a.splice(len, 0, elt);
		}
	}
}

function mousePressed() {
	selectedPiece();
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
			pieces[i].pressed(mouseX, mouseY);
		}
	}
}

function mouseReleased() {
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
			pieces[i].dragging = false;
			pieces[i].clip();
		}
	}
}

function clipPiece() {
	sX = mouseX;
	sY = mouseY;
}

function rotationL() {
	print("rotationL");
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
			print("rotationL sur : "+selected);
			pieces[i].rotationL();
		}
	}
}

function rotationR() {
	print("rotationR");
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
			print("rotationR sur : "+selected);
			pieces[i].rotationR();
		}
	}
}

function rotationM() {
	print("rotationM");
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
			print("rotationM sur : "+selected);
			pieces[i].rotationM();
			if (mirror_checked) {
				mirror_checked = false;
			} else mirror_checked = true;
			print(mirror_checked);
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

/*
  fill('rgba(214,122,21,0.8)');
  rect(i7,j7,125,125);
  rect(g7,h7,125,125);
  triangle(t7,u7,v7,w7,x7,y7);
  triangle(x7,y7,z7,a7,b7,c7);
  triangle(b7,c7,d7,e7,k7,l7);

  //piece violette
  fill('rgba(88,0,138,0.8)');
  triangle(g6,h6,t6,u6,v6,w6);
  triangle(g6,h6,t6,u6,x6,y6);
  rect(i6,j6,125,125);
  triangle(v6,w6,t6,u6,z6,a6);
  triangle(z6,a6,b6,c6,d6,e6);

  	//piece rose
	fill('rgba(253,50,158,0.8)');
	triangle(i3,j3,t3,u3, v3,w3);
	triangle(i3,j3, t3,u3,x3, y3);
	triangle(v3, w3,t3,u3, z3,a3);
	rect(d3,e3,125, 125);
	rect(b3 ,c3,125, 125);
	
	//piece cyan
  
	fill('rgba(51, 196, 92,0.8)');
	rect(i5,j5,125,125);
	rect(g5,h5,125,125);
	triangle(t5,u5,v5,w5,x5,y5);
	triangle(x5,y5,z5,a5,b5,c5);
	triangle(d5,e5,z5,a5,b5,c5);

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