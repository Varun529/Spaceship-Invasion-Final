//sprite variables
var bg, warrior, enemy, playButton, cannon1, cannon2, cannon3, bullet1, bullet2, bullet3, edges, door, destroyButton, wall1, wall2, wall3;
lives=3;
//image variables
var spaceShipInsideBg, firstPageBg, warriorImg, wallImg, cannonImg, bulletImg, doorImg, wallImg,destroyButtonImg, gameoverImg, winnerImg; 

var gameState="start";



function preload()
{
	firstPageBg=loadImage("images/firstpg2.jpg");
	warriorImg=loadImage("images/warrior.png");
	spaceShipInsideBg=loadImage("images/Spaceship Invasion level background drawings.jpg");
	cannonImg=loadImage("images/cannon2.png");
	bulletImg=loadImage("images/cannon bullet.png");
	doorImg=loadImage("images/dooor.png");
	wallImg=loadImage("images/black.jpg");
	destroyButtonImg=loadImage("images/desbtroybutton.png");
	gameoverImg=loadImage("images/gameover.jpg");
	winnerImg=loadImage("images/winner.jpg");


	//wallImg=loadImage("images/wall.png");
}

function setup() {
	createCanvas(displayWidth, displayHeight);
	bg=createSprite(displayWidth/2,displayHeight/2,width+600,height);
	bg.addImage("fp",firstPageBg);
	bg.addImage("lvl",spaceShipInsideBg);
	bg.addImage("gmover",gameoverImg);
	bg.addImage("winnr",winnerImg);
	bg.scale=1.3;
	
	playButton = createButton('Play');
	playButton.style("width","75px");
	playButton.style("height","50px");
	playButton.style("background-color","green");
	playButton.visible=false;
	warrior=createSprite(displayWidth/2-500,displayHeight/2+300);
	
	warrior.addImage("blue",warriorImg);
	warrior.scale=0.15;
	warrior.visible=false;
	
	edges=createEdgeSprites();

	door=createSprite(displayWidth-50, displayHeight/2-310);
	door.addImage("dor",doorImg);
	door.scale=0.15;
	door.visible=false;
	cannon1=createSprite(displayWidth/2-200,displayHeight/2-300);
	cannon1.addImage("c1",cannonImg);
	cannon1.scale=0.2;
	cannon1.visible=false;
	bullet1=createSprite(displayWidth/2-200,displayHeight/2-300);
	bullet1.addImage("b1",bulletImg);
	bullet1.scale=0.08;
	bullet1.visible=false;
	cannon2=createSprite(displayWidth/2+100,displayHeight/2-300);
	cannon2.addImage("c2",cannonImg);
	cannon2.scale=0.2;
	cannon2.visible=false;
	bullet2=createSprite(displayWidth/2+100,displayHeight/2-300);
	bullet2.addImage("b2",bulletImg);
	bullet2.scale=0.08;
	bullet2.visible=false;
	cannon3=createSprite(displayWidth/2+300,displayHeight/2-300);
	cannon3.addImage("c3",cannonImg);
	cannon3.scale=0.2;
	cannon3.visible=false;
	bullet3=createSprite(displayWidth/2+300,displayHeight/2-300);
	bullet3.addImage("b3",bulletImg);
	bullet3.scale=0.08;
	bullet3.visible=false;
	wall1=createSprite(displayWidth/2-125, displayHeight/2+100,100,10);
	wall1.addImage("w1",wallImg);
	wall1.scale=0.15;
	wall1.visible=false;
	wall2=createSprite(displayWidth/2+175,displayHeight/2+75,10,100);
	wall2.addImage("w2",wallImg);
	wall2.scale=0.15;
	wall2.visible=false;
	destroyButton=createSprite(displayWidth-50, displayHeight/2);
	destroyButton.addImage("dbutn",destroyButtonImg);
	destroyButton.scale=0.15;
	destroyButton.visible=false;
	
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
console.log(gameState);
  if(lives===0){
	  gameState="gameover";
  }

  if(gameState==="start"){
	playButton.position(displayWidth/2-30, displayHeight/2+250);
	playButton.mousePressed(()=>{
	  
	  gameState="level1";	
	});
  }

  if(gameState==="level1"){
	playButton.hide();  
	warrior.visible=true;
	cannon1.visible=true;
	bullet1.visible=true;
	cannon2.visible=true;
	bullet2.visible=true;
	door.visible=true;
	bg.changeImage("lvl",spaceShipInsideBg);

	if(keyIsDown(UP_ARROW)){
		warrior.y +=-7;
	}
	if(keyIsDown(DOWN_ARROW)){
		warrior.y+=7;
	}
	if(keyIsDown(RIGHT_ARROW)){
		warrior.x+=7;
	}
	if(keyIsDown(LEFT_ARROW)){
		warrior.x+=-7;
	}
	bullet1.velocityY=15;
	bullet2.velocityY=15;

	if(frameCount%60===0){
		bullet1.y=displayHeight/2-300;
		bullet2.y=displayHeight/2-300;
	}
	if(warrior.collide(bullet1)){
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		lives=lives-1;
	}
	if(warrior.collide(bullet2)){
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		lives=lives-1;
	}
	if(warrior.collide(door)){
		gameState="level2";
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		cannon1.x=displayWidth/2-300;
		bullet1.x=displayWidth/2-300;
		bullet1.y=displayHeight/2-300;
		cannon2.x=displayWidth/2;
		bullet2.x=displayWidth/2;
		bullet2.y=displayHeight/2-300;
	}
	warrior.collide(cannon1);
	warrior.collide(cannon2);
	warrior.collide(bullet1);
	warrior.collide(bullet2);
	
  }
  if(gameState==="level2"){
	cannon3.visible=true;
	bullet3.visible=true;
	
	if(keyIsDown(UP_ARROW)){
		warrior.y+=-7;
	}
	if(keyIsDown(DOWN_ARROW)){
		warrior.y+=7;
	}
	if(keyIsDown(RIGHT_ARROW)){
		warrior.x+=7;
	}
	if(keyIsDown(LEFT_ARROW)){
		warrior.x+=-7;
	}
	bullet1.velocityY=17;
	bullet2.velocityY=17;
	bullet3.velocityY=17;

	if(frameCount%55===0){
		bullet1.y=displayHeight/2-300;
		bullet2.y=displayHeight/2-300;
		bullet3.y=displayHeight/2-300;
	}
	if(warrior.collide(bullet1)){
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		lives=lives-1;
	}
	if(warrior.collide(bullet2)){
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		lives=lives-1;
	}
	if(warrior.collide(bullet3)){
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		lives=lives-1;
	}
	if(warrior.collide(door)){
		gameState="level3";
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		cannon1.x=displayWidth/2-275;
		bullet1.x=displayWidth/2-275;
		bullet1.y=displayHeight/2-300;
		cannon2.x=displayWidth/2+25;
		bullet2.x=displayWidth/2+25;
		bullet2.y=displayHeight/2-300;
	}
  }
  if(gameState==="level3"){
	wall1.visible=true;
	wall2.visible=true;
	door.visible=false;
	destroyButton.visible=true;
	
	if(keyIsDown(UP_ARROW)){
		warrior.y+=-7;
	}
	if(keyIsDown(DOWN_ARROW)){
		warrior.y+=7;
	}
	if(keyIsDown(RIGHT_ARROW)){
		warrior.x+=7;
	}
	if(keyIsDown(LEFT_ARROW)){
		warrior.x+=-7;
	}
	bullet1.velocityY=17;
	bullet2.velocityY=17;
	bullet3.velocityY=17;

	if(frameCount%55===0){
		bullet1.y=displayHeight/2-300;
		bullet2.y=displayHeight/2-300;
		bullet3.y=displayHeight/2-300;
	}
	if(warrior.collide(bullet1)){
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		lives=lives-1;
	}
	if(warrior.collide(bullet2)){
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		lives=lives-1;
	}
	if(warrior.collide(bullet3)){
		warrior.x=displayWidth/2-500;
		warrior.y=displayHeight/2+300;
		lives=lives-1;
	}
	if(warrior.collide(destroyButton)){
		gameState="winner";

	}
	warrior.collide(wall1);
	warrior.collide(wall2);
  }

   	if(gameState==="gameover"){
		bg.changeImage("gmover",gameoverImg);
		warrior.visible=false;
		cannon1.visible=false;
		cannon2.visible=false;
		cannon3.visible=false;
		bullet1.visible=false;
		bullet2.visible=false;
		bullet3.visible=false;
		wall1.visible=false;
		wall2.visible=false;
		destroyButton.visible=false;
		door.visible=false;
		/*var playAgain=createButton('Play Again');
		playAgain.style("width","75px");
		playAgain.style("height","50px");
		playAgain.style("background-color","green");
		playAgain.position(displayWidth/2-30,displayHeight/2+200);

		
		playAgain.mousePressed(()=>{
			playAgain.hide();
			gameState="start";
			
			bg.changeImage("fp",firstPageBg);
			lives=3;
			playButton.show();
			
		  });
		  */	
	}

	if(gameState==="winner"){
		bg.changeImage("winnr",winnerImg);
		warrior.visible=false;
		cannon1.visible=false;
		cannon2.visible=false;
		cannon3.visible=false;
		bullet1.visible=false;
		bullet2.visible=false;
		bullet3.visible=false;
		wall1.visible=false;
		wall2.visible=false;
		destroyButton.visible=false;
	}
  warrior.collide(edges);
  drawSprites();
  fill("red");
  textSize(25);
  text("Lives:"+lives, displayWidth/2-500,displayHeight/2-300);
}



