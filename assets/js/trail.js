var asset_host = document.location.hostname;
var protocol = (("https:" == document.location.protocol) ? "https://" : "http://");
window.account_button = null;

function submitForm(formid){
	jQuery(formid).submit();
}

/* FLOATING IMAGE */

/*
Simple Image Trail script- By JavaScriptKit.com
Visit http://www.javascriptkit.com for this script and more
This notice must stay intact
*/

var offsetfrommouse=[5,5]; //image x,y offsets from cursor position in pixels. Enter 0,0 for no offset
var displayduration=0; //duration in seconds image should remain visible. 0 for always.
var currentimageheight = 270;	// maximum image size.

if (document.getElementById || document.all){
	/*
	document.write('<div id="trailimageid">');
	document.write('</div>');
	*/
}

function gettrailobj(){
	if (document.getElementById && document.getElementById("trailimageid"))
		return document.getElementById("trailimageid").style;
	else if (document.all)
		return document.all.trailimagid.style;
}

function gettrailobjnostyle(){
	if (document.getElementById && document.getElementById("trailimageid"))
		return document.getElementById("trailimageid");
	else if (document.all)
		return document.all.trailimagid;
}


function truebody(){
	return (!window.opera && document.compatMode && document.compatMode!="BackCompat")? document.documentElement : document.body;
}

function showtrail1(){
	
}
var trailTimer = null;
if(window.addEventListener)
    document.addEventListener('DOMMouseScroll', hidetrail, false);
document.onmousewheel = hidetrail;
function showtrail(imagename,type,title,width,height,catid,copyright,description){
	if(trailTimer != null) clearTimeout(trailTimer);
	if(document.getElementById("trailimageid"))
		return;
	var div = document.createElement('div');
	var body = document.getElementsByTagName('body')[0];
	div.setAttribute('id', 'trailimageid');
	div.style.display='none';
	body.appendChild(div);
	trailTimer = window.setTimeout(function(){ div.style.display='block'; },500);
	document.onmousemove=followmouse;

	var newHTML = '';
	var temp = '';
	if(type=='photo'){
		temp += '<img src="' + imagename + '" width="'+width+'px" height="'+height+'px" />';
	}
	if(type=='video') {
		
		var browser=navigator.appName;
		var b_version=navigator.appVersion;
		var version=parseFloat(b_version);
		var extra1 = "";
		var extra2 = "";
		if ((browser!="Microsoft Internet Explorer") && (version<=4)){
			extra1 = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,29,0" width="'+width+'" height="'+height+'">';
			extra2 = '</object>';
		}
		
		temp += extra1+'<embed';
		temp += ' type="application/x-shockwave-flash"';
		temp += ' src="http://www.videocopilot.net/assets/public/flash/player-licensed.swf"';
		temp += ' width="'+width+'"';
		temp += ' height="'+height+'"';
		temp += ' allowscriptaccess="sameDomain"';
		temp += ' allowfullscreen="false"';
		temp += ' flashvars=autostart=true&repeat=always&height='+height+'&width='+width+'&file='+imagename+'&controlbar=none&usefullscreen=false"';
		temp += ' />'+extra2;
	}

	newHTML += '<div align="left" style="background:#fff;margin:0px 0px 0px 5px;border:solid 1px #333;width:'+width+'px;height:'+height+'" class="tutorial-video-overlay">';
	newHTML += temp;
	newHTML += '</div>';

	gettrailobjnostyle().innerHTML = newHTML;

	gettrailobj().visibility="visible";
}

function hidetrail(){
	elem=document.getElementById("trailimageid");
	elem.style.display = "none";
	elem.parentNode.removeChild(elem);
	document.onmousemove="";
}


function followmouse(e){

	var xcoord=offsetfrommouse[0];
	var ycoord=offsetfrommouse[1];

	if (typeof e != "undefined"){
		xcoord+=e.pageX;
		ycoord+=e.pageY;

	} else if (typeof window.event != "undefined"){
		xcoord+=truebody().scrollLeft+event.clientX;
		ycoord+=truebody().scrollTop+event.clientY;
	}

	var docwidth=document.all? truebody().scrollLeft+truebody().clientWidth : pageXOffset+window.innerWidth-15;
	var docheight=document.all? Math.max(truebody().scrollHeight, truebody().clientHeight) : Math.max(document.body.offsetHeight, window.innerHeight);

	gettrailobj().left=xcoord-150+"px";
	gettrailobj().top=ycoord+5+"px";

}

/* Functions */
function search(){
	search_query = $("#search_field").val();
	window.location="http://www.videocopilot.net/search/q/"+search_query+"/";
}

function clearSearch(value){
	var el = $("#q");
	if(el.val() == ''){
		el.val(value);
		el.css("color","#eee");
	}else if(el.val() == value){
		el.val('');
		el.css("color","#fff");
	}
}

function strstr (haystack, needle, bool) {
    var pos = 0;

    haystack += '';
    pos = haystack.indexOf( needle );
    if (pos == -1) {
        return false;
    } else{
        if (bool){
            return haystack.substr( 0, pos );
        } else{
            return haystack.slice( pos );
        }
    }
}

