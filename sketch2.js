selected = 0;
pieces = [4,4,4,1,3,4,4,4,4];
mirror = [4,4,4,1,3,4,4,4,4];
mirror_checked = false;

g1 = 330
h1 = 455
i1 = 455;
j1 = 455;
t1 = 455;
u1 = 455;
v1 = 580;
w1 = 455;
x1 = 580;
y1 = 330;


i2 = 205
j2 = 455
g2 = 330
h2 = 455
z2 = 455
a2 = 330
t2 = 455
u2 = 455
v2 = 580 
w2 = 330
x2 = 330
y2 = 330

i3 = 80
j3 = 205
t3 = 205
u3 = 205
v3 = 205
w3 = 80
x3 = 205
y3 = 330
z3 = 330
a3 = 205
b3 = 330 
c3 = 205
d3 = 205 
e3 = 205

i4 = 705
j4 = 330
g4 = 705
h4 = 455
t4 = 830 
u4 = 330 
v4 = 830 
w4 = 205 
x4 = 705 
y4 = 330

i5 = 580 
j5 = 80
g5 = 705 
h5 = 80
t5 = 455
u5 = 80
v5 = 580
w5 = 80
x5 = 580
y5 = 205
z5 = 705
a5 = 205
b5 = 705
c5 = 330
d5 = 830 
e5 = 205


i6 = 330
j6 = 330
g6 = 205
h6 = 330
t6 = 330
u6 = 330
v6 = 330
w6 = 205
x6 = 330 
y6 = 455
z6 = 455
a6 = 330
b6 = 455
c6 = 455
d6 = 580
e6 = 455

i7 = 330 
j7 = 330
g7 = 205
h7 = 205

t7 = 205
u7 = 330 
v7 = 330 
w7 = 455
x7 = 330
y7 = 330
z7 = 330
a7 = 205
b7 = 455
c7 = 330
d7 = 455
e7 = 455
k7 = 580 
l7 = 455

i8 =205
j8 =205
g8=330
h8=205
t8=80
u8=205
v8=205
w8=205
x8=205
y8=330
z8=330
a8=205
b8=455
c8=205
d8=455
e8=80

i9 = 205
j9 = 205
g9 = 330
h9 = 205
t9 = 80
u9 = 205
v9 = 205
w9 = 205
x9= 205
y9 = 330
z9 =330
a9=330
b9=330
c9=455
d9=455
e9=330

function setup() {

  createCanvas(4000, 4500);
  background(50);
  

  rotate_left = createButton("rotate left ←");
  rotate_left.position(50,800);
  rotate_left.size(200,100);
  rotate_left.mousePressed(rL);

  rotate_right = createButton("rotate right →");
  rotate_right.position(350,800);
  rotate_right.size(200,100);
  rotate_right.mousePressed(rR);
  mirrorB = createButton("|| mirror ||");
  mirrorB.position(650,800);
  mirrorB.size(200,100);
  mirrorB.mousePressed(rM);
}

