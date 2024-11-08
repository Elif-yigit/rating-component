/** 
 değişkenleri tanımla 

butonlara click event ata
(her butonun içinde dönmek gerekiyor)
bunun için for döngüsü oluştur
seçilen sayıyı belirle
bu seçilen sayı butonuna tıklandığında gözükmesiiçin submit butonuna click event ata 
seçilen sayı diğer sayfa da gözükmsi için html'de bulunan container divinin değişkenini tanımla
sonucu yazdırmak için koşul oluşrmak gerekiyor çünkü
5 üzerinden değerlendirme yapacak
sonuçta değişen sayfayı innerHtml ile yazdır.

her butonun aynı anda seçilmemesi için if döngüsü kullanmalısın yani koşul belirtmen gerekiyor
bunun için onu seçtiğine dair bir sınıf oluşturmak lazım
ama bu şekilde yapınca diğer butonlarda seçili kaldığı için remove eklememiz gerekiyor
sonra  seçilen olduğunu göstermek için add ile ekle




*/


const btns = document.querySelectorAll('.btn');
const btnSubmit = document.querySelector('.btnSubmit');
const container = document.querySelector('.container');
const imageSrc ='assets/img/payment.svg';
let secimSayi;


for (const btn of btns ) {

  // console.log(btn);
  btn.addEventListener('click',secim);
 
}



function secim (){

  // secim = this.innerText;
//  console.log(this.innerText);

for (const btn of btns) {

  if(btn.classList.contains('secilen')) {
    btn.classList.remove('secilen');
  }
}
this.classList.add('secilen');
secimSayi = this.innerText;
}



// function yazdir() {

//   if(secimSayi <= 5 ) {

//     container.innerHTML = `
//     <div>You selected ${secimSayi} out of 5</div>
//     <h2>Thank you!</h2>
//     <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
//     `
//   }
// }

// btnSubmit.addEventListener('click', yazdir);


btnSubmit.addEventListener('click' , () => {

if(secimSayi) {

  container.innerHTML = `
  <div class="image"><img src='assets/img/payment.svg' alt='payment'</div>
    <div class='secim'>You selected ${secimSayi} out of 5</div>
    <h2 class='header'>Thank you!</h2>
    <span class='text'>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</span>
    `
}


});