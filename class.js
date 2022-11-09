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
	constructor(nom, nbpieces, orientation, miroir, col, p1, p2, p3) {
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
				if (this.orientation == "o") {
					this.orientation = "n";
					this.p2[1] += 125;this.p2[2] -= 125;this.p2[4] -= 250;this.p2[5] += 125;
					this.p3[1] -= 125;this.p3[2] += 125;this.p3[4] += 250;this.p3[5] -= 125;
				} else if (this.orientation == "n") {
					this.orientation = "o";
					this.p2[1] -= 125;this.p2[2] += 125;this.p2[4] += 250;this.p2[5] -= 125;
					this.p3[1] += 125;this.p3[2] -= 125;this.p3[4] -= 250;this.p3[5] += 125;
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
					this.p2[1] += 125;this.p2[2] -= 125;this.p2[4] -= 250;this.p2[5] += 125;
					this.p3[1] -= 125;this.p3[2] += 125;this.p3[4] += 250;this.p3[5] -= 125;
				} else if (this.orientation == "n") {
					this.orientation = "o";
					this.p2[1] -= 125;this.p2[2] += 125;this.p2[4] += 250;this.p2[5] -= 125;
					this.p3[1] += 125;this.p3[2] -= 125;this.p3[4] -= 250;this.p3[5] += 125;
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
				if (this.miroir) {
					this.miroir = false;
				} else {
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
					this.miroir = true;
				}
				break;
			case 7:
				if (this.miroir) {
					this.miroir = false;
				} else {
					if (this.orientation == "o") {
						this.p3[1] -= 125;this.p3[3] += 125;this.p3[5] += 125;this.p2[4] -= 125;this.p2[1] += 125;this.p2[3] -= 125;
					} else if (this.orientation == "n") {
						this.p3[0] += 125;this.p3[2] -= 125;this.p3[4] -= 125;this.p2[4] += 125;this.p2[0] -= 125;this.p2[2] += 125;
					} else if (this.orientation == "e") {
						this.p3[1] += 125;this.p3[3] -= 125;this.p3[5] -= 125;this.p2[4] += 125;this.p2[1] -= 125;this.p2[3] += 125;
					} else if (this.orientation == "s") {
						this.p3[0] -= 125;this.p3[2] += 125;this.p3[4] += 125;this.p2[4] -= 125;this.p2[0] += 125;this.p2[2] -= 125;
					}
					this.miroir = true;
				}
				break;
			case 8:
				if (this.miroir) {
					this.miroir = false;
				} else {
					if (this.orientation == "o") {
						this.p3[3] += 125;this.p3[1] += 125;this.p3[5] -= 125;
					} else if (this.orientation == "n") {
						this.p3[2] -= 125;this.p3[0] -= 125;this.p3[4] += 125;
					} else if (this.orientation == "e") {
						this.p3[3] -= 125;this.p3[1] -= 125;this.p3[5] += 125;
					} else if (this.orientation == "s") {
						this.p3[2] += 125;this.p3[0] += 125;this.p3[4] -= 125;
					}
					this.miroir = true;
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
		    if (this.orientation == "s") {
			for (i = 0; i <= 6; i++) {
			    for (j = 0; j <= 5; j++) {
				    if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0] - 125
				    this.p2[1] = this.p1[1]
                    this.p3[0] = this.p1[0] + 125
				    this.p3[1] = this.p1[1] + 250
				    this.p3[2] = this.p1[0] + 125 
				    this.p3[3] = this.p1[1] + 125
				    this.p3[4] = this.p1[0]
				    this.p3[5] = this.p1[1] + 125
				}
			    }
			}
		    } else if (this.orientation == "o") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0]
				    this.p2[1] = this.p1[1] - 125
                    this.p3[0] = this.p1[0] - 125
				    this.p3[1] = this.p1[1] + 125
				    this.p3[2] = this.p1[0] 
				    this.p3[3] = this.p1[1] + 125
				    this.p3[4] = this.p1[0]
				    this.p3[5] = this.p1[1]
				}
			    }
			}
		    } else if (this.orientation == "n") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0] + 125
				    this.p2[1] = this.p1[1]
                    this.p3[0] = this.p1[0] 
				    this.p3[1] = this.p1[1] - 125
				    this.p3[2] = this.p1[0]
				    this.p3[3] = this.p1[1]
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1]
				}
			    }
			}
		    } else if (this.orientation == "e") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0]
				    this.p2[1] = this.p1[1] + 125
                    this.p3[0] = this.p1[0] + 250
				    this.p3[1] = this.p1[1]
				    this.p3[2] = this.p1[0] + 125 
				    this.p3[3] = this.p1[1]
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1] + 125
				}
			    }
			}
		    }
		    break;
		    
		case 7:
		    if (this.orientation == "e") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
                            this.p1[0] = 80 + 125 * i
                            this.p1[1] = 80 + 125 * j
                            this.p2[0] = this.p1[0] + 125
                            this.p2[1] = this.p1[1]
                            this.p2[2] = this.p1[0] + 125
                            this.p2[3] = this.p1[1] + 125
                            this.p2[4] = this.p1[0] + 250
                            this.p2[5] = this.p1[1] + 125
                            this.p3[0] = this.p1[0]
                            this.p3[1] = this.p1[1] + 125
                            this.p3[2] = this.p1[0]
                            this.p3[3] = this.p1[1]
                            this.p3[4] = this.p1[0] - 125
                            this.p3[5] = this.p1[1]
				}
			    }
			}
		    } else if (this.orientation == "s") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
                            this.p1[0] = 80 + 125 * i
                            this.p1[1] = 80 + 125 * j
                            this.p2[0] = this.p1[0] + 125
                            this.p2[1] = this.p1[1] + 125
                            this.p2[2] = this.p1[0]
                            this.p2[3] = this.p1[1] + 125
                            this.p2[4] = this.p1[0]
                            this.p2[5] = this.p1[1] + 250
                            this.p3[0] = this.p1[0]
                            this.p3[1] = this.p1[1]
                            this.p3[2] = this.p1[0] + 125
                            this.p3[3] = this.p1[1]
                            this.p3[4] = this.p1[0] + 125
                            this.p3[5] = this.p1[1] - 125
				}
			    }
			}
		    } else if (this.orientation == "o") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0] + 125
				    this.p2[1] = this.p1[1]
                    this.p2[2] = this.p1[0] + 125
				    this.p2[3] = this.p1[1] + 125
				    this.p2[4] = this.p1[0] + 250
				    this.p2[5] = this.p1[1] + 125
				    this.p3[0] = this.p1[0]
				    this.p3[1] = this.p1[1] + 125
                    this.p3[2] = this.p1[0]
				    this.p3[3] = this.p1[1]
				    this.p3[4] = this.p1[0] - 125
				    this.p3[5] = this.p1[1]
				}
			    }
			}
		    } else if (this.orientation == "n") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
                            this.p1[0] = 80 + 125 * i
                            this.p1[1] = 80 + 125 * j
                            this.p2[0] = this.p1[0] + 125
                            this.p2[1] = this.p1[1] + 125
                            this.p2[2] = this.p1[0]
                            this.p2[3] = this.p1[1] + 125
                            this.p2[4] = this.p1[0]
                            this.p2[5] = this.p1[1] + 250
                            this.p3[0] = this.p1[0]
                            this.p3[1] = this.p1[1]
                            this.p3[2] = this.p1[0] + 125
                            this.p3[3] = this.p1[1]
                            this.p3[4] = this.p1[0] + 125
                            this.p3[5] = this.p1[1] - 125
				}
			    }
			}
		    }
		    break;    
		case 8:
		    if (this.orientation == "e") {
			for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0] - 125
				    this.p2[1] = this.p1[1] 
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1] 
				    this.p3[0] = this.p1[0] + 125
				    this.p3[1] = this.p1[1] + 125
				    this.p3[2] = this.p1[0] + 250
				    this.p3[3] = this.p1[1] + 125
				}
			    }
			}
		    } else if (this.orientation == "s") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0] 
				    this.p2[1] = this.p1[1] - 125
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1] + 125
				    this.p3[0] = this.p1[0] 
				    this.p3[1] = this.p1[1] + 125
				    this.p3[2] = this.p1[0]
				    this.p3[3] = this.p1[1] + 250
				}
			    }
			}
		    } else if (this.orientation == "o") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0] + 125
				    this.p2[1] = this.p1[1] 
				    this.p3[4] = this.p1[0] 
				    this.p3[5] = this.p1[1] + 125
				    this.p3[0] = this.p1[0] 
				    this.p3[1] = this.p1[1]
				    this.p3[2] = this.p1[0] - 125
				    this.p3[3] = this.p1[1] 
				    
				}
			    }
			}
		    } else if (this.orientation == "n") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p2[0] = this.p1[0] 
				    this.p2[1] = this.p1[1] + 125
				    this.p3[4] = this.p1[0] 
				    this.p3[5] = this.p1[1] 
				    this.p3[0] = this.p1[0] + 125
				    this.p3[1] = this.p1[1] 
				    this.p3[2] = this.p1[0] + 125
				    this.p3[3] = this.p1[1] - 125
				}
			    }
			}
		    }
		    break;
		}
		}
	}
}

