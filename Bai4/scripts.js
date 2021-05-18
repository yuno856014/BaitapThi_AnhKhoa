class Rectangle {
    constructor(x, y, length, width, color) {
        this.x = x;
        this.y = y;
        this.length = length;
        this.width = width;
        this.color = color;
    }
    render(ctx) {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.length, this.width)
    }
}
let ctx = document.getElementById("myCanvas").getContext('2d');
let rectangle = new Rectangle(20, 30, 200, 100, "#f3f3f3")
rectangle.render(ctx)