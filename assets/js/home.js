function WriteRank(type, svr){

	var html	= "";
	var arr_tmp = "";
	var leng	= 0;
	var div		= "";
	var more	= "";
	var tmp_type ="";

	div		= $("#rank_list");//document.getElementById("rank_list");

	if(type ===4 ){

		var j=1;

		try{
			if(arr_tmp.length === 0){
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
			for(i = 0;i < total_cnt; i++)
			{

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



