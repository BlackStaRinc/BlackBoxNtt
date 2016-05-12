<!DOCTYPE html>
<html class="no-js" lang="en">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1">
<meta http-equiv="imagetoolbar" content="no" />
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta http-equiv="content-script-type" content="text/javascript">
<title>Nationalities and Countries | CET302</title>

<link rel="icon" href="assets/img/logo16.png" type="image/x-icon">
<link rel="shortcut icon" href="assets/img/logo16.png" type="image/x-icon">
<!-- CSS -->
<link href="assets/css/default.css" rel="stylesheet" type="text/css">
<link href="assets/css/common.css" rel="stylesheet" type="text/css">
<link href="assets/css/component.css" rel="stylesheet" type="text/css">

<!-- JS -->
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min.js"></script>


<script type="text/javascript" src="assets/js/modernizr.custom.js"></script>


</head>
	<body>
    
      <div class="container">	
      <header><h2>Nationalities and Countries</h2></header>
        	<div class="contents"> 
				<nav  class="nav">					
					<ul>
						<li>
                        <div class="dropdown">
							<a href="Home.html">
								<span class="icon">
									<i aria-hidden="true" class="icon-home"></i>
                                    </span>
								<span>Ana Sayfa</span>
                                </a>
                             	</div>
                            
						</li>
                  
						<li>
                        <div class="dropdown">
                       		<a href="Konular.html">
                         		<span class="icon">
                         			 <i aria-hidden="true" class="icon-konular"></i> 
                         			 </span>
                           		<span>Konu Anlatım</span>
                         	</a>
                          <div class="dropdown-content2">
                                   	<a href="Konu1.html"><span>Ülkeler-Milliyetler</span></a>
                                    <a href="Konu2.html"><span>Türkiyenin Bölgeleri</span></a>
                                    <a href="Konu3.html"><span>Ülkeler-Başkentleri</span></a>
                                    </div>
                               </div>
						</li>
						<li>
                        <div class="dropdown">
							<a href="Uygulama.html">
								<span class="icon">
									<i aria-hidden="true" class="icon-uygulama"></i>
								</span>
								<span>Uygulama</span>
							</a>
                            
                               </div>
						</li>
                        
						<li>
                        <div class="dropdown">
							<a href="Etkinlik.html">
								<span class="icon">
									<i aria-hidden="true" class="icon-etkinlik"></i>
								</span>
								<span>Etkinlik</span>
							</a>
                           
                               </div>
						</li>
						<li>
                        <div class="dropdown">
							<a href="Galeri.html">
								<span class="icon">
									<i aria-hidden="true" class="icon-galeri"></i>
								</span>
								<span>Galeri</span>
							</a>
                            
                              </div>
						</li>
						<li>
                        <div class="dropdown">
							<a href="Iletisim.php">
								<span class="icon">
									<i aria-hidden="true" class="icon-iletisim"></i>
								</span>
								<span>İletişim</span>
							</a>
                            <div class="dropdown-content6">
                                   	<a href="https://www.facebook.com/Nationalities-And-Countries-977855832310159/?fref=ts" target="_blank">Facebook</a>
                                    <a href="#">Youtube</a>
                                    <a href="#">Twitter</a>
                                    </div>
                              </div>
						</li>
					</ul>

			</nav>   
            
	<form action="kayit.php" method="post" target="_blank">
	
    <div class="Table" style="padding-top:10em">
	
    <div class="Row">
        <div class="Cell">
            <p>Ad Soyad</p>
        </div>
        <div class="Cell">
            <p><input type="text" name="ad"/></p>
        </div>
        
    </div>
    <div class="Row">
        <div class="Cell">
            <p>Yorum</p>
        </div>
        <div class="Cell">
            <p><input type="text" name="yorum"/></p>
        </div>
    </div>
    <div class="Row">
        <div class="Cell">
            <p>Oneri</p>
        </div>
        <div class="Cell">
            <p><input type="text" name="oneri" /></p>
        </div>
    </div>
    
    <div class="Row">
        <div class="Cell">
		<p>Degerlendirme</p>
        </div>
        <div class="Cell">
	  <p>
      <div class="rating-wrapper">
      <input type="radio" class="rating-input" id="rating-input-1-5" name="1" />
      <label for="rating-input-1-5" class="rating-star"></label>
      <input type="radio" class="rating-input" id="rating-input-1-4" name="2" />
      <label for="rating-input-1-4" class="rating-star"></label>
      <input type="radio" class="rating-input" id="rating-input-1-3" name="3" />
      <label for="rating-input-1-3" class="rating-star"></label>
      <input type="radio" class="rating-input" id="rating-input-1-2" name="4" />
      <label for="rating-input-1-2" class="rating-star"></label>
      <input type="radio" class="rating-input" id="rating-input-1-1" name="5" />
      <label for="rating-input-1-1" class="rating-star"></label>
      </div></p>
        </div>
        </div>
        
      <div class="Row">
        <div class="Cell">
        </div> 
        <div class="Cell">
        <input type="submit" value="Gönder">
        </div>
        </div>
   </div>
         
</form> 
      <div class="konu" style="margin-top:30em">
			<?php
			include "Oku.php"; 
			?>
		</div>
</div>
</div>
</body>

</html>
	