/* Start jQuery */
jQuery(function($){
	$.ajaxSetup({ cache: false });

	if (navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) {
		$(window).load(function(){
			$('input:-webkit-autofill').each(function(){
				var text = $(this).val();
				var name = $(this).attr('name');
				$(this).after(this.outerHTML).remove();
				$('input[name=' + name + ']').val(text);
			});
		});
	}

	var run = null;

	/* Image Preload */
	var cache = [];
	$.preLoadImages = function() {
		var args_len = arguments.length;
		for (var i = args_len; i--;) {
			var cacheImage = document.createElement('img');
			cacheImage.src = arguments[i];
			cache.push(cacheImage);
		}
	};
	
	var image_path = protocol+asset_host+"/assets/public/images/v5/template/buttons/";
	$.preLoadImages(
		image_path+'products_over.jpg',
		image_path+'proshop_over.jpg',
		image_path+'support_over.jpg',
		image_path+'blog_over.jpg',
		image_path+'forum_over.jpg',
		image_path+'tutorials_over.jpg',
		image_path+'contact_over.jpg',
		protocol+asset_host+'/assets/public/images/v5/template/large_navigation/3d_models_over.jpg',
		protocol+asset_host+'/assets/public/images/v5/template/large_navigation/plugins_over.jpg',
		protocol+asset_host+'/assets/public/images/v5/template/large_navigation/stock_files_over.jpg',
		protocol+asset_host+'/assets/public/images/v5/template/large_navigation/more_over.jpg',
		protocol+asset_host+'/assets/public/images/v5/template/large_navigation/training_over.jpg',
		protocol+asset_host+'/assets/public/images/template/mainbg.jpg',
		protocol+asset_host+'/assets/public/images/blog/sidebar/free_tutorials_item_bg_over.jpg',
		protocol+asset_host+'/assets/public/images/vc_cool/tutorials/list_item_bg.jpg'
	);
	var large_navigation_old = null;
	$(".large_navigation").hover(
		function () {
			large_navigation_old = $(this).attr("src");
			$(this).attr("src",protocol+asset_host+"/assets/public/images/v5/template/large_navigation/"+$(this).attr("name")+"_over.jpg");
		},
		function () {
			$(this).attr("src",large_navigation_old);
			large_navigation_old = null;
		}
	);
	
	$('#products_button').mouseover(function(){ $(this).attr("src",image_path+'products_over.jpg'); });
	$('#products_button').mouseout(function(){ $(this).attr("src", image_path+'products.jpg'); });
	$('#proshop_button').mouseover(function(){ $(this).attr("src", image_path+'proshop_over.jpg'); });
	$('#proshop_button').mouseout(function(){ $(this).attr("src", image_path+'proshop.jpg'); });
	$('#support_button').mouseover(function(){ $(this).attr("src", image_path+'support_over.jpg'); });
	$('#support_button').mouseout(function(){ $(this).attr("src", image_path+'support.jpg'); });
	$('#blog_button').mouseover(function(){ $(this).attr("src", image_path+'blog_over.jpg'); });
	$('#blog_button').mouseout(function(){ $(this).attr("src", image_path+'blog.jpg'); });
	$('#forum_button').mouseover(function(){ $(this).attr("src", image_path+'forum_over.jpg'); });
	$('#forum_button').mouseout(function(){ $(this).attr("src", image_path+'forum.jpg'); });
	$('#tutorials_button').mouseover(function(){ $(this).attr("src", image_path+'tutorials_over.jpg'); });
	$('#tutorials_button').mouseout(function(){ $(this).attr("src", image_path+'tutorials.jpg'); });
	$('#contact_button').mouseover(function(){ $(this).attr("src", image_path+'contact_over.jpg'); });
	$('#contact_button').mouseout(function(){ $(this).attr("src", image_path+'contact.jpg'); });

	/* CART */
	$.resetSelects = function(){
        $("select").each(function(){
			if(!$(this).hasClass("yaselect-select")){
				$(this).yaselect();
				$(this).parents('.yaselect-anchor').each(function(){
					$(this).width($('select', this).width()+20);
				});
			}
		});
    }
	$(".video_demo").click(function (e) {
		e.preventDefault();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var id = $(this).attr("value");
		var file = $(this).attr("title");
		var tPosX = $(this).position().left - 350;
		var tPosY = $(this).position().top + 15;
		$("#video_demo_box").css({top:tPosY,left:tPosX});
		$('#mask').css({width:maskWidth,height:maskHeight});
		$('#mask').fadeTo(200,0.2);
		$("#video_demo_box").fadeIn(200,function(){
			$(".close-button").click(function (e) {
				e.preventDefault();
				$('#mask').fadeOut(200);
				$("#video_demo_box").fadeOut(200);
			});
			$('#mask').click(function () {
				$(this).fadeOut(200);
				$("#video_demo_box").fadeOut(200);
			});
		});
	});

	var lastPurchaseButtonClicked = null;
	$(".item_overlay").click(function (e) {
		e.preventDefault();
		lastPurchaseButtonClicked = $(this);
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var id = $(this).attr("value");
		var tPosX = $(this).offset().left - 125;
		var tPosY = $(this).offset().top - 185;
		//if($(this).hasClass("large-bundle")){
			tPosX = e.pageX-($("#floating_box").width()/2);
			tPosY = e.pageY-$("#floating_box").height()-15;
		//}
		$("#floating_box").css({top:tPosY,left:tPosX,zIndex:999999999999});
		$('#mask').css({width:maskWidth,height:maskHeight});
		$("#popup_data").html("<div style='padding-top:25px' align='center'>Loading Data...</div>");
		$(".popup-title").html("Quick Cart");
		$('#mask').fadeTo(200,0.2);
		$("#floating_box").fadeIn(200,function(){
			$(".close-button").click(function (e) {
				e.preventDefault();
				$('#mask').fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
			$('#mask').click(function () {
				$(this).fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
		});
		$.post(protocol+window.location.hostname+"/ajax/get_product_popup/", { id: $(this).attr("value"), uri_string:document.location.pathname }, function(data){
			$("#popup_data").fadeOut(200,function(){
				$("#popup_data").html(data["view"]);
				$("#popup_data").fadeIn(200);
				$(".keep-shopping-button").click(function(e){
					e.preventDefault();
					$('#mask').fadeOut(200);
					$("#floating_box").fadeOut(200);
					$("body").css("overflow", "auto");
				});
			});
		},'json');
		$.post(protocol+window.location.hostname+"/ajax/shopping_cart/", { id: $(this).attr("value"), uri_string:document.location.pathname }, function(data){
			if(data["update_totals"] == 1)
			{
				$("#header_cart_data").fadeIn(200);
				if(data["cart_items"]) $("#header_cart_items").html(data["cart_items"]);
				if(data["cart_total"]) $("#header_cart_total").html(data["cart_total"]);
			}
		},'json');
	});

	$(".item_overlay_motionpulse").click(function (e) {
		e.preventDefault();
		lastPurchaseButtonClicked = $(this);
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var id = $(this).attr("value");
		var tPosX = $(this).offset().left - 231;
		var tPosY = $(this).offset().top + 31;
		
		$("#floating_box").css({top:tPosY,left:tPosX,zIndex:999999999999});
		$('#mask').css({width:maskWidth,height:maskHeight});
		$("#popup_data").html("<div style='padding-top:25px' align='center'>Loading Data...</div>");
		$(".popup-title").html("Quick Cart");
		$('#mask').fadeTo(200,0.2);
		$("body").css("overflow", "hidden");
		$("#floating_box").fadeIn(200,function(){
			$(".close-button").click(function (e) {
				e.preventDefault();
				$('#mask').fadeOut(200);
				$("#floating_box").fadeOut(200);
				$("body").css("overflow", "auto");
			});
			$('#mask').click(function () {
				$(this).fadeOut(200);
				$("#floating_box").fadeOut(200);
				$("body").css("overflow", "auto");
			});
		});
		$.post(protocol+window.location.hostname+"/ajax/get_product_popup/", { id: $(this).attr("value"), uri_string:document.location.pathname }, function(data){
			$("#popup_data").fadeOut(200,function(){
				$("#popup_data").html(data["view"]);
				$("#popup_data").fadeIn(200);
				$(".keep-shopping-button").click(function(e){
					e.preventDefault();
					$('#mask').fadeOut(200);
					$("#floating_box").fadeOut(200);
					$("body").css("overflow", "auto");
				});
			});
		},'json');
		$.post(protocol+window.location.hostname+"/ajax/shopping_cart/", { id: $(this).attr("value"), uri_string:document.location.pathname }, function(data){
			if(data["update_totals"] == 1)
			{
				$("#header_cart_data").fadeIn(200);
				if(data["cart_items"]) $("#header_cart_items").html(data["cart_items"]);
				if(data["cart_total"]) $("#header_cart_total").html(data["cart_total"]);
			}
		},'json');
	});

	$(".gear_overlay").click(function (e) {
		e.preventDefault();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var id = $(this).attr("value");
		var tPosX = $(this).position().left - 125;
		var tPosY = $(this).position().top - 185;
		$("#floating_box").css({top:tPosY,left:tPosX});
		$('#mask').css({width:maskWidth,height:maskHeight});
		$("#popup_data").html("<div style='padding-top:25px' align='center'>Loading Data...</div>");
		$(".popup-title").html("Quick Cart");
		$('#mask').fadeTo(200,0.2);
		$("#floating_box").fadeIn(200,function(){
			$(".close-button").click(function (e) {
				e.preventDefault();
				$('#mask').fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
			$('#mask').click(function () {
				$(this).fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
		});
		$.post(protocol+window.location.hostname+"/ajax/purchase_gear/", { id: $(this).attr("value"),size:$("#shirt_size").attr("value") }, function(data){
			$("#popup_data").fadeOut(200,function(){
				$("#popup_data").html(data);
				$("#popup_data").fadeIn(200);
				$(".keep-shopping-button").click(function(e){
					e.preventDefault();
					$('#mask').fadeOut(200);
					$("#floating_box").fadeOut(200);
				});
				$(".checkout-button").click(function (e){
					e.preventDefault();
					window.location='https://order.store.yahoo.net/cgi-bin/wg-order?yhst-99063568031385';
				});
				$("#the_purchase_form").submit();
			});
		});
	});

	$(".item_overlay_proshop").click(function (e) {
		e.preventDefault();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var id = $(this).attr("value");
		var tPosX = $(this).position().left - 125;
		var tPosY = $(this).position().top - 185;
		$("#floating_box").css({top:tPosY,left:tPosX});
		$('#mask').css({width:maskWidth,height:maskHeight});
		$("#popup_data").html("<div style='padding-top:25px' align='center'>Loading Data...</div>");
		$(".popup-title").html("Quick Cart");
		$('#mask').fadeTo(200,0.2);
		$("#floating_box").fadeIn(200,function(){
			$(".close-button").click(function (e) {
				e.preventDefault();
				$('#mask').fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
			$('#mask').click(function () {
				$(this).fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
		});
		$.post(protocol+window.location.hostname+"/ajax/proshop_shopping_cart/", { id: $(this).attr("value") }, function(data){
			$("#popup_data").fadeOut(200,function(){
				$("#popup_data").html(data);
				$("#popup_data").fadeIn(200);
				$(".keep-shopping-button").click(function(e){
					e.preventDefault();
					$('#mask').fadeOut(200);
					$("#floating_box").fadeOut(200);
				});
				$(".checkout-button").click(function (e){
					e.preventDefault();
					window.location='https://order.store.yahoo.net/cgi-bin/wg-order?yhst-99063568031385';
				});
			});
		});
	});
	$(".templates_item_overlay").click(function (e) {
		e.preventDefault();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var id = $(this).attr("value");
		var tPosX = $(this).position().left - 125;
		var tPosY = $(this).position().top - 185;
		$("#floating_box").css({top:tPosY,left:tPosX});
		$('#mask').css({width:maskWidth,height:maskHeight});
		$("#popup_data").html("<div style='padding-top:25px' align='center'>Loading Data...</div>");
		$(".popup-title").html("Quick Cart");
		$('#mask').fadeTo(200,0.2);
		$("#floating_box").fadeIn(200,function(){
			$(".close-button").click(function (e) {
				e.preventDefault();
				$('#mask').fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
			$('#mask').click(function () {
				$(this).fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
		});
		$.post(protocol+window.location.hostname+"/ajax/templates_shopping_cart/", { id: $(this).attr("value") }, function(data){
			$("#popup_data").fadeOut(200,function(){
				$("#popup_data").html(data);
				$("#popup_data").fadeIn(200);
				$(".keep-shopping-button").click(function(e){
					e.preventDefault();
					$('#mask').fadeOut(200);
					$("#floating_box").fadeOut(200);
				});
				$(".checkout-button").click(function (e){
					e.preventDefault();
					window.location='https://order.store.yahoo.net/cgi-bin/wg-order?yhst-99063568031385';
				});
			});
		});
	});

	$(".bundle_item_overlay").click(function (e) {
		e.preventDefault();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var id = $(this).attr("value");
		var tPosX = $(this).position().left - 125;
		var tPosY = $(this).position().top - 185;
		$("#floating_box").css({top:tPosY,left:tPosX});
		$('#mask').css({width:maskWidth,height:maskHeight});
		$("#popup_data").html("<div style='padding-top:25px' align='center'>Loading Data...</div>");
		$(".popup-title").html("Quick Cart");
		$('#mask').fadeTo(200,0.2);
		$("#floating_box").fadeIn(200,function(){
			$(".close-button").click(function (e) {
				e.preventDefault();
				$('#mask').fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
			$('#mask').click(function () {
				$(this).fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
		});
		$.post(protocol+window.location.hostname+"/ajax/bundle_shopping_cart/", { id: $(this).attr("value") }, function(data){
			$("#popup_data").fadeOut(200,function(){
				$("#popup_data").html(data);
				$("#popup_data").fadeIn(200);
				$(".keep-shopping-button").click(function(e){
					e.preventDefault();
					$('#mask').fadeOut(200);
					$("#floating_box").fadeOut(200);
				});
				$(".checkout-button").click(function (e){
					e.preventDefault();
					window.location='https://order.store.yahoo.net/cgi-bin/wg-order?yhst-99063568031385';
				});
			});
		});
	});

	$(".product-medium").click(function(e){
		e.preventDefault();
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
		var id = $(this).attr("value");
		var tPosX = $(this).position().left - 125;
		var tPosY = $(this).position().top - 185;
		$("#floating_box").css({top:tPosY,left:tPosX});
		$('#mask').css({width:maskWidth,height:maskHeight});
		$("#popup_data").html("<div style='padding-top:25px' align='center'>Loading Data...</div>");
		$(".popup-title").html(id);
		$('#mask').fadeTo(200,0.2);
		$("#floating_box").fadeIn(200,function(){
			$(".close-button").click(function (e) {
				e.preventDefault();
				$('#mask').fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
			$('#mask').click(function () {
				$(this).fadeOut(200);
				$("#floating_box").fadeOut(200);
			});
		});
		$.post(protocol+window.location.hostname+"/ajax/product_medium/", { id: $(this).attr("value") }, function(data){
			$("#popup_data").fadeOut(200,function(){
				$("#popup_data").html(data);
				$("#popup_data").fadeIn(200);
				$(".close-popup").click(function(e){
					e.preventDefault();
					$('#mask').fadeOut(200);
					$("#floating_box").fadeOut(200);
				});
			});
		});
	});

	/* TUTORIAL COMMENTS */
	$('#dialog').dialog({
		autoOpen: false,
		width: 600,
		modal: true,
		overlay: {
			backgroundColor: '#000',
			opacity: 0.2
		},
		buttons: {
			"Submit Comment": function() {
				jQuery(this).dialog("close");
				submitRequest();
			},
			"Take Me to the Forum": function() {
				jQuery(this).dialog("close");
				window.location = "http://www.videocopilot.net/forum/viewforum.php?f=15";
			}
		}
	});
	
	$('#dialog1').dialog({
		autoOpen: false,
		width: 400,
		modal: true,
		overlay: {
			backgroundColor: '#000',
			opacity: 0.2
		},
		buttons: {
			"OK": function() {
				jQuery(this).dialog("close");
			}
		}
	});

	$(".comment-reply-link").click(function(e){
		e.preventDefault();
		$(".comment-reply-link").html("reply to this comment");
		$(".comment-reply-form:visible").slideUp();
		if($("#comment_reply_form_"+$(this).attr("value")).is(":hidden")){
			$("#comment_reply_form_"+$(this).attr("value")).slideDown();
			$("#comment_reply_link_"+$(this).attr("value")).html("cancel reply");
			$("#commenters_name_"+$(this).attr("value")).focus();
		}else{
			$("#comment_reply_link_"+$(this).attr("value")).html("reply to this comment");
		}
		$(".comment-comment").val("");
		$(".comment-name").val("");
		$(".comment-email").val("");
	});
	$(".comment-reply-submit").click(function(e){
		e.preventDefault();
		var name = $("#commenters_name_"+$(this).attr("name")).val();
		var email = $("#commenters_email_"+$(this).attr("name")).val();
		var comment = $("#commenters_comment_"+$(this).attr("name")).val();
		var id = $(this).attr("name");
		var tutorial_id = $(this).attr("title");
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!name){
			alert("You must enter your name");
			$('#commenters_name_'+$(this).attr("name")).focus();
			return false;
		}
		if(!email){
			alert("You must enter your email");
			$('#commenters_email_'+$(this).attr("name")).focus();
			return false;
		}
		
		if (!filter.test(email)) {
			alert('Please provide a valid email address');
			$('#commenters_email_'+$(this).attr("name")).focus();
			return false;
		}
		
		if(!comment){
			alert("You must enter a comment");
			$('#commenters_comment_'+$(this).attr("name")).focus();
			return false;
		}
		
		/*
		if(strstr(comment,"?") || strstr(comment,"question") || strstr(comment,"Question") || strstr(comment,"QUESTION")){
			$('#dialog').dialog('open');
			return false;
		}else{*/
			$(this).attr("disabled", "true");
			$(this).attr("value","Please Wait");
			$.post(protocol+window.location.hostname+"/tutorials/ajax/reply_comment/", { id: id,name: name,email: email,comment: comment,tutorial_id: tutorial_id }, function(data){
				$("#submit_comment_"+id).removeAttr("disabled");
				$("#submit_comment_"+id).attr("value", "Submit Reply");
				$("#comment_reply_link_"+id).html("reply to this comment");
				$("#comment_reply_form_"+id).slideUp();
				$("#comment_reply_form_"+id).after(data).slideDown();
			});
		/*}*/
	});
	$(".comment-submit-button").click(function(e){
		e.preventDefault();
		var commenters_name = $('#commenters_name').val();
		var commenters_email = $('#commenters_email').val();
		var commenters_comment = $('#commenters_comment').val();
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

		if(!commenters_name || commenters_name == "Name"){
			alert("Name is required");
			$('#commenters_name').focus();
			return false;
		}
		if(!commenters_email || commenters_email == "Email"){
			alert("Email is required");
			$('#commenters_email').focus();
			return false;
		}
		
		if (!filter.test(commenters_email)) {
			alert('Please provide a valid email address');
			$('#commenters_email').focus();
			return false;
		}
		
		if(!commenters_comment){
			alert("You must enter a comment");
			$('#commenters_comment').focus();
			return false;
		}
		
		if(strstr(commenters_comment,"?") || strstr(commenters_comment,"question") || strstr(commenters_comment,"Question") || strstr(commenters_comment,"QUESTION")){
			$('#dialog').dialog('open');
			return false;
		}else{
			$("#submit_comment").attr("disabled","true");
			$("#submit_comment").val("Please Wait...");
			$.post(protocol+window.location.hostname+"/tutorials/ajax/comment/", { commenters_comment: commenters_comment,commenters_email:commenters_email,commenters_name:commenters_name,tutorial_id:$(this).attr("title") },function(data){
				$('#comments_container').prepend(data).slideDown();
				$.scrollTo($("#new_comment"),500);
				$("#submit_comment").val("Comment Successfully Submitted");
				$("#commenters_name").attr("disabled","true");
				$("#commenters_email").attr("disabled","true");
				$("#commenters_comment").attr("disabled","true");
				
				$("#commenters_name").val("");
				$("#commenters_email").val("");
				$("#commenters_comment").val("");
				setTimeout(function(){$('#dialog1').dialog('open');},600);
			});
		}
	});
	$(".leave-comment").click(function(e){
		e.preventDefault();
		$.scrollTo($(".leave-a-comment"),500,function(){
			$("#commenters_name").focus();
		});
	});
	$(".view_all_comments").click(function(e){
		e.preventDefault();
		var id = $(this).attr("alt");
		$(".view_all_comments_link").html("Retrieving remaining comments. Please Wait.");
		$.post(protocol+window.location.hostname+"/tutorials/ajax/view_all_comments/", { id:$(this).attr("alt") },function(data){
			$("#comments_show_more").fadeOut(200,function(){
				$("#comments_displayed").html(function(){
					$(this).html(data);
					$(".comment-reply-link").click(function(e){
						e.preventDefault();
						$(".comment-reply-link").html("reply to this comment");
						$(".comment-reply-form:visible").slideUp();
						if($("#comment_reply_form_"+$(this).attr("value")).is(":hidden")){
							$("#comment_reply_form_"+$(this).attr("value")).slideDown();
							$("#comment_reply_link_"+$(this).attr("value")).html("cancel reply");
							$("#commenters_name_"+$(this).attr("value")).focus();
						}else{
							$("#comment_reply_link_"+$(this).attr("value")).html("reply to this comment");
						}
						$(".comment-comment").val("");
						$(".comment-name").val("");
						$(".comment-email").val("");
					});
					$(".comment-reply-submit").click(function(e){
						e.preventDefault();
						var name = $("#commenters_name_"+$(this).attr("name")).val();
						var email = $("#commenters_email_"+$(this).attr("name")).val();
						var comment = $("#commenters_comment_"+$(this).attr("name")).val();
						var id = $(this).attr("name");
						var tutorial_id = $(this).attr("title");
						var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
						if(!name){
							alert("You must enter your name");
							$('#commenters_name_'+$(this).attr("name")).focus();
							return false;
						}
						if(!email){
							alert("You must enter your email");
							$('#commenters_email_'+$(this).attr("name")).focus();
							return false;
						}

						if (!filter.test(email)) {
							alert('Please provide a valid email address');
							$('#commenters_email_'+$(this).attr("name")).focus();
							return false;
						}

						if(!comment){
							alert("You must enter a comment");
							$('#commenters_comment_'+$(this).attr("name")).focus();
							return false;
						}

						/*
						if(strstr(comment,"?") || strstr(comment,"question") || strstr(comment,"Question") || strstr(comment,"QUESTION")){
							$('#dialog').dialog('open');
							return false;
						}else{*/
							$(this).attr("disabled", "true");
							$(this).attr("value","Please Wait");
							$.post(protocol+window.location.hostname+"/ajax/reply_comment/", { id: id,name: name,email: email,comment: comment,tutorial_id: tutorial_id }, function(data){
								$("#submit_comment_"+id).removeAttr("disabled");
								$("#submit_comment_"+id).attr("value", "Submit Reply");
								$("#comment_reply_link_"+id).html("reply to this comment");
								$("#comment_reply_form_"+id).slideUp();
								$("#comment_reply_form_"+id).after(data).slideDown();
							});
						/*}*/
					});
				});
			});
		});
	});

	$(".tutorial-next-button").click(function(e){
		e.preventDefault();
		$(".popular-tutorial-image").removeAttr("onmouseover");
		$(".tutorials1").animate({left:"-860"},400);
	});
	$(".tutorial-prev-button").click(function(e){
		e.preventDefault();
		$(".tutorials1").animate({left:"0"},400);
	});
	$(".vfx-tab").click(function(e){
		e.preventDefault();
		$(".tutorials1").animate({top:"-154"},400);
		$(".all-tab").removeClass("popular_tutorial_tab_on").addClass("popular_tutorial_tab_off").children().css("padding-top","4px");
		$(".graphics-tab").removeClass("popular_tutorial_tab_on").addClass("popular_tutorial_tab_off").children().css("padding-top","4px");
		$(".vfx-tab").removeClass("popular_tutorial_tab_off").addClass("popular_tutorial_tab_on").children().css("padding-top","7px");
	});
	$(".graphics-tab").click(function(e){
		e.preventDefault();
		$(".tutorials1").animate({top:"-308"},400);
		$(".all-tab").removeClass("popular_tutorial_tab_on").addClass("popular_tutorial_tab_off").children().css("padding-top","4px");
		$(".graphics-tab").removeClass("popular_tutorial_tab_off").addClass("popular_tutorial_tab_on").children().css("padding-top","7px");
		$(".vfx-tab").removeClass("popular_tutorial_tab_on").addClass("popular_tutorial_tab_off").children().css("padding-top","4px");
	});
	$(".all-tab").click(function(e){
		e.preventDefault();
		$(".tutorials1").animate({top:"0"},400);
		$(".all-tab").removeClass("popular_tutorial_tab_off").addClass("popular_tutorial_tab_on").children().css("padding-top","7px");
		$(".graphics-tab").removeClass("popular_tutorial_tab_on").addClass("popular_tutorial_tab_off").children().css("padding-top","4px");
		$(".vfx-tab").removeClass("popular_tutorial_tab_on").addClass("popular_tutorial_tab_off").children().css("padding-top","4px");
	});
	$(".more-tab").click(function(e){
		e.preventDefault();
		var type;
		if($(".all-tab").hasClass("popular_tutorial_tab_on")){
			type = "all";
		}else if($(".graphics-tab").hasClass("popular_tutorial_tab_on")){
			type = "graphics";
		}else{
			type = "vfx";
		}
		$.post(protocol+window.location.hostname+"/tutorials/ajax/more_popular_tutorials/", { id:"show_more",type:type,tut_id:$(this).attr("value") },function(data){
			$("."+type+"-tutorials").fadeOut(200,function(){
				$("."+type+"-tutorials").html(data);
				$("."+type+"-tutorials").fadeIn(200);
			});
		});
	});

	/* BLOG COMMENTS */
	$(".blog-comment-reply-link").click(function(e){
		e.preventDefault();
		$(".blog-comment-reply-link").html("reply to this comment");
		$(".blog-comment-reply-form:visible").slideUp();
		if($("#blog_comment_reply_form_"+$(this).attr("value")).is(":hidden")){
			$("#blog_comment_reply_form_"+$(this).attr("value")).slideDown();
			$("#blog_comment_reply_link_"+$(this).attr("value")).html("cancel reply");
			$("#blog_commenters_name_"+$(this).attr("value")).focus();
		}else{
			$("#blog_comment_reply_link_"+$(this).attr("value")).html("reply to this comment");
		}
		var user_id = $("#blog_commenters_user_id_"+$(this).attr("value")).val();
		if(!user_id){
			$(".blog-comment-comment").val("");
			$(".blog-comment-name").val("");
			$(".blog-comment-email").val("");
		}
	});
	$(".blog-comment-reply-submit").click(function(e){
		e.preventDefault();
		var name = $("#blog_commenters_name_"+$(this).attr("name")).val();
		var email = $("#blog_commenters_email_"+$(this).attr("name")).val();
		var website = $("#blog_commenters_website_"+$(this).attr("name")).val();
		var comment = $("#blog_commenters_comment_"+$(this).attr("name")).val();
		var user_id = $("#blog_commenters_user_id_"+$(this).attr("name")).val();
		var id = $(this).attr("name");
		var tutorial_id = $(this).attr("title");
		var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
		if(!name){
			alert("You must enter your name");
			$('#blog_commenters_name_'+$(this).attr("name")).focus();
			return false;
		}
		if(!email){
			alert("You must enter your email");
			$('#blog_commenters_email_'+$(this).attr("name")).focus();
			return false;
		}
		
		if (!filter.test(email)) {
			alert('Please provide a valid email address');
			$('#blog_commenters_email_'+$(this).attr("name")).focus();
			return false;
		}
		
		if(!comment){
			alert("You must enter a comment");
			$('#blog_commenters_comment_'+$(this).attr("name")).focus();
			return false;
		}
		
		$(this).attr("disabled", "true");
		$(this).attr("value","Please Wait");
		$.post(protocol+window.location.hostname+"/tutorials/ajax/blog_reply_comment/", { user_id:user_id,id: id,name: name,email: email,comment: comment,website:website,tutorial_id: tutorial_id }, function(data){
			$("#blog_submit_comment_"+id).removeAttr("disabled");
			$("#blog_submit_comment_"+id).attr("value", "Submit Reply");
			$("#blog_comment_reply_link_"+id).html("reply to this comment");
			$("#blog_comment_reply_form_"+id).slideUp();
			$("#blog_comment_reply_end_"+id).before(data).slideDown();
		});
	});

	/* PRODUCTS */
	$(".view-all-tab").click(function(e){
		e.preventDefault();
		$("#category_products").fadeOut(200,function(){
			$("#all_products").fadeIn(200);
			$(".view-all-tab").removeClass("products_tab_off").addClass("products_tab_on").children().css("padding-top","7px");
			$(".categories-tab").removeClass("products_tab_on").addClass("products_tab_off").children().css("padding-top","4px");
		});
		
	});
	$(".categories-tab").click(function(e){
		e.preventDefault();
		$("#all_products").fadeOut(200,function(){
			$("#category_products").fadeIn(200);
			$(".view-all-tab").removeClass("products_tab_on").addClass("products_tab_off").children().css("padding-top","4px");
			$(".categories-tab").removeClass("products_tab_off").addClass("products_tab_on").children().css("padding-top","7px");
		});
		
	});
	$(".products-view-all-tab").click(function(e){
		e.preventDefault();
		//$(".subnav-indicator").stop().animate({opacity:0,width:0,left:csb.position().left+csb.width()-10},200);
		$(".subnav-button").removeClass("subnav-button-over subnav-button-active");
		$(this).addClass("subnav-button-active");
		$("#category_products").fadeOut(200,function(){
			$("#all_products").fadeIn(200);
		});
		
	});
	$(".products-categories-tab").click(function(e){
		e.preventDefault();
		//$(".subnav-indicator").stop().animate({opacity:0,width:0,left:csb.position().left+csb.width()-10},200);
		$(".subnav-button").removeClass("subnav-button-over subnav-button-active");
		$(this).addClass("subnav-button-active");
		$("#all_products").fadeOut(200,function(){
			$("#category_products").fadeIn(200);
		});
	});
	//var csb;
	$(".subnav-button").hover(
		function(){
			if(!$(this).hasClass("subnav-button-active")){
				$(this).addClass("subnav-button-over");
				//csb = $(this);
				//if($(".subnav-indicator").css("opacity") == 0) $(".subnav-indicator").css({left:($(this).offset().left+21)+($(this).width()/2),width:0});
				//$(".subnav-indicator").stop().animate({opacity:1,width:$(this).width()+1,left:$(this).offset().left+21},200);
			}else{
				//$(".subnav-indicator").stop().animate({opacity:0,width:0,left:csb.offset().left+csb.width()},200);
			}
		},
		function(){
			$(this).removeClass("subnav-button-over");
		}
	);
	$(".subnav-container").hover(
		function(){

		},
		function(){
			//(".subnav-indicator").stop().animate({opacity:0,width:0,left:csb.offset().left+csb.width()},200);
		}
	);

	$(document).ready(function() {
		//rotation speed and timer
		var speed = 5000;
		var value = "opticalflares";
		var oldvalue = "opticalflares";
		run = setInterval(function(){ $('.featured_products_thumb').click(); }, speed);
		var paused = false;
		var purchase_id = 37;
		var url = "opticalflares";
		var trans = false;
		var medium = "Download Only";
		var price = "$124.95 USD";
		
		$(".featured_products_thumb").bind("mouseover click",function(e){
			e.stopPropagation();
			e.preventDefault();
			if(paused){
				value = $(this).attr("title");
				purchase_id = $(this).attr("id");
				next = $(this).attr("next");
				switch(value){
					case "ae720p":
						value = "ae720p";
						purchase_id = 36;
						url = "action2/";
						medium = "DVD Only";
						price = "$99.95 USD";
						break;
					case "proscores":
						value = "proscores";
						purchase_id = 29;
						url = "proscores/";
						medium = "DVD or Download";
						price = "$95.95 USD";
						break;
					case "twitch":
						value = "twitch";
						purchase_id = 17;
						url = "twitch/";
						medium = "Download Only";
						price = "$45.00 USD";
						break;
					case "opticalflares":
						value = "opticalflares";
						purchase_id = 37;
						url = "opticalflares/";
						medium = "Download Only";
						price = "$124.95 USD";
						break;
				}
			}else{
				switch(oldvalue){
					case "opticalflares":
						value = "ae720p";
						purchase_id = 36;
						url = "action2/";
						medium = "DVD Only";
						price = "$99.95 USD";
						break;
					case "ae720p":
						value = "proscores";
						purchase_id = 29;
						url = "proscores/";
						medium = "DVD or Download";
						price = "$95.95 USD";
						break;
					case "proscores":
						value = "twitch";
						purchase_id = 17;
						url = "twitch/";
						medium = "Download Only";
						price = "$45.00 USD";
						break;
					case "twitch":
						value = "opticalflares";
						purchase_id = 37;
						url = "opticalflares/";
						medium = "Download Only";
						price = "$124.95 USD";
						break;
				}
			}
			if(value != oldvalue){
				$("#the_purchase_form").attr("action","http://order.store.yahoo.net/cgi-bin/wg-order?yhst-99063568031385+"+value);
				$(".featured_products_price").html(price);
				$(".featured_products_medium").html(medium);
				$("#featured_products_details_link").attr("href",url);
				$(".featured_products_image_link").attr("href",url);
				$("#featured_products_purchase_button").attr("value",purchase_id);
				$(".featured_products_thumb_image").css("border","solid 1px #000");
				$(".featured_products_thumb_image").width("65px");
				if(value == "twitch"){
					$(".featured_products_"+value+"_thumb").css({"border":"solid 4px #000","border-bottom":"solid 3px #000"});
				}else{
					$(".featured_products_"+value+"_thumb").css({"border":"solid 4px #000"});
				}
				$(".featured_products_"+value+"_thumb").width("59px");
				$(".top").attr("src",protocol+window.location.hostname+"/assets/public/images/v5/products/featured/"+value+".jpg");
				$(".featured_products_info_top").html($("#featured_"+value).html());
				$("#featured_products_image_flash").fadeTo(0,0.25,function(){
					$(this).fadeOut(250,function(){
						oldvalue = value;
					});
				});
			}
		});
		
		$('.featured_products_box').hover(
			function() {
				clearInterval(run);
				paused = true;
			},
			function() {
				run = setInterval(function(){ $('.featured_products_thumb').click(); }, speed);
				paused = false;
			}
		);
	});

	$(document).ready(function() {
		var trans = false;
		var oldvalue = "orb_light";
		$(".flare_thumb").bind("mouseover",function(e){
			e.preventDefault();
			var value = $(this).attr("title");
			var image = value+".jpg";
			if(value != oldvalue){
				$("#flare_image_flash").fadeTo(0,0.25,function(){
					$("#flare_image").attr("src",protocol+window.location.hostname+"/assets/public/images/products/propresets2/signature_flares/"+image);
					$(this).fadeOut(250,function(){
						oldvalue = value;
					});
				});
			}
		});
	});

	$(document).ready(function(){
		$("a[rel^='prettyPhoto']").prettyPhoto({theme: 'dark_square'});
	});

	$(document).ready(function() {
		//rotation speed and timer
		var speed = 10000;
		run = setInterval(function(){ $('.home_featured_thumb_link').click(); }, speed);
		var paused = false;
		var trans = false;
		var value = "1";
		var oldvalue = "1";
		var next = "2";
		var nextClicked = false;
		
		$(".home_featured_thumb_link").bind("mouseover click",function(e){
			e.stopPropagation();
			e.preventDefault();
			if(paused){
				value = $(this).attr("alt");
				switch(value){
					case "1":
						value = "1";
						next = "2";
						break;
					case "2":
						value = "2";
						next = "3";
						break;
					case "3":
						value = "3";
						next = "4";
						break;
					case "4":
						value = "4";
						next = "5";
						break;
					case "5":
						value = "5";
						next = "1";
						break;
				}
			}else{
				switch(oldvalue){
					case "1":
						value = "2";
						next = "3";
						break;
					case "2":
						value = "3";
						next = "4";
						break;
					case "3":
						value = "4";
						next = "5";
						break;
					case "4":
						value = "5";
						next = "1";
						break;
					case "5":
						value = "1";
						next = "2";
						break;
				}
			}
			if(value != oldvalue){
				$(".home_featured_thumb").css("border","solid 1px #c8c8c8");
				$(".home_featured_thumb").width("76px").height("76px");
				$("#home_featured_thumb_"+value).width("72px").height("72px");
				$("#home_featured_thumb_"+value).css("border","solid 3px #c8c8c8");
				$("#home_featured_main_image").html($("#home_featured_main_image_"+value).html());
				$("#home_featured_info_bottom").html($("#home_featured_info_"+value).html());
				$("#home_featured_info").html($("#home_featured_info_"+value).html());
				$("#home_featured_main_image_flash").fadeTo(0,0.25,function(){
					$(this).fadeOut(250,function(){
						oldvalue = value;
					});
				});
			}
		});
		
		$('#home_featured_box').hover(
			function() {
				clearInterval(run);
				paused = true;
			},
			function() {
				run = setInterval(function(){ $('.home_featured_thumb_link').click(); }, speed);
				paused = false;
			}
		);
	});

	$(document).ready(function() {
		//rotation speed and timer
		var speed = 10000;
		run = setInterval(function(){ oldvalue=value; $('.my_home_featured_thumb_link').click(); }, speed);
		var oldvalue = 6;
		var value = 1;
		var playing = true;
		var total = $("#home_featured_box").attr("alt");
		
		$(".my_home_featured_thumb_link").bind("mouseover click",function(e){
			e.stopPropagation();
			e.preventDefault();
			if(playing)
			{
				value = oldvalue+1;
				if(value > total){
					value = 1;
				}
			}
			else
			{
				value = $(this).attr("alt");
			}
			if(oldvalue != value || playing)
			{
				if(value > 5 && playing){
					$(".home_featured_scroller").animate({left:"-498"},400);
					$(".home_featured_right_arrow").hide();
					$(".home_featured_left_arrow").show();
				}
				else if(value < 5 && playing)
				{
					$(".home_featured_scroller").animate({left:"0"},400);
					$(".home_featured_left_arrow").hide();
					$(".home_featured_right_arrow").show();
				}
				$(".home_featured_thumb").css("border","solid 1px #c8c8c8");
				$(".home_featured_thumb").width("76px").height("76px");
				$("#home_featured_thumb_"+value).width("72px").height("72px");
				$("#home_featured_thumb_"+value).css("border","solid 3px #c8c8c8");
				$(".home_featured_item_container").hide();
				$("#home_featured_item_container_"+value).show();
				$(".home_featured_main_image_flash").fadeTo(0,0.25,function(){
					$(this).fadeOut(250,function(){
						if(!playing){
							oldvalue = value;
							$("#home_featured_box").attr("alt",value);
						}
					});
				});
			}
		});
		
		$('#home_featured_box').hover(
			function() {
				clearInterval(run);
				playing = false;
			},
			function() {
				run = setInterval(function(){
					if(playing){
						oldvalue = value;
					}else{
						oldvalue = parseInt($("#home_featured_box").attr("alt"),10);
						playing = true;
					}
					$('.my_home_featured_thumb_link').click();
				}, speed);
			}
		);
		
		$(".home_featured_left_arrow").bind("click",function(e){
			e.preventDefault();
			$(".home_featured_scroller").animate({left:"0"},400);
			value = 1;
			$(".home_featured_left_arrow").hide();
			$(".home_featured_right_arrow").show();
			$(".home_featured_thumb").css("border","solid 1px #c8c8c8");
			$(".home_featured_thumb").width("76px").height("76px");
			$("#home_featured_thumb_"+value).width("72px").height("72px");
			$("#home_featured_thumb_"+value).css("border","solid 3px #c8c8c8");
			$(".home_featured_item_container").hide();
			$("#home_featured_item_container_"+value).show();
			$(".home_featured_main_image_flash").fadeTo(0,0.25,function(){
				$(this).fadeOut(250,function(){
					if(!playing){
						oldvalue = value;
						$("#home_featured_box").attr("alt",value);
					}
				});
			});
		});
		$(".home_featured_right_arrow").bind("click",function(e){
			e.preventDefault();
			$(".home_featured_right_arrow").hide();
			$(".home_featured_left_arrow").show();
			$(".home_featured_scroller").animate({left:"-490"},400);
			value = 6;
			$(".home_featured_thumb").css("border","solid 1px #c8c8c8");
			$(".home_featured_thumb").width("76px").height("76px");
			$("#home_featured_thumb_"+value).width("72px").height("72px");
			$("#home_featured_thumb_"+value).css("border","solid 3px #c8c8c8");
			$(".home_featured_item_container").hide();
			$("#home_featured_item_container_"+value).show();
			$(".home_featured_main_image_flash").fadeTo(0,0.25,function(){
				$(this).fadeOut(250,function(){
					if(!playing){
						oldvalue = value;
						$("#home_featured_box").attr("alt",value);
					}
				});
			});
		});
	});
	
	$("#main_cart_button").hover(
		function(){
			$(this).attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/cart_on.png");
		},
		function(){
			$(this).attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/cart.png");
		}
	);
	
	$("#main_account_button").hover(
		function(){
			window.account_button = $(this).attr("name");
			$(this).attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+window.account_button+"_on.png");
		},
		function(){
			window.account_button = $(this).attr("name");
			if(!$("#main_login_form_container").is(":visible"))
				$(this).attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+window.account_button+".png");
		}
	);
	$("#main_account_button").click(function(e){
		//clearInterval(run);
		if(!$("#main_login_form_container").is(":visible")){
			$("#main_login_form_container").stop().css({display: 'block'}).animate({opacity: 1}, 100);
			if($("#main_login_form_container").is(":visible")) $("#main_email").focus();
			$("#main_account_button").attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+window.account_button+"_on.png");
		}else{
			$("#main_login_form_container").stop().animate({opacity:0},100,function(){ $(this).hide(); });
			$("#main_login_form_view").tipsy("hide");
			$("#main_account_button").attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+window.account_button+".png");
		}
		return false;
	});
	$("#main_login_form_container").click(function(e){
		e.stopPropagation();
	});
	$(document).click(function(e) {
		if($("#main_login_form_container").is(":visible")){
			$("#main_login_form_container").stop().animate({opacity:0},100,function(){ $(this).hide(); });
			$("#main_login_form_view").tipsy("hide");
			$("#main_account_button").attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+window.account_button+".png");
		}
	});

	$("#main_login_remember_text, #main_login_remember_text1").click(function(){
		if($(this).prev().is(":checked")){
			$(this).prev().removeAttr("checked");
		}else{
			$(this).prev().attr("checked",true);
		}
	});

	$("#main_login_form").live("submit",function(e){
		e.preventDefault();
		var form = $(this);
		$("#account_loader").fadeIn(200);
		$.post(form.attr("action"), form.serialize() ,function(data){
			if(data["error"]){
				$("#account_loader").fadeOut(200);
				$("#main_login_form_view").attr("title","<span style='color:red;font-weight:bold'>"+data["error"]+"</span>");
				$("#main_login_form_view").tipsy("show");
				setTimeout(function(){ $("#main_login_form_view").tipsy("hide"); },5000);
			}else{
				//$("#main_login_form_container").hide();
				//$("#main_account_button").attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/my_account.png");
				$("#main_login_form_view").tipsy("hide");
				//$("#main_account_button").attr("title","<span style='color:#003d6c;text-shadow:0 -1px 0 #fff;font-weight:bold'>You Are Now Signed In</span>");
				//$("#main_account_button").tipsy("show");
				//setTimeout(function(){ $("#main_account_button").tipsy("hide"); },3000);
				var url = $.url();
				if(url.segment(2) == "cart" || url.segment(1) == "account"){
					window.location.reload();
				}else{
					$("#main_login_form_view").animate({opacity:0},100,function(){
						$(this).html(data["view"]).animate({opacity:1},100);
					});
					window.account_button = "my_account";
					$("#main_account_button").attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+window.account_button+".png");
					$("#main_account_button").attr("name",window.account_button);
					/*$("#account_loader").fadeOut(200,function(){
						$("#account_success").fadeIn(200);
						setTimeout(function(){ $("#account_success").fadeOut(1000); },2000);
					});*/
				}
			}
		},"json");
	});

	$("#sub_login_form").live("submit",function(e){
		e.preventDefault();
		var form = $(this);
		$.post(form.attr("action"), form.serialize() ,function(data){
			if(data["error"]){
				$("#sub_login_form_error").fadeOut(function(){
					$(this).html("<span style='color:red;font-weight:bold'>"+data["error"]+"</span>").fadeIn();
				});
				setTimeout(function(){ $("#main_login_form_view").tipsy("hide"); },5000);
			}else{
				$("#main_login_form_view").tipsy("hide");
				var url = $.url();
				if(url.segment(2) == "cart" || url.segment(1) == "account"){
					window.location.reload();
				}else{
					$("#main_login_form_view").animate({opacity:0},100,function(){
						$(this).html(data["view"]).animate({opacity:1},100);
					});
					window.account_button = "my_account";
					$("#main_account_button").attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+window.account_button+".png");
					$("#main_account_button").attr("name",window.account_button);
					
					$("#floating_box").fadeOut(200,function(){
						lastPurchaseButtonClicked.click();
					});
				}
			}
		},"json");
	});

	$(".my_account_link").live({
		mouseenter:
           function()
           {
				$(this).css("background","#fff");
           },
        mouseleave:
           function()
           {
				$(this).css("background","");
           }
       }
	);

	var fadeThisTimeout;
	$.fn.fadeThis = function(myTimeout){
		clearTimeout(fadeThisTimeout);
		if(!myTimeout) myTimeout = 5000;
		var el = $(this);
		el.fadeIn(200);
		fadeThisTimeout = setTimeout(function(){ el.fadeOut(400); },myTimeout);
	};

	$('#main_login_form_view').tipsy({gravity: 'e', html:true, offset: 0, opacity: 0.9, trigger:'manual', fade:true});
	$('#main_account_button').tipsy({gravity: 'n', html:true, offset: 0, opacity: 0.9, trigger:'manual', fade:true});

	$(".home-featured-nav,.home-featured-nav-next,.home-featured-nav-prev").click(function(e){
		e.preventDefault();
		var margin = $(this).hasClass("home-featured-nav-next") ? "-490px" : "0px";
		$(".home-featured-thumbnail-scroller").animate({marginLeft:[margin,"easeInOutQuad"]},200);
	});
	var current_featured = 1;
	$.homeFeaturedSlider = function(el){
		if(!el){
			if(current_featured == 6){
				$(".home-featured-nav-next").click();
			}
			if(current_featured == 12){
				$(".home-featured-nav-prev").click();
				current_featured = 1;
			}else{
				current_featured++;
			}
			var el = $(".home-featured-thumb-"+current_featured);
		}
		current_featured = el.attr("sort");
		$(".home-featured-thumb").removeClass("home-featured-thumb-on");
		el.addClass("home-featured-thumb-on");
		$(".home-featured-image-fader").fadeTo(50,0.5,function(){
			$(".home-featured-image").hide();
			$("#"+el.attr("id")+"_large").show();
			$(this).fadeOut(50);
		});
		$(".home-featured-details-item").hide();
		$("#"+el.attr("id")+"_details").show();
		if(el.attr("sort") == 1){ $(".home-featured-new-icon").fadeIn(100); }else{ $(".home-featured-new-icon").fadeOut(100); }
	}
	$(".home-featured-thumb").mouseover(function(){
		if(!$(".home-featured-thumbnail-scroller").is(":animated")){
			var el = $(this);
			if(el.attr("sort") != current_featured){
				$.homeFeaturedSlider(el);
			}
		}
	});
	$("#home_featured").hover(
		function(){
			window.clearInterval(homeFeaturedInterval);
			homeFeaturedInterval = false;
		},
		function(){
			if(homeFeaturedInterval === false)
				homeFeaturedInterval = window.setInterval( function(){ $.homeFeaturedSlider(); },10000);
		}
	);

	function startAutopager() {
		if(homeFeaturedInterval === false)
		    homeFeaturedInterval = window.setInterval( function(){ $.homeFeaturedSlider(); },10000);
	}
	function stopAutopager() {
	    window.clearInterval(homeFeaturedInterval);
	    homeFeaturedInterval = false;
	}

	if(!$.url().segment(1)){
		var homeFeaturedInterval = window.setInterval( function(){ $.homeFeaturedSlider(); },10000);
		
		window.addEventListener('focus', startAutopager); 
		window.addEventListener('blur', stopAutopager);
	}
	/*
	$(".home-featured-right-dark,.home-featured-right-top").hover(function(){
		$(this).toggleClass("home-featured-right-light");
	});
	*/

	$('#home-tutorial-list').hoverscroll({
		width:    855,
		height:   73,
		arrows:   false
	});
	$("#home-tutorial-list").css("width",1714);
	$(".home-tutorial-thumb").click(function(e){
		e.preventDefault();
		var num = parseInt($(this).attr("num"));
		var first = num;
		var second = num+1;
		var offset = $(this).offset().left-$("#home-tutorial-list").offset().left;
		if(num == 14){
			first = 13;
			second = 14;
			offset = $(this).offset().left-$("#home-tutorial-list").offset().left-123;
		}
		$(".home-tutorial-thumb").removeClass("home-tutorial-thumb-on");
		$("#tutorial_"+first+"_thumb,#tutorial_"+second+"_thumb").addClass("home-tutorial-thumb-on");
		$(".home-tutorial-scrollbar").animate({ marginLeft: offset }, 200);
		$(".home-tutorial-details").hide();
		$(".home-tutorial-left-details,.home-tutorial-right-details").empty();
		$("#tutorial_"+first+"_details").clone().appendTo(".home-tutorial-left-details").show();
		$("#tutorial_"+second+"_details").clone().appendTo(".home-tutorial-right-details").show();
		$(".home-tutorial-large-fader").fadeTo(50,0.5,function(){
			$(".home-tutorial-large-image").hide();
			$(".home-tutorial-left-large,.home-tutorial-right-large").empty();
			$("#tutorial_"+first+"_large").clone().appendTo(".home-tutorial-left-large").show();
			$("#tutorial_"+second+"_large").clone().appendTo(".home-tutorial-right-large").show();
			$(this).fadeOut(50);
		});
	});
	$("#tutorial_1_large").clone().appendTo(".home-tutorial-left-large").show();
	$("#tutorial_2_large").clone().appendTo(".home-tutorial-right-large").show();
	$("#tutorial_1_details").clone().appendTo(".home-tutorial-left-details").show();
	$("#tutorial_2_details").clone().appendTo(".home-tutorial-right-details").show();

	$('#popular-list').hoverscroll({
		width:    500,
		height:   73,
		arrows:   false
	});
	$(".tutorials-popular-thumb").click(function(e){
		e.preventDefault();
		var num = $(this).attr("num");
		$(".tutorials-popular-thumb").removeClass("tutorials-popular-thumb-on");
		$("#tutorial_"+num+"_thumb").addClass("tutorials-popular-thumb-on");
		$(".tutorials-popular-details").hide();
		$("#tutorials_popular_"+num+"_details").show();
		$(".tutorials-popular-image-fader").fadeTo(50,0.5,function(){
			$(".tutorials-popular-item-image").hide();
			$("#tutorials_popular_"+num+"_large").show();
			$(this).fadeOut(50);
		});
	});
	$(".main-nav-button").hover(
		function(){
			$(this).attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+$(this).attr("name")+"_on.jpg");
		},
		function(){
			$(this).attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/nav/"+$(this).attr("name")+".jpg");
		}
	);
	$(".header-dropdown-buttons").hover(
		function(){
			//$(".header-nav-dropdown-container").stop().css({display: 'block'}).animate({opacity: 1}, 100);
			$(".header-nav-dropdown-container").css({opacity:1}).stop(true, true).slideDown(200);
		},
		function(){
			$(".header-nav-dropdown-container").stop(true, true).slideUp(200);
			//$(".header-nav-dropdown-container").stop().animate({opacity:0},100,function(){ $(this).hide(); });
			$(".header-dropdown-active").children(":first").attr("src",protocol+window.location.hostname+"/assets/public/images/v6/template/dropdown_arrow_off.png");
			$(".header-dropdown-active").removeClass("header-dropdown-active").addClass("header-dropdown");
			$(".dropdown-indicator").fadeOut(100);
		}
	);
	$(".header-nav-dropdown-item").live("hover",
		function(){
			$(this).toggleClass("header-nav-dropdown-item-over");
		},function(){
			$(this).toggleClass("header-nav-dropdown-item-over");
		}
	);
	$.fn.mySpin = function(userDefinedSettings){
		var s = $.extend({
			lines: 8,
			length: 4,
			width: 2,
			radius: 3,
			color: '#fff',
			speed: 1,
			trail: 60,
			shadow: false,
			hwaccel: false
		}, userDefinedSettings);

		return	$(this).spin({
					lines: s.lines, // The number of lines to draw
					length: s.length, // The length of each line
					width: s.width, // The line thickness
					radius: s.radius, // The radius of the inner circle
					color: s.color, // #rgb or #rrggbb
					speed: s.speed, // Rounds per second
					trail: s.trail, // Afterglow percentage
					shadow: s.shadow, // Whether to render a shadow
					hwaccel: s.hwaccel // Whether to use hardware acceleration
				});
	}
});
