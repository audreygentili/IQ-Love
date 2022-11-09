//fonctions de déplacement inspirées de :
//https://editor.p5js.org/enickles/sketches/H1n19TObz

var mirror_checked = false;
var selected = null;
var pieces = [];
var patternD = [];
var patternC = [];
var patternE = [];
var patternJeu;
var solutionD = [];
var solutionC = [];
var solutionE = [];
var solutionJeu;
var jeu = false;
var a = [];
var b = [];
var num;
let slider;
var di;
var mode;
var showtext = false;
var score = 0;
var p1 = [];
var p2 = [];
var p3 = [];
var p4 = [];
var p5 = [];
var tabColor = [];

function setup() {
	tabColor = [color(134,207,11),color(3,13,182),color(235,238,24),color(214,122,21),color(88,0,138),color(255,0,0),color(83,225,230),color(2,122,36),color(253,50,158),color(76,207,184)];

	var pattern81 = new Pattern(81,0,makePiece4(205,205,"e",false,2),makePiece4(330,580,"e",false,3)
	,0,makePiece5(455,80,"e",true,5),0,0,makePiece3(205,80,"e",true,8),makePiece5(580,580,"e",false,9)
	,makePiece5(705,330,"o",false,10));

	patternD.push(pattern81);


	selected = null;
	jeu = false;
	createCanvas(910, 1500);
	background(50);
	di = createDiv('Choisissez la difficulté<br/>Débutant    Confirmé     Expert');
	di.style('font-size', '32px');
	di.style('color', '#ffffff');
	di.style('text-align', 'center');
	di.position(270, 350);
	slider = createSlider(1, 3, 1, 1);
	slider.position(330, 450);
	slider.style('width', '230px');
	textSize(32);
	fill(0, 102, 153);
	start = createButton("Commencez");
	start.position(width/2,height/2);
	start.size(200,100);
	start.mousePressed(state);
}

function draw() { 
	background(50);
	if (jeu) {
		fill(0);
		strokeWeight(1);
		rect(80,80,750,625);
		strokeWeight(1);
		fill(255);
		stroke(0); 
		//canva
		for(i = 1; i <= 6; i++) {
			for(j=1; j <= 5; j++) {
				rect(i*125-45, j*125-45, 125,125);
			}
		}
	
		textSize(32);
		text("Grab pieces on their center",270, 40);
	
		if (mirror_checked) {
			rotate_left.hide();
			rotate_right.hide();
		} else {
			rotate_left.show();
			rotate_right.show();
		}
		
		a.forEach(element => element.afficher(mouseX, mouseY));

		b.forEach(element => element.afficher(0, 0));

		detecterFin();
	}
}

