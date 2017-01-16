$(document).ready(function() {
	$('.btn_out').click(function() {
		$(this).next('.nav_menu').slideToggle();
	});
	$('a[href^="#"]').on('click', function(e) {
  			e.preventDefault();

			var target = this.hash;
			var $target = $(target);

			$('html, body').animate({
				'scrollTop': $target.offset().top
			}, 1200, 'swing');
		});
	
	var waypoint = new Waypoint({


  element: document.getElementById('fly-in'),
  handler: function(dir) {
	if (dir === 'down')
		$('#fly-in').removeClass('hiddenHello');
	else
		$('#fly-in').addClass('hiddenHello');
  },
  offset: '80%'
}) 
var waypoint = new Waypoint({
  element: document.getElementById('fly-in'),
  handler: function(dir) {
	if (dir === 'down')
		$('#fly-in').addClass('hiddenHello');
	else
		$('#fly-in').removeClass('hiddenHello');
  },
  offset: '-20px'
})


 // Навыки появление анимаци сверху вниз
var waypoint = new Waypoint({
	element: document.getElementsByClassName('fly-skill'),
	handler: function(dir) {
		if (dir === 'down') {
			$('.fly-skill li:nth-child(1)').removeClass('flipOutX')
			.addClass('flipInX');
		} else {
			$('.fly-skill li:nth-child(1)').removeClass('flipInX').addClass('flipOutX');
		}
	},
	offset: '100%'
});
var waypoint = new Waypoint({
	element: document.getElementsByClassName('fly-skill'),
	handler: function(dir) {
		if (dir === 'down') {
			$('.fly-skill li:nth-child(2)').removeClass('flipOutX')
			.addClass('flipInX');
		} else {
			$('.fly-skill li:nth-child(2)').removeClass('flipInX').addClass('flipOutX');
		}
	},
	offset: '50%'
});
var waypoint = new Waypoint({
	element: document.getElementsByClassName('fly-skill'),
	handler: function(dir) {
		if (dir === 'down') {
			$('.fly-skill li:nth-child(3)').removeClass('flipOutX')
			.addClass('flipInX');
		} else {
			$('.fly-skill li:nth-child(3)').removeClass('flipInX').addClass('flipOutX');
		}
	},
	offset: '20%'
});

// Навыки пропадание анимации при сролле вниз
var waypoint = new Waypoint({
	element: document.getElementsByClassName('fly-skill'),
	handler: function(dir) {
		if (dir === 'down') {
			$('.fly-skill li:nth-child(1)').removeClass('flipInX')
			.addClass('flipOutX');
		} else {
			$('.fly-skill li:nth-child(1)').removeClass('flipOutX').addClass('flipInX');
		}
	},
	offset: '-100%'
});
var waypoint = new Waypoint({
	element: document.getElementsByClassName('fly-skill'),
	handler: function(dir) {
		if (dir === 'down') {
			$('.fly-skill li:nth-child(2)').removeClass('flipInX')
			.addClass('flipOutX');
		} else {
			$('.fly-skill li:nth-child(2)').removeClass('flipOutX').addClass('flipInX');
		}
	},
	offset: '-100%'
});
var waypoint = new Waypoint({
	element: document.getElementsByClassName('fly-skill'),
	handler: function(dir) {
		if (dir === 'down') {
			$('.fly-skill li:nth-child(3)').removeClass('flipInX')
			.addClass('flipOutX');
		} else {
			$('.fly-skill li:nth-child(3)').removeClass('flipOutX').addClass('flipInX');
		}
	},
	offset: '-120%'
});

$("input, select, textarea").jqBootstrapValidation();

function heightDetect() {
	$(".head").css("height", $(window).height());
	};
	heightDetect();
	$(window).resize(function(){
		heightDetect();
	});

});

//Parallax эффект
var scene = document.getElementById('scene');
var parallax = new Parallax(scene);




//Scroll effect
$(window).scroll(function() {


	var st = $(this).scrollTop();


	 // $('.fly-in-text li:nth-child(1)').css({
	 // 	"transform" : "translate(0%, " + st/30 + "%)"
	 // });

	 // $('.fly-in-text li:nth-child(2)').css({
	 // 	"transform" : "translate(0%, " + st/50 + "%)"
	 // });

	 // $('.fly-in-text li:nth-child(1)').css({
	 // 	"transform" : "translate(0%, " + st/30 + "%)"
	 // });
      var x = $("#bird").position();
      var h_bird = $("#bird").outerWidth();
      var width_sect = $(".section").width();
     //  console.log("height bird " +h_bird);
     //  console.log("Top position: " + x.top + " Left position: " + x.left);
    	// console.log("scroll " + st);
    	// console.log("widt_sect" + width_sect);

    	if(st >= (x.top + h_bird)) {
    	$(".bird").css({
    		"transform" : "translate( " + st/10 +"%, " + st/4 +"%)"
    	}); 
    	$(".bird").css({
    		"scale" : st/1400
    	}); 
    } if(st >= ((width_sect * 2) + 100)) {
    	$(".bird").css({
    		"transform" : "translate(0%)"
    	}); 
    	$(".bird").css({
    		"scale" : 0
    	}); 
    }
    if(st >= (x.top + h_bird)) {
    	$(".airoplan").css({
    		"transform" : "translate(-" + st/5 +"%, " + st/1.09 +"%)"
    	}); 
    	$(".airoplan").css({
    		"scale" : st/900
    	}); 
    } if(st >= ((width_sect * 2) + 100)) {
    	$(".airoplan").css({
    		"transform" : "translate(0%)"
    	}); 
    	$(".airoplan").css({
    		"scale" : 0
    	}); 
    }


   var heighBlock = document.getElementById('top_menu1');
  var heighFirst = document.getElementById('first_block');
  if ($(this).scrollTop() > heighBlock.offsetHeight ) {
  $('#top_menu1').addClass("head_none");
} else {
  $('#top_menu1').removeClass("head_none");
};
if($(this).scrollTop() > (heighFirst.offsetHeight + 130)) {
	$("#top_menu1").addClass("head_return");

} else {
	$("#top_menu1").removeClass("head_return");
	
}
    
});

$(window).load(function() { 
	$(".loaderInner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});
