class Piece4 extends Piece {
	constructor(nom, nbpieces, orientation, miroir, col, p1, p2, p3, p4) {
		super(nom, nbpieces, orientation, miroir, col);
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				    this.p3[3] += 125;this.p4[1] += 250;this.p3[0] += 125;this.p3[4] -= 125;		    
			    } else if (this.orientation == "n") {
				    this.p3[2] -= 125;this.p4[0] -= 250;this.p3[1] -= 125;this.p3[5] += 125;
			    } else if (this.orientation == "e") {
				    this.p3[3] -= 125;this.p4[1] -= 250;this.p3[0] -= 125;this.p3[4] += 125;
			    } else if (this.orientation == "s") {
				    this.p3[2] += 125;this.p4[0] += 250;this.p3[1] += 125;this.p3[5] -= 125;
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
				    this.p3[3] += 125;this.p3[1] -= 125;this.p3[5] += 125;
				    this.p4[1] -=375;this.p4[3] -= 125;this.p4[5] -= 125;
			    } else if (this.orientation == "n") {
				    this.p3[2] -= 125;this.p3[0] += 125;this.p3[4] -= 125;
				    this.p4[0] +=375;this.p4[2] += 125;this.p4[4] += 125;
			    } else if (this.orientation == "e") {
				    this.p3[3] -= 125;this.p3[1] += 125;this.p3[5] -= 125;
				    this.p4[1] +=375;this.p4[3] += 125;this.p4[5] += 125;
			    } else if (this.orientation == "s") {
				    this.p3[2] += 125;this.p3[0] -= 125;this.p3[4] += 125;
				    this.p4[0] -=375;this.p4[2] -= 125;this.p4[4] -= 125;
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
			case 1:
			if (this.orientation == "o") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0] + 125
					this.p2[1] = this.p1[1] 
					this.p3[2] = this.p1[0] - 125
					this.p3[3] = this.p1[1] 
					this.p3[4] = this.p1[0]
					this.p3[5] = this.p1[1]    
					this.p3[0] = this.p1[0] 
					this.p3[1] = this.p1[1] + 125 
					this.p4[0] = this.p1[0] + 125
					this.p4[1] = this.p1[1] - 125
					}
				}
				}	
			} else if (this.orientation == "n") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0]
					this.p2[1] = this.p1[1] + 125 
					this.p3[2] = this.p1[0] + 125
					this.p3[3] = this.p1[1] - 125
					this.p3[4] = this.p1[0] + 125
					this.p3[5] = this.p1[1]    
					this.p3[0] = this.p1[0] 
					this.p3[1] = this.p1[1] 
					this.p4[0] = this.p1[0] + 125
					this.p4[1] = this.p1[1] + 125
					}
				}
				}			
			} else if (this.orientation == "e") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0] - 125
					this.p2[1] = this.p1[1] 
					this.p3[2] = this.p1[0] + 250
					this.p3[3] = this.p1[1] + 125
					this.p3[4] = this.p1[0] + 125
					this.p3[5] = this.p1[1] + 125 
					this.p3[0] = this.p1[0] + 125
					this.p3[1] = this.p1[1] 
					this.p4[0] = this.p1[0] - 125
					this.p4[1] = this.p1[1] + 125
					}
				}
				}	
			} else if (this.orientation == "s") {
				for (i = 0; i <= 5; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0]
					this.p2[1] = this.p1[1] - 125 
					this.p3[2] = this.p1[0]
					this.p3[3] = this.p1[1] + 250
					this.p3[4] = this.p1[0]
					this.p3[5] = this.p1[1] + 125    
					this.p3[0] = this.p1[0] + 125
					this.p3[1] = this.p1[1] + 125
					this.p4[0] = this.p1[0] - 125
					this.p4[1] = this.p1[1] - 125
					}
				}
				}
			}
			break;
			case 2:
			if (this.orientation == "o") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0] + 125
					this.p2[1] = this.p1[1] 
                    this.p3[0] = this.p1[0] 
					this.p3[1] = this.p1[1] + 125
					this.p3[2] = this.p1[0] - 125
					this.p3[3] = this.p1[1] 
					this.p3[4] = this.p1[0]
					this.p3[5] = this.p1[1]     
					this.p4[0] = this.p1[0] + 125
					this.p4[1] = this.p1[1] 
					this.p4[2] = this.p1[0] + 250
					this.p4[3] = this.p1[1] 
					this.p4[4] = this.p1[0] + 250
					this.p4[5] = this.p1[1] - 125
		
					}
				}
				}
				
			} else if (this.orientation == "n") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0]
					this.p2[1] = this.p1[1] + 125 
                    this.p3[0] = this.p1[0] 
					this.p3[1] = this.p1[1] 
					this.p3[2] = this.p1[0] + 125
					this.p3[3] = this.p1[1] - 125
					this.p3[4] = this.p1[0] + 125
					this.p3[5] = this.p1[1]    
					this.p4[0] = this.p1[0] + 125
					this.p4[1] = this.p1[1] + 125
					this.p4[2] = this.p1[0] + 125
					this.p4[3] = this.p1[1] + 250
					this.p4[4] = this.p1[0] + 250
					this.p4[5] = this.p1[1] + 250
					
					}
				}
				}
				
			} else if (this.orientation == "e") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0] - 125
					this.p2[1] = this.p1[1] 
                    this.p3[0] = this.p1[0] + 125
					this.p3[1] = this.p1[1] 
					this.p3[2] = this.p1[0] + 250
					this.p3[3] = this.p1[1] + 125
					this.p3[4] = this.p1[0] + 125
					this.p3[5] = this.p1[1] + 125 
					this.p4[0] = this.p1[0] 
					this.p4[1] = this.p1[1] + 125
					this.p4[2] = this.p1[0] - 125
					this.p4[3] = this.p1[1] + 125
					this.p4[4] = this.p1[0] - 125
					this.p4[5] = this.p1[1] + 250
					
					}
				}
				}
				
			} else if (this.orientation == "s") {
				for (i = 0; i <= 5; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0]
					this.p2[1] = this.p1[1] - 125 
                    this.p3[0] = this.p1[0] + 125
					this.p3[1] = this.p1[1] + 125
					this.p3[2] = this.p1[0] 
					this.p3[3] = this.p1[1] + 250
					this.p3[4] = this.p1[0]
					this.p3[5] = this.p1[1] + 125    
					this.p4[0] = this.p1[0] 
					this.p4[1] = this.p1[1] 
					this.p4[2] = this.p1[0] 
					this.p4[3] = this.p1[1] - 125
					this.p4[4] = this.p1[0] - 125
					this.p4[5] = this.p1[1] - 125
					}
				}
				}
			}
			break;
			case 3:
			if (this.orientation == "o") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0] + 125
					this.p2[1] = this.p1[1] 
					this.p3[0] = this.p1[0] 
					this.p3[1] = this.p1[1] + 125
					this.p3[2] = this.p1[0] - 125
					this.p3[3] = this.p1[1] 
					this.p3[4] = this.p1[0]
					this.p3[5] = this.p1[1]
					this.p4[0] = this.p1[0] + 125
					this.p4[1] = this.p1[1] + 250
					this.p4[2] = this.p1[0] + 250
					this.p4[3] = this.p1[1] + 125
					this.p4[4] = this.p1[0] + 125
					this.p4[5] = this.p1[1] + 125
					}
				}
				}
				
			} else if (this.orientation == "n") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0]
					this.p2[1] = this.p1[1] + 125 
					this.p3[0] = this.p1[0] 
					this.p3[1] = this.p1[1] 
					this.p3[2] = this.p1[0] + 125
					this.p3[3] = this.p1[1] - 125
					this.p3[4] = this.p1[0] + 125
					this.p3[5] = this.p1[1]    
					this.p4[0] = this.p1[0] - 125
					this.p4[1] = this.p1[1] + 125
					this.p4[2] = this.p1[0]
					this.p4[3] = this.p1[1] + 250
					this.p4[4] = this.p1[0]
					this.p4[5] = this.p1[1] + 125	
					}
				}
				}
				
			} else if (this.orientation == "e") {
				for (i = 0; i <= 6; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0] - 125
					this.p2[1] = this.p1[1] 
					this.p3[0] = this.p1[0] + 125
					this.p3[1] = this.p1[1] 
					this.p3[2] = this.p1[0] + 250
					this.p3[3] = this.p1[1] + 125
					this.p3[4] = this.p1[0] + 125
					this.p3[5] = this.p1[1] + 125 
					this.p4[0] = this.p1[0] 
					this.p4[1] = this.p1[1] - 125
					this.p4[2] = this.p1[0] - 125
					this.p4[3] = this.p1[1]
					this.p4[4] = this.p1[0]
					this.p4[5] = this.p1[1]
					
					}
				}
				}
				
			} else if (this.orientation == "s") {
				for (i = 0; i <= 5; i++) {
				for (j = 0; j <= 5; j++) {
					if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
					this.p1[0] = 80 + 125 * i
					this.p1[1] = 80 + 125 * j
					this.p2[0] = this.p1[0]
					this.p2[1] = this.p1[1] - 125 
					this.p3[0] = this.p1[0] + 125
					this.p3[1] = this.p1[1] + 125
					this.p3[2] = this.p1[0] 
					this.p3[3] = this.p1[1] + 250
					this.p3[4] = this.p1[0]
					this.p3[5] = this.p1[1] + 125   
					this.p4[0] = this.p1[0] + 250
					this.p4[1] = this.p1[1] 
					this.p4[2] = this.p1[0] + 125
					this.p4[3] = this.p1[1] - 125
					this.p4[4] = this.p1[0] + 125
					this.p4[5] = this.p1[1]
					}
				}
				}
			}
			break;
		}
		}
	}
}

