$(document).ready(function () {
  $('#iconMenu').click(function () {
    $('#pageMenu').css('left', '0');
    function showMenu() {
      $('#pageMenu').css(
        'clip-path',
        'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
      );
      $('#iconMenu').animate({ right: '-6rem' }, 300);
    }
    setTimeout(showMenu, 100);
  });

  $('#close').click(function () {
    $('#pageMenu').css('clip-path', 'polygon(0 0, 0% 0, 100% 100%, 0% 100%)');
    function hideMenu() {
      $('#pageMenu').css('left', '-18.5rem');
      $('#iconMenu').animate({ right: '3rem' }, 300);
    }
    setTimeout(hideMenu, 300);

    function originalLayout() {
      $('#pageMenu').css('clip-path', 'polygon(0 0, 100% 0, 0% 100%, 0% 100%)');
    }
    setTimeout(originalLayout, 600);
  });
});
