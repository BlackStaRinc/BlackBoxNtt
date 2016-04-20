
document.domain="nttgame.com";

// Set global variables for JS ...
var _imageRoot = "/assets/images/";
var _host = location.protocol+'//'+location.hostname+(location.port ? ':'+location.port: '');

function base64_encode (data) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    enc = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  do { // pack three octets into four hexets
    o1 = data.charCodeAt(i++);
    o2 = data.charCodeAt(i++);
    o3 = data.charCodeAt(i++);

    bits = o1 << 16 | o2 << 8 | o3;

    h1 = bits >> 18 & 0x3f;
    h2 = bits >> 12 & 0x3f;
    h3 = bits >> 6 & 0x3f;
    h4 = bits & 0x3f;

    // use hexets to index into b64, and append result to encoded string
    tmp_arr[ac++] = b64.charAt(h1) + b64.charAt(h2) + b64.charAt(h3) + b64.charAt(h4);
  } while (i < data.length);

  enc = tmp_arr.join('');

  var r = data.length % 3;

  return (r ? enc.slice(0, r - 3) : enc) + '==='.slice(r || 3);

}

function base64_decode (data) {
  var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  var o1, o2, o3, h1, h2, h3, h4, bits, i = 0,
    ac = 0,
    dec = "",
    tmp_arr = [];

  if (!data) {
    return data;
  }

  data += '';

  do { // unpack four hexets into three octets using index points in b64
    h1 = b64.indexOf(data.charAt(i++));
    h2 = b64.indexOf(data.charAt(i++));
    h3 = b64.indexOf(data.charAt(i++));
    h4 = b64.indexOf(data.charAt(i++));

    bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;

    o1 = bits >> 16 & 0xff;
    o2 = bits >> 8 & 0xff;
    o3 = bits & 0xff;

    if (h3 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1);
    } else if (h4 == 64) {
      tmp_arr[ac++] = String.fromCharCode(o1, o2);
    } else {
      tmp_arr[ac++] = String.fromCharCode(o1, o2, o3);
    }
  } while (i < data.length);

  dec = tmp_arr.join('');

  return dec;
}

function setCookie(name, value, expiredays)	{
	var expire_date = new Date();
	expire_date.setDate(expire_date.getDate() + expiredays );
	document.cookie = name + "=" + escape( value ) + "; expires=" + expire_date.toGMTString() + "; path=/; domain="+ document.domain;
}

function getCookie(name) {
	var nameOfCookie = name + "=";
	var x = 0;

	while(x <= document.cookie.length) {
		var y	=	(x+nameOfCookie.length);
		if(document.cookie.substring(x,y) == nameOfCookie) {
			if((endOfCookie = document.cookie.indexOf(";",y)) == -1) {
				endOfCookie	=	document.cookie.length;
			}

			return unescape( document.cookie.substring(y,endOfCookie));
		}

		x	=	document.cookie.indexOf(" ",x) + 1;
		if(x == 0)
		break;
	}

	return "";
}

var _clientDownload = function(_n){
        var login = '';
        try{
            login = _login;
        }catch(e){
            login = '';
        }
        if(_login == ''){
            alert("Please login.");
            var returnurl = base64_encode(_SITE_URL + "/download/client/");
            openLogin(returnurl);
        }else{
            
                if(_n == 1){
                    var url='http://filegate.nttgame.com/knight/client/usko/KnightOnlineSetup_v1977.exe.torrent';
                }else if(_n == 2){
                    var url='http://filegate.nttgame.com/knight/client/usko/fansitekit/fansite_kit_v1.zip';
                }else{
                    var url='http://clientdownload.nttgame.com/knight/client/usko/KnightOnlineSetup_v2025.exe';
                }
                ga('send','event', 'Knight', 'Download', 'direct');
                var result='';
                $.ajax({
                        type: "GET",
                        url: "/download/client_count/",
                        data: {'n': _n},
                        cache: false,
                        success: function(data){
                                var result = $.trim(data);
                                if(result == '0') {
                                        location.href=url;
                                } else{
                                        alert("You cannot download client installer. Please ask to Administrator.");
                                } 
                        },
                        error: function (xhr, ajaxOptions, thrownError) {
                            alert(xhr.status);
                            alert(thrownError);
                        }
                });			

                return false;	
        }
};
