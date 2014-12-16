/** Sliders Overlay Sliders Plugin - Version 1.1

 The MIT License (MIT)

 * Copyright (c) 2014 Chris Divyak

 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:

 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.

 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
*/
(function($){

 	$.fn.extend({

		//pass the options variable to the function
 		sliders: function(options) {


			//Set the default values, use comma to separate the settings, example:
			var defaults = {
				  wrap: "one-third", //icon for mobile push men
				 overlay: "overlay", //icon for mobile push men

			}

			var options =  $.extend(defaults, options);

    		return this.each(function() {
				var o = options;
				var n = '.nextbtn';
				var p = '.prevbtn';

				$("."+o.overlay).hide();
				$("."+o.wrap).click(function(){
					$(this).next("."+o.overlay).fadeIn(function(){

						$('html, body').animate({scrollTop:$("."+o.wrap).offset().top - 20}, 'slow');
						$("."+o.wrap).hide();
						//click to close
						$('.close').click(function(e){
							 e.preventDefault(); //This will stop the jumping
							$('html, body').animate({scrollTop:$('body').offset().top}, 'slow');
							$(this).closest("."+o.overlay).fadeOut();
							$("."+o.wrap).show();

						});

						//click to next slide
						$(n).click(function(){
							$(this).closest("."+o.overlay).delay(100).fadeOut(400);
							$(this).parent("."+o.overlay).next().next().fadeIn(200);
						});

						//click to previous slide
						$(p).click(function(){
							$(this).closest("."+o.overlay).fadeOut(400);
							$(this).parent("."+o.overlay).prev().prev().fadeIn(100);
						});
					});
				});


			$("."+o.wrap).each(function(){
				//add text from next h2 to next link
				var nextlink = $(this).next().next().find("h2").html();
				$(this).next().find(n).html(nextlink+"&raquo");

				//add text from previous h2 to previous link
				var prevlink = $(this).prev().prev().find("h2").html();
				$(this).next().find(p).html("&laquo"+prevlink);
			});

			//remove if undefined
			 if ($(n+':contains("undefined")').length) {
			  	$(n+':contains("undefined")').remove();
				}
			 if ($(p+':contains("undefined")').length) {
			       $(p+':contains("undefined")').remove();
				}

    		});
    	}
	});
})(jQuery);