function jouer() {
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

	mode = slider.value();
	print(mode);
	if (mode == 1) {
		patternJeu = patternD[0];
		solutionJeu = solutionD[0];
	} else if (mode == 2) {
		patternJeu = patternC[0];
		solutionJeu = solutionC[0];
	} else {
		patternJeu = patternE[0];
		solutionJeu = solutionE[0];
	}

	pieces = [];
	b = [];

	if (patternJeu.p1 == 0) {
		//vert clair
		piece1 = new Piece4(1, 4, "e", false, color(134,207,11), [205,80,125,125], [80,80,125,125], [330,80,455,205,330,205], [80,205,125,125]);
		append(pieces, piece1);
	} else {
		piece1 = patternJeu.p1;
		append(b, piece1);
	}
	if (patternJeu.p2 == 0) {
		//bleu foncé
		piece2 = new Piece4(2, 4, "s", false, color(3,13,182), [705,205,125,125], [705,80,125,125], [830,330,705,455,705,330], [705,205,705,80,580,80]);
		append(pieces, piece2);
	} else {
		piece2 = patternJeu.p2;
		append(b, piece2);
	}
	if (patternJeu.p3 == 0) {
		//jaune
		piece3 = new Piece4(3, 4, "n", false, color(235,238,24), [705,455,125,125], [705,580,125,125], [705,455,830,330,830,455], [580,580,705,705,705,580]);
		append(pieces, piece3);
	} else {
		piece3 = patternJeu.p3;
		append(b, piece3);
	}
	if (patternJeu.p4 == 0) {
		//orange 
		piece4 = new Piece5(4, 5, "o", false, color(214,122,21), [455,580,125,125], [330,455,125,125], [330,580,455,705,455,580], [455,580,455,455,580,580], [580,580,580,705,705,705]);
		append(pieces, piece4);
	} else {
		piece4 = patternJeu.p4;
		append(b, piece4);
	}
	if (patternJeu.p5 == 0) {
		//violet 
		piece5 = new Piece5(5, 5, "o", false, color(88,0,138), [455,80,125,125], [580,330,580,205, 455,205], [705,205,580,205,580,330], [705,205,580,205,580,80], [455,205,455,80,330,80]);
		append(pieces, piece5);
	} else {
		piece5 = patternJeu.p5;
		append(b, piece5);
	}
	if (patternJeu.p6 == 0) {
		//rouge
		piece6 = new Piece3(6, 3, "n", false, color(255,0,0),[80,455,125,125], [205,455,125,125], [80,330,80,455,205,455]);
		append(pieces, piece6);
	} else {
		piece6 = patternJeu.p6;
		append(b, piece6);
	}
	if (patternJeu.p7 == 0) {
		//bleu clair
		piece7 = new Piece3(7, 3, "o", false, color(83,225,230), [205,330,125,125],  [330,330,330,455,455,455], [205,455,205,330,80,330]);
		append(pieces, piece7);
	} else {
		piece7 = patternJeu.p7;
		append(b, piece7);
	}
	if (patternJeu.p8 == 0) {
		//vert foncé
		piece8 = new Piece3(8, 3, "e", false, color(2,122,36), [205,580,125,125], [80,580,125,125], [330,705,455,705,330,580]);
		append(pieces, piece8);
	} else {
		piece8 = patternJeu.p8;
		append(b, piece8);
	}
	if (patternJeu.p9 == 0) {
		//rose
		piece9 = new Piece5(9, 5, "o", false, color(253,50,158), [330,205,125,125], [205,205,125,125], [455,455,455,330,330,330], [580,330,455,330,455,455], [580,330,455,330,455,205]);
		append(pieces, piece9);
	} else {
		piece9 = patternJeu.p9;
		append(b, piece9);
	}
	if (patternJeu.p10 == 0) {
		//cyan
		piece10 = new Piece5(10, 5, "o", false, color(76,207,184), [580,330,125,125], [580,455,125,125], [580,580,580,455,455,455], [580,330,580,455,455,455], [705,205,705,330,580,330]);
		append(pieces, piece10);
	} else {
		piece10 = patternJeu.p10;
		append(b, piece10);
	}
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
		di.hide();
		slider.hide();
		jouer();
		jeu = true;
	}	
}

