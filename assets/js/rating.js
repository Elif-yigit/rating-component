const sayilar = [1,  2, 3, 4, 5];

const imageSrc="assets/,mg/star.png";

const list = document.querySelector('.list');
const btns =document.querySelector('.btns');
const mesaj = document.querySelector('.mesaj');

for(const sayi of sayilar) {

  list.innerHTML += `<li>
  <button class="btns" "yap(${sayi})">${sayi}
  </button></li>`;
}



function yap(secim) {



mesaj.innerHTML += `

<div class='image'>${Image}}</div>

<div>You selected <span>${secim}</span> out of 5</div>
<div>Thank you!</div>
<div>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</div>

`


}

// for(let i =0; i<btns; i++) {

//   btns.addEventListener('click',yap);
// }

