const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};

const hamberger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function (e) {
  if (!hamberger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});

const carouselSlide = document.querySelector('.carousel-slide');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let counter = 1;
const itemWidth = carouselItems[0].clientWidth;

carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;

nextBtn.addEventListener('click', () => {
  if (counter >= carouselItems.length - 1) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter++;
  carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
});

prevBtn.addEventListener('click', () => {
  if (counter <= 0) return;
  carouselSlide.style.transition = 'transform 0.5s ease-in-out';
  counter--;
  carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
});

carouselSlide.addEventListener('transitionend', () => {
  if (carouselItems[counter].classList.contains('carousel-item')) return;
  carouselSlide.style.transition = 'none';
  counter = carouselItems.length - 2;
  carouselSlide.style.transform = `translateX(${-itemWidth * counter}px)`;
});

  // Menggunakan jQuery
  $(document).ready(function () {
    // Menambahkan event listener ke tautan pesan
    $('#pesanLink').click(function () {
      $('#tampilkanModalPesanProduk').show(); // Menampilkan modal ketika tautan diklik
    });

    // Menambahkan event listener ke tombol close
    $('#close').click(function () {
      $('#tampilkanModalPesanProduk').hide(); // Menyembunyikan modal ketika tombol close diklik
    });

    // Menambahkan event listener ke luar modal (ketika area di luar modal diklik)
    $(window).click(function (event) {
      if (event.target == document.getElementById('tampilkanModalPesanProduk')) {
        $('#tampilkanModalPesanProduk').hide(); // Menyembunyikan modal
      }
    });
  });
