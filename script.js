TinyTurtle.apply(window);

function square(){
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
right(90);
forward(50);
}

function triangle(){

right(60);
forward(50);
right(60);
forward(50);
right(150);
forward(80);
}

function house(){
    
square();
triangle();
}

house();

function pentagon(){
forward(10);
right(30);
forward(40);
right(120);
forward(-30);
right(119);
forward(15);
right(96);
forward(-80);
}
pentagon();

stamp();


