document.addEventListener("DOMContentLoaded", function() {
    let pict = new SimpleImage("Ruby_on_rails32.jpg");
    let w = pict.getWidth();
    let h = pict.getHeight();
    let pixel = pict.getPixel(85,17);

    console.log(w, h, pixel);
});
