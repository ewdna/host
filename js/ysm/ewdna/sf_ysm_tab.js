(function() {
	function sf_tab_async_load(){
        var sf_tab_header = document.getElementsByTagName('head')[0];
        if(!document.getElementById("sfysmstyle")) {
	        var sf_tab_css = document.createElement('link');
	        sf_tab_css.id = "sfysmstyle";
			sf_tab_css.type = 'text/css'; 
			sf_tab_css.async = true;
			//路徑請修改為 google drive 的絕對路徑
			sf_tab_css.href = "http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/sfysmstyle.css"; 
			sf_tab_css.rel = 'stylesheet'; 
			sf_tab_header.appendChild(sf_tab_css);
		}
    	if(!window.jQuery) {
    		var sf_tab_js = document.createElement('script');
	        sf_tab_js.type = 'text/javascript'; 
        	sf_tab_js.async = true; 
	        sf_tab_js.src = 'http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'; 
    	    sf_tab_js.onload = sf_tab_init;
			//ie6, 7
			sf_tab_js.onreadystatechange = function() {if(this.readyState == 'complete'||this.readyState == 'loaded') {sf_tab_init();}}
    	    sf_tab_header.appendChild(sf_tab_js);
    	}else {
    		sf_tab_init();
    	}
    }
    if(window.attachEvent) {
    	window.attachEvent('onload', function(res) {sf_tab_async_load();});
    } else {
    	window.addEventListener('load', function(res) {sf_tab_async_load();}, false);
    }
})();

function sf_tab_init() {
	jQuery("div[tabdata]").each(function() {
		var sf_kid = jQuery(this).attr('kid');
		var getad = jQuery(this).attr('tabdata');
		var sfid=jQuery("div[tabdata]").index(jQuery(this));
		var hk_count=8;//預設的熱句數量，精華文章不理會此設定

	    //標籤顯示名稱及所帶關鍵字的陣列，因考量可能同一頁面可能引用多個標籤式廣告，所以使用二維陣列處理標籤名稱  例：[["第一個廣告版位標籤一","第一個廣告版位標籤一所帶關鍵字一","第一個廣告版位標籤二","第一個廣告版位標籤二所帶關鍵字二",....],[....]]，有幾個廣告版位就設幾個陣列元素，每個陣列元素有幾個標籤就設定幾組
	    var sf_tab_array=[["強力推薦","","旅遊","旅遊","遊戲","遊戲","時尚","時尚","3C","3C","學習","學習"],["強力推薦","","旅遊","旅遊","遊戲","遊戲","時尚","時尚","3C","3C","學習","學習"]];

	    //第一個標籤要顯示的內容陣列，預設為精華文章模式（在 GOOGLE 搜尋該網站後，列出的其他相關資訊的連結、標題、描述）
	    //例：["連結一","標題一","描述一","連結二","標題二","描述二",....]，要顯示幾條就設定幾組
	    var sf_content_array=["http://www.ewdna.com/2012/03/creditcard-all.html","信用卡資訊大全","本篇包含符碼記憶信用卡文章相關整理，從這篇開始可以 ...","http://www.ewdna.com/2013/01/creditcard-activity.html","2014近期信用卡優惠活動推薦","2014年，近期各家銀行信用卡優惠活動推薦整理，隨時更 ...","http://www.ewdna.com/2013/06/creditcard-functionality-recommand.html","現金回饋、電影、哩程、加油","依功能(現金回饋、電影、哩程、加油、出國…)推薦申辦之 ...","http://www.ewdna.com/2013/10/creditcard-mileage-index.html","信用卡哩程比較及超完整教戰手冊","想要累積哩程不知從哪邊研究起？從最簡單的問題為何要 ..."];
		
		//判斷要使用哪種模式，如果有傳遞 kid 參數，使用熱句模式，如果沒有，使用精華文章模式
		if (sf_kid!=null) {
		    jQuery.get('http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/keywords_hk'+sf_kid+'.txt', {}, function(res) {
			   sf_content_array=[];
			   var sf_words=res.split("\n");
			   var sf_words_rand=[];
               for (var sf_i=0;sf_i<hk_count;sf_i++) {
				    var sf_r = Math.floor(Math.random()*sf_words.length);
				    sf_words_rand[sf_i] = sf_words[sf_r];
				    sf_words.splice(sf_r, 1); 
               }

			   for (var i=0;i<sf_words_rand.length;i++) {
				    if (sf_words_rand[i].indexOf('-')>=0) {
				        var tmps=sf_words_rand[i].split('-');
				        list_key=tmps[1];
				        search_key=tmps[0];
				    } else {
				        list_key=sf_words_rand[i];
				        search_key=sf_words_rand[i];
				    }
                    sf_content_array[3*i]="site.html?q="+search_key;
                    sf_content_array[3*i+1]=search_key;
                    sf_content_array[3*i+2]=list_key;
			   }
	           getAdBody_tab(sf_tab_array[sfid],'hot',sf_content_array, sfid)
		    });
		} else {
	        getAdBody_tab(sf_tab_array[sfid],'search',sf_content_array, sfid)
		}
	});
}



