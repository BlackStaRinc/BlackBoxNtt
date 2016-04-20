/*
 * jQuery infinitecarousel plugin
 * @author admin@catchmyfame.com - http://www.catchmyfame.com
 * @version 1.2.2
 * @date August 31, 2009
 * @category jQuery plugin
 * @copyright (c) 2009 admin@catchmyfame.com (www.catchmyfame.com)
 * @license CC Attribution-Share Alike 3.0 - http://creativecommons.org/licenses/by-sa/3.0/
 */

(function($){
	$.fn.extend({ 
		infiniteCarousel: function(options)
		{
			var defaults = 
			{
				transitionSpeed : 1500,	//image changing/sliding speed
				displayTime : 4000,		//image displaying time 
				textholderHeight : .2,	//
				displayProgressBar : 1,	//progress bar (0 or 1)
				
				displayThumbnails: 0,
				displayThumbnailNumbers: 1,
				displayThumbnailBackground: 1,
				
				displaySlidingThumbnails: 1,
				displaySlidingbanner: 1,
				displayFadeInandOutbanner: 0,

				displayPauseplaybutton: 0,
				displayPrevnextbutton: 0,
				displayTextHolder: 0,
				thumbnailWidth: '20px',
				thumbnailHeight: '20px',
				thumbnailFontSize: '.7em'
			};

			

			options = $.extend(defaults, options);			
	
    		return this.each(function() {

    			var randID = Math.round(Math.random()*100000000);
				var o=options;
				var obj = $(this);
				var curr = 1;

				var numImages	= $('img', obj).length; // Number of images
				var imgHeight	= $('img:first', obj).height();
				var imgWidth	= $('img:first', obj).width();
				var autopilot	= 1;

				//pre-load for right thumbnails
				if(o.displaySlidingThumbnails)
				{
					var rightThumbs = $("div#right-thumbs");
					$('ul li:last', rightThumbs).clone().insertBefore($('ul li:first', rightThumbs));									
					$('ul li:last', rightThumbs).remove();
					
					$('ul li.sub-banner img', rightThumbs).bind('click', rightthumbclick);
				}

				$('p', obj).hide(); // Hide any text paragraphs in the carousel
				$(obj).width(imgWidth).height(imgHeight); //set big banner image area size by loading image.

			
				// Build progress bar
				if(o.displayProgressBar)
				{
					$(obj).append('<div id="progress'+randID+'" style="position:absolute;bottom:0;background:#206;left:'+$(obj).css('paddingLeft')+'"></div>');
					$('#progress'+randID).width(imgWidth).height(5).css('opacity','.5');
				}
							
				// Move last image and stick it on the front
				if (o.displaySlidingbanner)
				{
					$(obj).css({'overflow':'hidden','position':'relative','top':'0px;'});
					$('li:last', obj).prependTo($('ul', obj));
					$('ul',obj).css('left',-imgWidth+'px');
					$('ul',obj).width(9999);

					$('ul',obj).css({'list-style':'none','margin':'0','padding':'0','position':'relative'});
					$('li',obj).css({'display':'inline','float':'left'});
				} else {
					$('ul',obj).css({'list-style':'none','margin':'0','padding':'20px','position':'relative'});
					$('li:first', obj).css({'display':'inline'});
				}
				
			
				// Build textholder div thats as wide as the carousel and 20%-25% of the height
				if (o.displayTextHolder)
				{
					$(obj).append('<div id="textholder'+randID+'" class="textholder" style="position:absolute;bottom:0px;margin-bottom:'+-imgHeight*o.textholderHeight+'px;left:'+$(obj).css('paddingLeft')+'"></div>');
				}

				
				var correctTHWidth = parseInt($('#textholder'+randID).css('paddingTop'));
				var correctTHHeight = parseInt($('#textholder'+randID).css('paddingRight'));
				$('#textholder'+randID).width(imgWidth-(correctTHWidth * 2)).height((imgHeight*o.textholderHeight)-(correctTHHeight * 2)).css({'backgroundColor':'#FFF','opacity':'0.5'});
				
				showtext($('li:eq(1) p', obj).html()); //--> print text				
			
				// Prev/Left and Next/Right arrow image button actions	
				if (o.displayPrevnextbutton)
				{
					var html = '<div id="btn_rt'+randID+'" style="position:absolute;right:0;top:'+((imgHeight/2)-15)+'px"><a href="javascript:void(0);"><img style="border:none;margin-right:2px" src="/js/infiniteCarousel/images/rt.png" /></a></div>';
					html += '<div id="btn_lt'+randID+'" style="position:absolute;left:0;top:'+((imgHeight/2)-15)+'px"><a href="javascript:void(0);"><img style="border:none;margin-left:2px" src="/js/infiniteCarousel/images/lt.png" /></a></div>';
					$(obj).append(html);

					// 			
					$('#btn_rt'+randID).css('opacity','.75').click(function(){
						autopilot = 0;
						$('#progress'+randID).stop().fadeOut();
						slideAction('next');
						setTimeout(function(){$('#play_btn'+randID).fadeIn(250);},o.transitionSpeed);
						clearTimeout(clearInt);
					}).hover(function(){$(this).animate({opacity:'1'},250)},function(){$(this).animate({opacity:'.75'},250)});
					$('#btn_lt'+randID).css('opacity','.75').click(function(){
						autopilot = 0;
						$('#progress'+randID).stop().fadeOut();
						slideAction('prev');
						setTimeout(function(){$('#play_btn'+randID).fadeIn(250);},o.transitionSpeed);
						clearTimeout(clearInt);
					}).hover(function(){$(this).animate({opacity:'1'},250)},function(){$(this).animate({opacity:'.75'},250)});
				}
			
				// Pause/play button(img)
				if (o.displayPauseplaybutton)
				{				
					html = '<a href="javascript:void(0);"><img id="pause_btn'+randID+'" src="/js/infiniteCarousel/images/pause.png" style="position:absolute;top:3px;right:3px;border:none" alt="Pause" /></a>';
					html += '<a href="javascript:void(0);"><img id="play_btn'+randID+'" src="/js/infiniteCarousel/images/play.png" style="position:absolute;top:3px;right:3px;border:none;display:none;" alt="Play" /></a>';
					$(obj).append(html);
					$('#pause_btn'+randID).css('opacity','.5').hover(function(){$(this).animate({opacity:'1'},250)},function(){$(this).animate({opacity:'.5'},250)});
					$('#pause_btn'+randID).click(function(){
						autopilot = 0;
						$('#progress'+randID).stop().fadeOut();
						clearTimeout(clearInt);
						$('#pause_btn'+randID).fadeOut(250);
						$('#play_btn'+randID).fadeIn(250);
						showminmax();
					});
					$('#play_btn'+randID).css('opacity','.5').hover(function(){$(this).animate({opacity:'1'},250)},function(){$(this).animate({opacity:'.5'},250)});
					$('#play_btn'+randID).click(function(){
						autopilot = 1;
						slideAction('next');
						$('#play_btn'+randID).hide();
						clearInt=setInterval(function(){slideAction('next');},o.displayTime+o.transitionSpeed);
						setTimeout(function(){$('#pause_btn'+randID).show();$('#progress'+randID).fadeIn().width(imgWidth).height(5);},o.transitionSpeed);
					});
				}
				
				//display thumbnails in bottom
				if(o.displayThumbnails)
				{
					// Build thumbnail viewer and thumbnail divs
					$(obj).after('<div id="thumbs'+randID+'" style="position:relative;overflow:auto;text-align:left;padding-top:5px;"></div>');
					$('#thumbs'+randID).width(imgWidth);
					for(i=0;i<=numImages-1;i++)
					{
						thumb = $('img:eq('+(i+1)+')', obj).attr('src');
						$('#thumbs'+randID).append('<div class="thumb" id="thumb'+randID+'_'+(i+1)+'" style="cursor:pointer;background-image:url('+thumb+');display:inline;float:left;width:'+o.thumbnailWidth+';height:'+o.thumbnailHeight+';line-height:'+o.thumbnailHeight+';padding:0;overflow:hidden;text-align:center;border:1px solid #ccc;margin-right:4px;font-size:'+o.thumbnailFontSize+';font-family:Arial;color:#000;text-shadow:0 0 3px #fff">'+(i+1)+'</div>');
						if(i==0) $('#thumb'+randID+'_1').css({'border-color':'#ff0000'});
					}
					// Next two lines are a special case to handle the first list element which was originally the last
					thumb = $('img:first', obj).attr('src');
					$('#thumb'+randID+'_'+numImages).css({'background-image':'url('+thumb+')'});
					$('#thumbs'+randID+' div.thumb:not(:first)').css({'opacity':'.65'}); // makes all thumbs 65% opaque except the first one
					$('#thumbs'+randID+' div.thumb').hover(function(){$(this).animate({'opacity':.99},150)},function(){if(curr!=this.id.split('_')[1]) $(this).animate({'opacity':.65},250)}); // add hover to thumbs

					// Assign click handler for the thumbnails. Normally the format $('.thumb') would work but since it's outside of our object (obj) it would get called multiple times
					$('#thumbs'+randID+' div').bind('click', thumbclick); // We use bind instead of just plain click so that we can repeatedly remove and reattach the handler
				
					if(!o.displayThumbnailNumbers) $('#thumbs'+randID+' div').text('');
					if(!o.displayThumbnailBackground) $('#thumbs'+randID+' div').css({'background-image':'none'});
				}

				function thumbclick(event)
				{
					target_num = this.id.split('_'); // we want target_num[1]
					if(curr != target_num[1])
					{
						$('#thumb'+randID+'_'+curr).css({'border-color':'#ccc'});
						$('#progress'+randID).stop().fadeOut();
						clearTimeout(clearInt);
						//alert(event.data.src+' '+this.id+' '+target_num[1]+' '+curr);
						$('#thumbs'+randID+' div').css({'cursor':'default'}).unbind('click'); // Unbind the thumbnail click event until the transition has ended
						autopilot = 0;
						setTimeout(function(){$('#play_btn'+randID).fadeIn(250);},o.transitionSpeed);
					}
					if(target_num[1] > curr)
					{
						diff = target_num[1] - curr;
						slideAction('next',diff);
					}
					if(target_num[1] < curr)
					{
						diff = curr - target_num[1];
						slideAction('prev', diff);
					}
				}

				function rightthumbclick(event)
				{					
					console.log($('li:eq(1)', obj).html());
				}

				function showtext(t)
				{					
					// the text will always be the text of the second list item (if it exists)
					//if(t != null && o.displayTextHolder)
					if(o.displayTextHolder)
					{
						$('#textholder'+randID).html(t).animate({marginBottom:'0px'},500); // Raise textholder
						showminmax();
					}
				}
				function showminmax()
				{
						if(!autopilot)
						{
							html = '<img style="position:absolute;top:2px;right:18px;display:none;cursor:pointer" src="/js/infiniteCarousel/images/down.png" title="Minimize" alt="minimize" id="min" /><img style="position:absolute;top:2px;right:18px;display:none;cursor:pointer" src="/js/infiniteCarousel/images/up.png" title="Maximize" alt="maximize" id="max" />';
							html += '<img style="position:absolute;top:2px;right:6px;display:none;cursor:pointer" src="/js/infiniteCarousel/images/close.png" title="Close" alt="close" id="close" />';
							$('#textholder'+randID).append(html);
							$('#min').fadeIn(250).click(function(){$('#textholder'+randID).animate({marginBottom:(-imgHeight*o.textholderHeight)-(correctTHHeight * 2)+24+'px'},500,function(){$("#min,#max").toggle();});});
							$('#max').click(function(){$('#textholder'+randID).animate({marginBottom:'0px'},500,function(){$("#min,#max").toggle();});});
							$('#close').fadeIn(250).click(function(){$('#textholder'+randID).animate({marginBottom:(-imgHeight*o.textholderHeight)-(correctTHHeight * 2)+'px'},500);});
						}
				}
				function borderpatrol(elem)
				{
					$('#thumbs'+randID+' div').css({'border-color':'#ccc'}).animate({opacity: 0.65},500);
					setTimeout(function(){elem.css({'border-color':'#ff0000'}).animate({'opacity': .99},500);},o.transitionSpeed);
				}

				
				//display thumbnails in right
				function slideThumnails() {
					if(o.displaySlidingThumbnails)
					{
						var rightThumbs = $("div#right-thumbs")
							, thumsimgHeight = $('ul li:first', rightThumbs).height()
						;
						
						$('ul li:first', rightThumbs).clone().insertAfter($('ul li:last', rightThumbs));
						$('ul', rightThumbs).animate({"margin-top":-thumsimgHeight},o.transitionSpeed,function(){							
							$('ul li:first', rightThumbs).remove();							
							$('ul', rightThumbs).css({"margin-top":'0'});
						}).css({"overflow":"hidden"});
					}
				}

				function slideAction(direction,dist)
				{
					// Fade left/right arrows out when transitioning
					$('#btn_rt'+randID).fadeOut(500);
					$('#btn_lt'+randID).fadeOut(500);
					
					// animate textholder out of frame
					$('#textholder'+randID).animate({marginBottom:(-imgHeight*o.textholderHeight)-(correctTHHeight * 2)+'px'},500);					

					//?? Fade out play/pause?
					$('#pause_btn'+randID).fadeOut(250);
					$('#play_btn'+randID).fadeOut(250);

					if(direction == "next")
					{
						if(curr==numImages) curr=0;
						if(dist>1)
						{
							if (o.displaySlidingbanner)
							{
								borderpatrol($('#thumb'+randID+'_'+(curr+dist)));
								$('li:lt(2)', obj).clone().insertAfter($('li:last', obj));
								$('ul', obj).animate({left:-imgWidth*(dist+1)},o.transitionSpeed,function(){
									$('li:lt(2)', obj).remove();
									for(j=1;j<=dist-2;j++)
									{
										$('li:first', obj).clone().insertAfter($('li:last', obj));
										$('li:first', obj).remove();
									}
									$('#btn_rt'+randID).fadeIn(500);
									$('#btn_lt'+randID).fadeIn(500);
									$('#play_btn'+randID).fadeIn(250);
									showtext($('li:eq(1) p', obj).html());
									$(this).css({'left':-imgWidth});
									curr = curr+dist;
									$('#thumbs'+randID+' div').bind('click', thumbclick).css({'cursor':'pointer'});
								});
							}
						}
						else
						{							
							borderpatrol($('#thumb'+randID+'_'+(curr+1)));
							slideThumnails();							
							
							if (o.displaySlidingbanner)
							{
								$('#thumbs'+randID+' div').css({'cursor':'default'}).unbind('click'); // Unbind the thumbnail click event until the transition has ended
								// Copy leftmost (first) li and insert it after the last li
								$('li:first', obj).clone().insertAfter($('li:last', obj));	
								// Update width and left position of ul and animate ul to the left
								/** Slide to left
								$('ul', obj).animate({left:-imgWidth*2},o.transitionSpeed,function(){
									$('li:first', obj).remove();
									$('ul', obj).css('left',-imgWidth+'px');
									$('#btn_rt'+randID).fadeIn(500);
									$('#btn_lt'+randID).fadeIn(500);
									if(autopilot) $('#pause_btn'+randID).fadeIn(250);
									showtext($('li:eq(1) p', obj).html());
									if(autopilot)
									{
										$('#progress'+randID).width(imgWidth).height(5);
										$('#progress'+randID).animate({'width':0},o.displayTime,function(){
											$('#pause_btn'+randID).fadeOut(50);
											setTimeout(function(){$('#pause_btn'+randID).fadeIn(250)},o.transitionSpeed)
										});
									}
									curr=curr+1;
									$('#thumbs'+randID+' div').bind('click', thumbclick).css({'cursor':'pointer'});
								});
								**/
								/*FadeIn and Fade Out*/												
								$(obj).css("background-image","url("+$('li:eq(2) img', obj).attr('src')+")");
								$('ul', obj).fadeOut(2000,function(){									
									$('li:first', obj).remove();
									//$('ul', obj).css('left',-imgWidth+'px');
									//$('#btn_rt'+randID).fadeIn(500);
									//$('#btn_lt'+randID).fadeIn(500);
									//if(autopilot) $('#pause_btn'+randID).fadeIn(250);
									//showtext($('li:eq(1) p', obj).html());
									if(autopilot)
									{
										$('#progress'+randID).width(imgWidth).height(5);
										$('#progress'+randID).animate({'width':0},o.displayTime,function(){
											$('#pause_btn'+randID).fadeOut(50);
											setTimeout(function(){$('#pause_btn'+randID).fadeIn(250)},o.transitionSpeed)
										});
									}
									curr=curr+1;
									$('#thumbs'+randID+' div').bind('click', thumbclick).css({'cursor':'pointer'});
								});
								$('ul', obj).fadeIn(2000,function(){});
							} else {
								$('ul', obj).fadeOut(2000,function(){									
									$("li.main-location-banner", obj).each(function(index, elem){
										console.log(index);
									});
								});
							}							
						}
					}

					if(direction == "prev")
					{
						if(dist>1)
						{
							if (o.displaySlidingbanner)
							{
								borderpatrol($('#thumb'+randID+'_'+(curr-dist)));
								$('li:gt('+(numImages-(dist+1))+')', obj).clone().insertBefore($('li:first', obj));
								$('ul', obj).css({'left':(-imgWidth*(dist+1))}).animate({left:-imgWidth},o.transitionSpeed,function(){
									$('li:gt('+(numImages-1)+')', obj).remove();
									$('#btn_rt'+randID).fadeIn(500);
									$('#btn_lt'+randID).fadeIn(500);
									$('#play_btn'+randID).fadeIn(250);
									showtext($('li:eq(1) p', obj).html());
									curr = curr - dist;
									$('#thumbs'+randID+' div').bind('click', thumbclick).css({'cursor':'pointer'});
								});
							} else {
							}							
						}
						else
						{
							if (o.displaySlidingbanner)
							{
								borderpatrol($('#thumb'+randID+'_'+(curr-1)));
								$('#thumbs'+randID+' div').css({'cursor':'default'}).unbind('click'); // Unbind the thumbnail click event until the transition has ended
								// Copy rightmost (last) li and insert it after the first li
								$('li:last', obj).clone().insertBefore($('li:first', obj));
								// Update width and left position of ul and animate ul to the right
								$('ul', obj)
									.css('left',-imgWidth*2+'px')
									.animate({left:-imgWidth},o.transitionSpeed,function(){
										$('li:last', obj).remove();
										$('#btn_rt'+randID).fadeIn(500);
										$('#btn_lt'+randID).fadeIn(500);
										if(autopilot) $('#pause_btn'+randID).fadeIn(250);
										showtext($('li:eq(1) p', obj).html());
										curr=curr-1;
										if(curr==0) curr=numImages;
										$('#thumbs'+randID+' div').bind('click', thumbclick).css({'cursor':'pointer'});
									});
							} else {
							}
						}
					}
				}

				//set clearInt
				var clearInt = setInterval(function(){slideAction('next');},o.displayTime+o.transitionSpeed);
				//Start progress bar
				$('#progress'+randID).animate({'width':0},o.displayTime+o.transitionSpeed,function(){
					//
					//$('#pause_btn'+randID).fadeOut(100);
					//setTimeout(function(){$('#pause_btn'+randID).fadeIn(250)},o.transitionSpeed)
				});
  		});
    	}
	});
})(jQuery);