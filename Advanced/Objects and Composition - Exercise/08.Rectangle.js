function rectangle(width, height, color) {
    const rect = {
        width : width,
        height: height,
        color: color.charAt(0).toUpperCase() + color.slice(1),
        calcArea(){
            const res = this.width*this.height;
            return res;
        }
    }
    return rect;
}

// INPUT
let rect = rectangle(4, 5, 'red');

console.log(rect.width);

console.log(rect.height);

console.log(rect.color);

console.log(rect.calcArea());