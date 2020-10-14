//-------------------------------------------------------
$('.nav-link, .smooth-scroll, .navbar-brand').click(function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top
    }, 700);
});
//-------------------------------------------------------
let counterFront = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
let counterBack = [180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180,180];
let flag = [true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true,true];
let numberCard = '';
let number = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20'];
let tempNumberIndex = 0;
const regex = /\d+/g;
$('.flip-card').click(function(){   
  numberCard = $(this).attr('id');
  tempNumberIndex = numberCard.match(regex)-1;
  console.log(numberCard);
  console.log('index: ' + tempNumberIndex);
  console.log('flip-front-' + number[tempNumberIndex] + ': ' + counterFront[tempNumberIndex]);
  console.log('flip-back-' + number[tempNumberIndex] + ': ' + counterBack[tempNumberIndex]);
  console.log('-------------------------------------------');
  if (flag[[tempNumberIndex]])
  {
    counterFront[tempNumberIndex] += 180;
    counterBack[tempNumberIndex] +=180; 
  }  
  else
  {
    counterFront[tempNumberIndex] -= 180;
    counterBack[tempNumberIndex] -=180;  
  }
 
  $('#flip-front-' + number[tempNumberIndex]).css('transform', 'rotateY(' + counterFront[tempNumberIndex] + 'deg)');
  $('#flip-back-' + number[tempNumberIndex]).css('transform', 'rotateY(' + counterBack[tempNumberIndex] + 'deg)');
  flag[tempNumberIndex] = !flag[tempNumberIndex];
});
//-------------------------------------------------------
$("#carousel-portfolio").carousel({
  interval : false
});

//-------------------------------------------------------
lightbox.option({
  'alwaysShowNavOnTouchDevices': true,
  'wrapAround': false,
  'showImageNumberLabel': false,  
});
//-------------------------------------------------------
(function() {
  
  window.addEventListener('load', function() {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function(form) {
      form.addEventListener('submit', function(event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
})();
//-------------------------------------------------------
jQuery(function($){
  $("#validationTooltipNumber").mask("+375(99) 999 99 99",{placeholder:" "});
});