function rL() {
    sX = mouseX
  sY = mouseY
  if (selected == null )selected = pieceSelected
  switch (selected){
    case 0:
      print(pieces[selected]);
      if(pieces[selected] == 1 || pieces[selected] == 2 ){
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
      break
      
    case 1:
      if(pieces[selected] == 4 || pieces[selected] == 2){
        i2 += 125;j2-= 250;g2 += 125; h2-=125;t2 -= 125;a2 += 125;w2 += 250;v2 -= 125;
      }else if (pieces[selected] == 1 || pieces[selected] == 3){
        i2 -= 125;j2+= 250;g2 -= 125; h2+=125;t2 += 125;a2 -= 125;w2 -= 250;v2 += 125;
      }
      break
      
    case 2:
      /*if(pieces[selected] == 4){
        print('4')
        i3 += 125;j3 += 250;u3 += 125;v3 -=125;w3 +=250;b3-=125;c3-=125;z3 -= 125;x3+=125;

      }else if ( pieces[selected] == 2){
        i3 -= 125;j3 -= 250;u3 -= 125;v3 +=125;w3 -=250;b3+=125;c3+=125;z3 += 125;x3-=125;
        print('caramna')
      }
      if(pieces[selected] == 3){
        i3 -= 250;j3+=125;t3 -= 125;v3 -= 250;w3-=125;a3 -= 125; y3+= 125;b3+=125;c3-=125;
      } else if (pieces[selected] == 1) {
        i3 += 250;j3-=125;t3 += 125;v3 += 250;w3+=125;a3 += 125; y3-= 125;b3-=125;c3+=125;
      }

      break*/
      
    case 3:
      if(pieces[selected] == 4){
        g4 += 125; h4 +=125; t4-=125;w4-=125;x4 -=125;y4 -=250;
      }else if ( pieces[selected] == 2){
        g4 -= 125; h4 -=125; t4+=125;w4+=125;x4 +=125;y4 +=250;
      }
      if(pieces[selected] == 3){
        g4 -= 125; h4 +=125; u4-=125;v4+=125;x4 += 250;y4 -=125;
      } else if (pieces[selected] == 1) {
        g4 += 125; h4 -=125; u4+=125;v4-=125;x4 -= 250;y4 +=125;
      }

      break
      
    case 4:
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
      
    case 6:
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
      
    case 7:
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
      
    case 8:
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
  if (pieces[selected] >= 4){
        pieces[selected] = 1;
        mirror[selected] = 1;
      }else{
        pieces[selected] += 1;
        mirror[selected] += 1;
      }
  }


function rR() {
    sX = mouseX
  sY = mouseY
if (selected == null )selected = pieceSelected
  switch (selected){
    case 0:
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
      
  case 1:
      if(pieces[selected] == 4 || pieces[selected] == 2){
        i2 += 125;j2-= 250;g2 += 125; h2-=125;t2 -= 125;a2 += 125;w2 += 250;v2 -= 125;
      }else if (pieces[selected] == 1 || pieces[selected] == 3){
        i2 -= 125;j2+= 250;g2 -= 125; h2+=125;t2 += 125;a2 -= 125;w2 -= 250;v2 += 125;
      }
      break
    
    case 2:
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
      
    case 3:
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
    case 4:
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
      
    case 5:
      if(pieces[selected] == 4){
        print('4')
        g6 += 250;h6 -= 125;v6 += 250;w6 +=125;b6-=125;a6+=125;y6-=125;t6 +=125;d6 -=250;e6 +=125;
      }else if ( pieces[selected] == 2){
        g6 -= 250;h6 += 125;v6 -= 250;w6 -=125;b6+=125;a6-=125;y6+=125;t6 -= 125;d6 +=250;e6 -=125;
        print('caramna')
      }
      if(pieces[selected] == 3){
        g6 += 125;h6+=250;u6 += 125;v6 -= 125;w6 +=250;z6 -= 125; x6+= 125;c6-=125;d6 -=125;e6 -=250;
      } else if (pieces[selected] == 1) {
        g6 -= 125;h6-=250;u6 -= 125;v6 += 125;w6 -=250;z6 += 125; x6-= 125;c6+=125;d6 += 125;e6 +=250;
      }

      break
      
    case 6:
      if(pieces[selected] == 4){
        print('4')
        g7 += 250;z7 += 250;a7 +=125;c7+=125;x7+=125;t7 +=250;u7 -= 125;w7 -= 125; d7 -=125;k7 -= 250;l7 +=125;
       // h7 += 250;z7 -= 125;a7 += 250;b7 -=125;y7+=125;t7 += 125;u7 +=250;v7 += 125; e7 -=125;k7 -= 125;l7 -=250;
      }else if ( pieces[selected] == 2){
        g7 -= 250;z7 -= 250;a7 -=125;c7-=125;x7-=125;t7 -=250;u7 += 125;w7 += 125; d7 +=125;k7 += 250;l7 -=125;
        
      }
      if(pieces[selected] == 3){
        h7 += 250;z7 -= 125;a7 += 250;b7 -=125;y7+=125;t7 += 125;u7 +=250;v7 += 125; e7 -=125;k7 -= 125;l7 -=250;
        
      } else if (pieces[selected] == 1) {
        h7 -= 250;z7 += 125;a7 -= 250;b7 +=125;y7-=125;t7 -= 125;u7 -=250;v7 -= 125; e7 +=125;k7 += 125;l7 +=250;
      }

      break
    
    case 7:
      if(pieces[selected] == 4){
        print('4')
        g8-=125;h8+=125;u8-=125;t8+=250;v8+=125;y8-=125;a8+=125;b8-=125;c8+=250;e8+=375;
        
      }else if ( pieces[selected] == 2){
        
        g8+=125;h8-=125;u8+=125;t8-=250;v8-=125;y8+=125;a8-=125;b8+=125;c8-=250;e8-=375;
      }
      if(pieces[selected] == 3){
        g8-=125;h8-=125;t8+=125;u8+=250;w8+=125;x8+=125;z8-=125;b8-=250;c8-=125;d8-=375;
      } else if (pieces[selected] == 1) {
        g8+=125;h8+=125;t8-=125;u8-=250;w8-=125;x8-=125;z8+=125;b8+=250;c8+=125;d8+=375;
      }

      break
      
  }
  if (pieces[selected] <= 1){
        pieces[selected] = 4;
        mirror[selected] = 4;
      }else{
        pieces[selected] -= 1;
        mirror[selected] -= 1;
        print(mirror[selected])
      }
    
}

function rM() {
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

function selectedPiece(){
    sX = mouseX;
    sY = mouseY;
  
    if(sX >= i1 && sX <= i1 + 125 && sY >= j1 && sY <= j1 + 125){
      selected = 0;
    }
    if(sX >= x2 && sX <= x2 + 125 && sY >= y2 && sY <= y2 + 125){
      print("bleu")
      selected = 1;
    }if(sX >= d3 && sX <= d3 + 125 && sY >= e3 && sY <= e3 + 125){
      print("rose")
      selected = 2;
    }if(sX >= i4 && sX <= i4 + 125 && sY >= j4 && sY <= j4 + 125){
      print("vert")
      selected = 3;
    }if(sX >= i5 && sX <= i5 + 125 && sY >= j5 && sY <= j5 + 125){
      print("vert moche")
      selected = 4;
    }if(sX >= i6 && sX <= i6 + 125 && sY >= j6 && sY <= j6 + 125){
      print("violet")
      selected = 5;
    }if(sX >= i7 && sX <= i7 + 125 && sY >= j7 && sY <= j7 + 125){
      print("orange")
      selected = 6;
    }if(sX >= i8 && sX <= i8 + 125 && sY >= j8 && sY <= j8 + 125){
      print("dark blue")
      selected = 7;
    }if(sX >= i9 && sX <= i9 + 125 && sY >= j9 && sY <= j9 + 125){
      print("yellow")
      selected = 8;
    }

  }
  
function mousePressed() {
  selectedPiece()
}
  
function movePiece(pS) {
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

  
function mouseDragged(){
  if (mirror_checked == false) movePiece(selected)
}

function clipPiece(pS) {
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


function mouseReleased() {
  print('release')
  clipPiece(selected)
  pieceSelected = selected
  selected = null
}

function draw() {
  background(50);
  if (mirror_checked){
    rotate_left.hide()
    rotate_right.hide()
  }else{
    rotate_left.show()
    rotate_right.show()
  }
    
  fill(0);
  strokeWeight(1);
  rect(80,80,750,625);
  strokeWeight(1);
  fill(255);
  stroke(0);
  for( i = 1; i <= 6;i++){
    for( j=1; j <= 5; j++){
      rect(i*125-45, j*125-45, 125,125);
    }
  }
textSize(32);

  text("Grab pieces on their center",270, 40)
  //piece rose

  fill('rgba(253,50,158,0.8)');
  
  
  
  triangle(i3,j3,t3,u3, v3,w3);
  triangle(i3,j3, t3,u3,x3, y3);
  triangle(v3, w3,t3,u3, z3,a3);
  rect(d3,e3,125, 125);
  rect(b3 ,c3,125, 125);

    
  //piece bleu clair

  fill('rgba(83,225,230,0.8)');

  /*beginShape();
  vertex(i2,j2)
  vertex(t2,u2)
  vertex(v2,w2)
  vertex(x2,y2)
  endShape()
*/
  triangle(i2,j2,g2,h2,x2,y2);
  rect(x2,y2,125, 125);
  triangle(t2,u2,z2, a2, v2,w2);

  i2 = 205
j2 = 455
g2 = 330
h2 = 455
z2 = 455
a2 = 330
t2 = 455
u2 = 455
v2 = 580 
w2 = 330
x2 = 330
y2 = 330

  //piece rouge

  fill('rgba(255,0,0,0.8)');
  /*
  beginShape();
  vertex(330,455);
  vertex(455,455);
  vertex(580,330)
  vertex(580,580)
  vertex(330,580)
  endShape();*/
  rect(g1,h1,125,125);
  rect(i1,j1,125,125);
  triangle(t1,u1,v1,w1,x1,y1);

  
  //piece vert moche

  fill('rgba(51, 196, 92,0.8)');
  

  
  
  rect(i5,j5,125,125);
  rect(g5,h5,125,125);
  triangle(t5,u5,v5,w5,x5,y5);
  triangle(x5,y5,z5,a5,b5,c5);
  triangle(d5,e5,z5,a5,b5,c5);
  
  
  //piece vert fonçé
  
  fill('rgba(2, 122, 36,0.8)');
  

  
  rect(i4,j4,125,125);
  rect(g4,h4,125,125);
  triangle(t4,u4,v4,w4,x4,y4);

  //piece violette

  
  fill('rgba(88,0,138,0.8)');
  triangle(g6,h6,t6,u6,v6,w6);
  triangle(g6,h6,t6,u6,x6,y6);
  rect(i6,j6,125,125);
  triangle(v6,w6,t6,u6,z6,a6);
  triangle(z6,a6,b6,c6,d6,e6);
  
  //piece orange
  
  fill('rgba(214,122,21,0.8)');
  

  triangle(t7,u7,v7,w7,x7,y7);
  rect(g7,h7,125,125);
  rect(i7,j7,125,125);
  triangle(x7,y7,z7,a7,b7,c7);
  triangle(b7,c7,d7,e7,k7,l7);
  /*
beginShape();
vertex(30, 20);
vertex(85, 20);
vertex(85, 75);
vertex(85, 130);
vertex(30,185);
endShape(CLOSE);*/
  
  
  //pièce bleu foncé
  
  fill('rgba(3,13,182,0.8)');
  

  
  triangle(t8,u8,v8,w8,x8,y8);
  rect(i8,j8,125,125);
  rect(g8,h8,125,125);
  triangle(z8,a8,b8,c8,d8,e8);
  
  //piece jaune
  

  fill('rgba(235,238,24,0.8)');
  triangle(t9,u9,v9,w9,x9,y9);
  rect(i9,j9,125,125);
  rect(g9,h9,125,125);
  triangle(z9,a9,b9,c9,d9,e9);
  
}