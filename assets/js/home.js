
var rType='1'
	, svrIndex = '1';
var main_rank_menu = {1:'Ladder',2:'Knight',3:'Clan',4:'War'};
var main_server_list = {1:"ATHENA",2:"RESURRECTION",3:"ATLANTIS",4:"EPHESUS",5:"ATTILA",6:"ANATOILA",7:"EUROPA",8:"",9:"",10:"",11:"",12:"",13:"",14:"",15:"",16:"",17:"",18:"HELIOS",19:"TITAN",20:"DESTAN"};

function init_main(name,num){
	arr_admin		= new Array();
	arr_admin[0]	= new Array();
	arr_admin[0][0]	= name;
	arr_admin[0][1]	= num;

	for(i=0; i<arr_admin.length; i++)	{
		tmpEval= 'tmpArr = '+arr_admin[i][0]+'.split("||");'+'\n';
		tmpEval+='arr_'+arr_admin[i][0]+' = new Array();'+'\n';
		tmpEval+='for(tmpLoop=0; tmpLoop<tmpArr[0]; tmpLoop++)'+'\n';
		tmpEval+='{'+'\n';
		tmpEval+='	arr_'+arr_admin[i][0]+'[tmpLoop]		= new Array();'+'\n';

		for(j=0; j<arr_admin[i][1]; j++)
			tmpEval+='	arr_'+arr_admin[i][0]+'[tmpLoop]['+j+']	= tmpArr[tmpLoop*'+arr_admin[i][1]+'+'+(j+1)+'];'+'\n';

		tmpEval+='}'+'\n';
		//alert(tmpEval);
		eval(tmpEval);
	}
}