function detecterFin() {
	if (solutionJeu.p1[0] == piece1.p1[0] && solutionJeu.p1[1] == piece1.p1[1] &&
		solutionJeu.p2[0] == piece2.p1[0] && solutionJeu.p2[1] == piece2.p1[1] &&	
		solutionJeu.p3[0] == piece3.p1[0] && solutionJeu.p3[1] == piece3.p1[1] &&
		solutionJeu.p4[0] == piece4.p1[0] && solutionJeu.p4[1] == piece4.p1[1] &&
		solutionJeu.p5[0] == piece5.p1[0] && solutionJeu.p5[1] == piece5.p1[1] &&	
		solutionJeu.p6[0] == piece6.p1[0] && solutionJeu.p6[1] == piece6.p1[1] &&
		solutionJeu.p7[0] == piece7.p1[0] && solutionJeu.p7[1] == piece7.p1[1] &&
		solutionJeu.p8[0] == piece8.p1[0] && solutionJeu.p8[1] == piece8.p1[1] &&	
		solutionJeu.p9[0] == piece9.p1[0] && solutionJeu.p9[1] == piece9.p1[1] &&
		solutionJeu.p10[0] == piece10.p1[0] && solutionJeu.p10[1] == piece10.p1[1] &&
		
		solutionJeu.p1[2] == piece1.orientation && solutionJeu.p2[2] == piece2.orientation &&
		solutionJeu.p3[2] == piece3.orientation && solutionJeu.p4[2] == piece4.orientation &&	
		solutionJeu.p5[2] == piece5.orientation && solutionJeu.p6[2] == piece6.orientation &&
		solutionJeu.p7[2] == piece7.orientation && solutionJeu.p8[2] == piece8.orientation &&
		solutionJeu.p9[2] == piece9.orientation && solutionJeu.p10[2] == piece10.orientation &&
		
		solutionJeu.p1[3] == piece1.miroir && solutionJeu.p2[3] == piece2.miroir &&
		solutionJeu.p3[3] == piece3.miroir && solutionJeu.p4[3] == piece4.miroir &&	
		solutionJeu.p5[3] == piece5.miroir && solutionJeu.p6[3] == piece6.miroir &&
		solutionJeu.p7[3] == piece7.miroir && solutionJeu.p8[3] == piece8.miroir &&
		solutionJeu.p9[3] == piece9.miroir && solutionJeu.p10[3] == piece10.miroir)
	{
		state();	
	}
}

function selectedPiece() {
	sX = mouseX;
	sY = mouseY;
	for (let i = 0; i < pieces.length; i++) {
		if (sX >= pieces[i].p1[0] && sX <= pieces[i].p1[0] + 125 && sY >= pieces[i].p1[1] && sY <= pieces[i].p1[1] + 125) {
			selected = pieces[i].nom;
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
	print(mouseX, mouseY);
}

function mouseReleased() {
	for (let i = 0; i < pieces.length; i++) {
		if (pieces[i].nom == selected) {
			pieces[i].dragging = false;
			pieces[i].clip();
		}
	}
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

function makePiece3(sX,sY,orientation,miroir,num) {
    p1[0] = sX
	p1[1] = sY
    switch (num) {
		case 6:
		    if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1]
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] + 125
                p3[1] = p1[1] + 250
                p3[2] = p1[0] + 125 
                p3[3] = p1[1] + 125
                p3[4] = p1[0]
                p3[5] = p1[1] + 125
		    } else if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0]
                p2[1] = p1[1] - 125
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] - 125
                p3[1] = p1[1] + 125
                p3[2] = p1[0] 
                p3[3] = p1[1] + 125
                p3[4] = p1[0]
                p3[5] = p1[1]
		    } else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1]
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] 
                p3[1] = p1[1] - 125
                p3[2] = p1[0]
                p3[3] = p1[1]
                p3[4] = p1[0] + 125
                p3[5] = p1[1]
		    } else if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0]
                p2[1] = p1[1] + 125
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] + 250
                p3[1] = p1[1]
                p3[2] = p1[0] + 125 
                p3[3] = p1[1]
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 125
			}
		case 7:
		    if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1]
                p2[2] = p1[0] + 125
                p2[3] = p1[1] + 125
                p2[4] = p1[0] + 250
                p2[5] = p1[1] + 125
                p3[0] = p1[0]
                p3[1] = p1[1] + 125
                p3[2] = p1[0]
                p3[3] = p1[1]
                p3[4] = p1[0] - 125
                p3[5] = p1[1]
		    } else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] + 125
                p2[2] = p1[0]
                p2[3] = p1[1] + 125
                p2[4] = p1[0]
                p2[5] = p1[1] + 250
                p3[0] = p1[0]
                p3[1] = p1[1]
                p3[2] = p1[0] + 125
                p3[3] = p1[1]
                p3[4] = p1[0] + 125
                p3[5] = p1[1] - 125
		    } else if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1]
                p2[2] = p1[0] + 125
                p2[3] = p1[1] + 125
                p2[4] = p1[0] + 250
                p2[5] = p1[1] + 125
                p3[0] = p1[0]
                p3[1] = p1[1] + 125
                p3[2] = p1[0]
                p3[3] = p1[1]
                p3[4] = p1[0] - 125
                p3[5] = p1[1]
		    } else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] + 125
                p2[2] = p1[0]
                p2[3] = p1[1] + 125
                p2[4] = p1[0]
                p2[5] = p1[1] + 250
                p3[0] = p1[0]
                p3[1] = p1[1]
                p3[2] = p1[0] + 125
                p3[3] = p1[1]
                p3[4] = p1[0] + 125
                p3[5] = p1[1] - 125
			}    
		case 8:
		    if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1] 
                p3[0] = p1[0] + 125
                p3[1] = p1[1] + 125
                p3[2] = p1[0] + 250
                p3[3] = p1[1] + 125
		    } else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] 
                p2[1] = p1[1] - 125
				p2[2] = 125
                p2[3] = 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 125
                p3[0] = p1[0] 
                p3[1] = p1[1] + 125
                p3[2] = p1[0]
                p3[3] = p1[1] + 250
		    } else if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
                p3[4] = p1[0] 
                p3[5] = p1[1] + 125
                p3[0] = p1[0] 
                p3[1] = p1[1]
                p3[2] = p1[0] - 125
                p3[3] = p1[1] 
		    } else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] 
                p2[1] = p1[1] + 125
				p2[2] = 125
                p2[3] = 125
                p3[4] = p1[0] 
                p3[5] = p1[1] 
                p3[0] = p1[0] + 125
                p3[1] = p1[1] 
                p3[2] = p1[0] + 125
                p3[3] = p1[1] - 125
		    }
	}
    col = tabColor[num - 1];
    var p = new Piece3(num,3,orientation,miroir,col,p1,p2,p3);
	return p;
}

