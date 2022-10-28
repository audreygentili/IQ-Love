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
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] += 250;this.p3[1] += 125;this.p3[2] += 125;this.p3[5] += 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[1] -= 250;this.p3[3] -= 125;this.p3[4] += 125;
				} else if (this.orientation == "e") {
					this.orientation = "s";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] -= 250;this.p3[1] -= 125;this.p3[2] -= 125;this.p3[5] -= 125;
				} else if (this.orientation == "s") {
					this.orientation = "o";
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[1] += 250;this.p3[3] += 125;this.p3[4] -= 125;
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
					this.p2[0] -= 125;this.p2[1] -= 125;
					this.p3[1] += 125;this.p3[2] += 125;this.p3[3] += 250;this.p3[4] += 125;
				} else if (this.orientation == "n") {
					this.orientation = "e";
					this.p2[0] -= 125;this.p2[1] += 125;
					this.p3[0] += 125;this.p3[2] += 250;this.p3[3] -= 125;this.p3[5] -= 125;
				} else if (this.orientation == "e") {
					this.orientation = "s";
					this.p2[0] += 125;this.p2[1] += 125;
					this.p3[1] -= 125;this.p3[2] -= 125;this.p3[3] -= 250;this.p3[4] -= 125;
				} else if (this.orientation == "s") {
					this.orientation = "o";
					this.p2[0] += 125;this.p2[1] -= 125;
					this.p3[0] -= 125;this.p3[2] -= 250;this.p3[3] += 125;this.p3[5] += 125;
				}
				break; 
		case 1:
		  print(pieces[selected]);
		  if(pieces[selected] == 3 || pieces[selected] == 2 ){
			j1 -= 125;
		  }else{
			j1 += 125;
		  }
		  if(pieces[selected] == 4 || pieces[selected] == 3 ){
			i1 -= 125;
		  }else{
			i1 += 125;
		  }
		  if(pieces[selected] == 3){
			t1 -= 125;v1 -= 250;w1 -= 125;x1 -= 375;
		  }else if(pieces[selected] == 4){
			u1 += 125;v1 -= 125; w1 += 250;y1 += 375;
		  }else if(pieces[selected] == 1){
			t1 += 125;v1 += 250;w1 += 125;x1 += 375;
		  }else if(pieces[selected] == 2){
			u1 -= 125;v1 += 125; w1 -= 250;y1 -= 375;
		  }
		  break
		  
	  	case 2:
		  if(pieces[selected] == 4 || pieces[selected] == 2){
			i2 += 125;j2-= 250;g2 += 125; h2-=125;t2 -= 125;a2 += 125;w2 += 250;v2 -= 125;
		  }else if (pieces[selected] == 1 || pieces[selected] == 3){
			i2 -= 125;j2+= 250;g2 -= 125; h2+=125;t2 += 125;a2 -= 125;w2 -= 250;v2 += 125;
		  }
		  break
		
		case 3:
		  if(pieces[selected] == 4){
			print('4')
			i3 += 250;j3 -= 125;v3 += 250;w3 +=125;b3-=125;c3+=125;a3+=125;y3-=125;
			t3 += 125;
		  }else if ( pieces[selected] == 2){
			i3 -= 250;j3 += 125;v3 -= 250;w3 -=125;b3+=125;c3-=125;a3-=125;y3+=125;t3 -= 125;
			print('caramna')
		  }
		  if(pieces[selected] == 3){
			i3 += 125;j3+=250;u3 += 125;v3 -= 125;w3 +=250;z3 -= 125; x3+= 125;b3-=125;c3-=125;
		  } else if (pieces[selected] == 1) {
			i3 -= 125;j3-=250;u3 -= 125;v3 += 125;w3 -=250;z3 += 125; x3-= 125;b3+=125;c3+=125;
		  }
	
		  break
		  
		case 4:
		  if(pieces[selected] == 4){
			g4 += 125; h4 -=125; u4+=125;v4-=125;x4 -= 250;y4 +=125;
		  }else if ( pieces[selected] == 2){
			g4 -= 125; h4 +=125; u4-=125;v4+=125;x4 += 250;y4 -=125;
		  }
		  if(pieces[selected] == 3){
			g4 += 125; h4 +=125; t4-=125;w4-=125;x4 -=125;y4 -=250;
		  } else if (pieces[selected] == 1) {
			g4 -= 125; h4 -=125; t4+=125;w4+=125;x4 +=125;y4 +=250;
		  }
	
		  break
		case 5:
		  if(pieces[selected] == 4){
			g5 += 125; h5 +=125; t5-=125;u5 -= 250;w5-=125;x5 -= 125;a5 +=125;b5 -=125; c5 +=250;d5 += 125; e5 += 250;
		  }else if ( pieces[selected] == 2){
			g5 -= 125; h5 -=125; t5+=125;u5 += 250;w5+=125;x5 += 125;a5 -=125;b5 +=125; c5 -=250;d5 -= 125; e5 -= 250;
		  }
		  if(pieces[selected] == 3){
			g5 -= 125; h5 +=125; t5 += 250;u5 -= 125;v5+=125;y5 -= 125;z5 -= 125;b5 -=250; c5 -=125;d5 -= 250; e5 += 125;
		  } else if (pieces[selected] == 1) {
			g5 += 125; h5 -=125; t5 -= 250;u5 += 125;v5-=125;y5 += 125;z5 += 125;b5 +=250; c5 +=125;d5 += 250; e5 -= 125;
		  }
		  break	
	  	}
	}
	
	/*rotationM() {
	  sX = mouseX
	  sY = mouseY
	  
	  
	  if (selected == null )selected = pieceSelected
	  
	  
	  switch(selected){
		case 0:
		  if(mirror[selected] == 4 || mirror[selected] == 6){
			u1 += 125; w1 += 125;y1 += 375;
		  }
		  if(mirror[selected] == 8 || mirror[selected] == 2){
			u1 -= 125; w1 -= 125;y1 -= 375;
		  }
		  if(mirror[selected] == 1 || mirror[selected] == 7){
			t1 += 125; v1 += 125;x1 += 375;
		  }
		  if(mirror[selected] == 5 || mirror[selected] == 3){
			t1 -= 125; v1 -= 125;x1 -= 375;
		  }
		  break
	
	
		case 1:
		  print('cacac')
		  if(mirror[selected] == 4){
			print('4')
			j2 -= 125; w2 += 125;
		  }else if ( mirror[selected] == 2){
			j2 += 125; w2 -= 125;
			print('caramna')
		  }
		  if(mirror[selected] == 3){
			print('3')
			i2 += 125; v2 -= 125;
		  } else if (mirror[selected] == 1) {
			print('1')
			i2 -= 125; v2 += 125;
		  }
		  break
	
		  
		case 2:
		  print('prout')
		  print( mirror[selected])
		  if(mirror[selected] == 4){
			print('4')
			c3 -= 125; e3-=125;w3 += 250;y3-=250;
		  }else if ( mirror[selected] == 2){
			c3 += 125; e3+=125;w3 -= 250;y3+=250;
			print('caramna')
		  }
		  if(mirror[selected] == 3){
			print('3')
			b3 += 125; d3+=125;v3 -= 250;x3+=250;
		  } else if (mirror[selected] == 1) {
			print('1')
			b3 -= 125; d3-=125;v3 += 250;x3-=250;
		  }
		  break
	
		
		case 3:
		print("miroir")
		  if(mirror[selected] == 4){
			u4 +=125;w4 -=125;y4 -=125;
		  }else if ( mirror[selected] == 2){
			u4 -=125;w4 +=125;y4 +=125;
		  }
		  if(mirror[selected] == 3){
			print('3')
			print("oui")
			t4 -= 125;v4 += 125; x4 +=125;
		  } else if (mirror[selected] == 1) {
			print('1')
			t4 += 125;v4 -= 125; x4 -=125;
		  }
	
		  break
		
		case 4:
	
		  if(mirror[selected] == 4){
			v5 +=125;t5 += 125;x5 -=125; z5-= 125;  b5 -=375;d5 -= 125;
		  }else if ( mirror[selected] == 2){
			v5 -=125;t5 -= 125;x5 +=125; z5+= 125;  b5 +=375;d5 += 125;
		  }
		  if(mirror[selected] == 3){
			print('3')
			print("npn")
			w5 +=125;u5 += 125;y5 -=125; a5-= 125;  c5 -=375;e5 -= 125;
		  } else if (mirror[selected] == 1) {
			print('1')
			w5 -=125;u5 -= 125;y5 +=125; a5+= 125;  c5 +=375;e5 += 125;
		  }
		  break
		  
		case 5:
		  if(mirror[selected] == 4){
			print('4')
			h6 +=125; e6-=125;w6 += 375;c6-=125; a6 +=125;u6+=125;y6-=125;
		  }else if ( mirror[selected] == 2){
			h6 -=125; e6+=125;w6 -= 375;c6+=125; a6 -=125;u6-=125;y6+=125;
		  }
		  if(mirror[selected] == 3){
			print('3')
		   g6 -=125; d6+=125;v6 -= 375;b6+=125; z6 -=125;t6-=125;x6+=125;
		  } else if (mirror[selected] == 1) {
			print('1')
			 g6 +=125; d6-=125;v6 += 375;b6-=125; z6 +=125;t6+=125;x6-=125;
		  }
		  break
		  
		case 6:
		  if(mirror[selected] == 4){
			print('4')
			h7 += 250;u7 +=125; y7 +=125;w7 -= 125;a7+=375;c7+=125;l7-=125;e7-=125;
		  }else if ( mirror[selected] == 2){
			h7 -= 250;u7 -=125; y7 -=125;w7 += 125;a7-=375;c7-=125;l7+=125;e7+=125;
		  }
		  if(mirror[selected] == 3){
			print('3')
			g7-=250;t7-=125;v7+=125;x7-=125;z7-=375;b7-=125;d7+=125;k7+=125
		  } else if (mirror[selected] == 1) {
			print('1')
			g7+=250;t7+=125;v7-=125;x7+=125;z7+=375;b7+=125;d7-=125;k7-=125
		  }
		  break
		  
		case 7:
		  if(mirror[selected] == 4){
			print('4')
			u8+=125;w8+=125;y8-=125;a8+=125;c8+=125;e8+=375;
			
		  }else if ( mirror[selected] == 2){
			
			u8-=125;w8-=125;y8+=125;a8-=125;c8-=125;e8-=375;
		  }
		  if(mirror[selected] == 3){
			t8-=125;v8-=125;x8+=125;z8-=125;b8-=125;d8-=375;
		  } else if (mirror[selected] == 1) {
			t8+=125;v8+=125;x8-=125;z8+=125;b8+=125;d8+=375;
		  }
	
		  break
	
	  }
		  if(mirror[selected] == 4) {
			mirror[selected] = 2
		  }else if(mirror[selected] == 2) mirror[selected] = 4;
		  if(mirror[selected] == 1) {
			mirror[selected] = 3 
		  }else if(mirror[selected] == 3) mirror[selected] = 1;
	
	  if (mirror_checked){
		mirror_checked = false;
	  }else mirror_checked = true;
	}
	
	  
	 movePiece(pS) {
	  sX = mouseX
	  sY = mouseY
	  
	  if (sX > 830 || sX < 80 || sY < 80 || sY > 705 ) return true
	  else {
	  switch (pS){
		case 0:
		  i1 = sX
		  j1 = sY
		  t1 = sX
		  u1 = sY
		  if (pieces[selected] == 4) {
			g1 = sX - 125
			h1 = sY
			v1 = sX + 125 
			w1 = sY
			x1 = sX + 125
			y1 = sY - 125
		  } else if(pieces[selected] == 3) {
	
			t1 = sX +125
			u1 = sY
			g1 = sX
			h1 = sY - 125
			v1 = sX + 125
			w1 = sY + 125
			x1 = sX + 250
			y1 = sY + 125
		  }else if(pieces[selected] == 2) {
	
			t1 = sX 
			u1 = sY +125
			g1 = sX +125
			h1 = sY 
			v1 = sX +125
			w1 = sY +125
			x1 = sX 
			y1 = sY + 250
		  }else if(pieces[selected] == 1) {
	
			t1 = sX 
			u1 = sY 
			g1 = sX 
			h1 = sY + 125
			v1 = sX 
			w1 = sY +125
			x1 = sX - 125
			y1 = sY 
		  }
		  break
	  case 1:
		  x2 = sX
		  y2 = sY
	
		  if (pieces[selected] == 4) {
			i2 = sX - 125
			j2 = sY + 125
			t2 = sX + 125
			u2 = sY + 125
			g2 = sX 
			h2 = sY + 125
			v2 = sX + 250 
			w2 = sY 
			z2 = sX+125
			a2 = sY
		  } else if(pieces[selected] == 3) {
	
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
		  }else if(pieces[selected] == 2) {
	
			i2 = sX - 125
			j2 = sY + 125
			t2 = sX + 125
			u2 = sY + 125
			g2 = sX 
			h2 = sY + 125
			v2 = sX + 250 
			w2 = sY 
			z2 = sX+125
			a2 = sY
		  }else if(pieces[selected] == 1) {
	
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
		  break
		  
		case 2:
		  d3 = sX
		  e3 = sY
	
		  if (pieces[selected] == 4) {
			i3 = sX - 125
			j3 = sY 
			t3 = sX 
			u3 = sY 
			v3 = sX  
			w3 = sY - 125
			x3 = sX
			y3 = sY+125
			z3 = sX + 125
			a3 = sY
			b3 = sX + 125
			c3 = sY
			
		  } else if(pieces[selected] == 3) {
			i3 = d3 + 125
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
		  }else if(pieces[selected] == 2) {
	
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
		  }else if(pieces[selected] == 1) {
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
		  break
		  
		case 3:
		  i4 = sX
		  j4 = sY
	
		  if (pieces[selected] == 4) {
			g4 = i4 -125
			h4 = j4 
			t4 = i4 +125
			u4 = j4 
			v4 = i4 +125
			w4 = j4 +125
			x4 = i4 +250
			y4 = j4 +125
		  } else if(pieces[selected] == 3) {
	
			g4 = i4 
			h4 = j4 -125
			t4 = i4 +125
			u4 = j4 +125
			v4 = i4 
			w4 = j4 + 125
			x4 = i4
			y4 = j4 +250
		  }else if(pieces[selected] == 2) {
	
			g4 = i4 +125
			h4 = j4 
			t4 = i4 
			u4 = j4 
			v4 = i4 
			w4 = j4 +125
			x4 = i4 -125
			y4 = j4 
		  }else if(pieces[selected] == 1) {
	
			g4 = i4 
			h4 = j4 +125
			t4 = i4 
			u4 = j4 
			v4 = i4 +125
			w4 = j4 
			x4 = i4 +125
			y4 = j4 -125
		  }
		  break
		  
		case 4:
		  i5 = sX
		  j5 = sY
	
		  if (pieces[selected] == 4) {
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
		  } else if(pieces[selected] == 3) {
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
		  }else if(pieces[selected] == 2) {
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
		  }else if(pieces[selected] == 1) {
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
		  break
		  
		case 5:
		  i6 = sX
		  j6 = sY
	
		  if (pieces[selected] == 4) {
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
			  
		  } else if(pieces[selected] == 3) {
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
		  }else if(pieces[selected] == 2) {
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
		  }else if(pieces[selected] == 1) {
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
		  break
		  
		case 6:
		  i7 = sX
		  j7 = sY
	
		  if (pieces[selected] == 4) {
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
			  
		  } else if(pieces[selected] == 3) {
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
			
		  }else if(pieces[selected] == 2) {
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
	
		  }else if(pieces[selected] == 1) {
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
		  break
		  
		case 7:
		  i8 = sX
		  j8 = sY
	
		  if (pieces[selected] == 4) {
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
	
			  
		  } else if(pieces[selected] == 3) {
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
			
		  }else if(pieces[selected] == 2) {
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
	
		  }else if(pieces[selected] == 1) {
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
		  break
	  }
	  }
	}
	
	  
	 mouseDragged(){
	  if (mirror_checked == false) movePiece(selected)
	}
	
	 clipPiece(pS) {
	  sX = mouseX
	  sY = mouseY
	  
	  if (sX > 830 || sX < 80 || sY < 80 || sY > 705 ) return true
	  else {
	  switch (pS){
		case 0:
		  i1 = sX
		  j1 = sY
		  
		  if (pieces[selected] == 4) {
			for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i1 = 80+125*i
				  j1 = 80+125*j
				  t1 = i1
				  u1 = j1
				  g1 = i1 - 125
				  h1 = j1
				  v1 = i1 + 125 
				  w1 = j1
				  x1 = i1 + 125
				  y1 = j1 - 125
				}
			  }
			}
			
		  } else if(pieces[selected] == 3) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i1 = 80+125*i
				  j1 = 80+125*j
				  t1 = i1 +125
				  u1 = j1
				  g1 = i1
				  h1 = j1 - 125
				  v1 = i1 + 125
				  w1 = j1 + 125
				  x1 = i1 + 250
				  y1 = j1 + 125
				}
			  }
			}
			
		  }else if(pieces[selected] == 2) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i1 = 80+125*i
				  j1 = 80+125*j
				  t1 = i1 
			u1 = j1 +125
			g1 = i1 +125
			h1 = j1 
			v1 = i1 +125
			w1 = j1 +125
			x1 = i1 
			y1 = j1 + 250
				}
			  }
			}
			
		  }else if(pieces[selected] == 1) {
			  for(i = 0; i <= 5; i++){
			  for(j=0; j<=4;j++){
				if(sX >= 80 + 125 * i-1  && sX <= 205+ 125 * i-1 && sY >= 80 + 125 * j && sY <= 205 + 125 * j){
				  i1 = 80+125*i
				  j1 = 80+125*j
				  t1 = i1 
			u1 = j1 
			g1 = i1 
			h1 = j1 + 125
			v1 = i1 
			w1 = j1 +125
			x1 = i1 - 125
			y1 = j1 
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
	*/
	
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
		  if(pieces[selected] == 4){
			print('4')
			g8-=125;h8-=125;t8+=125;u8+=250;w8+=125;x8+=125;z8-=125;b8-=250;c8-=125;d8-=375;
		  }else if ( pieces[selected] == 2){
			g8+=125;h8+=125;t8-=125;u8-=250;w8-=125;x8-=125;z8+=125;b8+=250;c8+=125;d8+=375;
			
		  }
		  if(pieces[selected] == 3){
			g8+=125;h8-=125;u8+=125;t8-=250;v8-=125;y8+=125;a8-=125;b8+=125;c8-=250;e8-=375;
			
		  } else if (pieces[selected] == 1) {
			g8-=125;h8+=125;u8-=125;t8+=250;v8+=125;y8-=125;a8+=125;b8-=125;c8+=250;e8+=375;
		  }
	
		  break
		  
		case 3:
		  if(pieces[selected] == 4){
			print('4')
			g9-=125;h9-=125;t9+=125;u9+=250;w9+=125;x9+=125;c9-=250;a9-=125;b9+=125;e9-=250;d9-=125;
		  }else if ( pieces[selected] == 2){
			g9+=125;h9+=125;t9-=125;u9-=250;w9-=125;x9-=125;c9+=250;a9+=125;b9-=125;e9+=250;d9+=125;
			
		  }
		  if(pieces[selected] == 3){
			g9+=125;h9-=125;u9+=125;t9-=250;v9-=125;y9+=125;z9+=125;d9+=250;e9-=125;b9+=250;c9+=125;
			
		  } else if (pieces[selected] == 1) {
			g9-=125;h9+=125;u9-=125;t9+=250;v9+=125;y9-=125;z9-=125;d9-=250;e9+=125;b9-=250;c9-=125;
		  }
	
		  break
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
				if(pieces[selected] == 4){
					print('4')
					h7 += 250;z7 -= 125;a7 += 250;b7 -=125;y7+=125;t7 += 125;u7 +=250;v7 += 125; e7 -=125;k7 -= 125;l7 -=250;
				}else if ( pieces[selected] == 2){
					h7 -= 250;z7 += 125;a7 -= 250;b7 +=125;y7-=125;t7 -= 125;u7 -=250;v7 -= 125; e7 +=125;k7 += 125;l7 +=250;
				}
				if(pieces[selected] == 3){
					g7 -= 250;z7 -= 250;a7 -=125;c7-=125;x7-=125;t7 -=250;u7 += 125;w7 += 125; d7 +=125;k7 += 250;l7 -=125;
				} else if (pieces[selected] == 1) {
					g7 += 250;z7 += 250;a7 +=125;c7+=125;x7+=125;t7 +=250;u7 -= 125;w7 -= 125; d7 -=125;k7 -= 250;l7 +=125;
				}
			
				break
			case 5:
				if(pieces[selected] == 4){
					print('4')
					g6 += 125;h6 += 250;u6 += 125;v6 -=125;w6 +=250;z6 -= 125;x6+=125;d6 -= 125; e6 -=250;c6-=125;
			
				}else if ( pieces[selected] == 2){
					g6 -= 125;h6 -= 250;u6 -= 125;v6 +=125;w6 -=250;c6+=125;z6+=125;d6 += 125;x6-=125;e6 +=250;
				}
				if(pieces[selected] == 3){
					g6 -= 250;h6+=125;t6 -= 125;v6 -= 250;w6-=125;a6 -= 125; y6+= 125;b6+=125;d6+=250;e6 -= 125;
				} else if (pieces[selected] == 1) {
					g6 += 250;h6 -=125;t6 += 125;v6 += 250;w6+=125;a6 += 125; y6-= 125;b6-=125;d6 -=250; e6 +=125;
				}
			
				break
			case 9:
				if(pieces[selected] == "o"){
					print('4')
					g8-=125;h8-=125;t8+=125;u8+=250;w8+=125;x8+=125;z8-=125;b8-=250;c8-=125;d8-=375;
				}else if ( pieces[selected] == "s"){
					g8+=125;h8+=125;t8-=125;u8-=250;w8-=125;x8-=125;z8+=125;b8+=250;c8+=125;d8+=375;
					
				}
				if(pieces[selected] == "e"){
					g8+=125;h8-=125;u8+=125;t8-=250;v8-=125;y8+=125;a8-=125;b8+=125;c8-=250;e8-=375;
					
				} else if (pieces[selected] == "n") {
					g8-=125;h8+=125;u8-=125;t8+=250;v8+=125;y8-=125;a8+=125;b8-=125;c8+=250;e8+=375;
				}		
				break;
			case 10:
				if(pieces[selected] == 4){
					g5 -= 125; h5 +=125; t5 += 250;u5 -= 125;v5+=125;y5 -= 125;z5 -= 125;b5 -=250; c5 -=125;d5 -= 250; e5 += 125;
				}else if ( pieces[selected] == 2){
					g5 += 125; h5 -=125; t5 -= 250;u5 += 125;v5-=125;y5 += 125;z5 += 125;b5 +=250; c5 +=125;d5 += 250; e5 -= 125;
				}
				if(pieces[selected] == 3){
					g5 -= 125; h5 -=125; t5+=125;u5 += 250;w5+=125;x5 += 125;a5 -=125;b5 +=125; c5 -=250;d5 -= 125; e5 -= 250;
				} else if (pieces[selected] == 1) {
					g5 += 125; h5 +=125; t5-=125;u5 -= 250;w5-=125;x5 -= 125;a5 +=125;b5 -=125; c5 +=250;d5 += 125; e5 += 250;
				}
			
				break;
		}
	}

	rotationR() {
		switch (this.nom) {
			case 4:
		}
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

