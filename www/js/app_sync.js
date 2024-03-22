var db;
var downloadtype;
var timer;
var sLang;
var bomba_seleccionada;
var dispensador;
var preco_dispensador;
var litros;
var lastTimeBackPress=0;
var timePeriodToExit=2000;
sLang = window.localStorage.getItem("sLang");
if(sLang == null)
{
	window.localStorage.setItem("sLang", 'pt');
	sLang =  window.localStorage.getItem("sLang");
}
var h = function () {  var h=Math.max(window.innerHeight, document.documentElement.clientHeight); if(h<420)h=520;return h;};
var new_height_box = (((h() - 40) - 182) / 2);
var new_height_box2 = (((h() - 40) - 234) / 2);
var new_height_box3 = (h() - (174-74));
var new_height_box4 = (h());
var new_height_box5 = (h() - (100));
var new_height_box_calc0 = (new_height_box > 200 ? 200 : new_height_box);
var new_height_box_calc = (new_height_box2 > 200 ? 200 : new_height_box2);
var MD5 = function(d){result = M(V(Y(X(d),8*d.length)));return result.toLowerCase()};function M(d){for(var _,m="0123456789ABCDEF",f="",r=0;r<d.length;r++)_=d.charCodeAt(r),f+=m.charAt(_>>>4&15)+m.charAt(15&_);return f}function X(d){for(var _=Array(d.length>>2),m=0;m<_.length;m++)_[m]=0;for(m=0;m<8*d.length;m+=8)_[m>>5]|=(255&d.charCodeAt(m/8))<<m%32;return _}function V(d){for(var _="",m=0;m<32*d.length;m+=8)_+=String.fromCharCode(d[m>>5]>>>m%32&255);return _}function Y(d,_){d[_>>5]|=128<<_%32,d[14+(_+64>>>9<<4)]=_;for(var m=1732584193,f=-271733879,r=-1732584194,i=271733878,n=0;n<d.length;n+=16){var h=m,t=f,g=r,e=i;f=md5_ii(f=md5_ii(f=md5_ii(f=md5_ii(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_hh(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_gg(f=md5_ff(f=md5_ff(f=md5_ff(f=md5_ff(f,r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+0],7,-680876936),f,r,d[n+1],12,-389564586),m,f,d[n+2],17,606105819),i,m,d[n+3],22,-1044525330),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+4],7,-176418897),f,r,d[n+5],12,1200080426),m,f,d[n+6],17,-1473231341),i,m,d[n+7],22,-45705983),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+8],7,1770035416),f,r,d[n+9],12,-1958414417),m,f,d[n+10],17,-42063),i,m,d[n+11],22,-1990404162),r=md5_ff(r,i=md5_ff(i,m=md5_ff(m,f,r,i,d[n+12],7,1804603682),f,r,d[n+13],12,-40341101),m,f,d[n+14],17,-1502002290),i,m,d[n+15],22,1236535329),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+1],5,-165796510),f,r,d[n+6],9,-1069501632),m,f,d[n+11],14,643717713),i,m,d[n+0],20,-373897302),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+5],5,-701558691),f,r,d[n+10],9,38016083),m,f,d[n+15],14,-660478335),i,m,d[n+4],20,-405537848),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+9],5,568446438),f,r,d[n+14],9,-1019803690),m,f,d[n+3],14,-187363961),i,m,d[n+8],20,1163531501),r=md5_gg(r,i=md5_gg(i,m=md5_gg(m,f,r,i,d[n+13],5,-1444681467),f,r,d[n+2],9,-51403784),m,f,d[n+7],14,1735328473),i,m,d[n+12],20,-1926607734),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+5],4,-378558),f,r,d[n+8],11,-2022574463),m,f,d[n+11],16,1839030562),i,m,d[n+14],23,-35309556),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+1],4,-1530992060),f,r,d[n+4],11,1272893353),m,f,d[n+7],16,-155497632),i,m,d[n+10],23,-1094730640),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+13],4,681279174),f,r,d[n+0],11,-358537222),m,f,d[n+3],16,-722521979),i,m,d[n+6],23,76029189),r=md5_hh(r,i=md5_hh(i,m=md5_hh(m,f,r,i,d[n+9],4,-640364487),f,r,d[n+12],11,-421815835),m,f,d[n+15],16,530742520),i,m,d[n+2],23,-995338651),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+0],6,-198630844),f,r,d[n+7],10,1126891415),m,f,d[n+14],15,-1416354905),i,m,d[n+5],21,-57434055),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+12],6,1700485571),f,r,d[n+3],10,-1894986606),m,f,d[n+10],15,-1051523),i,m,d[n+1],21,-2054922799),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+8],6,1873313359),f,r,d[n+15],10,-30611744),m,f,d[n+6],15,-1560198380),i,m,d[n+13],21,1309151649),r=md5_ii(r,i=md5_ii(i,m=md5_ii(m,f,r,i,d[n+4],6,-145523070),f,r,d[n+11],10,-1120210379),m,f,d[n+2],15,718787259),i,m,d[n+9],21,-343485551),m=safe_add(m,h),f=safe_add(f,t),r=safe_add(r,g),i=safe_add(i,e)}return Array(m,f,r,i)}function md5_cmn(d,_,m,f,r,i){return safe_add(bit_rol(safe_add(safe_add(_,d),safe_add(f,i)),r),m)}function md5_ff(d,_,m,f,r,i,n){return md5_cmn(_&m|~_&f,d,_,r,i,n)}function md5_gg(d,_,m,f,r,i,n){return md5_cmn(_&f|m&~f,d,_,r,i,n)}function md5_hh(d,_,m,f,r,i,n){return md5_cmn(_^m^f,d,_,r,i,n)}function md5_ii(d,_,m,f,r,i,n){return md5_cmn(m^(_|~f),d,_,r,i,n)}function safe_add(d,_){var m=(65535&d)+(65535&_);return(d>>16)+(_>>16)+(m>>16)<<16|65535&m}function bit_rol(d,_){return d<<_|d>>>32-_}