class Piece5 extends Piece {
	constructor(nom, nbpieces, orientation, miroir, col, p1, p2, p3, p4, p5) {
		super(nom, nbpieces, orientation, miroir, col);
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				}    else if (this.orientation == "e") {
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
				    this.p4[1] += 125;this.p4[3] += 500;this.p4[5] += 125;
				    this.p5[1] += 250;
				    
			    } else if (this.orientation == "n") {
				    this.p3[0] -= 250;this.p3[4] -= 250;this.p2[0] -=375;
				    this.p4[0] -= 125;this.p4[2] -= 500;this.p4[4] -= 125;
				    this.p5[0] -= 250; 
			    } else if (this.orientation == "e") {
				    this.p3[1] -= 250;this.p3[5] -= 250;this.p2[1] -=375;
				    this.p4[1] -= 125;this.p4[3] -= 500;this.p4[5] -= 125;
				    this.p5[1] -= 250; 
			    } else if (this.orientation == "s") {
				    this.p3[0] += 250;this.p3[4] += 250;this.p2[0] +=375;
				    this.p4[0] += 125;this.p4[2] += 500;this.p4[4] += 125;
				    this.p5[0] += 250; 
			    }
			    break;
		    case 5:
			if (this.orientation == "o") {
				this.p3[0] += 125;this.p3[2] += 125;this.p3[4] += 375;
				this.p2[0] +=375;this.p2[2] += 125; this.p2[4] += 125;
				this.p4[0] += 125;this.p4[2] += 125;this.p4[4] -= 125;
				this.p5[0] += 125;this.p5[2] -= 125;this.p5[4] -= 125;
				
			} else if (this.orientation == "n") {
				this.p3[0] += 125;this.p3[2] += 125;this.p3[4] += 375;
				this.p2[0] +=375;this.p2[2] += 125; this.p2[4] += 125;
				this.p4[0] += 125;this.p4[2] += 125;this.p4[4] -= 125;
				this.p5[0] += 125;this.p5[2] -= 125;this.p5[4] -= 125; 
			} else if (this.orientation == "e") {
				this.p3[1] += 125;this.p3[3] += 125;this.p3[5] += 375;
				this.p2[1] +=375;this.p2[3] += 125; this.p2[5] += 125;
				this.p4[1] += 125;this.p4[3] += 125;this.p4[5] -= 125;
				this.p5[1] += 125;this.p5[3] -= 125;this.p5[5] -= 125;
			} else if (this.orientation == "s") {
				this.p3[0] -= 125;this.p3[2] -= 125;this.p3[4] -= 375;
				this.p2[0] -=375;this.p2[2] -= 125; this.p2[4] -= 125;
				this.p4[0] -= 125;this.p4[2] -= 125;this.p4[4] += 125;
				this.p5[0] -= 125;this.p5[2] += 125;this.p5[4] += 125;
			}
			break;
		case 9:
			if (this.orientation == "o") {
				this.p3[1] -= 375;this.p3[3] -= 125;this.p3[5] -= 125;
				this.p4[1] -= 125;this.p4[3] -= 125;this.p4[5] -=375;
				this.p5[1] -= 125;this.p5[3] -= 125;this.p5[5] += 125; 
				
			} else if (this.orientation == "n") {
				this.p3[0] += 375;this.p3[2] += 125;this.p3[4] += 125;
				this.p4[0] += 125;this.p4[2] += 125;this.p4[4] +=375;
				this.p5[0] += 125;this.p5[2] += 125;this.p5[4] -= 125; 
			} else if (this.orientation == "e") {
				this.p3[1] += 375;this.p3[3] += 125;this.p3[5] += 125;
				this.p4[1] += 125;this.p4[3] += 125;this.p4[5] +=375;
				this.p5[1] += 125;this.p5[3] += 125;this.p5[5] -= 125; 
			} else if (this.orientation == "s") {
				this.p3[0] -= 375;this.p3[2] -= 125;this.p3[4] -= 125;
				this.p4[0] -= 125;this.p4[2] -= 125;this.p4[4] -=375;
				this.p5[0] -= 125;this.p5[2] -= 125;this.p5[4] += 125; 
			}
			break;

