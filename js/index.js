// $(window).scroll(function(){
//     if($(this).scrollTop()<150){
//       $('#more').removeClass('notfixed_more');
//       console.log(true);
//     }
//     else{
//       $('#more').addClass('notfixed_more');
//       console.log(false);
//     }
//   })

$(document).ready(function () {
  $('#hbottom').click(function () {
    $('html,body').animate({ 
      scrollTop: $('#sec_story').offset().top }, 1000);
    });
});