if(document.getElementById('box1')) document.getElementById('box1').style.height = (new_height_box > 200 ? 200 : new_height_box)+'px';
if(document.getElementById('box2')) document.getElementById('box2').style.height = '80px';
if(document.getElementById('box3')) document.getElementById('box3').style.height = (new_height_box > 200 ? 200 : new_height_box)+'px';
if(document.getElementById('box4')) document.getElementById('box4').style.height = '80px';
if((new_height_box_calc0 + new_height_box_calc0 + 182 + 40) < h()) document.querySelector(".login-box > .login-form").style.height = (h() - (new_height_box_calc0 + new_height_box_calc0 + 40))+'px';
if(document.getElementById('box5')) document.getElementById('box5').style.height = (new_height_box2 > 200 ? 200 : new_height_box2)+'px';
if(document.getElementById('box6')) document.getElementById('box6').style.height = (new_height_box2 > 200 ? 200 : new_height_box2)+'px';
if(document.getElementById('box6-logo')) document.getElementById('box6-logo').style.height = ((new_height_box2 > 200 ? 200 : new_height_box2) - 20)+'px';
if(document.getElementById('content_load')) document.getElementById('content_load').style.height = (new_height_box4)+'px';
if(document.getElementById('overlay-login')) document.getElementById('overlay-login').style.height = (new_height_box4)+'px';
if(document.getElementById('overlay')) document.getElementById('overlay').style.height = (new_height_box4)+'px';
if(document.getElementById('content')) document.getElementById('content').style.height = (new_height_box3)+'px';
if(document.getElementById('content-inner')) document.getElementById('content-inner').style.height = (new_height_box3)+'px';
if(document.getElementById('content2-login')) document.getElementById('content2-login').style.height = (new_height_box4)+'px';
if(document.getElementById('login-pos')) document.getElementById('login-pos').style.height = (new_height_box4)+'px';
if(document.getElementById('login-call-center')) document.getElementById('login-call-center').style.height = (new_height_box4)+'px';
function savestats(txt)
{
	$.ajax({type: 'POST', url: globalUrl+'admin/logs.php','dp':(new Date()).getTime(), data: {'info': txt}, dataType: 'html'});
}
function change_lang(lingua)
{
	window.localStorage.removeItem('sLang');
	window.localStorage.setItem("sLang", lingua);
	if(APP_ON == 2 || APP_ON == 1) window.location = 'index.html';
	else
	{
		window.location = 'index.php';
	}
}
function traduz()
{
	$('.lingua-trad').html(key_Lingua[sLang]);
	$('.contactos-trad').html(key_Contactos[sLang]);
	$('.logout-trad').html(key_Logout[sLang]);
	$('.conta-trad').html(key_conta[sLang]);
	$('.pagamentos-trad').html(key_pagamentos[sLang]);
	$('.consumos-trad').html(key_consumos[sLang]);
	$('.mensagens-trad').html(key_mensagens[sLang]);
	$('.sobre-nos-trad').html(key_sobre_nos[sLang]);
	$('.sobre-nos-2-trad').html(key_sobre_nos2[sLang]);
	$('.sobre-nos-2-trad-menu').html(key_sobre_nos2_menu[sLang]);
	$('.termos-legais-trad').html(key_termos_legais[sLang]);
	$('.termos-legais-2-trad').html(key_termos_legais2[sLang]);
	$('.termos-legais-2-trad-menu').html(key_termos_legais2_menu[sLang]);
	$('.mudar-password-2-trad-menu').html(key_mudar_password2_menu[sLang]);
	$('.contactos2-trad-menu').html(key_contactos_menu[sLang]);
	$('.posto-trad').html(key_posto_trad[sLang]);
	$('.cancelar-btn-trad').html(key_cancelar_btn[sLang]);
	$('.introduza-pin-label-trad').html(key_pin_label[sLang]);
	$('.pagamento-titulo-trad').html(key_titulo_pagamento[sLang]);
	$('.confirmacao-pagamento-titulo-trad').html(key_confirmacao_pagamento[sLang]);
	$('.aguarda-pagamento-trad').html(key_aguarda_pagamento[sLang]);
	$('.actualizar-pagamentos-trad').html(key_actualizar_pagamentos[sLang]);
	$('.aguardar-confirmacao-pagamento-trad').html(key_aguardar_confirmacao_pagamento[sLang]);
	$('.gerar-novo-token-trad').html(key_gerar_novo_token[sLang]);
	$('.iniciar-pagamento-trad').html(key_iniciar_pagamento[sLang]);
	$('.historico-pagamento-trad').html(key_historico_pagamento[sLang]);
	$('.definicao-posto-trad').html(key_definicao_posto[sLang]);
	$('.alterar-cartao-trad').html(key_alterar_cartao[sLang]);
	$('.criar-cartao-trad').html(key_criar_cartao[sLang]);
	$('.data-caract-trad').html(key_data_caract[sLang]);
	$('.nome-cliente-trad').html(key_nome_cliente[sLang]);
	$('.matricula-trad').html(key_matricula[sLang]);
	$('.alterar-matricula-titulo-trad').html(key_alterar_matricula_titulo[sLang]);
	$('.carregamentos-trad').html(key_carregamentos[sLang]);
	$('.pagamentos-pendentes-trad').html(key_pagamentos_pendentes[sLang]);
	$('.veiculos-trad').html(key_veiculos[sLang]);
	$('.condutores-trad').html(key_condutores[sLang]);
	$('.financeira-trad').html(key_financeira[sLang]);
	$('.configuracoes-trad').html(key_configuracoes[sLang]);
}
function str_replace(search, replace, subject, count)
{
	var i = 0, j = 0, temp = '', repl = '', sl = 0, fl = 0, f = [].concat(search), r = [].concat(replace), s = subject, ra = Object.prototype.toString.call(r) === '[object Array]', sa = Object.prototype.toString.call(s) === '[object Array]';   s = [].concat(s);

	if (count) { this.window[count] = 0;}

	for (i = 0, sl = s.length; i < sl; i++)
	{
		if (s[i] === '') { continue;}
		for (j = 0, fl = f.length; j < fl; j++)
		{
			temp = s[i] + '';
			repl = ra ? (r[j] !== undefined ? r[j] : '') : r[0];
			s[i] = (temp).split(f[j]).join(repl);
			if (count && s[i] !== temp)
			{
				this.window[count] += (temp.length - s[i].length) / f[j].length;
			}
		}
	}
	return sa ? s : s[0];
}