function WriteRank(type, svr){

	var html	= "";
	var arr_tmp = "";
	var leng	= 0;
	var div		= "";
	var more	= "";
	var tmp_type ="";

	
	if(type == 1){
		if(svr == 1 ) {
			tmp_type = "r_rank_1";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_1;
			leng	= arr_r_rank_1.length;
		}else if(svr == 2) {
			tmp_type = "r_rank_2";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_2;
			leng	= arr_r_rank_2.length;
		} else if(svr == 3){
			tmp_type = "r_rank_3";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_3;
			leng	= arr_r_rank_3.length;
		} else if(svr == 4){
			tmp_type = "r_rank_4";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_4;
			leng	= arr_r_rank_4.length;
		} else if(svr == 5){
			tmp_type = "r_rank_5";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_5;
			leng	= arr_r_rank_5.length;
		} else if(svr == 6){
			tmp_type = "r_rank_6";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_6;
			leng	= arr_r_rank_6.length;
		} else if(svr == 7){
			tmp_type = "r_rank_7";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_7;
			leng	= arr_r_rank_7.length;
		} else if(svr == 8){
			tmp_type = "r_rank_8";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_8;
			leng	= arr_r_rank_8.length;
		} else if(svr == 9){
			tmp_type = "r_rank_9";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_9;
			leng	= arr_r_rank_9.length;
		} else if(svr == 10){
			tmp_type = "r_rank_10";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_10;
			leng	= arr_r_rank_10.length;
		} else if(svr == 11){
			tmp_type = "r_rank_11";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_11;
			leng	= arr_r_rank_11.length;
		} else if(svr == 12){
			tmp_type = "r_rank_12";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_12;
			leng	= arr_r_rank_12.length;
		} else if(svr == 13){
			tmp_type = "r_rank_13";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_13;
			leng	= arr_r_rank_13.length;
		} else if(svr == 14){
			tmp_type = "r_rank_14";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_14;
			leng	= arr_r_rank_14.length;
		} else if(svr == 15){
			tmp_type = "r_rank_15";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_15;
			leng	= arr_r_rank_15.length;
		} else if(svr == 16){
			tmp_type = "r_rank_16";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_16;
			leng	= arr_r_rank_16.length;
		} else if(svr == 17){
			tmp_type = "r_rank_17";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_17;
			leng	= arr_r_rank_17.length;
		} else if(svr == 18){
			tmp_type = "r_rank_18";
			init_main(tmp_type, 4);
			arr_tmp	= arr_r_rank_18;
			leng	= arr_r_rank_18.length;
		}
	}else if(type == 2){
		if(svr == 1 ) {
			tmp_type = "k_rank_1";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_1;
			leng	= arr_k_rank_1.length;
		}else if(svr == 2) {
			tmp_type = "k_rank_2";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_2;
			leng	= arr_k_rank_2.length;
		} else if(svr == 3){
			tmp_type = "k_rank_3";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_3;
			leng	= arr_k_rank_3.length;
		} else if(svr == 4){
			tmp_type = "k_rank_4";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_4;
			leng	= arr_k_rank_4.length;
		} else if(svr == 5){
			tmp_type = "k_rank_5";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_5;
			leng	= arr_k_rank_5.length;
		} else if(svr == 6){
			tmp_type = "k_rank_6";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_6;
			leng	= arr_k_rank_6.length;
		} else if(svr == 7){
			tmp_type = "k_rank_7";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_7;
			leng	= arr_k_rank_7.length;
		} else if(svr == 8){
			tmp_type = "k_rank_8";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_8;
			leng	= arr_k_rank_8.length;
		} else if(svr == 9){
			tmp_type = "k_rank_9";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_9;
			leng	= arr_k_rank_9.length;
		} else if(svr == 10){
			tmp_type = "k_rank_10";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_10;
			leng	= arr_k_rank_10.length;
		} else if(svr == 11){
			tmp_type = "k_rank_11";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_11;
			leng	= arr_k_rank_11.length;
		} else if(svr == 12){
			tmp_type = "k_rank_12";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_12;
			leng	= arr_k_rank_12.length;
		} else if(svr == 13){
			tmp_type = "k_rank_13";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_13;
			leng	= arr_k_rank_13.length;
		} else if(svr == 14){
			tmp_type = "k_rank_14";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_14;
			leng	= arr_k_rank_14.length;
		} else if(svr == 15){
			tmp_type = "k_rank_15";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_15;
			leng	= arr_k_rank_15.length;
		} else if(svr == 16){
			tmp_type = "k_rank_16";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_16;
			leng	= arr_k_rank_16.length;
		} else if(svr == 17){
			tmp_type = "k_rank_17";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_17;
			leng	= arr_k_rank_17.length;
		} else if(svr == 18){
			tmp_type = "k_rank_18";
			init_main(tmp_type, 4);
			arr_tmp	= arr_k_rank_18;
			leng	= arr_k_rank_18.length;
		}
	}else if(type == 3){
		if(svr == 1 ) {
			tmp_type = "c_rank_1";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_1;
			leng	= arr_c_rank_1.length;
		}else if(svr == 2) {
			tmp_type = "c_rank_2";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_2;
			leng	= arr_c_rank_2.length;
		} else if(svr == 3){
			tmp_type = "c_rank_3";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_3;
			leng	= arr_c_rank_3.length;
		} else if(svr == 4){
			tmp_type = "c_rank_4";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_4;
			leng	= arr_c_rank_4.length;
		} else if(svr == 5){
			tmp_type = "c_rank_5";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_5;
			leng	= arr_c_rank_5.length;
		} else if(svr == 6){
			tmp_type = "c_rank_6";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_6;
			leng	= arr_c_rank_6.length;
		} else if(svr == 7){
			tmp_type = "c_rank_7";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_7;
			leng	= arr_c_rank_7.length;
		} else if(svr == 8){
			tmp_type = "c_rank_8";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_8;
			leng	= arr_c_rank_8.length;
		} else if(svr == 9){
			tmp_type = "c_rank_9";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_9;
			leng	= arr_c_rank_9.length;
		} else if(svr == 10){
			tmp_type = "c_rank_10";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_10;
			leng	= arr_c_rank_10.length;
		} else if(svr == 11){
			tmp_type = "c_rank_11";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_11;
			leng	= arr_c_rank_11.length;
		} else if(svr == 12){
			tmp_type = "c_rank_12";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_12;
			leng	= arr_c_rank_12.length;
		} else if(svr == 13){
			tmp_type = "c_rank_13";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_13;
			leng	= arr_c_rank_13.length;
		} else if(svr == 14){
			tmp_type = "c_rank_14";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_14;
			leng	= arr_c_rank_14.length;
		} else if(svr == 15){
			tmp_type = "c_rank_15";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_15;
			leng	= arr_c_rank_15.length;
		} else if(svr == 16){
			tmp_type = "c_rank_16";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_16;
			leng	= arr_c_rank_16.length;
		} else if(svr == 17){
			tmp_type = "c_rank_17";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_17;
			leng	= arr_c_rank_17.length;
		} else if(svr == 18){
			tmp_type = "c_rank_18";
			init_main(tmp_type, 4);
			arr_tmp	= arr_c_rank_18;
			leng	= arr_c_rank_18.length;
		}
	}else if(type == 4){
		if(svr == 1 ) {
			tmp_type = "h_rank_1";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_1;
			leng	= arr_h_rank_1.length;
		}else if(svr == 2) {
			tmp_type = "h_rank_2";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_2;
			leng	= arr_h_rank_2.length;
		} else if(svr == 3){
			tmp_type = "h_rank_3";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_3;
			leng	= arr_h_rank_3.length;
		} else if(svr == 4){
			tmp_type = "h_rank_4";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_4;
			leng	= arr_h_rank_4.length;
		} else if(svr == 5){
			tmp_type = "h_rank_5";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_5;
			leng	= arr_h_rank_5.length;
		} else if(svr == 6){
			tmp_type = "h_rank_6";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_6;
			leng	= arr_h_rank_6.length;
		} else if(svr == 7){
			tmp_type = "h_rank_7";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_7;
			leng	= arr_h_rank_7.length;
		} else if(svr == 8){
			tmp_type = "h_rank_8";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_8;
			leng	= arr_h_rank_8.length;
		} else if(svr == 9){
			tmp_type = "h_rank_9";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_9;
			leng	= arr_h_rank_9.length;
		} else if(svr == 10){
			tmp_type = "h_rank_10";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_10;
			leng	= arr_h_rank_10.length;
		} else if(svr == 11){
			tmp_type = "h_rank_11";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_11;
			leng	= arr_h_rank_11.length;
		} else if(svr == 12){
			tmp_type = "h_rank_12";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_12;
			leng	= arr_h_rank_12.length;
		} else if(svr == 13){
			tmp_type = "h_rank_13";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_13;
			leng	= arr_h_rank_13.length;
		} else if(svr == 14){
			tmp_type = "h_rank_14";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_14;
			leng	= arr_h_rank_14.length;
		} else if(svr == 15){
			tmp_type = "h_rank_15";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_15;
			leng	= arr_h_rank_15.length;
		} else if(svr == 16){
			tmp_type = "h_rank_16";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_16;
			leng	= arr_h_rank_16.length;
		} else if(svr == 17){
			tmp_type = "h_rank_17";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_17;
			leng	= arr_h_rank_17.length;
		} else if(svr == 18){
			tmp_type = "h_rank_18";
			init_main(tmp_type, 5);
			arr_tmp	= arr_h_rank_18;
			leng	= arr_h_rank_18.length;
		}
	}
	div		= $("#rank_list");//document.getElementById("rank_list");

	if(type ==4 ){

		var j=1;

		try{
			if(arr_tmp.length == 0){
				html += '';
			}

			html += '<div id="rank_title">';
			html += '<table class="tableTitle">';
            html += '<tr>';
            html += '  <th class="karus">Karus</th>';
            html += '  <th class="elmorad">El morad</th>';
            html += '</tr>';
			html += '</table>';
			html += '</div>';

			html += '<div class="clear"></div>';

			html += '<div id="rank_title2">';
			html += '<table class="tableTitle">';
            html += '<tr>';
            html += '  <th class="war-subtitle">Character</th>';
            html += '  <th class="war-subtitle">Achievements</th>';
			html += '  <th class="war-subtitle">Character</th>';
            html += '  <th class="war-subtitle">Achievements</th>';
            html += '</tr>';
			html += '</table>';
			html += '</div>';

			html += '<div class="rankwar">';
			//karus, elmorad count re-count
			var total_cnt = arr_tmp.length;
			var karu_cnt = 0;
			var elmo_cnt = 0;
			for(i = 0;i < total_cnt; i++){

				if(arr_tmp[i][3] == "Karus"){
					karu_cnt++;
				} else if(arr_tmp[i][3] == "Elmorad"){
					elmo_cnt++;
				}
			}

			for(i=0;i<arr_tmp.length;i++) {
				if(arr_tmp[i][3] == "Karus"){
					if(i==0){
						html += '<ul id="rank_karuslist" class="rank_karuslist">';
					}

					html += '<li class="rank_li">';
					html += '<span class="rank_character">'+arr_tmp[i][2]+'</span>';
					html += '<span class="rank_achievements">'+arr_tmp[i][4]+'</span></li>';

					if(i == karu_cnt -1 ){
						html += '</ul>';
					}
				}
			}

			for(i=0;i<arr_tmp.length;i++) {
				if(arr_tmp[i][3] == "Elmorad"){
					if(i == karu_cnt ){
						html += '<ul id="rank_elmoradlist" class="rank_elmoradlist">';
					}

					html += '<li class="rank_li">';
					html += '<span class="rank_character">'+arr_tmp[i][2]+'</span>';
					html += '<span class="rank_achievements">'+arr_tmp[i][4]+'</span></li>';

					if(i ==total_cnt -1){
						html += '</ul>';
					}

				}
			}

			html += '</div>';

		}catch(e){
			html += '<div id="rank_title">';
			html += '<table class="karus">';
            html += '<tr>';
            html += '  <th class="karus">Karus</th>';
            html += '  <th class="elmorad">El morad</th>';
            html += '</tr>';
			html += '</table>';
			html += '</div>';
		}

	} else {
		if(arr_tmp.length > 5) {
			arr_tmp.length = 5;
		}
		
		var j=1;

		try{
			if(arr_tmp.length == 0){
				html += '';
			}

			html += '<div id="rank_title">';
			html += '<table class="tableTitle">';
            html += '<tr>';
            html += '  <th class="karus">Karus</th>';
            html += '  <th class="elmorad">El morad</th>';
            html += '</tr>';
			html += '</table>';
			html += '</div>';
			
			html += '<div class="clear"></div>';

			html += '<div id="rank_list">';
			html += '<table class="tableRank">';
			for(i=0;i<arr_tmp.length;i++) {
				j =i+1;
				html += "<tr>";

				html += "	<td><span class='rank-number karus-rank-number'>"+j+"</span><span class='num num"+j+"'>"+arr_tmp[i][3]+"</span></td>";
				html += "	<td><span class='rank-number elmorad-rank-number'>"+j+"</span><span class='num num"+j+" numEl'>"+arr_tmp[i][2]+"</span></td>";

				html += "</tr>";

			}
			html += '</table>';
			html += '</div>';

		}catch(e){
			html += '<div id="rank_title">';
			html += '<table class="karus">';
            html += '<tr>';
            html += '  <th class="karus">Karus</th>';
            html += '  <th class="elmorad">El morad</th>';
            html += '</tr>';
			html += '</table>';
			html += '</div>';
		}

	}
	
	div.html(html);	
}