		case 10:
			if (this.orientation == "o") {
				this.p3[1] -= 375;this.p3[3] -= 125;this.p3[5] -= 125;
				this.p2[1] -= 250;
				this.p4[1] += 125;this.p4[3] -= 125;this.p4[5] -= 125;
				this.p5[1] += 375;this.p5[3] += 125;this.p5[5] += 125;
				
			} else if (this.orientation == "n") {
				this.p3[0] += 375;this.p3[2] += 125;this.p3[4] += 125;
				this.p2[0] += 250;
				this.p4[0] -= 125;this.p4[2] += 125;this.p4[4] += 125;
				this.p5[0] -= 375;this.p5[2] -= 125;this.p5[4] -= 125; 
			} else if (this.orientation == "e") {
				this.p3[1] += 375;this.p3[3] += 125;this.p3[5] += 125;
				this.p2[1] += 250;
				this.p4[1] -= 125;this.p4[3] += 125;this.p4[5] += 125;
				this.p5[1] -= 375;this.p5[3] -= 125;this.p5[5] -= 125;
			} else if (this.orientation == "s") {
				this.p3[0] -= 375;this.p3[2] -= 125;this.p3[4] -= 125;
				this.p2[0] -= 250;
				this.p4[0] += 125;this.p4[2] -= 125;this.p4[4] -= 125;
				this.p5[0] += 375;this.p5[2] += 125;this.p5[4] += 125;
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
			case 4:
		    if (this.orientation == "e") {
			for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
                    this.p2[0] = this.p1[0] + 125
				    this.p2[1] = this.p1[1] + 125
				    this.p3[0] = this.p1[0] + 250
				    this.p3[1] = this.p1[1] + 125
				    this.p3[2] = this.p1[0] + 125
				    this.p3[3] = this.p1[1] 
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1] + 125
				    this.p4[0] = this.p1[0] + 125
				    this.p4[1] = this.p1[1] + 125
				    this.p4[2] = this.p1[0] + 125
				    this.p4[3] = this.p1[1] + 250
				    this.p4[4] = this.p1[0]
				    this.p4[5] = this.p1[1] + 125
				    this.p5[0] = this.p1[0] 
				    this.p5[1] = this.p1[1] + 125
				    this.p5[2] = this.p1[0]
				    this.p5[3] = this.p1[1]
				    this.p5[4] = this.p1[0] - 125
				    this.p5[5] = this.p1[1]
				}
			    }
			}
		    } else if (this.orientation == "s") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
                            this.p1[0] = 80 + 125 * i
                            this.p1[1] = 80 + 125 * j
                            this.p2[0] = this.p1[0] - 125
                            this.p2[1] = this.p1[1] + 125
                            this.p3[0] = this.p1[0]
                            this.p3[1] = this.p1[1] + 250
                            this.p3[2] = this.p1[0] + 125
                            this.p3[3] = this.p1[1] + 125
                            this.p3[4] = this.p1[0]
                            this.p3[5] = this.p1[1] + 125
                            this.p4[0] = this.p1[0]
                            this.p4[1] = this.p1[1] + 125
                            this.p4[2] = this.p1[0] - 125
                            this.p4[3] = this.p1[1] + 125
                            this.p4[4] = this.p1[0]
                            this.p4[5] = this.p1[1]
                            this.p5[0] = this.p1[0]  
                            this.p5[1] = this.p1[1] 
                            this.p5[2] = this.p1[0] + 125
                            this.p5[3] = this.p1[1]
                            this.p5[4] = this.p1[0] + 125
                            this.p5[5] = this.p1[1] - 125
				}
			    }
			}
		    } else if (this.orientation == "o") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
                            this.p1[0] = 80 + 125 * i
                            this.p1[1] = 80 + 125 * j
                            this.p2[0] = this.p1[0] - 125
                            this.p2[1] = this.p1[1] - 125
                            this.p3[0] = this.p1[0] - 125
                            this.p3[1] = this.p1[1]
                            this.p3[2] = this.p1[0]
                            this.p3[3] = this.p1[1] + 125 
                            this.p3[4] = this.p1[0]
                            this.p3[5] = this.p1[1]
                            this.p4[0] = this.p1[0]
                            this.p4[1] = this.p1[1] 
                            this.p4[2] = this.p1[0]
                            this.p4[3] = this.p1[1] - 125
                            this.p4[4] = this.p1[0] + 125
                            this.p4[5] = this.p1[1]
                            this.p5[0] = this.p1[0] + 125 
                            this.p5[1] = this.p1[1]
                            this.p5[2] = this.p1[0] + 125
                            this.p5[3] = this.p1[1] + 125
                            this.p5[4] = this.p1[0] + 250
                            this.p5[5] = this.p1[1] + 125
				}
			    }
			}
		    } else if (this.orientation == "n") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
                            this.p1[0] = 80 + 125 * i
                            this.p1[1] = 80 + 125 * j
                            this.p2[0] = this.p1[0] + 125
                            this.p2[1] = this.p1[1] - 125
                            this.p3[0] = this.p1[0] + 126
                            this.p3[1] = this.p1[1] - 125
                            this.p3[2] = this.p1[0]
                            this.p3[3] = this.p1[1] 
                            this.p3[4] = this.p1[0] + 125
                            this.p3[5] = this.p1[1]
                            this.p4[0] = this.p1[0] + 125
                            this.p4[1] = this.p1[1]
                            this.p4[2] = this.p1[0] + 250
                            this.p4[3] = this.p1[1]
                            this.p4[4] = this.p1[0] + 125
                            this.p4[5] = this.p1[1] + 125
                            this.p5[0] = this.p1[0] + 125
                            this.p5[1] = this.p1[1] + 125
                            this.p5[2] = this.p1[0]
                            this.p5[3] = this.p1[1] + 125
                            this.p5[4] = this.p1[0] 
                            this.p5[5] = this.p1[1] + 250
				}
			    }
			}
		    }
		    break;
		case 5:
		    if (this.orientation == "e") {
			for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p3[0] = this.p1[0] - 125
				    this.p3[1] = this.p1[1]
				    this.p3[2] = this.p1[0]
				    this.p3[3] = this.p1[1]
				    this.p3[4] = this.p1[0]
				    this.p3[5] = this.p1[1] - 125
				    this.p4[0] = this.p1[0] - 125
				    this.p4[1] = this.p1[1]
				    this.p4[2] = this.p1[0]
				    this.p4[3] = this.p1[1]
				    this.p4[4] = this.p1[0]
				    this.p4[5] = this.p1[1] + 125
				    this.p2[2] = this.p1[0]
				    this.p2[3] = this.p1[1]
				    this.p2[0] = this.p1[0]
				    this.p2[1] = this.p1[1] - 125
				    this.p2[4] = this.p1[0] + 125
				    this.p2[5] = this.p1[1]
				    this.p5[0] = this.p1[0] + 125
				    this.p5[1] = this.p1[1]
				    this.p5[2] = this.p1[0] + 125
				    this.p5[3] = this.p1[1] + 125
				    this.p5[4] = this.p1[0] + 250
				    this.p5[5] = this.p1[1] + 125
				}
			    }
			}
		    } else if (this.orientation == "s") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p3[0] = this.p1[0] + 125 
				    this.p3[1] = this.p1[1] - 125
				    this.p3[2] = this.p1[0] + 125 
				    this.p3[3] = this.p1[1]
				    this.p3[4] = this.p1[0] + 250
				    this.p3[5] = this.p1[1] 
				    this.p4[0] = this.p1[0] + 125 
				    this.p4[1] = this.p1[1] - 125
				    this.p4[2] = this.p1[0] + 125 
				    this.p4[3] = this.p1[1]
				    this.p4[4] = this.p1[0]
				    this.p4[5] = this.p1[1] 
				    this.p2[2] = this.p1[0] + 125 
				    this.p2[3] = this.p1[1]
				    this.p2[0] = this.p1[0] + 250
				    this.p2[1] = this.p1[1] 
				    this.p2[4] = this.p1[0] + 125
				    this.p2[5] = this.p1[1] + 125
				    this.p5[0] = this.p1[0] + 125
				    this.p5[1] = this.p1[1] + 125
				    this.p5[2] = this.p1[0]
				    this.p5[3] = this.p1[1] + 125
				    this.p5[4] = this.p1[0] 
				    this.p5[5] = this.p1[1] + 250    
				    
				}
			    }
			}
		    } else if (this.orientation == "o") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p3[0] = this.p1[0] + 250
				    this.p3[1] = this.p1[1] + 125
				    this.p3[2] = this.p1[0] + 125
				    this.p3[3] = this.p1[1] + 125
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1] + 250
				    this.p4[0] = this.p1[0] + 250
				    this.p4[1] = this.p1[1] + 125
				    this.p4[2] = this.p1[0] + 125
				    this.p4[3] = this.p1[1] + 125
				    this.p4[4] = this.p1[0] + 125
				    this.p4[5] = this.p1[1] 
				    this.p2[2] = this.p1[0] + 125
				    this.p2[3] = this.p1[1] + 125
				    this.p2[0] = this.p1[0] + 125
				    this.p2[1] = this.p1[1] + 250
				    this.p2[4] = this.p1[0] 
				    this.p2[5] = this.p1[1] + 125
				    this.p5[0] = this.p1[0] 
				    this.p5[1] = this.p1[1] + 125
				    this.p5[2] = this.p1[0] 
				    this.p5[3] = this.p1[1] 
				    this.p5[4] = this.p1[0] - 125
				    this.p5[5] = this.p1[1] 
				    
				}
			    }
			}
		    } else if (this.orientation == "n") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p3[0] = this.p1[0] 
				    this.p3[1] = this.p1[1] + 250
				    this.p3[2] = this.p1[0]
				    this.p3[3] = this.p1[1] + 125
				    this.p3[4] = this.p1[0] - 125
				    this.p3[5] = this.p1[1] + 125
				    this.p4[0] = this.p1[0] 
				    this.p4[1] = this.p1[1] + 250
				    this.p4[2] = this.p1[0]
				    this.p4[3] = this.p1[1] + 125
				    this.p4[4] = this.p1[0] + 125
				    this.p4[5] = this.p1[1] + 125
				    this.p2[2] = this.p1[0]
				    this.p2[3] = this.p1[1] + 125
				    this.p2[0] = this.p1[0] - 125
				    this.p2[1] = this.p1[1] + 125
				    this.p2[4] = this.p1[0] 
				    this.p2[5] = this.p1[1]
				    this.p5[0] = this.p1[0] 
				    this.p5[1] = this.p1[1]
				    this.p5[2] = this.p1[0] + 125
				    this.p5[3] = this.p1[1] 
				    this.p5[4] = this.p1[0] + 125
				    this.p5[5] = this.p1[1] - 125
				}
			    }
			}
		    }
		    break;
			case 9:
		    if (this.orientation == "e") {
			for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p4[0] = this.p1[0] - 125
				    this.p4[1] = this.p1[1] 
				    this.p4[2] = this.p1[0] 
				    this.p4[3] = this.p1[1] 
				    this.p4[4] = this.p1[0]    
				    this.p4[5] = this.p1[1] - 125
				    this.p5[0] = this.p1[0] - 125
				    this.p5[1] = this.p1[1] 
				    this.p5[2] = this.p1[0] 
				    this.p5[3] = this.p1[1]
				    this.p5[4] = this.p1[0]
				    this.p5[5] = this.p1[1] + 125
				    this.p3[2] = this.p1[0] 
				    this.p3[3] = this.p1[1] 
				    this.p3[0] = this.p1[0]    
				    this.p3[1] = this.p1[1] - 125
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1]
				    this.p2[0] = this.p1[0] + 125
				    this.p2[1] = this.p1[1]
				}
			    }
			}
		    } else if (this.orientation == "s") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p4[0] = this.p1[0] + 125
				    this.p4[1] = this.p1[1] - 125
				    this.p4[2] = this.p1[0] + 125
				    this.p4[3] = this.p1[1] 
				    this.p4[4] = this.p1[0] + 250
				    this.p4[5] = this.p1[1]
				    this.p5[0] = this.p1[0] + 125
				    this.p5[1] = this.p1[1] - 125
				    this.p5[2] = this.p1[0] + 125
				    this.p5[3] = this.p1[1] 
				    this.p5[4] = this.p1[0]
				    this.p5[5] = this.p1[1]
				    this.p3[2] = this.p1[0] + 125
				    this.p3[3] = this.p1[1] 
				    this.p3[0] = this.p1[0] + 250
				    this.p3[1] = this.p1[1]
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1] + 125
				    this.p2[0] = this.p1[0] 
				    this.p2[1] = this.p1[1] + 125
				}
			    }
			}
		    } else if (this.orientation == "o") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p4[0] = this.p1[0] + 250
			this.p4[1] = this.p1[1] + 125
			this.p4[2] = this.p1[0] + 125
			this.p4[3] = this.p1[1] + 125
			this.p4[4] = this.p1[0] + 125
			this.p4[5] = this.p1[1] + 250
			this.p5[0] = this.p1[0] + 250
			this.p5[1] = this.p1[1] + 125
			this.p5[2] = this.p1[0] + 125
			this.p5[3] = this.p1[1] + 125
			this.p5[4] = this.p1[0] + 125
			this.p5[5] = this.p1[1] 
			this.p3[2] = this.p1[0] + 125
			this.p3[3] = this.p1[1] + 125
			this.p3[0] = this.p1[0] + 125
			this.p3[1] = this.p1[1] + 250
			this.p3[4] = this.p1[0] 
			this.p3[5] = this.p1[1] + 125
			this.p2[0] = this.p1[0] - 125
			this.p2[1] = this.p1[1] 
				    
				}
			    }
			}
		    } else if (this.orientation == "n") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p4[0] = this.p1[0] 
			this.p4[1] = this.p1[1] + 250
			this.p4[2] = this.p1[0] 
			this.p4[3] = this.p1[1] + 125
			this.p4[4] = this.p1[0] - 125
			this.p4[5] = this.p1[1] + 125
			this.p5[0] = this.p1[0] 
			this.p5[1] = this.p1[1] + 250
			this.p5[2] = this.p1[0] 
			this.p5[3] = this.p1[1] + 125
			this.p5[4] = this.p1[0] + 125
			this.p5[5] = this.p1[1] + 125
			this.p3[2] = this.p1[0] 
			this.p3[3] = this.p1[1] + 125
			this.p3[0] = this.p1[0] - 125
			this.p3[1] = this.p1[1] + 125
			this.p3[4] = this.p1[0] 
			this.p3[5] = this.p1[1] 
			this.p2[0] = this.p1[0] 
			this.p2[1] = this.p1[1] - 125
				}
			    }
			}
		    }
		    break;
		    case 10:
		    if (this.orientation == "e") {
			for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p5[0] = this.p1[0] 
				    this.p5[1] = this.p1[1] + 250 
				    this.p2[0] = this.p1[0] 
				    this.p2[1] = this.p1[1] - 125 
				    this.p5[2] = this.p1[0] 
				    this.p5[3] = this.p1[1] + 125
				    this.p5[4] = this.p1[0] + 125
				    this.p5[5] = this.p1[1] + 125
				    this.p4[0] = this.p1[0] + 125
				    this.p4[1] = this.p1[1] + 125
				    this.p4[2] = this.p1[0] + 125
				    this.p4[3] = this.p1[1] 
				    this.p4[4] = this.p1[0] + 250
				    this.p4[5] = this.p1[1] 
				    this.p3[0] = this.p1[0] + 125
				    this.p3[1] = this.p1[1] - 125
				    this.p3[2] = this.p1[0] + 125
				    this.p3[3] = this.p1[1] 
				    this.p3[4] = this.p1[0] + 250
				    this.p3[5] = this.p1[1] 
				}
			    }
			}
		    } else if (this.orientation == "s") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p5[0] = this.p1[0] - 125
				    this.p5[1] = this.p1[1]
				    this.p2[0] = this.p1[0] + 125
				    this.p2[1] = this.p1[1]
				    this.p5[2] = this.p1[0]
				    this.p5[3] = this.p1[1]
				    this.p5[4] = this.p1[0] 
				    this.p5[5] = this.p1[1] + 125
				    this.p4[2] = this.p1[0] + 125
				    this.p4[3] = this.p1[1] + 125
				    this.p4[4] = this.p1[0] + 125
				    this.p4[5] = this.p1[1] + 250
				    this.p3[0] = this.p1[0] + 250
				    this.p3[1] = this.p1[1] + 125
				    this.p4[0] = this.p1[0] 
				    this.p4[1] = this.p1[1] + 125
				    this.p3[2] = this.p1[0] + 125
				    this.p3[3] = this.p1[1] + 125
				    this.p3[4] = this.p1[0] + 125
				    this.p3[5] = this.p1[1] + 250
				}
			    }
			}
		    } else if (this.orientation == "o") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p5[0] = this.p1[0] + 125
				    this.p5[1] = this.p1[1] - 125 
				    this.p2[0] = this.p1[0] 
				    this.p2[1] = this.p1[1] + 125 
				    this.p5[2] = this.p1[0] + 125
				    this.p5[3] = this.p1[1] 
				    this.p5[4] = this.p1[0] 
				    this.p5[5] = this.p1[1] 
				    this.p4[2] = this.p1[0] 
				    this.p4[3] = this.p1[1] + 125
				    this.p4[4] = this.p1[0] - 125
				    this.p4[5] = this.p1[1] + 125
				    this.p3[0] = this.p1[0] 
				    this.p3[1] = this.p1[1] + 250
				    this.p4[0] = this.p1[0] 
				    this.p4[1] = this.p1[1] 
				    this.p3[2] = this.p1[0] 
				    this.p3[3] = this.p1[1] + 125
				    this.p3[4] = this.p1[0] - 125
				    this.p3[5] = this.p1[1] + 125
				}
			    }
			}
		    } else if (this.orientation == "n") {
			    for (i = 0; i <= 6; i++) {
			        for (j = 0; j <= 5; j++) {
				        if (sX >= 80 + 125 * i    && sX <= 205 + 125 * i && sY >= 80 + 125 * j && sY <= 205 + 125 * j) {
				    this.p1[0] = 80 + 125 * i
				    this.p1[1] = 80 + 125 * j
				    this.p5[0] = this.p1[0] + 250
				    this.p5[1] = this.p1[1] + 125 
				    this.p2[0] = this.p1[0] - 125 
				    this.p2[1] = this.p1[1] 
				    this.p5[2] = this.p1[0] + 125
				    this.p5[3] = this.p1[1] + 125
				    this.p5[4] = this.p1[0] + 125
				    this.p5[5] = this.p1[1] 
				    this.p4[2] = this.p1[0] 
				    this.p4[3] = this.p1[1] 
				    this.p4[4] = this.p1[0] 
				    this.p4[5] = this.p1[1] - 125
				    this.p3[0] = this.p1[0] - 125
				    this.p3[1] = this.p1[1] 
				    this.p4[0] = this.p1[0] + 125
				    this.p4[1] = this.p1[1] 
				    this.p3[2] = this.p1[0] 
				    this.p3[3] = this.p1[1] 
				    this.p3[4] = this.p1[0] 
				    this.p3[5] = this.p1[1] - 125
				}
			    }
			}
		    }
		    break;
		}
		}
	}
	
}

class Solution {
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
}