function loadAppNow()
{
	var new_height = ($(window).height() - ($('#app-header').outerHeight(true) + $('#app-footer').outerHeight(true)));
	var new_height2 = ($(window).height() - ($('#app-footer').outerHeight(true)));
	var new_height3 = ($(window).height());

	if(APP_ON == 1)
	{
		$.getScript('js/filter.js', function()
		{
		   $.getScript('js/app.js', function()
			{
				$.getScript('js/helpers.js', function()
				{
					traduz();
					init_app();

					$('.points-wrap').css('height', new_height3+'px');					
					$("#overlay").fadeOut("slow");
					$(".sign-up").css('display', 'none');
				});
			});
		});
	}
	else
	{
		traduz();
		init_app();
		$('.points-wrap').css('height', new_height3+'px');		
		$("#overlay").fadeOut("slow");
		$(".sign-up").css('display', 'block');

		if(window.localStorage.getItem('pos') == 1)
		{
			if(window.localStorage.getItem("active") == 'true')
			{
				window.location.hash="iniciar-pagamento";
			}
			else
			{
				window.location.hash="definicao-posto";
			}
		}
		else if(window.localStorage.getItem('callcenter') == 1)
		{
			window.location.hash="homepage-callcenter";
		}
		else
		{
			verificaPermissao();
		}
	}
}

