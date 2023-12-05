const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = 1000;
canvas.height = 1000;

class Cell {
    constructor(effect, x, y) {
        this.effect = effect;
        this.x = x;
        this.y = y;
        this.width = this.effect.cellWidth;
        this.height = this.effect.cellHeight;
        this.color = 'black';
        this.image  = document.getElementById('projectImage');
        this.slideX = Math.random() * 10;
        this.slideY = Math.random() * 10;
    }

    draw(context){
        context.drawImage (this.image, this.x + this.slideX, this.y + this.slideY, this.width, this.height, this.x, this.y, this.width, this.height)
        //(this.image, 0, 0)
        //(this.image, 0, 0, 200, 400, 0, 0, canvas.width, canvas.height);
      
        //context.strokeRect(this.x, this.y, this.width, this.height);
    }

    update(){
        this.slideX = Math.random() * 10;
        this.slideY = Math.random() * 20;
    }
}

class Effect {
    constructor(canvas) {
        this.canvas = canvas;
        this.width = this.canvas.width; 
        this.height = this.canvas.height;   
        this.cellWidth = this.width / 35 ;
        this.cellHeight = this.height / 45;
        // Create a new Cell with this Effect instance as the effect, and x and y set to 0
        this.cell = new Cell(this, 0, 0);
        this.imageGrid = [];
        this.creategrid();

        this.mouse = {
            x : null,
            y : null,
            radius : 100
        }

        this.canvas.addEventListener('mousemove', (event) => {
            console.log(event);
            this.mouse.x = e.offsetX;
            this.mouse.y = e.offsetY;
            console.log
        });

        console.log(this.imageGrid);


    }

    creategrid(){
        for(let y=0; y <this.height; y += this.cellHeight){
            for(let x=0; x< this.width; x += this.cellWidth){
                this.imageGrid.push(new Cell(this, x, y));
        }
    }}

    render(context){
         this.imageGrid.forEach((cell,i) => {
            cell.update();
            cell.draw(context);
        });
    }
}



const effect = new Effect(canvas);
console.log(effect);
effect.render(ctx);


function animate(){
    effect.render(ctx);
    requestAnimationFrame(animate);
}