let firstName = prompt ("What is your first name?");
let lastName = prompt ("What is you last name ?");
let yourAge =prompt ("What is your age ?");


console.log ("Welcome! " + firstName + " " + lastName+ "  You are "+ yourAge + " years old." ); 

// Buraya kadar yazdıklarımızın cevabını sadece sayfanın Console kısmına girersek görebiliriz. Çünkü console.log () yazdık !

alert(yourAge + " is roughly " + yourAge*365 + " days."); /* calculation'ı bu şekilde yapabiliriz fakat daha temiz bir çalışma için ;
 
                                                         yourAge*365'i de tanımlamalıyız o da şöyle; "let days = yourAge*365;" */
 
// alert' ı pop-up sonucunu direk karşımızda görebilmek için kullanıyoruz !!! 

let x = Number (prompt ("X?")); // Burada Number kullanmamızın nedeni, numaralarla sonuç almamızdı, eğer Number kullanmasaydık sadece şans eseri
                                   //String'ler ile doğru cevap alacaktık !
let y = Number (prompt ("Y?"));

console.log (x);
console.log (y); 

if (x > y) {
    console.log (x + " is bigger than " + y);

} else if (x === y) {                    // 3 tane eşitlik kullanmak her zaman daha iyidir her zaman daha güvenilirdir ! 
    console.log (x + " equals to " + y);

} else {
    console.log (x + " is smaller than " + y);
}

/*/////////////////////////////İKİNCİ ÇALIŞMAMIZ//////////////////////////////////*/

let giveNumber = Number(prompt("Give a number please ?"));

console.log (giveNumber);

if (giveNumber > 4) {
    alert(giveNumber + " is TOO high !!");

} else if (giveNumber === 4) {
    alert("You got it Bruh !!! Congratz it was really" + giveNumber);

} else {
    alert (giveNumber + " is TOO low !!");
}