document.onreadystatechange = function(e) {
  if(document.readyState == "interactive")
  {
		if(window.location.hash=='')mostra_animacao();
		else loadAppNow();
  }
}

function getWidth() {
	if (self.innerWidth) {
		return self.innerWidth;
	}

	if (document.documentElement && document.documentElement.clientWidth) {
		return document.documentElement.clientWidth;
	}

	if (document.body) {
		return document.body.clientWidth;
	}
}

function getHeight() {
	if (self.innerHeight) {
		return self.innerHeight;
	}

	if (document.documentElement && document.documentElement.clientHeight) {
		return document.documentElement.clientHeight;
	}

	if (document.body) {
		return document.body.clientHeight;
	}
}
function mostra_animacao()
{
	var w = getWidth();
	var h = getHeight();
	var frame_pos=0;


	var iDiv = document.createElement('div');
	iDiv.style.backgroundColor = '#ffffff';
	iDiv.style.display = 'block';
	iDiv.style.position = 'absolute';
	iDiv.style.left = (w/2) - 10 + "px";
	iDiv.style.top = (h/2) - 5 + "px";
	iDiv.style.width = "20px";
	iDiv.style.height = "15px";

	//document.getElementsByTagName('body')[0].appendChild(iDiv);
	boxWrapper = document.getElementById("overlay");
	boxWrapper.appendChild(iDiv);



	




	var iDiv2 = document.createElement('div');//logotipo
	var iDiv3 = document.createElement('div');//Intro
	var iDiv4 = document.createElement('div');
	var iDiv5 = document.createElement('div');
	var iDiv6 = document.createElement('div');
	var iDiv7 = document.createElement('div');
	var iDiv8 = document.createElement('div');
	var iDiv9 = document.createElement('div');
	var iDiv10 = document.createElement('div');
	var iDiv11 = document.createElement('div');
	var iDiv12 = document.createElement('div');
	var iDiv13 = document.createElement('div');
	var iDiv14 = document.createElement('div');
	var iDiv15 = document.createElement('div');
	var iDiv16 = document.createElement('div');
	var iDiv17 = document.createElement('div');
	var iDiv18 = document.createElement('div');
	var iDiv19 = document.createElement('div');
	var iDiv20 = document.createElement('div');
	var iDiv21 = document.createElement('div');
	var iDiv22 = document.createElement('div');
	var iDiv23 = document.createElement('div');
	var iDiv24 = document.createElement('div');
	var iDiv25 = document.createElement('div');


	iDiv3.style.display = 'block';
	iDiv3.style.position = 'absolute';
	iDiv3.style.backgroundColor = '#ffffff';
	iDiv3.style.left = "0px";
	iDiv3.style.top = "0px";
	iDiv3.style.width = "100%";
	iDiv3.style.height = "100%";
	boxWrapper.appendChild(iDiv3);



	function frame()
	{
		boxWrapper = document.getElementById("overlay");

		if(frame_pos==52)
		{
			clearInterval(animacao_id);
			//Abre a APP
			loadAppNow();
		}



		if(frame_pos==2)
		{
			iDiv.style.display = 'none';
			
			//iDiv2.style.backgroundColor = '#ffffff';
			iDiv2.style.display = 'block';
			iDiv2.style.position = 'absolute';
			iDiv2.style.left = (w/2)-150 + "px";
			//iDiv2.style.top = ((h/2)-190) + "px";
			iDiv2.style.top = (h/2)-150 + "px";
			iDiv2.style.width = "300px";
			iDiv2.style.height = "300px";
			boxWrapper.appendChild(iDiv2);

			var DOM_img = document.createElement("img");
			DOM_img.style.width = "100%";
			DOM_img.style.maxwidth = "300px";
			//DOM_img.style.height = "300px";

			//DOM_img.src = "img/intro.png";
			DOM_img.src = "img/anim/frame_1.jpg";
			
			iDiv2.appendChild(DOM_img);





			/*
			iDiv3.style.display = 'block';
			iDiv3.style.position = 'absolute';
			iDiv3.style.left = "0px";
			iDiv3.style.top = "350px";
			iDiv3.style.width = "100%";
			boxWrapper.appendChild(iDiv3);

			var DOM_img = document.createElement("img");
			DOM_img.style.width = "100%";
			DOM_img.src = "img/intro.png";
			
			iDiv3.appendChild(DOM_img);
			*/

		}

		var DOM_img = document.createElement("img");
		DOM_img.style.width = "100%";
		DOM_img.style.maxwidth = "300px";
		//DOM_img.style.height = "300px";

		if(frame_pos==4)  {iDiv4.style.display = 'block';iDiv4.style.position = 'absolute';iDiv4.style.left = (w/2)-150 + "px";iDiv4.style.top = (h/2)-150 + "px";iDiv4.style.width = "300px";iDiv4.style.height = "300px";boxWrapper.appendChild(iDiv4);DOM_img.src = "img/anim/frame_2.jpg"; iDiv4.appendChild(DOM_img);}
		if(frame_pos==5)  {iDiv5.style.display = 'block';iDiv5.style.position = 'absolute';iDiv5.style.left = (w/2)-150 + "px";iDiv5.style.top = (h/2)-150 + "px";iDiv5.style.width = "300px";iDiv5.style.height = "300px";boxWrapper.appendChild(iDiv5);DOM_img.src = "img/anim/frame_3.jpg"; iDiv5.appendChild(DOM_img);}
		if(frame_pos==6)  {iDiv6.style.display = 'block';iDiv6.style.position = 'absolute';iDiv6.style.left = (w/2)-150 + "px";iDiv6.style.top = (h/2)-150 + "px";iDiv6.style.width = "300px";iDiv6.style.height = "300px";boxWrapper.appendChild(iDiv6);DOM_img.src = "img/anim/frame_4.jpg"; iDiv6.appendChild(DOM_img);}
		if(frame_pos==7)  {iDiv7.style.display = 'block';iDiv7.style.position = 'absolute';iDiv7.style.left = (w/2)-150 + "px";iDiv7.style.top = (h/2)-150 + "px";iDiv7.style.width = "300px";iDiv7.style.height = "300px";boxWrapper.appendChild(iDiv7);DOM_img.src = "img/anim/frame_5.jpg"; iDiv7.appendChild(DOM_img);}
		if(frame_pos==8)  {iDiv8.style.display = 'block';iDiv8.style.position = 'absolute';iDiv8.style.left = (w/2)-150 + "px";iDiv8.style.top = (h/2)-150 + "px";iDiv8.style.width = "300px";iDiv8.style.height = "300px";boxWrapper.appendChild(iDiv8);DOM_img.src = "img/anim/frame_6.jpg"; iDiv8.appendChild(DOM_img);}
		if(frame_pos==9)  {iDiv9.style.display = 'block';iDiv9.style.position = 'absolute';iDiv9.style.left = (w/2)-150 + "px";iDiv9.style.top = (h/2)-150 + "px";iDiv9.style.width = "300px";iDiv9.style.height = "300px";boxWrapper.appendChild(iDiv9);DOM_img.src = "img/anim/frame_7.jpg"; iDiv9.appendChild(DOM_img);}
		if(frame_pos==10){iDiv10.style.display = 'block';iDiv10.style.position = 'absolute';iDiv10.style.left = (w/2)-150 + "px";iDiv10.style.top = (h/2)-150 + "px";iDiv10.style.width = "300px";iDiv10.style.height = "300px";boxWrapper.appendChild(iDiv10);DOM_img.src = "img/anim/frame_8.jpg"; iDiv10.appendChild(DOM_img);}
		if(frame_pos==11){iDiv11.style.display = 'block';iDiv11.style.position = 'absolute';iDiv11.style.left = (w/2)-150 + "px";iDiv11.style.top = (h/2)-150 + "px";iDiv11.style.width = "300px";iDiv11.style.height = "300px";boxWrapper.appendChild(iDiv11);DOM_img.src = "img/anim/frame_9.jpg"; iDiv11.appendChild(DOM_img);}
		if(frame_pos==12){iDiv12.style.display = 'block';iDiv12.style.position = 'absolute';iDiv12.style.left = (w/2)-150 + "px";iDiv12.style.top = (h/2)-150 + "px";iDiv12.style.width = "300px";iDiv12.style.height = "300px";boxWrapper.appendChild(iDiv12);DOM_img.src = "img/anim/frame_10.jpg";iDiv12.appendChild(DOM_img);}
		if(frame_pos==13){iDiv13.style.display = 'block';iDiv13.style.position = 'absolute';iDiv13.style.left = (w/2)-150 + "px";iDiv13.style.top = (h/2)-150 + "px";iDiv13.style.width = "300px";iDiv13.style.height = "300px";boxWrapper.appendChild(iDiv13);DOM_img.src = "img/anim/frame_11.jpg";iDiv13.appendChild(DOM_img);}
		if(frame_pos==14){iDiv14.style.display = 'block';iDiv14.style.position = 'absolute';iDiv14.style.left = (w/2)-150 + "px";iDiv14.style.top = (h/2)-150 + "px";iDiv14.style.width = "300px";iDiv14.style.height = "300px";boxWrapper.appendChild(iDiv14);DOM_img.src = "img/anim/frame_12.jpg";iDiv14.appendChild(DOM_img);}
		if(frame_pos==15){iDiv15.style.display = 'block';iDiv15.style.position = 'absolute';iDiv15.style.left = (w/2)-150 + "px";iDiv15.style.top = (h/2)-150 + "px";iDiv15.style.width = "300px";iDiv15.style.height = "300px";boxWrapper.appendChild(iDiv15);DOM_img.src = "img/anim/frame_13.jpg";iDiv15.appendChild(DOM_img);}
		if(frame_pos==16){iDiv16.style.display = 'block';iDiv16.style.position = 'absolute';iDiv16.style.left = (w/2)-150 + "px";iDiv16.style.top = (h/2)-150 + "px";iDiv16.style.width = "300px";iDiv16.style.height = "300px";boxWrapper.appendChild(iDiv16);DOM_img.src = "img/anim/frame_14.jpg";iDiv16.appendChild(DOM_img);}
		if(frame_pos==17){iDiv17.style.display = 'block';iDiv17.style.position = 'absolute';iDiv17.style.left = (w/2)-150 + "px";iDiv17.style.top = (h/2)-150 + "px";iDiv17.style.width = "300px";iDiv17.style.height = "300px";boxWrapper.appendChild(iDiv17);DOM_img.src = "img/anim/frame_15.jpg";iDiv17.appendChild(DOM_img);}
		if(frame_pos==18){iDiv18.style.display = 'block';iDiv18.style.position = 'absolute';iDiv18.style.left = (w/2)-150 + "px";iDiv18.style.top = (h/2)-150 + "px";iDiv18.style.width = "300px";iDiv18.style.height = "300px";boxWrapper.appendChild(iDiv18);DOM_img.src = "img/anim/frame_16.jpg";iDiv18.appendChild(DOM_img);}
		if(frame_pos==19){iDiv19.style.display = 'block';iDiv19.style.position = 'absolute';iDiv19.style.left = (w/2)-150 + "px";iDiv19.style.top = (h/2)-150 + "px";iDiv19.style.width = "300px";iDiv19.style.height = "300px";boxWrapper.appendChild(iDiv19);DOM_img.src = "img/anim/frame_17.jpg";iDiv19.appendChild(DOM_img);}
		if(frame_pos==20){iDiv20.style.display = 'block';iDiv20.style.position = 'absolute';iDiv20.style.left = (w/2)-150 + "px";iDiv20.style.top = (h/2)-150 + "px";iDiv20.style.width = "300px";iDiv20.style.height = "300px";boxWrapper.appendChild(iDiv20);DOM_img.src = "img/anim/frame_18.jpg";iDiv20.appendChild(DOM_img);}
		if(frame_pos==21){iDiv21.style.display = 'block';iDiv21.style.position = 'absolute';iDiv21.style.left = (w/2)-150 + "px";iDiv21.style.top = (h/2)-150 + "px";iDiv21.style.width = "300px";iDiv21.style.height = "300px";boxWrapper.appendChild(iDiv21);DOM_img.src = "img/anim/frame_19.jpg";iDiv21.appendChild(DOM_img);}
		if(frame_pos==22){iDiv22.style.display = 'block';iDiv22.style.position = 'absolute';iDiv22.style.left = (w/2)-150 + "px";iDiv22.style.top = (h/2)-150 + "px";iDiv22.style.width = "300px";iDiv22.style.height = "300px";boxWrapper.appendChild(iDiv22);DOM_img.src = "img/anim/frame_20.jpg";iDiv22.appendChild(DOM_img);}
		if(frame_pos==23){iDiv23.style.display = 'block';iDiv23.style.position = 'absolute';iDiv23.style.left = (w/2)-150 + "px";iDiv23.style.top = (h/2)-150 + "px";iDiv23.style.width = "300px";iDiv23.style.height = "300px";boxWrapper.appendChild(iDiv23);DOM_img.src = "img/anim/frame_21.jpg";iDiv23.appendChild(DOM_img);}
		if(frame_pos==24){iDiv24.style.display = 'block';iDiv24.style.position = 'absolute';iDiv24.style.left = (w/2)-150 + "px";iDiv24.style.top = (h/2)-150 + "px";iDiv24.style.width = "300px";iDiv24.style.height = "300px";boxWrapper.appendChild(iDiv24);DOM_img.src = "img/anim/frame_22.jpg";iDiv24.appendChild(DOM_img);}
		if(frame_pos==30){iDiv25.style.display = 'block';iDiv25.style.position = 'absolute';iDiv25.style.left = (w/2)-150 + "px";iDiv25.style.top = (h/2)-150 + "px";iDiv25.style.width = "300px";iDiv25.style.height = "300px";iDiv25.style.opacity = "0.1";boxWrapper.appendChild(iDiv25);DOM_img.src = "img/anim/frame_23.jpg";iDiv25.appendChild(DOM_img);}
		if(frame_pos==31){iDiv25.style.opacity = "0.2";}
		if(frame_pos==32){iDiv25.style.opacity = "0.3";}
		if(frame_pos==33){iDiv25.style.opacity = "0.4";}
		if(frame_pos==34){iDiv25.style.opacity = "0.5";}
		if(frame_pos==35){iDiv25.style.opacity = "0.6";}
		if(frame_pos==36){iDiv25.style.opacity = "0.7";}
		if(frame_pos==37){iDiv25.style.opacity = "0.8";}
		if(frame_pos==38){iDiv25.style.opacity = "0.9";}
		if(frame_pos==39){iDiv25.style.opacity = "1.0";}



		frame_pos++;
	}
	
	var animacao_id = setInterval(frame, 100);
}

