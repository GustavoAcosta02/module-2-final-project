let bird;
let pipes = [];
let timeAlive = 0;
let jumps = 0;

function setup() {
  createCanvas(750, 700);
  bird = new Bird();
  pipes.push(new Pipe());
}

function keyPressed() {
  if (key == ' ') {
    bird.up();
    jumps++
  }
}

function draw() {
  if (keyIsDown(DOWN_ARROW)){
    background(0,0,0);
  } 
  else {
  background(0, 255, 255);
  }
  if (keyIsDown(UP_ARROW)){
    background(255,0,0);
  } 
  if (keyIsDown(RIGHT_ARROW)){
    background(255,255,0);
  } 
  if (keyIsDown(LEFT_ARROW)){
    background(255, 230, 255);
  } 
  for (let i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

    if(pipes[i].hits(bird)) {
    }

    if (pipes[i].offscreen()){
      pipes.splice(i, 1);
    }
  }

  bird.update();
  bird.show();

  if (frameCount % 100 == 0) {
      pipes.push(new Pipe());
  }
  textSize(32);
  text(`Time Alive: ${timeAlive}`, 20, 50);
  text(`Jumps: ${jumps}`, 20, 100);

}


function timed() {
  timeAlive++;
}

const interval = 1000;
setInterval(timed, interval);






