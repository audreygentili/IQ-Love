class Piece {
	constructor(nom, nbpieces, orientation, miroir, col) {
		this.nom = nom;
		this.nbpieces = nbpieces;
		this.orientation = orientation;
		this.miroir = miroir;
		this.col = col;
	}
}
	
class Piece3 extends Piece {
	constructor(nom, nbpieces, orientation,miroir, col, p1, p2, p3) {
		super(nom, nbpieces, orientation, miroir, col);
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
		this.offset = [];
		this.dragging = false;
		this.setOffset();
	}

	setOffset() {
		var p = [this.p1, this.p2, this.p3];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				this.offset[i] = [0, 0];
			}
			if (p[i].length == 6) {
				this.offset[i] = [0, 0, 0, 0, 0, 0];
			}
		}
		print(this.nom);
		print(this.offset);
	}
	
	afficher(px, py) {
		var p = [this.p1, this.p2, this.p3];
		if (this.dragging) {
			for (let i = 0; i < p.length; i++) {
				if (p[i].length == 4) {
					p[i][0] = this.offset[i][0] + px;
					p[i][1] = this.offset[i][1] + py;
				}
				if (p[i].length == 6) {
					p[i][0] = this.offset[i][0] + px;
					p[i][1] = this.offset[i][1] + py;
					p[i][2] = this.offset[i][2] + px;
					p[i][3] = this.offset[i][3] + py;
					p[i][4] = this.offset[i][4] + px;
					p[i][5] = this.offset[i][5] + py;
				}
			}
		}

		fill(this.col);
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				rect(p[i][0], p[i][1], p[i][2], p[i][3]);
			}
			if (p[i].length == 6) {
				triangle(p[i][0], p[i][1], p[i][2], p[i][3], p[i][4], p[i][5]);
			}
		}
	}

	pressed(px, py) {
		this.dragging = true;
		var p = [this.p1, this.p2, this.p3];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				this.offset[i][0] = p[i][0] - px;
				this.offset[i][1] = p[i][1] - py;
			}
			if (p[i].length == 6) {
				this.offset[i][0] = p[i][0] - px;
				this.offset[i][1] = p[i][1] - py;
				this.offset[i][2] = p[i][2] - px;
				this.offset[i][3] = p[i][3] - py;
				this.offset[i][4] = p[i][4] - px;
				this.offset[i][5] = p[i][5] - py;
			}
		}
		this.offsetX = this.x - px;
		this.offsetY = this.y - py;
	}

	notPressed() {
		this.dragging = false;
	}

	rotationL() {
		switch (this.nom) {
			case 6:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] += 250;this.p3[1] += 125;this.p3[2] += 125;this.p3[5] += 125;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;
				} else if (this.orientation == "e") {
					this.orientation = "n";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] -= 250;this.p3[1] -= 125;this.p3[2] -= 125;this.p3[5] -= 125;
				} else if (this.orientation == "n") {
					this.orientation = "o";
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;
				}
				break;
			case 7:
				if (this.orientation == "n") {
					this.orientation = "o";
					this.p2[0] += 125;this.p2[3] += 125;this.p2[4] += 125;this.p2[5] += 250;
					this.p3[0] -= 125;this.p3[3] -= 125;this.p3[4] -= 125;this.p3[5] -= 250;
				} else if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[0] -= 125;this.p2[3] -= 125;this.p2[4] -= 125;this.p2[5] -= 250;
					this.p3[0] += 125;this.p3[3] += 125;this.p3[4] += 125;this.p3[5] += 250;
				}
				break;
			case 8:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[1] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[4] += 125;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[5] -= 125;
				} else if (this.orientation == "e") {
					this.orientation = "n";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[1] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[4] -= 125;
				} else if (this.orientation == "n") {
					this.orientation = "o";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[5] += 125;
				}
				break; 
		}
	}
		
	rotationR() {
	  	switch (this.nom) {
			case 6:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] += 250;this.p3[1] += 125;this.p3[2] += 125;this.p3[5] += 125;
				} else if (this.orientation == "e") {
					this.orientation = "s";
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;
				} else if (this.orientation == "s") {
					this.orientation = "o";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] -= 250;this.p3[1] -= 125;this.p3[2] -= 125;this.p3[5] -= 125;
				}
				break;
			case 7:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[0] += 125;this.p2[3] += 125;this.p2[4] += 125;this.p2[5] += 250;
					this.p3[0] -= 125;this.p3[3] -= 125;this.p3[4] -= 125;this.p3[5] -= 250;
				} else if (this.orientation == "n") {
					this.orientation = "o";
					this.p2[0] -= 125;this.p2[3] -= 125;this.p2[4] -= 125;this.p2[5] -= 250;
					this.p3[0] += 125;this.p3[3] += 125;this.p3[4] += 125;this.p3[5] += 250;
				}
				break;
			case 8:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[5] -= 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[1] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[4] += 125;
				} else if (this.orientation == "e") {
					this.orientation = "s";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[5] += 125;
				} else if (this.orientation == "s") {
					this.orientation = "o";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[1] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[4] -= 125;
				}
				break; 
	  	}
	}
	
	rotationM() {
	  	switch (this.nom) {
			case 6:
				if (this.orientation == "o") {
					this.p3[0] += 375;this.p3[2] += 125;
					this.p3[4] += 125;
				} else if (this.orientation == "n") {
					this.p3[1] += 375;this.p3[3] += 125;
					this.p3[5] += 125;
				} else if (this.orientation == "e") {
					this.p3[0] -= 375;this.p3[2] -= 125;
					this.p3[4] -= 125;
				} else if (this.orientation == "s") {
					this.p3[1] -= 375;this.p3[3] -= 125;
					this.p3[5] -= 125;
				}
				break;
			case 7:
				if (this.orientation == "o") {
					this.p3[1]-=125;this.p3[3]+=125;this.p3[5] += 125;this.p2[4] -=125;this.p2[1]+=125;this.p2[3]-=125;
				} else if (this.orientation == "n") {
					this.p3[0]+=125;this.p3[2]-=125;this.p3[4] -= 125;this.p2[4] += 125;this.p2[0]-=125;this.p2[2]+=125;
				}
				if (this.orientation == "e") {
					this.p3[1]+=125;this.p3[3]-=125;this.p3[5] -= 125;this.p2[4] +=125;this.p2[1]-=125;this.p2[3]+=125;

				} else if (this.orientation == "s") {
					this.p3[0]-=125;this.p3[2]+=125;this.p3[4] += 125;this.p2[4] -= 125;this.p2[0]+=125;this.p2[2]-=125;
				}
				break;
			case 8:
				if (this.orientation == "o") {
					this.p3[3] +=125;this.p3[1] += 125;this.p3[5] -= 125;
				} else if (this.orientation == "n") {
					this.p3[2] -=125;this.p3[0] -= 125;this.p3[4] += 125;
				} else if (this.orientation == "e") {
					this.p3[3] -=125;this.p3[1] -= 125;this.p3[5] += 125;
				} else if (this.orientation == "s") {
					this.p3[2] +=125;this.p3[0] += 125;this.p3[4] -= 125;
				}
				break;
		
			}
	}
  	clip() {
	  sX = mouseX
	  sY = mouseY
	  
	  if (sX > 830 || sX < 80 || sY < 80 || sY > 705 ) return true
	  else {
	  switch (this.nom) {
		case 6:
		  this.p1[0] = sX
		  this.p1[1] = sY
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  this.p1[0] = 80+125*i
				  this.p1[1] = 80+125*j
				  t1 = this.p1[0]
				  u1 = this.p1[1]
				  g1 = this.p1[0] - 125
				  h1 = this.p1[1]
				  v1 = this.p1[0] + 125 
				  w1 = this.p1[1]
				  x1 = this.p1[0] + 125
				  y1 = this.p1[1] - 125
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  this.p1[0] = 80+125*i
				  this.p1[1] = 80+125*j
				  t1 = this.p1[0] +125
				  u1 = this.p1[1]
				  g1 = this.p1[0]
				  h1 = this.p1[1] - 125
				  v1 = this.p1[0] + 125
				  w1 = this.p1[1] + 125
				  x1 = this.p1[0] + 250
				  y1 = this.p1[1] + 125
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  this.p1[0] = 80+125*i
				  this.p1[1] = 80+125*j
				  t1 = this.p1[0] 
			u1 = this.p1[1] +125
			g1 = this.p1[0] +125
			h1 = this.p1[1] 
			v1 = this.p1[0] +125
			w1 = this.p1[1] +125
			x1 = this.p1[0] 
			y1 = this.p1[1] + 250
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  this.p1[0] = 80+125*i
				  this.p1[1] = 80+125*j
				  t1 = this.p1[0] 
			u1 = this.p1[1] 
			g1 = this.p1[0] 
			h1 = this.p1[1] + 125
			v1 = this.p1[0] 
			w1 = this.p1[1] +125
			x1 = this.p1[0] - 125
			y1 = this.p1[1] 
				}
			  }
			}
			
		  }
		  break
		  
		case 1:
		  x2 = sX
		  y2 = sY
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  x2 = 80 + 125*i
				  y2 = 80 +125 * j
				  i2 = x2 - 125
				  j2 = y2 + 125
				  t2 = x2 + 125
				  u2 = y2 + 125
				  g2 = x2 
				  h2 = y2 + 125
				  v2 = x2 + 250 
				  w2 = y2 
				  z2 = x2+125
				  a2 = y2
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  x2 = 80+125*i
				  y2 = 80+125*j
				  i2 = x2
			j2 = y2 - 125
			g2 = x2 + 125
			h2 = y2 
			t2 = x2 
			u2 = y2 + 125
			v2 = x2 +125
			w2 = y2 +250
			z2 = x2 +125
			a2 = y2 +125
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  x2 = 80 + 125*i
				  y2 = 80 +125 * j
				  i2 = x2 - 125
				  j2 = y2 + 125
				  t2 = x2 + 125
				  u2 = y2 + 125
				  g2 = x2 
				  h2 = y2 + 125
				  v2 = x2 + 250 
				  w2 = y2 
				  z2 = x2+125
				  a2 = y2
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  x2 = 80+125*i
				  y2 = 80+125*j
				  i2 = x2
			j2 = y2 - 125
			g2 = x2 + 125
			h2 = y2 
			t2 = x2 
			u2 = y2 + 125
			v2 = x2 +125
			w2 = y2 +250
			z2 = x2 +125
			a2 = y2 +125
				}
			  }
			}
			
		  }
		  break
		  
		case 2:
	
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 4; i++){
			  for(j=1; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  d3 = 80 + 125*i
				  e3 = 80 +125 * j
				  i3 = d3 - 125
				  j3 = e3 
				  t3 = d3 
				  u3 = e3 
				  v3 = d3  
				  w3 = e3 - 125
				  x3 = d3
				  y3 = e3+125
				  z3 = d3 + 125
				  a3 = e3
				  b3 = d3 + 125
				  c3 = e3
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 4; i++){
			  for(j=1; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  d3 = 80 + 125*i
				  e3 = 80 +125 * j
				  i3 = d3 +125
				  j3 = e3 - 125
				  t3 = d3 + 125
				  u3 = e3 
				  v3 = d3 + 250
				  w3 = e3
				  x3 = d3
				  y3 = e3
				  z3 = d3 + 125
				  a3 = e3 + 125
				  b3 = d3 
				  c3 = e3 +125
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 4; i++){
			  for(j=1; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  d3 = 80 + 125*i
				  e3 = 80 +125 * j
				  i3 = d3 +250
			j3 = e3 + 125
			t3 = d3 +125
			u3 = e3 +125
			v3 = d3 + 125
			w3 = e3+250
			x3 = d3 +125
			y3 = e3 
			z3 = d3 
			a3 = e3 +125
			b3 = d3 -125
			c3 = e3 
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 4; i++){
			  for(j=1; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  d3 = 80 + 125*i
				  e3 = 80 +125 * j
				  i3 = d3 
			j3 = e3 + 250
			t3 = d3 
			u3 = e3 +125
			v3 = d3 - 125
			w3 = e3+125
			x3 = d3 +125
			y3 = e3 +125
			z3 = d3 
			a3 = e3 
			b3 = d3 
			c3 = e3 -125
				}
			  }
			}
			
		  }
		  break
		  
		case 3:
	
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 4; i++){
			  for(j=1; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i4 = 80 + 125*i
				  j4 = 80 +125 * j
				  g4 = i4 -125
				  h4 = j4 
				  t4 = i4 +125
				  u4 = j4 
				  v4 = i4 +125
				  w4 = j4 +125
				  x4 = i4 +250
				  y4 = j4 +125
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 4; i++){
			  for(j=1; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i4 = 80 + 125*i
				  j4 = 80 +125 * j
				  g4 = i4 
				  h4 = j4 -125
				  t4 = i4 +125
				  u4 = j4 +125
				  v4 = i4 
				  w4 = j4 + 125
				  x4 = i4
				  y4 = j4 +250
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 4; i++){
			  for(j=1; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i4 = 80 + 125*i
				  j4 = 80 +125 * j
				  g4 = i4 +125
				  h4 = j4 
				  t4 = i4 
				  u4 = j4 
				  v4 = i4 
				  w4 = j4 +125
				  x4 = i4 -125
				  y4 = j4 
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i4 = 80 + 125*i
				  j4 = 80 +125 * j
				  g4 = i4 
				  h4 = j4 +125
				  t4 = i4 
				  u4 = j4 
				  v4 = i4 +125
				  w4 = j4 
				  x4 = i4 +125
				  y4 = j4 -125
				}
			  }
			}
			
		  }
		  break
		  
		case 4:
	
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i5 = 80 + 125*i
				  j5 = 80 +125 * j
				  t5 = i5 
				  u5 = j5 +250 
				  g5 = i5 
				  h5 = j5 -125 
				  v5 = i5 
				  w5 = j5 +125
				  x5 = i5 +125
				  y5 = j5 +125
				  z5 = i5 +125
				  a5 = j5 
				  b5 = i5 +250
				  c5 = j5 
				  d5 = i5 +125
				  e5 = j5 -125
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i5 = 80 + 125*i
				  j5 = 80 +125 * j
				  t5 = i5 - 125
				  u5 = j5
				  g5 = i5 + 125
				  h5 = j5
				  v5 = i5
				  w5 = j5
				  x5 = i5 
				  y5 = j5 +125
				  z5 = i5 + 125
				  a5 = j5 + 125
				  b5 = i5 +125
				  c5 = j5 +250
				  d5 = i5 +250
				  e5 = j5 + 125
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i5 = 80 + 125*i
				  j5 = 80 +125 * j
				  t5 = i5 + 125
				  u5 = j5 -125 
				  g5 = i5 
				  h5 = j5 +125 
				  v5 = i5 +125
				  w5 = j5 
				  x5 = i5 
				  y5 = j5 
				  z5 = i5 
				  a5 = j5 + 125
				  b5 = i5 -125
				  c5 = j5 +125
				  d5 = i5 
				  e5 = j5 + 250
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i5 = 80 + 125*i
				  j5 = 80 +125 * j
				  t5 = i5 + 250
				  u5 = j5 +125 
				  g5 = i5 - 125 
				  h5 = j5 
				  v5 = i5 +125
				  w5 = j5 +125
				  x5 = i5 +125
				  y5 = j5 
				  z5 = i5 
				  a5 = j5 
				  b5 = i5 
				  c5 = j5 -125
				  d5 = i5 -125
				  e5 = j5 
				}
			  }
			}
			
		  }
		  break
		
		case 5:
	
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i6 = 80 + 125*i
				  j6 = 80 +125 * j
				  g6 = i6 - 125
				  h6 = j6
				  t6 = i6
				  u6 = j6
				  v6 = i6
				  w6 = j6 - 125
				  x6 = i6
				  y6 = j6 +125
				  z6 = i6 +125
				  a6 = j6
				  b6 = i6 + 125
				  c6 = j6 + 125
				  d6 = i6 +250
				  e6 = j6 +125
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i6 = 80 + 125*i
				  j6 = 80 +125 * j
				  g6 = i6 +125 
				  h6 = j6 -125
				  t6 = i6 +125 
				  u6 = j6
				  v6 = i6 +250
				  w6 = j6 
				  x6 = i6
				  y6 = j6 
				  z6 = i6 +125
				  a6 = j6 +125
				  b6 = i6
				  c6 = j6 + 125
				  d6 = i6 
				  e6 = j6 +250  
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i6 = 80 + 125*i
				  j6 = 80 +125 * j
				  g6 = i6 + 250
				  h6 = j6 +125
				  t6 = i6 +125
				  u6 = j6 +125
				  v6 = i6 +125
				  w6 = j6 +250
				  x6 = i6 +125
				  y6 = j6 
				  z6 = i6 
				  a6 = j6 + 125
				  b6 = i6 
				  c6 = j6 
				  d6 = i6 -125
				  e6 = j6 
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i6 = 80 + 125*i
				  j6 = 80 +125 * j
				  g6 = i6 
				  h6 = j6 +250
				  t6 = i6
				  u6 = j6 +125
				  v6 = i6 - 125
				  w6 = j6 + 125
				  x6 = i6 +125
				  y6 = j6 +125
				  z6 = i6 
				  a6 = j6
				  b6 = i6 + 125
				  c6 = j6 
				  d6 = i6 +125
				  e6 = j6 -125
				}
			  }
			}
			
		  }
		  break
		  
		case 6:
	
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i7 = 80 + 125*i
				  j7 = 80 +125 * j
				  g7 = i7 - 125
				  h7 = j7 - 125
				  t7 = i7 - 125
				  u7 = j7 
				  v7 = i7
				  w7 = j7 + 125 
				  x7 = i7 
				  y7 = j7 
				  z7 = i7
				  a7 = j7 - 125
				  b7 = i7 + 125
				  c7 = j7 
				  d7 = i7 +125
				  e7 = j7 +125
				  k7 = i7 +250
				  l7 = j7+125
	
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i7 = 80 + 125*i
				  j7 = 80 +125 * j
				  g7 = i7 +125 
				  h7 = j7 -125
				  t7 = i7 +125 
				  u7 = j7 - 125
				  v7 = i7 
				  w7 = j7 
				  x7 = i7 +125
				  y7 = j7 
				  z7 = i7 +250
				  a7 = j7 
				  b7 = i7 +125
				  c7 = j7 + 125
				  d7 = i7 
				  e7 = j7 +250
				  k7 = i7 
				  l7 = j7+125
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i7 = 80 + 125*i
				  j7 = 80 +125 * j
				  g7 = i7 +125 
				  h7 = j7 +125
				  t7 = i7 +250 
				  u7 = j7 +125
				  v7 = i7 +125
				  w7 = j7 
				  x7 = i7 +125
				  y7 = j7 +125
				  z7 = i7 +125
				  a7 = j7 +250 
				  b7 = i7 
				  c7 = j7 + 125
				  d7 = i7 
				  e7 = j7 
				  k7 = i7 -125
				  l7 = j7 
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i7 = 80 + 125*i
				  j7 = 80 +125 * j
				  g7 = i7 -125 
				  h7 = j7 +125
				  t7 = i7 +125 
				  u7 = j7 + 125
				  v7 = i7 
				  w7 = j7 +250
				  x7 = i7 
				  y7 = j7 +125
				  z7 = i7 -125
				  a7 = j7 +125
				  b7 = i7 
				  c7 = j7 
				  d7 = i7 +125
				  e7 = j7 
				  k7 = i7 +125
				  l7 = j7 -125
				}
			  }
			}
			
		  }
		  break
		  
		case 7:
	
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i8 = 80 + 125*i
				  j8 = 80 +125 * j
				  g8 = i8 + 125
				  h8 = j8 
				  t8 = i8- 125
				  u8 = j8 
				  v8 = i8
				  w8 = j8  
				  x8 = i8 
				  y8 = j8 +125 
				  z8 = i8 +125
				  a8 = j8 
				  b8 = i8 + 250
				  c8 = j8 
				  d8 = i8 +250
				  e8 = j8 -125
	
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i8 = 80 + 125*i
				  j8 = 80 +125 * j
				  g8 = i8
				  h8 = j8+125 
				  t8 = i8+125
				  u8 = j8 -125
				  v8 = i8+125
				  w8 = j8  
				  x8 = i8 
				  y8 = j8 
				  z8 = i8 +125
				  a8 = j8 +125
				  b8 = i8 + 125
				  c8 = j8 +250
				  d8 = i8 +250
				  e8 = j8 +250
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 4; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i8 = 80 + 125*i
				  j8 = 80 +125 * j
				  g8 = i8-125
				  h8 = j8 
				  t8 = i8+250
				  u8 = j8 +125
				  v8 = i8+125
				  w8 = j8 +125 
				  x8 = i8 +125
				  y8 = j8 
				  z8 = i8 
				  a8 = j8 +125
				  b8 = i8 - 125
				  c8 = j8 +125
				  d8 = i8 -125
				  e8 = j8 +250
				  
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i8 = 80 + 125*i
				  j8 = 80 +125 * j
				  g8 = i8
				  h8 = j8-125 
				  t8 = i8+125
				  u8 = j8 +125
				  v8 = i8
				  w8 = j8+125  
				  x8 = i8 
				  y8 = j8 +250
				  z8 = i8 
				  a8 = j8 
				  b8 = i8 
				  c8 = j8 -125
				  d8 = i8 -125
				  e8 = j8 -125
				}
			  }
			}
			
		  }
		  break
	  }
	  }

	}
}
class Piece4 extends Piece {
	constructor(nom, nbpieces, orientation,miroir, col, p1, p2, p3, p4) {
		super(nom, nbpieces, orientation, miroir,col);
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
		this.p4 = p4;
		this.offset = [];
		this.dragging = false;
		this.setOffset();
	}

