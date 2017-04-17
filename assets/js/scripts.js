/*! @Copyright Preface by MeanThemes 2014-2015 */

jQuery.noConflict();
(function ($) {


	$(window).load(function() {
	"use strict";

		//
		// Get logo size and switch for retina if needed
		//
		var logo = $( '#logo' );
		var logoRetina = logo.attr('data-fullsrc');

		logo.attr( 'width' , logo.width() );
		logo.attr( 'height' , logo.height() );

		if( window.devicePixelRatio >= 1.5 ){
			logo.attr( 'src' , logoRetina );
		}


	});


    $(document).ready(function() {
			"use strict";

    	//
    	// Add a class so we know JavaScript is supported
    	//
    	$('html').addClass("js").removeClass("no-js");

    	//
    	// Hide Time on post-thumb hover
    	//
    	$( '.post-image, .post-thumb, .part-gallery' ).each( function () {

    		$(this).on( 'mouseenter' , function () {

    			$(this).parent().find('time').stop(true,true).fadeOut();

    		});

    		$(this).on( 'mouseleave' , function () {

    			$(this).parent().find('time').stop(true,true).fadeIn();

    		});

    	});



    	//
    	// Get browser Width, height etc
    	//
			var currWidth = $(window).width();

        if ((navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/Android/i)) || (navigator.userAgent.match(/Windows Phone/i)) || (navigator.userAgent.match(/Blackberry/i))) {
            $("body").addClass("mobile");
        }

        if ( (navigator.userAgent.match(/iPhone/i)) || (navigator.userAgent.match(/iPad/i)) ) {
            $("body").addClass("ios");
        }

      

				//
				// Add active class to menu parents
				//
				$("header.header nav li").on( 'mouseenter' , function () {
						$("header.header nav li").removeClass("active");
						$(this).parent().parent('li').addClass('active');
						$(this).parent().parent().parent().parent('li').addClass('active');
				});

				// and tidy up when the mouse leaves the header nav
				$("header.header nav, header.header nav > li").on( 'mouseleave' , function () {
						$("header.header nav li").removeClass("active");
				});


				//
				// Owl Carousel
				//
				if ( $(".part-gallery").length > 0 ) {

				// Lazy Load for mobile only
				var lazyChoice = false;
				if ( currWidth > 768 ) {
					lazyChoice = true;
				}


					$(".part-gallery .owl-carousel").owlCarousel({
						navigation : true, // Show next and prev buttons
						slideSpeed : 300,
						paginationSpeed : 400,
						singleItem:true,
						autoHeight: true,
						lazyLoad : lazyChoice,
						lazyFollow: lazyChoice,
						navigationText:	false
					});

		}

        //
				// Centre Owl Carousel books if less than 3
				//

				if ( $('body').is('.page-template-t-homepage-php') ) {

						var owlBook = $('.loop-book > .owl-carousel');

						if ( owlBook.length === 1 ) {

								var owlChildren = $('.loop-book .owl-carousel .owl-item').size();

								if ( owlChildren === 1 ) {

									$('.loop-book').addClass('single-item');

								}

						}

				}


        //
        // Truncate links
        //

        $('.widgets .tweet-text a').truncate({
			width: '150',
			after: '&hellip;',
			center: false,
			addtitle: true,
		});

        if ( $( 'body' ).is('.single-post') ) {
	        if( $('body').hasClass("mobile") ) {
	        	$('.comment-text a').truncate({
	        					width: '150',
	        					after: '&hellip;',
	        					center: false,
	        					addtitle: true,
	        				});
	        } else {
	        	$('.comment-text a').truncate({
	        					width: '500',
	        					after: '&hellip;',
	        					center: false,
	        					addtitle: true,
	        				});
	        }
        }

        //
        // Shortcodes (tabs and toggles)
        //

        // Tabs
        $(function () {
        	$(".mt-tabs").each( function () {
        	    var tabContainers = $('.tab-inner > div', this);

        	    $(' ul a',this).click(function (e) {
        		   e.preventDefault();
        	        tabContainers.hide().filter(this.hash).show();

        	        $(this).parent().parent().find('li').removeClass('tab-active');
        	        $(this).parent().addClass('tab-active');

        	        return false;
        	    }).filter(':first').click();
            });
        });


        // Toggles
        $(function () {
        	$(".toggle").each( function () {
        	    var toggleContainers = $('.toggle-inner', this).hide();
        	    var toggleActive = $('.toggle-title', this);



        	    var toggleData = $(this).attr('data-id');
        	   	if( toggleData === "open" ) {
        	   		$('.toggle-inner', this).show();
        	   		toggleActive.addClass('active');
        	   	}

        	   	toggleActive.on( 'click' , function (e) {

        	   		e.preventDefault();

        	   		toggleContainers.slideToggle();
        	   		toggleActive.toggleClass('active');

        	   	});

            });
        });

        //
        //  FitVids
        //
        $("article, .entry-content").fitVids();

        //
        // Grab captions
        //
        $('.gallery-item a img').each( function() {

        	var imageCaption = $(this).attr("title");

        	$(this).parent().attr("title" , imageCaption);

        });



        var mtInsert = function () {
				$('.mt-insert').each(function () {

					// Get Widths of window and post
					var mtWindowWidth = $(window).width();
					var mtPostWidth = $('.post .inner').width();
					var mtMargin = (mtWindowWidth - mtPostWidth ) / 2;



					$( this )
					.css( 'width' , mtWindowWidth )
					.css( 'margin-left' , -mtMargin );

				});
			};
			mtInsert();

			// Resize events
			$(window).resize(function () {

				//makeInsert();
				mtInsert();

			});

    }); // end document.ready


})(jQuery);