function check_element(ele)
{
	var all = document.getElementsByTagName("*");
	var totalele = all.length;
	var per_inc = 100 / all.length;
	if ($(ele).on())
	{
		var prog_width = per_inc + Number(document.getElementById("progress_width").value);
		document.getElementById("progress_width").value = prog_width;
		$("#bar1").animate({
			width: prog_width + "%"
		}, 1, function()
		{
			var tt = Math.round(str_replace('%', '', document.getElementById("bar1").style.width));
			if (tt == "100")
			{
				if(APP_ON == 0 || APP_ON == 2)
				{
					//loadAppNow();
				}
			}
		});
	}
	else
	{
		set_ele(ele);
	}
}
function fetchHeader(url, wch) {
    try {
        var req=new XMLHttpRequest();
        req.open("HEAD", url, false);
        req.send(null);
        if(req.status== 200){
            return req.getResponseHeader(wch);
        }
        else return false;
    } catch(er) {
        return er.message;
    }
}
function UrlExists(url)
{
    var http = new XMLHttpRequest();
    http.open('HEAD', url, false);
    http.send();
    return http.status!=404;
}

function set_ele(set_element) {
  check_element(set_element);
}

function checkConnection()
{
	var networkState = navigator.connection.type;

	var states = {};
	states[Connection.UNKNOWN]  = 'Unknown connection';
	states[Connection.ETHERNET] = 'Ethernet connection';
	states[Connection.WIFI]     = 'WiFi connection';
	states[Connection.CELL_2G]  = 'Cell 2G connection';
	states[Connection.CELL_3G]  = 'Cell 3G connection';
	states[Connection.CELL_4G]  = 'Cell 4G connection';
	states[Connection.CELL]     = 'Cell generic connection';
	states[Connection.NONE]     = 'No network connection';

	return states[networkState];
}