	setOffset() {
		var p = [this.p1, this.p2, this.p3, this.p4];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				this.offset[i] = [0, 0];
			}
			if (p[i].length == 6) {
				this.offset[i] = [0, 0, 0, 0, 0, 0];
			}
		}
		print(this.nom);
		print(this.offset);
	}
	
	afficher(px, py) {
		var p = [this.p1, this.p2, this.p3, this.p4];
		if (this.dragging) {
			for (let i = 0; i < p.length; i++) {
				if (p[i].length == 4) {
					p[i][0] = this.offset[i][0] + px;
					p[i][1] = this.offset[i][1] + py;
				}
				if (p[i].length == 6) {
					p[i][0] = this.offset[i][0] + px;
					p[i][1] = this.offset[i][1] + py;
					p[i][2] = this.offset[i][2] + px;
					p[i][3] = this.offset[i][3] + py;
					p[i][4] = this.offset[i][4] + px;
					p[i][5] = this.offset[i][5] + py;
				}
			}
		}

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

	pressed(px, py) {
		this.dragging = true;
		var p = [this.p1, this.p2, this.p3, this.p4];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				this.offset[i][0] = p[i][0] - px;
				this.offset[i][1] = p[i][1] - py;
			}
			if (p[i].length == 6) {
				this.offset[i][0] = p[i][0] - px;
				this.offset[i][1] = p[i][1] - py;
				this.offset[i][2] = p[i][2] - px;
				this.offset[i][3] = p[i][3] - py;
				this.offset[i][4] = p[i][4] - px;
				this.offset[i][5] = p[i][5] - py;
			}
		}
		this.offsetX = this.x - px;
		this.offsetY = this.y - py;
	}

	notPressed() {
		this.dragging = false;
	}
	
	rotationL() {
		switch (this.nom) {
			case 1:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p3[0] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[5] += 125;
					this.p2[0] -= 125;this.p2[1] -= 125;this.p4[0] -= 250;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p3[1] -= 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[4] += 125;
					this.p2[0] -= 125;this.p2[1] += 125;this.p4[1] += 250;
				}  else if (this.orientation == "e") {
					this.orientation = "n";
					this.p3[0] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[5] -= 125;
					this.p2[0] += 125;this.p2[1] += 125;this.p4[0] += 250;
				} else if (this.orientation == "n") {
					this.orientation = "o"; 
					this.p3[1] += 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[4] -= 125;
					this.p2[0] += 125;this.p2[1] -= 125;this.p4[1] -= 250;        
				}
				break;
			case 2:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p3[0] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[5] += 125;
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p4[0] -= 125;this.p4[2] -= 250;this.p4[3] -= 125;this.p4[4] -= 375;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p3[1] -= 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[4] += 125;
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p4[1] += 125;this.p4[2] -= 125;this.p4[3] += 250;this.p4[5] += 375;
				}  else if (this.orientation == "e") {
					this.orientation = "n";
					this.p3[0] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[5] -= 125;
					this.p2[0] += 125;this.p2[1] += 125;
					this.p4[0] += 125;this.p4[2] += 250;this.p4[3] += 125;this.p4[4] += 375;
				} else if (this.orientation == "n") {
					this.orientation = "o"; 
					this.p3[1] += 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[4] -= 125;
					this.p2[0] += 125;this.p2[1] -= 125;       
					this.p4[1] -= 125;this.p4[2] += 125;this.p4[3] -= 250;this.p4[5] -= 375; 
				}
				break;
			case 3:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p3[0] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[5] += 125;
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p4[0] += 125;this.p4[1] -= 250;this.p4[2] -= 125;this.p4[3] -= 250;this.p4[5] -= 125;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p3[1] -= 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[4] += 125;
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p4[0] -= 250;this.p4[1] -= 125;this.p4[2] -= 250;this.p4[3] += 125;this.p4[4] -= 125;
				}  else if (this.orientation == "e") {
					this.orientation = "n";
					this.p3[0] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[5] -= 125;
					this.p2[0] += 125;this.p2[1] += 125;
					this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 125;this.p4[3] += 250;this.p4[5] += 125;
				} else if (this.orientation == "n") {
					this.orientation = "o"; 
					this.p3[1] += 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[4] -= 125;
					this.p2[0] += 125;this.p2[1] -= 125;       
					this.p4[0] += 250;this.p4[1] += 125;this.p4[2] += 250;this.p4[3] -= 125;this.p4[4] += 125; 
				}
				break;
		}
	}

	rotationR() {
		switch (this.nom) {
			case 1:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p3[1] -= 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[4] += 125;
					this.p2[0] -= 125;this.p2[1] += 125;this.p4[1] += 250;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p3[0] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[5] += 125;
					this.p2[0] -= 125;this.p2[1] -= 125;this.p4[0] -= 250;
				}  else if (this.orientation == "e") {
					this.orientation = "s";
					this.p3[1] += 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[4] -= 125;
					this.p2[0] += 125;this.p2[1] -= 125;this.p4[1] -= 250;
				} else if (this.orientation == "s") {
					this.orientation = "o"; 
					this.p3[0] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[5] -= 125;
					this.p2[0] += 125;this.p2[1] += 125;this.p4[0] += 250;        
				}
				break;
			case 2:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p3[1] -= 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[4] += 125;
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p4[1] += 125;this.p4[2] -= 125;this.p4[3] += 250;this.p4[5] += 375;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p3[0] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[5] += 125;
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p4[0] -= 125;this.p4[2] -= 250;this.p4[3] -= 125;this.p4[4] -= 375;
				}  else if (this.orientation == "e") {
					this.orientation = "s";
					this.p3[1] += 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[4] -= 125;
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p4[1] -= 125;this.p4[2] += 125;this.p4[3] -= 250;this.p4[5] -= 375;
				} else if (this.orientation == "s") {
					this.orientation = "o"; 
					this.p3[0] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[5] -= 125;
					this.p2[0] += 125;this.p2[1] += 125;  
					this.p4[0] += 125;this.p4[2] += 250;this.p4[3] += 125;this.p4[4] += 375;    
				}
				break;
			case 3:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p3[1] -= 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[4] += 125;
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p4[0] -= 250;this.p4[1] -= 125;this.p4[2] -= 250;this.p4[3] += 125;this.p4[4] -= 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p3[0] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[5] += 125;
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p4[0] += 125;this.p4[1] -= 250;this.p4[2] -= 125;this.p4[3] -= 250;this.p4[5] -= 125;
				}  else if (this.orientation == "e") {
					this.orientation = "s";
					this.p3[1] += 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[4] -= 125;
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p4[0] += 250;this.p4[1] += 125;this.p4[2] += 250;this.p4[3] -= 125;this.p4[4] += 125;
				} else if (this.orientation == "s") {
					this.orientation = "o"; 
					this.p3[0] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[5] -= 125;
					this.p2[0] += 125;this.p2[1] += 125; 
					this.p4[0] -= 125;this.p4[1] += 250;this.p4[2] += 125;this.p4[3] += 250;this.p4[5] += 125;     
				}
				break;
		}
	}
	rotationM() {
		switch (this.nom) {
		  case 1:
			  if (this.orientation == "o") {
				  this.p3[3] += 125;this.p4[1] += 250;this.p3[0] += 125;this.p3[4] -=125;		  
			  } else if (this.orientation == "n") {
				  this.p3[2] -= 125;this.p4[0] -= 250;this.p3[1] -= 125;this.p3[5] +=125;
			  } else if (this.orientation == "e") {
				  this.p3[3] -= 125;this.p4[1] -= 250;this.p3[0] -= 125;this.p3[4] +=125;
			  } else if (this.orientation == "s") {
				  this.p3[2] += 125;this.p4[0] += 250;this.p3[1] += 125;this.p3[5] -=125;
			  }
			  break;
		  case 2:
			  if (this.orientation == "o") {
				  this.p3[3] += 125;this.p3[1] -= 125;this.p3[5] += 125;
				  this.p4[5] += 375;this.p4[1] += 125;this.p4[3] += 125;
			  } else if (this.orientation == "n") {
				  this.p3[2] -= 125;this.p3[0] += 125;this.p3[4] -= 125;
				  this.p4[4] -= 375;this.p4[0] -= 125;this.p4[2] -= 125;
			  }
			  if (this.orientation == "e") {
				  this.p3[3] -= 125;this.p3[1] += 125;this.p3[5] -= 125;
				  this.p4[5] -= 375;this.p4[1] -= 125;this.p4[3] -= 125;

			  } else if (this.orientation == "s") {
				  this.p3[2] += 125;this.p3[0] -= 125;this.p3[4] += 125;
				  this.p4[4] += 375;this.p4[0] += 125;this.p4[2] += 125;
			  }
			  break;
		  case 3:
			  if (this.orientation == "o") {
				  this.p3[3] +=125;this.p3[1] -=125;this.p3[5]+=125;
				  this.p4[1]-=375;this.p4[3]-=125;this.p4[5]-=125;
			  } else if (this.orientation == "n") {
				  this.p3[2] -=125;this.p3[0] +=125;this.p3[4]-=125;
				  this.p4[0]+=375;this.p4[2]+=125;this.p4[4]+=125;
			  } else if (this.orientation == "e") {
				  this.p3[3] -=125;this.p3[1] +=125;this.p3[5]-=125;
				  this.p4[1]+=375;this.p4[3]+=125;this.p4[5]+=125;
			  } else if (this.orientation == "s") {
				  this.p3[2] +=125;this.p3[0] -=125;this.p3[4]+=125;
				  this.p4[0]-=375;this.p4[2]-=125;this.p4[4]-=125;
			  }
			  break;
	  
		  }
  }
}

