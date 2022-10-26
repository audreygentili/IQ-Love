class Piece {
	constructor(nom, nbpieces, orientation, col) {
		this.nom = nom;
		this.nbpieces = nbpieces;
		this.orientation = orientation;
		this.col = col;
	}
}
	
class Piece3 extends Piece {
	constructor(nom, nbpieces, orientation, col, p1, p2, p3) {
		super(nom, nbpieces, orientation, col);
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
	}
	
	afficher() {
		fill(this.col);
		var p = [this.p1, this.p2, this.p3];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				rect(p[i][0], p[i][1], p[i][2], p[i][3]);
			}
			if (p[i].length == 6) {
				triangle(p[i][0], p[i][1], p[i][2], p[i][3], p[i][4], p[i][5]);
			}
		}
	}
	
	rotationL() {
		switch (this.nom) {
			case 6:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p2[0] += -125;this.p2[1] += -125;
				this.p4[0] += -250;this.p4[1] += 0;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p2[0] += -125;this.p2[1] += 125;
				this.p4[0] += 0;this.p4[1] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += -125;this.p1[1] += -250;this.p1[2] += -125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += -125;
				this.p2[0] += 125;this.p2[1] += 125;
				this.p4[0] += 250;this.p4[1] += 0;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += -250;this.p1[1] += 125;this.p1[2] += 0;
				this.p1[3] += 125;this.p1[4] += -125;this.p1[5] += 0;
				this.p2[0] += 125;this.p2[1] += -125;
				this.p4[0] += 0;this.p4[1] += -250;        
			/*if(pieces[selected] == 1 || pieces[selected] == 2 ){
				j1 += 125;
			}else{
				j1 -= 125;
			}
			if(pieces[selected] == 2 || pieces[selected] == 3 ){
				i1 += 125;
			}else{
				i1 -= 125;
			}
			if(pieces[selected] == 4){
				t1 -= 125;v1 -= 250;w1 -= 125;x1 -= 375;
			}else if(pieces[selected] == 1){
				u1 += 125;v1 -= 125; w1 += 250;y1 += 375;
			}else if(pieces[selected] == 2){
				t1 += 125;v1 += 250;w1 += 125;x1 += 375;
			}else if(pieces[selected] == 3){
				u1 -= 125;v1 += 125; w1 -= 250;y1 -= 375;
			}
			break;*/
			}
			case 7:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
			case 8:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
		}
	}

	rotationR() {
		switch (this.nom) {
			case 6:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p2[0] += -125;this.p2[1] += -125;
				this.p4[0] += -250;this.p4[1] += 0;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p2[0] += -125;this.p2[1] += 125;
				this.p4[0] += 0;this.p4[1] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += -125;this.p1[1] += -250;this.p1[2] += -125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += -125;
				this.p2[0] += 125;this.p2[1] += 125;
				this.p4[0] += 250;this.p4[1] += 0;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += -250;this.p1[1] += 125;this.p1[2] += 0;
				this.p1[3] += 125;this.p1[4] += -125;this.p1[5] += 0;
				this.p2[0] += 125;this.p2[1] += -125;
				this.p4[0] += 0;this.p4[1] += -250;        
			}
			case 7:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
			case 8:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
		}
	}
	
	miroir() {
		
	}
	
	deplacement(bx, by) {
		print("bx:"+bx+" by:"+by);
		var x = mouseX;
		var y = mouseY;
		print("x:"+x+" y:"+y);
		var p = [this.p1, this.p2, this.p3];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				p[i][0] += x-bx;
				p[i][1] = p[i][1]+(y-by);
			}
			if (p[i].length == 6) {
				p[i][0] = p[i][0]+(x-bx);
				p[i][1] = p[i][1]+(y-by);
				p[i][2] = p[i][2]+(x-bx);
				p[i][3] = p[i][3]+(y-by);
				p[i][4] = p[i][4]+(x-bx);
				p[i][5] = p[i][5]+(y-by);
			}
		}
	}
}

class Piece4 extends Piece {
	constructor(nom, nbpieces, orientation, col, p1, p2, p3, p4) {
		super(nom, nbpieces, orientation, col);
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
		this.p4 = p4;
	}
	