function onOnline()
{
	if(substr_count_v(window.location.href, 'index_nonet.html')) window.location = 'index.html';
}
function onOffline()
{
	if(substr_count_v(window.location.href, 'index.html')) window.location = 'index_nonet.html';
}
function onBackKeyDown(e)
{
	e.preventDefault();
    e.stopPropagation();
    if(new Date().getTime() - lastTimeBackPress < timePeriodToExit){
        navigator.app.exitApp();
    }else{
        window.plugins.toast.showWithOptions(
            {
              message: "Carregue outra vez para sair.",
              duration: "short", // which is 2000 ms. "long" is 4000. Or specify the nr of ms yourself.
              position: "bottom",
              addPixelsY: -40  // added a negative value to move it up a bit (default 0)
            }
          );

        lastTimeBackPress = new Date().getTime();
    }
}
function onbatterylow(){dialog("Battery is low");}
function onbatterycritical(){dialog("Battery is critical, please save your work!");}

if(APP_ON == 2 || APP_ON == 1)
{
	document.addEventListener("deviceready", init, false);
	function init()
	{
		document.addEventListener("online", onOnline, false);
		document.addEventListener("offline", onOffline, false);
		document.addEventListener("backbutton", onBackKeyDown, false);
		window.localStorage.setItem("autologin","0");
		//loadAppNow();
	}
}
$("body").on("keyup blur",".allownumericwithdecimal",function (event) {
    $(this).val($(this).val().replace(/[^0-9\.\,]/g,''));
    if (
        (event.which != 46 || $(this).val().indexOf('.') !== -1) &&
        (event.which != 44 || $(this).val().indexOf(',') !== -1) &&
        (event.which < 48 || event.which > 57) &&
        event.which !=69 && event.which != 188 && event.which != 8 && event.which != 46 && event.which != 37 && event.which != 39 )
    {
        event.preventDefault();
    }

    if($(this).val().replace(/[^.]/g, "").length > 1 && (event.which == 110 || event.which == 190))
    {
        var sliceOne = $(this).val().toString().substring(0, event.target.selectionStart - 1);
        var sliceTwo = $(this).val().toString().substring(event.target.selectionStart, $(this).val().toString().lenght);8
        $(this).val( sliceOne + sliceTwo );
    }

    var hasPeriod = $(this).val().toString().indexOf(".");
    if(hasPeriod != -1){
        var subss= Number($(this).val().toString().substring(0, hasPeriod + 5));
        $(this).val(subss);
    }
});

function testar()
{
	var lat = window.localStorage.getItem('lat');
	var lon = window.localStorage.getItem('lng');
	lat2=41.287673;
	lon2=-8.627074;

	var sApp = startApp.set({ /* params */
            "action":"ACTION_VIEW",
            "category":"CATEGORY_DEFAULT",
            "type":"text/css",
            "package":"com.google.android.apps.maps",
            "uri":"http://maps.google.com/maps?saddr="+lat2+","+lon2+"&daddr="+lat+","+lon+"",
            "intentstart":"startActivity"
        });
	sApp.start(function() { /* success */
	       //alert("OK");
	    }, function(error) { /* fail */
	       alert(error);
	});
}

window.onerror = function(message, url, lineNumber) {  
  //alert(message+', '+url+', '+lineNumber);
};  