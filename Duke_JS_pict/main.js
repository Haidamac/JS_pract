document.addEventListener("DOMContentLoaded", function() {
    let pict = new SimpleImage("Ruby_on_rails32.jpg");
    let w = pict.getWidth();
    let h = pict.getHeight();
    let pixel = pict.getPixel(85,17);

    console.log(w, h, pixel);
});

// change color
var img = new SimpleImage(200,200);

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