	afficher() {
		fill(this.col);
		var p = [this.p1, this.p2, this.p3, this.p4];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				rect(p[i][0], p[i][1], p[i][2], p[i][3]);
			}
			if (p[i].length == 6) {
				triangle(p[i][0], p[i][1], p[i][2], p[i][3], p[i][4], p[i][5]);
			}
		}
	}
	
	rotationL() {
		switch (this.nom) {
			case 1:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p2[0] += -125;this.p2[1] += -125;
				this.p4[0] += -250;this.p4[1] += 0;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p2[0] += -125;this.p2[1] += 125;
				this.p4[0] += 0;this.p4[1] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += -125;this.p1[1] += -250;this.p1[2] += -125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += -125;
				this.p2[0] += 125;this.p2[1] += 125;
				this.p4[0] += 250;this.p4[1] += 0;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += -250;this.p1[1] += 125;this.p1[2] += 0;
				this.p1[3] += 125;this.p1[4] += -125;this.p1[5] += 0;
				this.p2[0] += 125;this.p2[1] += -125;
				this.p4[0] += 0;this.p4[1] += -250;        
			}
			case 2:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
			case 3:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
		}
	}

	rotationR() {
		if (this.orientation == "o") {
			this.orientation = "n";
			this.p1[0] += 250;
			this.p1[1] += -125;
			this.p1[2] += 0;
			this.p1[3] += -125;
			this.p1[4] += 125;
			this.p1[5] += 0;
			this.p2[0] += -125;
			this.p2[1] += 125;
			this.p4[0] += 0;
			this.p4[1] += 250;
		} else if (this.orientation == "n") {
			this.orientation = "e";
			this.p1[0] += 125;
			this.p1[1] += 250;
			this.p1[2] += 125;
			this.p1[3] += 0;
			this.p1[4] += 0;
			this.p1[5] += 125;
			this.p2[0] += -125;
			this.p2[1] += -125;
			this.p4[0] += -250;
			this.p4[1] += 0;
		}  else if (this.orientation == "e") {
			this.orientation = "s";
			this.p1[0] += -250;
			this.p1[1] += 125;
			this.p1[2] += 0;
			this.p1[3] += 125;
			this.p1[4] += -125;
			this.p1[5] += 0;
			this.p2[0] += 125;
			this.p2[1] += -125;
			this.p4[0] += 0;
			this.p4[1] += -250;
		} else if (this.orientation == "s") {
			this.orientation = "o"; 
			this.p1[0] += -125;
			this.p1[1] += -250;
			this.p1[2] += -125;
			this.p1[3] += 0;
			this.p1[4] += 0;
			this.p1[5] += -125;
			this.p2[0] += 125;
			this.p2[1] += 125;
			this.p4[0] += 250;
			this.p4[1] += 0;        
		}
	}
	
	miroir() {
		
	}
	
	deplacement(bx, by) {
		print("bx:"+bx+" by:"+by);
		var x = mouseX;
		var y = mouseY;
		print("x:"+x+" y:"+y);
		var p = [this.p1, this.p2, this.p3, this.p4];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				p[i][0] += x-bx;
				p[i][1] = p[i][1]+(y-by);
			}
			if (p[i].length == 6) {
				p[i][0] = p[i][0]+(x-bx);
				p[i][1] = p[i][1]+(y-by);
				p[i][2] = p[i][2]+(x-bx);
				p[i][3] = p[i][3]+(y-by);
				p[i][4] = p[i][4]+(x-bx);
				p[i][5] = p[i][5]+(y-by);
			}
		}
	}
}



class Piece5 extends Piece {
	constructor(nom, nbpieces, orientation, col, p1, p2, p3, p4, p5) {
		super(nom, nbpieces, orientation, col);
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
		this.p4 = p4;
		this.p5 = p5;
	}
	
