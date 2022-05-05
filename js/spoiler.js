// $(document).ready(function () {
//    $('.block__title').click(function () {
//       $(this).next('.block__text').toggle('normal');
//       return false;
//    });
// });
const spoiler = document.querySelectorAll('.navbar__title')
const spoiler_text = document.querySelectorAll('.navbar__text')

for (item of spoiler) {
   item.addEventListener('click', function () {
      if (this.classList.contains('active')) {
         this.classList.remove('active');
      } else {
         for (el of spoiler) {
            el.classList.remove('active');
         }
         this.classList.add('active');
      }
   })
}

const spoiler1 = document.querySelectorAll('.block__title')

for (item of spoiler1) {
   item.addEventListener('click', function () {
      this.classList.toggle('active');
   })
}

