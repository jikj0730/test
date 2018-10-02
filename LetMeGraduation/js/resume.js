(function($) {
  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#sideNav'
  });

$(document).ready(function(){
    $('.progress-value > span').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 1500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});

$('#append_row').on("click", function () {
	$('#list_table').append(
		$('<tr>').append(
			$('<td>').append($('#add_no').val()),
			$('<td>').append($('#add_name').val()),
			$('<td>').append(
				// property와 attribute의 차이!!
				$('<a>').prop('href', '#').addClass('delete-link').append('Delete')
				// <a href="#" class="delete-link">Delete</a>
			)
		)
	);
});

$('#list_table').on("click", ".delete-link", function () {
  /*
  <tr>
    <td>3</td>
    <td>seok</td>
    <td>901217</td>
    <td>
      <a href="#" class="delete-link">Delete</a>
    </td>
  </tr>
  */
  // this == a의 부모의 부모는 tr태그
  $(this).parent().parent().remove();
});

})(jQuery); // End of use strict