function show_rank(rType,svrIndex){	
	$("input#rank_menu").val(rType);
	//$("select#nServer_all option:selected").text();

	$("span#str-menu").text(main_rank_menu[rType]).css({'text-transform':'initial'});
	$("span#str-server").text(main_server_list[svrIndex]).css({'text-transform':'initial'});
	$("select#nServer_all").val(svrIndex);

	WriteRank(rType, svrIndex);	
}


$(document).ready(function(){
	
	/** Load Block...*/
	var cookiecheck = getCookie("newcharacter");
	if(cookiecheck == ""){
		//location.href = "/landingsite/NewCharacter/";
		//return false;
	}

	//lotation banner...
	$('#carousel').infiniteCarousel();


	// Ranking...
	$("input#rank_menu").val(rType);
	WriteRank(rType, svrIndex);

	$("select#nServer_all").on('change', function(e){
		show_rank($("input#rank_menu").val(), $(this).val());
	});

	$("a#rank-more-link").on('click',function(e){
		var rank_menu = $("input#rank_menu").val();
		if (rank_menu=="1")	{
			location.href="/rank/ladder/"+$("select#nServer_all").val();
		} else if (rank_menu=="2"){
			location.href="/rank/knights/"+$("select#nServer_all").val();
		} else if (rank_menu=="3"){
			location.href="/rank/clan/"+$("select#nServer_all").val();
		} else {
			location.href="/rank/ladder/";
		}		
	});
	//+++++++++++++++++++++++++++++++++++++++++++++++++

});