	afficher() {
		fill(this.col);
		var p = [this.p1, this.p2, this.p3, this.p4, this.p5];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				rect(p[i][0], p[i][1], p[i][2], p[i][3]);
			}
			if (p[i].length == 6) {
				triangle(p[i][0], p[i][1], p[i][2], p[i][3], p[i][4], p[i][5]);
			}
		}
	}
	
	rotationL() {
		switch (this.nom) {
			case 4:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p2[0] += -125;this.p2[1] += -125;
				this.p4[0] += -250;this.p4[1] += 0;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p2[0] += -125;this.p2[1] += 125;
				this.p4[0] += 0;this.p4[1] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += -125;this.p1[1] += -250;this.p1[2] += -125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += -125;
				this.p2[0] += 125;this.p2[1] += 125;
				this.p4[0] += 250;this.p4[1] += 0;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += -250;this.p1[1] += 125;this.p1[2] += 0;
				this.p1[3] += 125;this.p1[4] += -125;this.p1[5] += 0;
				this.p2[0] += 125;this.p2[1] += -125;
				this.p4[0] += 0;this.p4[1] += -250;        
			}
			case 5:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
			case 9:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
			case 10:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
		}
	}

	rotationR() {
		switch (this.nom) {
			case 4:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p2[0] += -125;this.p2[1] += -125;
				this.p4[0] += -250;this.p4[1] += 0;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p2[0] += -125;this.p2[1] += 125;
				this.p4[0] += 0;this.p4[1] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += -125;this.p1[1] += -250;this.p1[2] += -125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += -125;
				this.p2[0] += 125;this.p2[1] += 125;
				this.p4[0] += 250;this.p4[1] += 0;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += -250;this.p1[1] += 125;this.p1[2] += 0;
				this.p1[3] += 125;this.p1[4] += -125;this.p1[5] += 0;
				this.p2[0] += 125;this.p2[1] += -125;
				this.p4[0] += 0;this.p4[1] += -250;        
			}
			case 5:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
			case 9:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
			case 10:
			if (this.orientation == "o") {
				this.orientation = "s";
				this.p1[0] += 125;this.p1[1] += 250;this.p1[2] += 125;
				this.p1[3] += 0;this.p1[4] += 0;this.p1[5] += 125;
				this.p3[0] += -125;this.p3[1] += -125;
				this.p4[0] -= 125;this.p4[1] -= 0;this.p4[2] -= 250;
				this.p4[3] -= 0;this.p4[4] -= 125;this.p4[5] -= 125;
			} else if (this.orientation == "s") {
				this.orientation = "e";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			}  else if (this.orientation == "e") {
				this.orientation = "n";
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250;
			} else if (this.orientation == "n") {
				this.orientation = "o"; 
				this.p1[0] += 250;this.p1[1] += -125;this.p1[2] += 0;
				this.p1[3] += -125;this.p1[4] += 125;this.p1[5] += 0;
				this.p3[0] += -125;	this.p3[1] += 125;
				this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 0;
				this.p4[3] += 125;this.p4[4] += 0;this.p4[5] += 250; 
			}
		}
	}
	
	miroir() {
		
	}
	
	deplacement(bx, by) {
		print("bx:"+bx+" by:"+by);
		var x = mouseX;
		var y = mouseY;
		print("x:"+x+" y:"+y);
		var p = [this.p1, this.p2, this.p3, this.p4, this.p5];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				p[i][0] += x-bx;
				p[i][1] = p[i][1]+(y-by);
			}
			if (p[i].length == 6) {
				p[i][0] = p[i][0]+(x-bx);
				p[i][1] = p[i][1]+(y-by);
				p[i][2] = p[i][2]+(x-bx);
				p[i][3] = p[i][3]+(y-by);
				p[i][4] = p[i][4]+(x-bx);
				p[i][5] = p[i][5]+(y-by);
			}
		}
	}
}


class Pattern {
	constructor(num, p1, p2, p3, p4, p5, p6, p7, p8, p9, p10) {
		this.num = num;
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
		this.p4 = p4;
		this.p5 = p5;
		this.p6 = p6;
		this.p7 = p7;
		this.p8 = p8;
		this.p9 = p9;
		this.p10 = p10;
	}

	afficher() {
		var p = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.p9, this.p10];
		for (let i = 0; i < p.length; i++) {
			p[i].afficher();
		}
	}
}