class Piece5 extends Piece {
	constructor(nom, nbpieces, orientation,miroir, col, p1, p2, p3, p4, p5) {
		super(nom, nbpieces, orientation, miroir,col);
		this.p1 = p1;
		this.p2 = p2;
		this.p3 = p3;
		this.p4 = p4;
		this.p5 = p5;
		this.offset = [];
		this.dragging = false;
		this.setOffset();
	}

	setOffset() {
		var p = [this.p1, this.p2, this.p3, this.p4, this.p5];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				this.offset[i] = [0, 0];
			}
			if (p[i].length == 6) {
				this.offset[i] = [0, 0, 0, 0, 0, 0];
			}
		}
		print(this.nom);
		print(this.offset);
	}
	
	afficher(px, py) {
		var p = [this.p1, this.p2, this.p3, this.p4, this.p5];
		if (this.dragging) {
			for (let i = 0; i < p.length; i++) {
				if (p[i].length == 4) {
					p[i][0] = this.offset[i][0] + px;
					p[i][1] = this.offset[i][1] + py;
				}
				if (p[i].length == 6) {
					p[i][0] = this.offset[i][0] + px;
					p[i][1] = this.offset[i][1] + py;
					p[i][2] = this.offset[i][2] + px;
					p[i][3] = this.offset[i][3] + py;
					p[i][4] = this.offset[i][4] + px;
					p[i][5] = this.offset[i][5] + py;
				}
			}
		}

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

	pressed(px, py) {
		this.dragging = true;
		var p = [this.p1, this.p2, this.p3, this.p4, this.p5];
		for (let i = 0; i < p.length; i++) {
			if (p[i].length == 4) {
				this.offset[i][0] = p[i][0] - px;
				this.offset[i][1] = p[i][1] - py;
			}
			if (p[i].length == 6) {
				this.offset[i][0] = p[i][0] - px;
				this.offset[i][1] = p[i][1] - py;
				this.offset[i][2] = p[i][2] - px;
				this.offset[i][3] = p[i][3] - py;
				this.offset[i][4] = p[i][4] - px;
				this.offset[i][5] = p[i][5] - py;
			}
		}
		this.offsetX = this.x - px;
		this.offsetY = this.y - py;
	}

	notPressed() {
		this.dragging = false;
	}
	
	rotationL() {
		switch (this.nom) {
			case 4:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p2[1] += 250;
					this.p3[0] += 125;this.p3[1] += 250;this.p3[2] += 125;this.p3[5] += 125;
					this.p4[1] += 125;this.p4[2] -= 125;this.p4[3] += 250;this.p4[4] -= 125;
					this.p5[0] -= 125;this.p5[3] -= 125;this.p5[4] -= 125;this.p5[5] -= 250;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p2[0] += 250;
					this.p3[0] += 250;this.p3[1] -= 125;this.p3[3] -= 125;this.p3[4] += 125;
					this.p4[0] += 125;this.p4[2] += 250;this.p4[3] += 125;this.p4[5] += 125;
					this.p5[1] += 125;this.p5[2] -= 125;this.p5[4] -= 250;this.p5[5] += 125;
				}  else if (this.orientation == "e") {
					this.orientation = "n";
					this.p2[1] -= 250;
					this.p3[0] -= 125;this.p3[1] -= 250;this.p3[2] -= 125;this.p3[5] -= 125;
					this.p4[1] -= 125;this.p4[2] += 125;this.p4[3] -= 250;this.p4[4] += 125;
					this.p5[0] += 125;this.p5[3] += 125;this.p5[4] += 125;this.p5[5] += 250;
				} else if (this.orientation == "n") {
					this.orientation = "o"; 
					this.p2[0] -= 250;
					this.p3[0] -= 250;this.p3[1] += 125;this.p3[3] += 125;this.p3[4] -= 125;
					this.p4[0] -= 125;this.p4[2] -= 250;this.p4[3] -= 125;this.p4[5] -= 125;
					this.p5[1] -= 125;this.p5[2] += 125;this.p5[4] += 250;this.p5[5] -= 125;
				}
				break;
			case 5:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p2[0] += 125;this.p2[1] -= 250;this.p2[3] -= 125;this.p2[4] += 125;
					this.p3[0] -= 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;this.p3[5] -= 250;
					this.p4[0] -= 125;this.p4[1] -= 250;this.p4[3] -= 125;this.p4[4] -= 125;
					this.p5[0] += 125;this.p5[3] += 125;this.p5[4] += 125;this.p5[5] += 250;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p2[0] -= 250;this.p2[1] -= 125;this.p2[2] -= 125;this.p2[5] -= 125;
					this.p3[0] -= 250;this.p3[1] += 125;this.p3[2] -= 125;this.p3[4] -= 250;this.p3[5] -= 125;
					this.p4[0] -= 250;this.p4[1] += 125;this.p4[2] -= 125;this.p4[5] += 125;
					this.p5[1] -= 125;this.p5[2] += 125;this.p5[4] += 250;this.p5[5] -= 125;
				}  else if (this.orientation == "e") {
					this.orientation = "n";
					this.p2[0] -= 125;this.p2[1] += 250;this.p2[3] += 125;this.p2[4] -= 125;
					this.p3[0] += 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;this.p3[5] += 250;
					this.p4[0] += 125;this.p4[1] += 250;this.p4[3] += 125;this.p4[4] += 125;
					this.p5[0] -= 125;this.p5[3] -= 125;this.p5[4] -= 125;this.p5[5] -= 250;
				} else if (this.orientation == "n") {
					this.orientation = "o"; 
					this.p2[0] += 250;this.p2[1] += 125;this.p2[2] += 125;this.p2[5] += 125;
					this.p3[0] += 250;this.p3[1] -= 125;this.p3[2] += 125;this.p3[4] += 250;this.p3[5] += 125;
					this.p4[0] += 250;this.p4[1] -= 125;this.p4[2] += 125;this.p4[5] -= 125;
					this.p5[1] += 125;this.p5[2] -= 125;this.p5[4] -= 250;this.p5[5] += 125;
				}
				break;
			case 9:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;
					this.p4[0] -= 125;this.p4[1] -= 250;this.p4[3] -= 125;this.p4[4] += 125;this.p4[5] -= 250;
					this.p5[0] -= 125;this.p5[1] -= 250;this.p5[3] -= 125;this.p5[4] -= 125;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] -= 250;this.p3[1] -= 125;this.p3[2] -= 125;this.p3[5] -= 125;
					this.p4[0] -= 250;this.p4[1] += 125;this.p4[2] -= 125;this.p4[4] -= 250;this.p4[5] -= 125;
					this.p5[0] -= 250;this.p5[1] += 125;this.p5[2] -= 125;this.p5[5] += 125;
				}  else if (this.orientation == "e") {
					this.orientation = "n";
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;
					this.p4[0] += 125;this.p4[1] += 250;this.p4[3] += 125;this.p4[4] -= 125;this.p4[5] += 250;
					this.p5[0] += 125;this.p5[1] += 250;this.p5[3] += 125;this.p5[4] += 125;
				} else if (this.orientation == "n") {
					this.orientation = "o"; 
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] += 250;this.p3[1] += 125;this.p3[2] += 125;this.p3[5] += 125;
					this.p4[0] += 250;this.p4[1] -= 125;this.p4[2] += 125;this.p4[4] += 250;this.p4[5] += 125;
					this.p5[0] += 250;this.p5[1] -= 125;this.p5[2] += 125;this.p5[5] -= 125;
				}
				break;
			case 10:
				if (this.orientation == "o") {
					this.orientation = "s";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] += 250;this.p3[1] -= 125;this.p3[2] += 125;this.p3[4] += 250;this.p3[5] += 125;
					this.p4[1] += 125;this.p4[2] += 125;this.p4[4] += 250;this.p4[5] += 125;
					this.p5[0] -= 250;this.p5[1] += 125;this.p5[2] -= 125;this.p5[5] += 125;
				} else if (this.orientation == "s") {
					this.orientation = "e";
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;this.p3[5] -= 250;
					this.p4[0] += 125;this.p4[3] -= 125;this.p4[4] += 125;this.p4[5] -= 250;
					this.p5[0] += 125;this.p5[1] += 250;this.p5[3] += 125;this.p5[4] += 125;
				}  else if (this.orientation == "e") {
					this.orientation = "n";
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] -= 250;this.p3[1] += 125;this.p3[2] -= 125;this.p3[4] -= 250;this.p3[5] -= 125;
					this.p4[1] -= 125;this.p4[2] -= 125;this.p4[4] -= 250;this.p4[5] -= 125;
					this.p5[0] += 250;this.p5[1] -= 125;this.p5[2] += 125;this.p5[5] -= 125;
				} else if (this.orientation == "n") {
					this.orientation = "o"; 
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;this.p3[5] += 250;
					this.p4[0] -= 125;this.p4[3] += 125;this.p4[4] -= 125;this.p4[5] += 250;
					this.p5[0] -= 125;this.p5[1] -= 250;this.p5[3] -= 125;this.p5[4] -= 125;
				}
				break;
		}
	}

	rotationR() {
		switch (this.nom) {
			case 4:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[0] += 250;
					this.p3[0] += 250;this.p3[1] -= 125;this.p3[3] -= 125;this.p3[4] += 125;
					this.p4[0] += 125;this.p4[2] += 250;this.p4[3] += 125;this.p4[5] += 125;
					this.p5[1] += 125;this.p5[2] -= 125;this.p5[4] -= 250;this.p5[5] += 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p2[1] += 250;
					this.p3[0] += 125;this.p3[1] += 250;this.p3[2] += 125;this.p3[5] += 125;
					this.p4[1] += 125;this.p4[2] -= 125;this.p4[3] += 250;this.p4[4] -= 125;
					this.p5[0] -= 125;this.p5[3] -= 125;this.p5[4] -= 125;this.p5[5] -= 250;
				}  else if (this.orientation == "e") {
					this.orientation = "s";
					this.p2[0] -= 250;
					this.p3[0] -= 250;this.p3[1] += 125;this.p3[3] += 125;this.p3[4] -= 125;
					this.p4[0] -= 125;this.p4[2] -= 250;this.p4[3] -= 125;this.p4[5] -= 125;
					this.p5[1] -= 125;this.p5[2] += 125;this.p5[4] += 250;this.p5[5] -= 125;
				} else if (this.orientation == "s") {
					this.orientation = "o"; 
					this.p2[1] -= 250;
					this.p3[0] -= 125;this.p3[1] -= 250;this.p3[2] -= 125;this.p3[5] -= 125;
					this.p4[1] -= 125;this.p4[2] += 125;this.p4[3] -= 250;this.p4[4] += 125;
					this.p5[0] += 125;this.p5[3] += 125;this.p5[4] += 125;this.p5[5] += 250;
				}
				break;
			case 5:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[0] -= 250;this.p2[1] -= 125;this.p2[2] -= 125;this.p2[5] -= 125;
					this.p3[0] -= 250;this.p3[1] += 125;this.p3[2] -= 125;this.p3[4] -= 250;this.p3[5] -= 125;
					this.p4[0] -= 250;this.p4[1] += 125;this.p4[2] -= 125;this.p4[5] += 125;
					this.p5[1] -= 125;this.p5[2] += 125;this.p5[4] += 250;this.p5[5] -= 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p2[0] += 125;this.p2[1] -= 250;this.p2[3] -= 125;this.p2[4] += 125;
					this.p3[0] -= 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;this.p3[5] -= 250;
					this.p4[0] -= 125;this.p4[1] -= 250;this.p4[3] -= 125;this.p4[4] -= 125;
					this.p5[0] += 125;this.p5[3] += 125;this.p5[4] += 125;this.p5[5] += 250;
				}  else if (this.orientation == "e") {
					this.orientation = "s";
					this.p2[0] += 250;this.p2[1] += 125;this.p2[2] += 125;this.p2[5] += 125;
					this.p3[0] += 250;this.p3[1] -= 125;this.p3[2] += 125;this.p3[4] += 250;this.p3[5] += 125;
					this.p4[0] += 250;this.p4[1] -= 125;this.p4[2] += 125;this.p4[5] -= 125;
					this.p5[1] += 125;this.p5[2] -= 125;this.p5[4] -= 250;this.p5[5] += 125;
				} else if (this.orientation == "s") {
					this.orientation = "o"; 
					this.p2[0] -= 125;this.p2[1] += 250;this.p2[3] += 125;this.p2[4] -= 125;
					this.p3[0] += 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;this.p3[5] += 250;
					this.p4[0] += 125;this.p4[1] += 250;this.p4[3] += 125;this.p4[4] += 125;
					this.p5[0] -= 125;this.p5[3] -= 125;this.p5[4] -= 125;this.p5[5] -= 250;
				}
				break;
			case 9:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] -= 250;this.p3[1] -= 125;this.p3[2] -= 125;this.p3[5] -= 125;
					this.p4[0] -= 250;this.p4[1] += 125;this.p4[2] -= 125;this.p4[4] -= 250;this.p4[5] -= 125;
					this.p5[0] -= 250;this.p5[1] += 125;this.p5[2] -= 125;this.p5[5] += 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;
					this.p4[0] -= 125;this.p4[1] -= 250;this.p4[3] -= 125;this.p4[4] += 125;this.p4[5] -= 250;
					this.p5[0] -= 125;this.p5[1] -= 250;this.p5[3] -= 125;this.p5[4] -= 125;
				}  else if (this.orientation == "e") {
					this.orientation = "s";
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] += 250;this.p3[1] += 125;this.p3[2] += 125;this.p3[5] += 125;
					this.p4[0] += 250;this.p4[1] -= 125;this.p4[2] += 125;this.p4[4] += 250;this.p4[5] += 125;
					this.p5[0] += 250;this.p5[1] -= 125;this.p5[2] += 125;this.p5[5] -= 125;
				} else if (this.orientation == "s") {
					this.orientation = "o"; 
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;
					this.p4[0] += 125;this.p4[1] += 250;this.p4[3] += 125;this.p4[4] -= 125;this.p4[5] += 250;
					this.p5[0] += 125;this.p5[1] += 250;this.p5[3] += 125;this.p5[4] += 125;
				}
				break;
			case 10:
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;this.p3[5] -= 250;
					this.p4[0] += 125;this.p4[3] -= 125;this.p4[4] += 125;this.p4[5] -= 250;
					this.p5[0] += 125;this.p5[1] += 250;this.p5[3] += 125;this.p5[4] += 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] += 250;this.p3[1] -= 125;this.p3[2] += 125;this.p3[4] += 250;this.p3[5] += 125;
					this.p4[1] += 125;this.p4[2] += 125;this.p4[4] += 250;this.p4[5] += 125;
					this.p5[0] -= 250;this.p5[1] += 125;this.p5[2] -= 125;this.p5[5] += 125;
				}  else if (this.orientation == "e") {
					this.orientation = "s";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;this.p3[5] += 250;
					this.p4[0] -= 125;this.p4[3] += 125;this.p4[4] -= 125;this.p4[5] += 250;
					this.p5[0] -= 125;this.p5[1] -= 250;this.p5[3] -= 125;this.p5[4] -= 125;
				} else if (this.orientation == "s") {
					this.orientation = "o"; 
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] -= 250;this.p3[1] += 125;this.p3[2] -= 125;this.p3[4] -= 250;this.p3[5] -= 125;
					this.p4[1] -= 125;this.p4[2] -= 125;this.p4[4] -= 250;this.p4[5] -= 125;
					this.p5[0] += 250;this.p5[1] -= 125;this.p5[2] += 125;this.p5[5] -= 125;
				}
				break;	
		}
	}
	rotationM() {
		switch (this.nom) {
		  case 4:
			  if (this.orientation == "o") {
				  this.p3[1] += 250;this.p3[5] += 250;this.p2[1] +=375;
				  this.p4[1] += 125;this.p4[3] += 500;this.p4[5] +=125;
				  this.p5[1] +=250;
				  
			  } else if (this.orientation == "n") {
				  this.p3[0] -= 250;this.p3[4] -= 250;this.p2[0] -=375;
				  this.p4[0] -= 125;this.p4[2] -= 500;this.p4[4] -=125;
				  this.p5[0] -=250; 
			  } else if (this.orientation == "e") {
				  this.p3[1] -= 250;this.p3[5] -= 250;this.p2[1] -=375;
				  this.p4[1] -= 125;this.p4[3] -= 500;this.p4[5] -=125;
				  this.p5[1] -=250; 
			  } else if (this.orientation == "s") {
				  this.p3[0] += 250;this.p3[4] += 250;this.p2[0] +=375;
				  this.p4[0] += 125;this.p4[2] += 500;this.p4[4] +=125;
				  this.p5[0] +=250; 
			  }
			  break;
		  case 5:
			if (this.orientation == "o") {
				this.p3[0] += 125;this.p3[2] += 125;this.p3[4] += 375;
				this.p2[0] +=375;this.p2[2] +=125; this.p2[4] += 125;
				this.p4[0] += 125;this.p4[2] += 125;this.p4[4] -=125;
				this.p5[0] += 125;this.p5[2] -= 125;this.p5[4] -=125;
				
			} else if (this.orientation == "n") {
				this.p3[0] += 125;this.p3[2] += 125;this.p3[4] += 375;
				this.p2[0] +=375;this.p2[2] +=125; this.p2[4] += 125;
				this.p4[0] += 125;this.p4[2] += 125;this.p4[4] -=125;
				this.p5[0] += 125;this.p5[2] -= 125;this.p5[4] -=125; 
			} else if (this.orientation == "e") {
				this.p3[1] += 125;this.p3[3] += 125;this.p3[5] += 375;
				this.p2[1] +=375;this.p2[3] +=125; this.p2[5] += 125;
				this.p4[1] += 125;this.p4[3] += 125;this.p4[5] -=125;
				this.p5[1] += 125;this.p5[3] -= 125;this.p5[5] -=125;
			} else if (this.orientation == "s") {
				this.p3[0] -= 125;this.p3[2] -= 125;this.p3[4] -= 375;
				this.p2[0] -=375;this.p2[2] -=125; this.p2[4] -= 125;
				this.p4[0] -= 125;this.p4[2] -= 125;this.p4[4] +=125;
				this.p5[0] -= 125;this.p5[2] += 125;this.p5[4] +=125;
			}
			break;
		case 9:
			if (this.orientation == "o") {
				this.p3[1] -= 375;this.p3[3] -= 125;this.p3[5] -= 125;
				this.p4[1] -= 125;this.p4[3] -= 125;this.p4[5] -=375;
				this.p5[1] -= 125;this.p5[3] -= 125;this.p5[5] +=125; 
				
			} else if (this.orientation == "n") {
				this.p3[0] += 375;this.p3[2] += 125;this.p3[4] += 125;
				this.p4[0] += 125;this.p4[2] += 125;this.p4[4] +=375;
				this.p5[0] += 125;this.p5[2] += 125;this.p5[4] -=125; 
			} else if (this.orientation == "e") {
				this.p3[1] += 375;this.p3[3] += 125;this.p3[5] += 125;
				this.p4[1] += 125;this.p4[3] += 125;this.p4[5] +=375;
				this.p5[1] += 125;this.p5[3] += 125;this.p5[5] -=125; 
			} else if (this.orientation == "s") {
				this.p3[0] -= 375;this.p3[2] -= 125;this.p3[4] -= 125;
				this.p4[0] -= 125;this.p4[2] -= 125;this.p4[4] -=375;
				this.p5[0] -= 125;this.p5[2] -= 125;this.p5[4] +=125; 
			}
			break;

		case 10:
			if (this.orientation == "o") {
				this.p3[1] -= 375;this.p3[3] -= 125;this.p3[5] -= 125;
				this.p2[1] -= 250;
				this.p4[1] += 125;this.p4[3] -= 125;this.p4[5] -=125;
				this.p5[1] += 375;this.p5[3] += 125;this.p5[5] +=125;
				
			} else if (this.orientation == "n") {
				this.p3[0] += 375;this.p3[2] += 125;this.p3[4] += 125;
				this.p2[0] += 250;
				this.p4[0] -= 125;this.p4[2] += 125;this.p4[4] +=125;
				this.p5[0] -= 375;this.p5[2] -= 125;this.p5[4] -=125; 
			} else if (this.orientation == "e") {
				this.p3[1] += 375;this.p3[3] += 125;this.p3[5] += 125;
				this.p2[1] += 250;
				this.p4[1] -= 125;this.p4[3] += 125;this.p4[5] +=125;
				this.p5[1] -= 375;this.p5[3] -= 125;this.p5[5] -=125;
			} else if (this.orientation == "s") {
				this.p3[0] -= 375;this.p3[2] -= 125;this.p3[4] -= 125;
				this.p2[0] -= 250;
				this.p4[0] += 125;this.p4[2] -= 125;this.p4[4] -=125;
				this.p5[0] += 375;this.p5[2] += 125;this.p5[4] +=125;
			}
			break;
	  
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

	afficher(px, py) {
		var p = [this.p1, this.p2, this.p3, this.p4, this.p5, this.p6, this.p7, this.p8, this.p9, this.p10];
		for (let i = 0; i < p.length; i++) {
			p[i].afficher(px, py);
		}
	}
}

