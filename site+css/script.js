
window.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.about_me_img'),
        title = document.querySelector('.about_me_title'),
        info = document.querySelector('.about_me_info');


    img.addEventListener('click', () => {
        title.classList.toggle('about_me_title_active'),
            info.classList.toggle('about_me_info_active');
            

    });

})



var header = document.querySelector('.header');
var fixed = header.offsetTop;

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    title = document.querySelector('.about_me_title'),
        info = document.querySelector('.about_me_info');
    
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    title.classList.add('about_me_title_active'),
    info.classList.add('about_me_info_active');
  } 

  if (window.pageYOffset > fixed) {
    header.classList.add("fixed");
  } else {
    header.classList.remove("fixed");
  }
}

var toastTrigger = document.getElementById('liveToastBtn')
var toastLiveExample = document.getElementById('liveToast')
if (toastTrigger) {
  toastTrigger.addEventListener('click', function () {
    var toast = new bootstrap.Toast(toastLiveExample)

    toast.show()
  })
}