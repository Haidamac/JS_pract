document.addEventListener("DOMContentLoaded", function() {
    let pict = new SimpleImage("Ruby_on_rails32.jpg");
    let w = pict.getWidth();
    let h = pict.getHeight();
    let pixel = pict.getPixel(85,17);

    console.log(w, h, pixel);
});

// change color
let img = new SimpleImage(200,200);

for (let pixel of img.values()) {
    let NewRed = pixel.getRed() + 255;
    let NewGreen = pixel.getGreen() + 255;
    pixel.setRed(NewRed);
    pixel.setGreen(NewGreen);
}

print(img);

let image = new SimpleImage("chapel.png");

for (let pixel of image.values()) {
    if (pixel.getRed() !== 255) {
        pixel.setRed(255);
    }
}

print(image);

let image = new SimpleImage("chapel.png");

for (let pixel of image.values()) {
    if (pixel.getRed() !== 0) {
        pixel.setRed(0);
    }
}

print(image);

let image = new SimpleImage("eastereggs.jpg");

for (let pixel of image.values()) {
    if (pixel.getRed() > 70) {
        pixel.setRed(70);
    }
}

print(image);

let image = new SimpleImage("astrachan.jpg");

for (let pixel of image.values()) {
    if (pixel.getY() >= image.getHeight() - 10) {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
}

print(image);

let image = new SimpleImage("chapel.jpg");

for (let pixel of image.values()) {
    if (pixel.getX() <= 50 && pixel.getY() <= 50) {
        pixel.setRed(0);
        pixel.setGreen(255);
        pixel.setBlue(0);
    }
}

print(image);

function topRightCorner(cornerWidth, cornerHeight, image, red, green, blue) {
    for (let pixel of image.values()) {
        if (pixel.getX() >= image.getWidth() - cornerWidth && pixel.getY() <= cornerHeight) {
            pixel.setRed(red);
            pixel.setGreen(green);
            pixel.setBlue(blue);
        }
    }
}

let image = new SimpleImage("chapel.png");
topRightCorner(30, 60, image, 255, 255, 0);
print(image);

let image2 = new SimpleImage("smalllion.jpg");
topRightCorner(125, 20, image2, 255, 0, 0);
print(image2);

function changeRed(width, height) {
    let picture = new SimpleImage(width, height);
    let red = 0;
 
    for (let pixel of picture.values()) {
        pixel.setRed(red);
        pixel.setGreen(0);
        pixel.setBlue(0);
        
        red++;
        
        if (red > 255) {
            red = 0;
        }
    }
 
 return picture;
}

var result = changeRed(256,200);
print(result);

function changeGreenToYellow(width, height) {
    let picture = new SimpleImage(width, height);

    for (let pixel of picture.values()) {
        pixel.setGreen(255);
        pixel.setRed(pixel.getX() * (255 / width));
        pixel.setBlue(0);
    }

    return picture;
}

var result = changeGreenToYellow(256, 200);
print(result);