function makePiece4(sX,sY,orientation,miroir,num) {
    p1[0] = sX
	p1[1] = sY
    switch (num) {
        case 1:
			if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
                p3[2] = p1[0] - 125
                p3[3] = p1[1] 
                p3[4] = p1[0]
                p3[5] = p1[1]    
                p3[0] = p1[0] 
                p3[1] = p1[1] + 125 
                p4[0] = p1[0] + 125
                p4[1] = p1[1] - 125	
				p4[2] = 125
                p4[3] = 125
			} else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0]
                p2[1] = p1[1] + 125 
				p2[2] = 125
                p2[3] = 125
                p3[2] = p1[0] + 125
                p3[3] = p1[1] - 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1]    
                p3[0] = p1[0] 
                p3[1] = p1[1] 
                p4[0] = p1[0] + 125
                p4[1] = p1[1] + 125
				p4[2] = 125
                p4[3] = 125			
			} else if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1] 
                p3[2] = p1[0] + 250
				p2[2] = 125
                p2[3] = 125
                p3[3] = p1[1] + 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 125 
                p3[0] = p1[0] + 125
                p3[1] = p1[1] 
                p4[0] = p1[0] - 125
                p4[1] = p1[1] + 125	
				p4[2] = 125
                p4[3] = 125
			} else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0]
                p2[1] = p1[1] - 125 
				p2[2] = 125
                p2[3] = 125
                p3[2] = p1[0]
                p3[3] = p1[1] + 250
                p3[4] = p1[0]
                p3[5] = p1[1] + 125    
                p3[0] = p1[0] + 125
                p3[1] = p1[1] + 125
                p4[0] = p1[0] - 125
                p4[1] = p1[1] - 125
				p4[2] = 125
                p4[3] = 125
			}
		case 2:
			if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] 
                p3[1] = p1[1] + 125
                p3[2] = p1[0] - 125
                p3[3] = p1[1] 
                p3[4] = p1[0]
                p3[5] = p1[1]     
                p4[0] = p1[0] + 125
                p4[1] = p1[1] 
                p4[2] = p1[0] + 250
                p4[3] = p1[1] 
                p4[4] = p1[0] + 250
                p4[5] = p1[1] - 125
			} else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0]
                p2[1] = p1[1] + 125 
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] 
                p3[1] = p1[1] 
                p3[2] = p1[0] + 125
                p3[3] = p1[1] - 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1]    
                p4[0] = p1[0] + 125
                p4[1] = p1[1] + 125
                p4[2] = p1[0] + 125
                p4[3] = p1[1] + 250
                p4[4] = p1[0] + 250
                p4[5] = p1[1] + 250
			} else if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] + 125
                p3[1] = p1[1] 
                p3[2] = p1[0] + 250
                p3[3] = p1[1] + 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 125 
                p4[0] = p1[0] 
                p4[1] = p1[1] + 125
                p4[2] = p1[0] - 125
                p4[3] = p1[1] + 125
                p4[4] = p1[0] - 125
                p4[5] = p1[1] + 250
			} else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0]
                p2[1] = p1[1] - 125 
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] + 125
                p3[1] = p1[1] + 125
                p3[2] = p1[0] 
                p3[3] = p1[1] + 250
                p3[4] = p1[0]
                p3[5] = p1[1] + 125    
                p4[0] = p1[0] 
                p4[1] = p1[1] 
                p4[2] = p1[0] 
                p4[3] = p1[1] - 125
                p4[4] = p1[0] - 125
                p4[5] = p1[1] - 125
            }
		case 3:
			if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] 
                p3[1] = p1[1] + 125
                p3[2] = p1[0] - 125
                p3[3] = p1[1] 
                p3[4] = p1[0]
                p3[5] = p1[1]
                p4[0] = p1[0] + 125
                p4[1] = p1[1] + 250
                p4[2] = p1[0] + 250
                p4[3] = p1[1] + 125
                p4[4] = p1[0] + 125
                p4[5] = p1[1] + 125
			} else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0]
                p2[1] = p1[1] + 125 
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] 
                p3[1] = p1[1] 
                p3[2] = p1[0] + 125
                p3[3] = p1[1] - 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1]    
                p4[0] = p1[0] - 125
                p4[1] = p1[1] + 125
                p4[2] = p1[0]
                p4[3] = p1[1] + 250
                p4[4] = p1[0]
                p4[5] = p1[1] + 125	
			} else if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] + 125
                p3[1] = p1[1] 
                p3[2] = p1[0] + 250
                p3[3] = p1[1] + 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 125 
                p4[0] = p1[0] 
                p4[1] = p1[1] - 125
                p4[2] = p1[0] - 125
                p4[3] = p1[1]
                p4[4] = p1[0]
                p4[5] = p1[1]
			} else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0]
                p2[1] = p1[1] - 125 
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] + 125
                p3[1] = p1[1] + 125
                p3[2] = p1[0] 
                p3[3] = p1[1] + 250
                p3[4] = p1[0]
                p3[5] = p1[1] + 125   
                p4[0] = p1[0] + 250
                p4[1] = p1[1] 
                p4[2] = p1[0] + 125
                p4[3] = p1[1] - 125
                p4[4] = p1[0] + 125
                p4[5] = p1[1]
			}
    }
    col = tabColor[num - 1];
    return new Piece4(num,4,orientation,miroir,col,p1,p2,p3,p4);
}

