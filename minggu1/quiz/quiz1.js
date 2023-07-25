//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = 'JavaScript';
let second = 'is';
let third = 'awesome';
let fourth = 'and';
let fifth = 'I';
let sixth = 'love';
let seventh = 'it!';

//code here
console.log('\nno.1 \n')
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh);

// ---------------------------------------
console.log('')
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!
console.log('\nno.2 \n')
let word1 = 'wow JavaScript isqso cool';
let exampleFirstWord = word1[0] + word1[1] + word1[2];

// console.log('First Word: ' + exampleFirstWord);

let second1 = word1[4] + word1[5] + word1[6] + word1[7] + word1[8] + word1[9] + word1[10] + word1[11] + word1[12] + word1[13]
let third1 = word1[15] + word1[16]
let fourth1 = word1[18] + word1[19]
let fifth1 = word1[21] + word1[22] + word1[23] + word1[24]
console.log('First Word: ' + exampleFirstWord, '\nSecond Word: ' + second1, '\nThird Word: ' + third1, '\nFourth Word: ' + fourth1, '\nFifth Word: ' + fifth1);

// ---------------------------------------
console.log('')
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!
console.log ('\nno.3\n')
let word3 = 'wow JavaScript is so cool';
let exampleFirstWord3 = word3.substring(0, 3);

// console.log('First Word: ' + exampleFirstWord3);

let second2 = word3.substring(4,14)
let third2 = word3.substring(15,17)
let fourth2 = word3.substring(18,20)
let fifth2 = word3.substring(21,25)
console.log('First Word: ' + exampleFirstWord3, '\nSecond Word: ' + second2, '\nThird Word: ' + third2, '\nFourth Word: ' + fourth2, '\nFifth Word: ' + fifth2);

// ---------------------------------------
console.log('')
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

console.log('\nno.4\n')
let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

let second3 = word4.substring(4,14)
let third3 = word4.substring(15,17)
let fourth3 = word4.substring(18,20)
let fifth3 = word4.substring(21,25)

let secondWordLength = second3.length
let thirdWordLength = third3.length
let fourthWordLength = fourth3.length
let fifthWordLength = fifth3.length

console.log('First Word: ' + exampleFirstWord4 + ', with length: ' + firstWordLength);
console.log('Second Word: ' + second3 + ', with length: ' + secondWordLength);
console.log('Third Word: ' + third3 + ', with length: ' + thirdWordLength);
console.log('Fourth Word: ' + fourth3 + ', with length: ' + fourthWordLength);
console.log('Fifth Word: ' + fifth3 + ', with length: ' + fifthWordLength);
