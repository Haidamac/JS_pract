// Масиви та об'єкти:
// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

let arr = [124, 18, 'qwerty', true, -125, 15.8, 'asdfgh', false, 182.9, 'mjy'];
console.log(arr);

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.

let book1 = {
    title: "Yuval Noah Harari. Homo Deus",
    pageCount: 464,
    genre: "social philosophy"
};

let book2 = {
    title: "Mark Manson. The Subtle Art of Not Giving a F*ck",
    pageCount: 160,
    genre: "motivating"
};

let book3 = {
    title: "Ray Bradbury. A Sound of Thunder",
    pageCount: 250,
    genre: "science fiction"
};

console.log(book1, book2, book3);