function makePiece5(sX,sY,orientation,miroir,num) {
    p1[0] = sX
    p1[1] = sY
    switch (num) {
        case 4:
		    if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] + 125
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] + 250
                p3[1] = p1[1] + 125
                p3[2] = p1[0] + 125
                p3[3] = p1[1] 
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 125
                p4[0] = p1[0] + 125
                p4[1] = p1[1] + 125
                p4[2] = p1[0] + 125
                p4[3] = p1[1] + 250
                p4[4] = p1[0]
                p4[5] = p1[1] + 125
                p5[0] = p1[0] 
                p5[1] = p1[1] + 125
                p5[2] = p1[0]
                p5[3] = p1[1]
                p5[4] = p1[0] - 125
                p5[5] = p1[1]
		    } else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1] + 125
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0]
                p3[1] = p1[1] + 250
                p3[2] = p1[0] + 125
                p3[3] = p1[1] + 125
                p3[4] = p1[0]
                p3[5] = p1[1] + 125
                p4[0] = p1[0]
                p4[1] = p1[1] + 125
                p4[2] = p1[0] - 125
                p4[3] = p1[1] + 125
                p4[4] = p1[0]
                p4[5] = p1[1]
                p5[0] = p1[0]  
                p5[1] = p1[1] 
                p5[2] = p1[0] + 125
                p5[3] = p1[1]
                p5[4] = p1[0] + 125
                p5[5] = p1[1] - 125
		    } else if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1] - 125
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] - 125
                p3[1] = p1[1]
                p3[2] = p1[0]
                p3[3] = p1[1] + 125 
                p3[4] = p1[0]
                p3[5] = p1[1]
                p4[0] = p1[0]
                p4[1] = p1[1] 
                p4[2] = p1[0]
                p4[3] = p1[1] - 125
                p4[4] = p1[0] + 125
                p4[5] = p1[1]
                p5[0] = p1[0] + 125 
                p5[1] = p1[1]
                p5[2] = p1[0] + 125
                p5[3] = p1[1] + 125
                p5[4] = p1[0] + 250
                p5[5] = p1[1] + 125
		    } else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] - 125
				p2[2] = 125
                p2[3] = 125
                p3[0] = p1[0] + 126
                p3[1] = p1[1] - 125
                p3[2] = p1[0]
                p3[3] = p1[1] 
                p3[4] = p1[0] + 125
                p3[5] = p1[1]
                p4[0] = p1[0] + 125
                p4[1] = p1[1]
                p4[2] = p1[0] + 250
                p4[3] = p1[1]
                p4[4] = p1[0] + 125
                p4[5] = p1[1] + 125
                p5[0] = p1[0] + 125
                p5[1] = p1[1] + 125
                p5[2] = p1[0]
                p5[3] = p1[1] + 125
                p5[4] = p1[0] 
                p5[5] = p1[1] + 250
            }
		case 5:
		    if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p3[0] = p1[0] - 125
                p3[1] = p1[1]
                p3[2] = p1[0]
                p3[3] = p1[1]
                p3[4] = p1[0]
                p3[5] = p1[1] - 125
                p4[0] = p1[0] - 125
                p4[1] = p1[1]
                p4[2] = p1[0]
                p4[3] = p1[1]
                p4[4] = p1[0]
                p4[5] = p1[1] + 125
                p2[2] = p1[0]
                p2[3] = p1[1]
                p2[0] = p1[0]
                p2[1] = p1[1] - 125
                p2[4] = p1[0] + 125
                p2[5] = p1[1]
                p5[0] = p1[0] + 125
                p5[1] = p1[1]
                p5[2] = p1[0] + 125
                p5[3] = p1[1] + 125
                p5[4] = p1[0] + 250
                p5[5] = p1[1] + 125
		    } else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p3[0] = p1[0] + 125 
                p3[1] = p1[1] - 125
                p3[2] = p1[0] + 125 
                p3[3] = p1[1]
                p3[4] = p1[0] + 250
                p3[5] = p1[1] 
                p4[0] = p1[0] + 125 
                p4[1] = p1[1] - 125
                p4[2] = p1[0] + 125 
                p4[3] = p1[1]
                p4[4] = p1[0]
                p4[5] = p1[1] 
                p2[2] = p1[0] + 125 
                p2[3] = p1[1]
                p2[0] = p1[0] + 250
                p2[1] = p1[1] 
                p2[4] = p1[0] + 125
                p2[5] = p1[1] + 125
                p5[0] = p1[0] + 125
                p5[1] = p1[1] + 125
                p5[2] = p1[0]
                p5[3] = p1[1] + 125
                p5[4] = p1[0] 
                p5[5] = p1[1] + 250    
		    } else if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p3[0] = p1[0] + 250
                p3[1] = p1[1] + 125
                p3[2] = p1[0] + 125
                p3[3] = p1[1] + 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 250
                p4[0] = p1[0] + 250
                p4[1] = p1[1] + 125
                p4[2] = p1[0] + 125
                p4[3] = p1[1] + 125
                p4[4] = p1[0] + 125
                p4[5] = p1[1] 
                p2[2] = p1[0] + 125
                p2[3] = p1[1] + 125
                p2[0] = p1[0] + 125
                p2[1] = p1[1] + 250
                p2[4] = p1[0] 
                p2[5] = p1[1] + 125
                p5[0] = p1[0] 
                p5[1] = p1[1] + 125
                p5[2] = p1[0] 
                p5[3] = p1[1] 
                p5[4] = p1[0] - 125
                p5[5] = p1[1] 
		    } else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p3[0] = p1[0] 
                p3[1] = p1[1] + 250
                p3[2] = p1[0]
                p3[3] = p1[1] + 125
                p3[4] = p1[0] - 125
                p3[5] = p1[1] + 125
                p4[0] = p1[0] 
                p4[1] = p1[1] + 250
                p4[2] = p1[0]
                p4[3] = p1[1] + 125
                p4[4] = p1[0] + 125
                p4[5] = p1[1] + 125
                p2[2] = p1[0]
                p2[3] = p1[1] + 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1] + 125
                p2[4] = p1[0] 
                p2[5] = p1[1]
                p5[0] = p1[0] 
                p5[1] = p1[1]
                p5[2] = p1[0] + 125
                p5[3] = p1[1] 
                p5[4] = p1[0] + 125
                p5[5] = p1[1] - 125
			}
		case 9:
		    if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p4[0] = p1[0] - 125
                p4[1] = p1[1] 
                p4[2] = p1[0] 
                p4[3] = p1[1] 
                p4[4] = p1[0]    
                p4[5] = p1[1] - 125
                p5[0] = p1[0] - 125
                p5[1] = p1[1] 
                p5[2] = p1[0] 
                p5[3] = p1[1]
                p5[4] = p1[0]
                p5[5] = p1[1] + 125
                p3[2] = p1[0] 
                p3[3] = p1[1] 
                p3[0] = p1[0]    
                p3[1] = p1[1] - 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1]
                p2[0] = p1[0] + 125
                p2[1] = p1[1]
				p2[2] = 125
                p2[3] = 125
		    } else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p4[0] = p1[0] + 125
                p4[1] = p1[1] - 125
                p4[2] = p1[0] + 125
                p4[3] = p1[1] 
                p4[4] = p1[0] + 250
                p4[5] = p1[1]
                p5[0] = p1[0] + 125
                p5[1] = p1[1] - 125
                p5[2] = p1[0] + 125
                p5[3] = p1[1] 
                p5[4] = p1[0]
                p5[5] = p1[1]
                p3[2] = p1[0] + 125
                p3[3] = p1[1] 
                p3[0] = p1[0] + 250
                p3[1] = p1[1]
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 125
                p2[0] = p1[0] 
                p2[1] = p1[1] + 125
				p2[2] = 125
                p2[3] = 125
		    } else if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
				p4[0] = p1[0] + 250
                p4[1] = p1[1] + 125
                p4[2] = p1[0] + 125
                p4[3] = p1[1] + 125
                p4[4] = p1[0] + 125
                p4[5] = p1[1] + 250
                p5[0] = p1[0] + 250
                p5[1] = p1[1] + 125
                p5[2] = p1[0] + 125
                p5[3] = p1[1] + 125
                p5[4] = p1[0] + 125
                p5[5] = p1[1] 
                p3[2] = p1[0] + 125
                p3[3] = p1[1] + 125
                p3[0] = p1[0] + 125
                p3[1] = p1[1] + 250
                p3[4] = p1[0] 
                p3[5] = p1[1] + 125
                p2[0] = p1[0] - 125
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
		    } else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
				p4[0] = p1[0] 
                p4[1] = p1[1] + 250
                p4[2] = p1[0] 
                p4[3] = p1[1] + 125
                p4[4] = p1[0] - 125
                p4[5] = p1[1] + 125
                p5[0] = p1[0] 
                p5[1] = p1[1] + 250
                p5[2] = p1[0] 
                p5[3] = p1[1] + 125
                p5[4] = p1[0] + 125
                p5[5] = p1[1] + 125
                p3[2] = p1[0] 
                p3[3] = p1[1] + 125
                p3[0] = p1[0] - 125
                p3[1] = p1[1] + 125
                p3[4] = p1[0] 
                p3[5] = p1[1] 
                p2[0] = p1[0] 
                p2[1] = p1[1] - 125
				p2[2] = 125
                p2[3] = 125
			}
		case 10:
            if (orientation == "e") {
				p1[2] = 125
                p1[3] = 125
                p5[0] = p1[0] 
                p5[1] = p1[1] + 250 
                p2[0] = p1[0] 
                p2[1] = p1[1] - 125 
				p2[2] = 125
                p2[3] = 125
                p5[2] = p1[0] 
                p5[3] = p1[1] + 125
                p5[4] = p1[0] + 125
                p5[5] = p1[1] + 125
                p4[0] = p1[0] + 125
                p4[1] = p1[1] + 125
                p4[2] = p1[0] + 125
                p4[3] = p1[1] 
                p4[4] = p1[0] + 250
                p4[5] = p1[1] 
                p3[0] = p1[0] + 125
                p3[1] = p1[1] - 125
                p3[2] = p1[0] + 125
                p3[3] = p1[1] 
                p3[4] = p1[0] + 250
                p3[5] = p1[1] 
		    } else if (orientation == "s") {
				p1[2] = 125
                p1[3] = 125
                p5[0] = p1[0] - 125
                p5[1] = p1[1]
                p2[0] = p1[0] + 125
                p2[1] = p1[1]
				p2[2] = 125
                p2[3] = 125
                p5[2] = p1[0]
                p5[3] = p1[1]
                p5[4] = p1[0] 
                p5[5] = p1[1] + 125
                p4[2] = p1[0] + 125
                p4[3] = p1[1] + 125
                p4[4] = p1[0] + 125
                p4[5] = p1[1] + 250
                p3[0] = p1[0] + 250
                p3[1] = p1[1] + 125
                p4[0] = p1[0] 
                p4[1] = p1[1] + 125
                p3[2] = p1[0] + 125
                p3[3] = p1[1] + 125
                p3[4] = p1[0] + 125
                p3[5] = p1[1] + 250
		    } else if (orientation == "o") {
				p1[2] = 125
                p1[3] = 125
                p5[0] = p1[0] + 125
                p5[1] = p1[1] - 125 
                p2[0] = p1[0] 
                p2[1] = p1[1] + 125 
				p2[2] = 125
                p2[3] = 125
                p5[2] = p1[0] + 125
                p5[3] = p1[1] 
                p5[4] = p1[0] 
                p5[5] = p1[1] 
                p4[2] = p1[0] 
                p4[3] = p1[1] + 125
                p4[4] = p1[0] - 125
                p4[5] = p1[1] + 125
                p3[0] = p1[0] 
                p3[1] = p1[1] + 250
                p4[0] = p1[0] 
                p4[1] = p1[1] 
                p3[2] = p1[0] 
                p3[3] = p1[1] + 125
                p3[4] = p1[0] - 125
                p3[5] = p1[1] + 125
		    } else if (orientation == "n") {
				p1[2] = 125
                p1[3] = 125
                p5[0] = p1[0] + 250
                p5[1] = p1[1] + 125 
                p2[0] = p1[0] - 125 
                p2[1] = p1[1] 
				p2[2] = 125
                p2[3] = 125
                p5[2] = p1[0] + 125
                p5[3] = p1[1] + 125
                p5[4] = p1[0] + 125
                p5[5] = p1[1] 
                p4[2] = p1[0] 
                p4[3] = p1[1] 
                p4[4] = p1[0] 
                p4[5] = p1[1] - 125
                p3[0] = p1[0] - 125
                p3[1] = p1[1] 
                p4[0] = p1[0] + 125
                p4[1] = p1[1] 
                p3[2] = p1[0] 
                p3[3] = p1[1] 
                p3[4] = p1[0] 
                p3[5] = p1[1] - 125
			}
    }		
    col = tabColor[num - 1];
    return new Piece5(num,5,orientation,miroir,col,p1,p2,p3,p4,p5);
}