//取的廣告版位內容，參數 sf_tab_array：標籤名稱陣列，參數 sf_content_type：第一個標籤內容方式，參數 sf_content_array：第一個標籤內容陣列，參數 sfid：廣告版位索引
function getAdBody_tab(sf_tab_array,sf_content_type,sf_content_array, sfid) {
	var sf_tab_html_script='';
    var show_tab_array=sf_tab_array;
	var show_first_tab_content_array=sf_content_array;

	sf_html_content='<div class="sf_728X250_1_bg">';
	//標籤列的 html 開始
	sf_html_content=sf_html_content+'<div id="tabnav'+sfid+'" class="sf_728X250_1_navbg">';
	//依標籤顯示名稱及所帶關鍵字陣列，列出所有標籤及所帶關鍵字，並建立 onclick 事件
	for (var i=0;i<show_tab_array.length;i=i+2) {
	     sf_html_content=sf_html_content+'<a href="#" onclick="change_tab(\''+show_tab_array[i+1]+'\','+(i/2)+','+sfid+');"><div class="sf_728X250_1_nav">'+show_tab_array[i]+'</div></a>';
	}
	//標籤列的 html 結束
	sf_html_content=sf_html_content+'</div>';
	//顯示內容區最上方圖片
	sf_html_content=sf_html_content+'<div><img id="toppic'+sfid+'" src="http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/top.gif" width="728" height="3" /></div>';
    //第一個標籤要顯示的內容開始
	sf_html_content=sf_html_content+'<div id="firstad'+sfid+'" class="sf_728X250_1_boxbg">';
	//左方的圖
	sf_html_content=sf_html_content+'<div class="sf_728X250_picbg"><img src="http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/tab_logo.jpg" width="150" height="150" /></div>';
	//右方的文字，依第一個標籤要顯示的在 GOOGLE 搜尋該網站後，列出的精華文章的連結、標題、描述陣列，列出所有資料
	sf_html_content=sf_html_content+'<div class="sf_728X250_textbg">';
	for (var i=0;i<show_first_tab_content_array.length;i=i+3) {
	     if (sf_content_type=='hot') {
		     sf_html_content=sf_html_content+'<div><div class="sf_728X250_tit_hk">'+show_first_tab_content_array[i+1]+'</div><div class="sf_728X250_s_hk"><a href="'+show_first_tab_content_array[i]+'">'+show_first_tab_content_array[i+2]+'</a></div></div>';
	         sf_html_content=sf_html_content+'<div class="CLEAR_sf"></div>';
		 } else {
		     sf_html_content=sf_html_content+'<div class="sf_728X250_tit"><a href="'+show_first_tab_content_array[i]+'">'+show_first_tab_content_array[i+1]+'</a></div>';
	         sf_html_content=sf_html_content+'<div class="sf_728X250_s">'+show_first_tab_content_array[i+2]+'</div>';
	     }
	}
	sf_html_content=sf_html_content+'</div>';
    //第一個標籤要顯示的內容結束
	sf_html_content=sf_html_content+'</div>';
    //第一個以外的標籤要顯示的內容開始
	sf_html_content=sf_html_content+'<div id="framead'+sfid+'" class="sf_728X250_1_boxbg">';
	//使用 iframe 方式載入廣告內容
	sf_html_content=sf_html_content+'<iframe id="sf_iframe'+sfid+'" name="sf_iframe'+sfid+'" src="" width="728" height="207" marginwidth="0" marginheight="0" scrolling="no" frameborder="0"></iframe>';
    //第一個以外的標籤要顯示的內容結束
	sf_html_content=sf_html_content+'</div>';
	//顯示內容區最下方圖片
	sf_html_content=sf_html_content+'<div><img id="endpic'+sfid+'" src="http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/end.gif" width="728" height="6" /></div>';
	sf_html_content=sf_html_content+'</div>';
    //預設為點擊第一個標籤
	sf_tab_html_script='change_tab(\'\',0,'+sfid+');';
    
	jQuery("div[tabdata]").eq(sfid).after(sf_html_content);

	eval(sf_tab_html_script);
}

  //Sales-Frontier 參數 val：要傳遞的關鍵字，參數 index：要改變的標籤索引，參數 id：呼叫的廣告版位索引
  function change_tab(val,index,id) {
	$("#tabnav"+id).css("background","url(http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/bt0"+(index+1)+".gif) no-repeat");
	//變更現有的 div 中有 sf_728X250_1_navo 樣式為 sf_728X250_1_nav 樣式
	$("#tabnav"+id).find("div[class=sf_728X250_1_navo]").toggleClass("sf_728X250_1_navo sf_728X250_1_nav");
	//將傳遞進來要改變的標籤中的 div 變更 sf_728X250_1_nav 樣式為 sf_728X250_1_navo 樣式
	$("#tabnav"+id).find("div").eq(index).toggleClass("sf_728X250_1_nav sf_728X250_1_navo");
    //依標籤索引變更版面最上方及最下方的圖片
	if (index==0) {
	    $("#toppic"+id).attr("src","http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/top.gif");
	    $("#endpic"+id).attr("src","http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/end.gif");
	} else {
	    $("#toppic"+id).attr("src","http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/top_"+index+".gif");
	    $("#endpic"+id).attr("src","http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/end_"+index+".gif");
	}
	//判斷傳遞進來的關鍵字，如果不是空值
	if (val!="") {
	   //隱藏原第一頁的標籤內容區塊
	   $("#firstad"+id).css("display","none");
	   //顯示廣告區的標籤內容區塊
       $("#framead"+id).css("display","block");
	   //變更廣告區的標籤內容區塊背景顏色
	   $("#framead"+id).css("background","url(http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/image/bg01_"+index+".gif) repeat-y");
	   //指定廣告區的標籤內容區塊中 iframe 的 src 屬性為產生 ysm 廣告的頁面（tab_iframe.html），並帶入傳遞進來的關鍵字（參數名：q）及標籤索引（參數名：index），達成 PM 的目的
	   $("#sf_iframe"+id).attr("src","http://googledrive.com/host/0B9q5yIkIXTXFblE4VF9ydlBlTTQ/ysm/ewdna/tab_iframe.html?q="+val+"&index="+index+"&rnd="+Math.random() + Date.parse(new Date()));
	//判斷傳遞進來的關鍵字，如果是空值
	} else {
	   //顯示原第一頁的標籤內容區塊
	   $("#firstad"+id).css("display","block");
	   //隱藏廣告區的標籤內容區塊
	   $("#framead"+id).css("display","none");
	   //指定廣告區的標籤內容區塊中 iframe 的 src 屬性為空白頁面
	   $("#sf_iframe"+id).attr("src","about:blank");
	}
  }

