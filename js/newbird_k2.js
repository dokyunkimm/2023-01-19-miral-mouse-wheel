$(function() {
    function numberWithCommas(x) { return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ""); }

	
	$('.vslSct').css('height', $(window).outerHeight());
	$('.mrlCntnr .vslSct .vslVdo > video').css('height', $(window).outerHeight());
	
	//popUp
	var thisSclTop;
	var vdoPopFlg = false;
	// wndOtw = $(window).outerWidth();

	//popUp 추가 공통 영역
	$('.sct04 .vdoBx').click(function(){
		$(".mrlWrp").addClass("onnPop");
        if(wndOtw <= 1500){
            thisSclTop = $(window).scrollTop();
            $("body, .mrlWrp").css({
                "overflow": "hidden",
                "height": "100vh",
            });
			$(".mrlWrp").scrollTop(thisSclTop);

        }
    });

    //vdo 시작, popUp class 추가
    $('.sct04 .vdoBx01').click(function(){
        $('#ytbPop01').addClass('active');
        $("#ytbPop01 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        vdoPopFlg = true;

    });
    $('.sct04 .vdoBx02').click(function(){
        $('#ytbPop02').addClass('active');
        $("#ytbPop02 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        vdoPopFlg = true;

	});
    $('.sct04 .vdoBx03').click(function(e){
        $('#ytbPop03').addClass('active');
        $("#ytbPop03 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        vdoPopFlg = true;
		
    });
    
    //popUp class 제거
    $('#wrapSub01 .closeBtn, #wrapSub01 .popUpBg').click(function(){
        $('#wrapSub01 .popUp').removeClass('active');
        $(window).scrollTop(thisSclTop);
        $(".mrlWrp").removeClass("onnPop");

        if(wndOtw <= 1500){
            $('body,html').css('overflow', '');
            $("body, .mrlWrp").removeAttr("style");
            $(window).scrollTop(thisSclTop);
        }
    });
    //vdo 정지
    $('#wrapSub01 .closeBtn, #ytbPop01 .popUpBg').click(function(){
        $("#ytbPop01 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        vdoPopFlg = false;

        if(wndOtw <= 1500){
            $("#ytbPop01 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    });
    $('#wrapSub01 .closeBtn, #ytbPop02 .popUpBg').click(function(){
        $("#ytbPop02 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        vdoPopFlg = false;

        if(wndOtw <= 1500){
            $("#ytbPop02 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    });
    $('#wrapSub01 .closeBtn, #ytbPop03 .popUpBg').click(function(){
        $("#ytbPop03 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        vdoPopFlg = false;

        if(wndOtw <= 1500){
            $("#ytbPop03 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'pauseVideo' + '","args":""}', '*');
        }
    });

    // 1979년도 카운트
    function numCounter01() {
        cntFlg = false;
        var countConTxt= 1979;
        $({ val : 0 }).animate({ val : countConTxt }, {
            duration: 700,
            step: function() {
				var num = numberWithCommas(Math.floor(this.val));
				$(".countCon").text(num);
            },
            complete: function() {
				var num = numberWithCommas(Math.floor(this.val));
				$(".countCon").text(num);
            }
        });
    }
    
    // 비주얼 마우스 아이콘
    $('.vslSct > div.mouseIcnScrll > a').click(function() {
        $('html, body').animate({
            scrollTop : $('.sct01').offset().top
        });
        // 섹션 01 타이틀 fade up
        setTimeout(function() {
            $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').addClass('on');
            if(cntFlg){
                numCounter01();
            }
        }, 100);
    });
    
    // 비주얼 타이틀 영역 fade up
    setTimeout(function() {
        $('.vslSct .ttlFdUp').addClass('on');
    }, 300)

    

    let cntFlg = true;
    let cntFlg2 = true;
    var sct02H = 2500;
    var sct02_fntSze = 60;
    var sct02_lneHgh = 80;
    var sct02_mxFntSze = 1500;
    var sct02_mxLneHgh = 2554;
    var sct02_mxFntSze_times = 0.6;
    var cnt02_offsetTop = 0.5;
    
	var mobMde = false;
	var whlFlg = true;
	var idx = 0;
	var txtAniMaxFntSze = 1500;
	var txtAniMaxLneHgh = 2500;
	var txtAniMaxOpt = 1;
	var txtAniPer = 0;
	var aft;
	var wndOtw;
    var wndOth;
    var wndIth;
    var winSclTop;
	var txtEvnt = true;

	var nowSct = 0;
	var innBoxSclLck = false;

    var mobTrnFlg = true;
	
    $(window).resize(function(){
		intStt();
		mobChk();
		itrStt(mobMde);
        intSttOnc();
    });
	intStt();
	mobChk()
	itrStt(mobMde);
    intSttOnc();


    // 메인 히어로 영역
    
    function intSttOnc(){
        if(mobTrnFlg && wndOtw <= 540){
            mobTrnFlg = false;
            $('.sct01 .txtBx01').css('height', $(window).outerHeight());
            $('.sct01 .txtBx01 .scrllBx01').css('height', $(window).outerHeight());
        } else if(!mobTrnFlg  && wndOtw > 540) {
            mobTrnFlg = true;
            $('.sct01 .txtBx01').removeAttr("style");
            $('.sct01 .txtBx01 .scrllBx01').removeAttr("style");
        }
    }
    
	function intStt(){
		wndOth = $(window).outerHeight();
        wndOtw = $(window).outerWidth();
        wndIth = $(window).innerHeight();
        winSclTop = $(window).scrollTop();

		sct02H = wndOth;

        
        if(wndOtw <= 540){
            sct02_fntSze = 23;
            sct02_lneHgh = 43;
    
            sct02_mxFntSze = 1200;
            sct02_mxLneHgh = 2000;
            sct02_mxFntSze_times = 0.55;
    
            sct02H = 1700;

            cnt02_offsetTop = 0.8;

            
        } else if(wndOtw <= 1024){
            sct02_fntSze = 42;
            sct02_lneHgh = 62;
    
            sct02_mxFntSze = 2100;
            sct02_mxLneHgh = 3500;
            sct02_mxFntSze_times = 0.5;
    
            sct02H = 2300;
        } else {
            sct02_fntSze = 60;
            sct02_lneHgh = 80;
    
            sct02_mxFntSze = 1500;
            sct02_mxLneHgh = 2554;
            sct02_mxFntSze_times = 0.6;
            
            sct02H = 2500;

            cnt02_offsetTop = 0.5;
        }
	}
	function itrStt(flg){
		if(flg){
            $('html, body').removeAttr("style");
			whlFlg = false;
		} else {
			$('html, body').css('overflow', 'hidden');
			idx = 0;
			txtAniMaxFntSze = 1500;
			txtAniMaxLneHgh = 2500;
			txtAniMaxOpt = 1;
			txtAniPer = 0;
			aft;
			whlFlg = true;
            
		}
	}
	function mobChk(){
		mobMde = wndOtw > 1500 ? false : true;
	}

	$('.asd .rgt > ul > li.topBtn > a').click(function() {
		// 헤더 스타일 삭제
		$('.mrlHdr').removeAttr('style');

		$('.asd .rgt > ul > li.prg .prgrssBrWrp').removeAttr('style');
		$('.sct02 *').removeAttr('style');

		$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').removeAttr('style');
		$('.bgSizeChnge .bgDmmd').removeAttr('style');
		$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b').removeClass('on');
		$('.sproutBgWrp').removeAttr('style');
		$('.bgSizeChnge').removeClass('sizeUp');
		$('.sctPcScrlBx').animate({
			scrollTop : 0
		});

		// 텍스트 커지는
		$('.sct02 > div .txtCnt01 > h2').removeClass('on');
						
		$('.sct02 > div .txtCnt01 .fdUp').removeClass('active');
		$('.sct02 > div .txtCnt01').addClass('opcty');

		$('.sct02 > div .txtCnt02 .fdUp').removeClass('active');
		$('.sct02 > div .txtCnt02 > h2 .txtBg').removeClass('bgClr');
		
		$('.sct02 > div .txtCnt01 > h2').removeAttr("style");
		$('.sct02 > div .txtCnt01 > h2 b, .sct02 > div .txtCnt01 > h2 span').removeAttr("style");

		// 텍스트 배경색 채워지기
		$('.vdoCntWrp > ul > li').removeClass('active');
		$('.sct03 .txt > p .drkGreenBg').removeClass('bgClr');

		txtEvnt = true;
		cntFlg = true;

		nowSct = 0;

		$('.asd .rgt > ul > li.prg .prgrssBrWrp').removeAttr('style');
		$('.bgSizeChnge').removeClass('sizeUp');
		$('.bgDmmd').css('opacity', '0');
		$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').removeAttr('style');
		$('.sproutBgWrp').removeAttr('style');
		$('.asd').removeClass('shw');
		$(".mrlHdr").removeClass("whtBg");

		innBoxSclLck = true;
		
		sctChn();
	});

	$('.sctPcScrlBx').scroll(function(){
		if(innBoxSclLck) return false;
		if($('.sctPcScrlBx').scrollTop() > 0 && $('.sctPcScrlBx').scrollTop() + wndOth < $('.sctCntWrp').outerHeight()){
			$('.sproutBgWrp').css('position', 'fixed');
			$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').addClass('on');
		} else if($('.sctPcScrlBx').scrollTop() + wndOth >= $('.sctCntWrp').outerHeight() ){
			$('.sproutBgWrp').css({
				'position': 'absolute',
				'top': 'auto',
				'bottom': '0',
			});
		}
		// 배경 커짐 및 1979타이틀 opacity 조절
		if($('.sctPcScrlBx').scrollTop() >= wndOth * 0.05) {
			$('.bgSizeChnge').addClass('sizeUp');
			$('.bgDmmd').css('opacity', '1');
			$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('opacity', ( 1.2 - ($('.sctPcScrlBx').scrollTop() / $('.txtBx01').outerHeight()) ) );
			$('.asd .rgt > ul > li.prg .prgrssBrWrp').css('background-color', 'rgba(255,255,255,0.15)');
			if(wndOtw >= 540) {
				$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('color', '#fff');
			}
		}
		
		// 1979타이틀이 완전히 위로 가려졌을 때 opacity 0
		if($('.sctPcScrlBx').scrollTop() + wndOth / 2 >= $('.txtBx01').outerHeight() ) {
			$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('opacity', '0')
		}

		// 두 번째 1993년 타이틀 카운트
		if($('.sctPcScrlBx').scrollTop() + wndOth * 0.5 >= $('.cnt02').offset().top) {
			if(cntFlg2){
				cntFlg2 = false;
				var countConTxt2= 1993;
				$({ val : 1979 }).animate({ val : countConTxt2 }, {
					duration: 1000,
					step: function() {
					var num = numberWithCommas(Math.floor(this.val));
					$(".countCon2").text(num);
					},
					complete: function() {
					var num = numberWithCommas(Math.floor(this.val));
					$(".countCon2").text(num);
					}
				});
			}
		} else {
			if(cntFlg2 != true){
				cntFlg2 = true;
				var countConTxt2= 1993;
				$({ val : 1979 }).animate({ val : countConTxt2 }, {
					duration: 1000,
					step: function() {
					var num = numberWithCommas(Math.floor(this.val));
					$(".countCon2").text(num);
					},
					complete: function() {
					var num = numberWithCommas(Math.floor(this.val));
					$(".countCon2").text(num);
					}
				});
			}
		}

		// 년도별 이미지 스크롤 모션
		if($('.sctPcScrlBx').scrollTop() + (wndOth / 2) >= $('.miralHstryImg > div .hstryImgCntWrp').offset().top ){
			$('.miralHstryImg > div > div > .lftImgBx > ul > li').css({
				'transform': 'translateY(' + -(($('.sctPcScrlBx').scrollTop() - $('.miralHstryImg > div .hstryImgCntWrp').offset().top) / ($('.miralHstryImg > div .hstryImgCntWrp').outerHeight() - wndOth) * 24) + 'px)', 
			});
			$('.miralHstryImg > div > div > .rghtImgBx > ul > li').css({
				'transform': 'translateY(' + (($('.sctPcScrlBx').scrollTop() - $('.miralHstryImg > div .hstryImgCntWrp').offset().top) / ($('.miralHstryImg > div .hstryImgCntWrp').outerHeight() - wndOth) * 24) + 'px)', 
			});
		} else {
			$('.miralHstryImg > div > div > .lftImgBx > ul > li').css({
				'transform': 'translateY(0)', 
			});
			$('.miralHstryImg > div > div > .rghtImgBx > ul > li').css({
				'transform': 'translateY(0)', 
			});
		}
	});

	function trxSclLck(drt){
		if(whlFlg) return false;
		setTimeout(function(){
			whlFlg = true;
		},drt);
	}

	function sctChn(){
		if(!whlFlg || vdoPopFlg) return false;
		whlFlg = false;
		
		var delta = 0;
		var winEvent = "";
		if(!winEvent) winEvent = window.event;
		if(winEvent.wheelDelta) {
			delta = winEvent.wheelDelta / 120;
			if(window.opera) delta = -delta;
		}
		else if(winEvent.detail) {
			delta = -winEvent.detail / 3;
		}


		if(Math.abs(delta) < 1){

		} else if(delta < 0) {
			if(nowSct < 1 || $('.sctPcScrlBx').scrollTop() + wndOth == $('.sctCntWrp').outerHeight()){
				bfrSct = nowSct;
				nowSct++;
			}
		} else if(delta > 0) {
			if(nowSct > 1 || $('.sctPcScrlBx').scrollTop() == 0){
				bfrSct = nowSct;
				nowSct--;
			}
		}

		

		if(nowSct < 0) nowSct = 0;
		if(nowSct > 5) nowSct = 5;
		
		if(nowSct == 0){
			$('.asd .rgt > ul > li.prg .prgrssBrWrp').removeAttr('style');
			$('.bgSizeChnge').removeClass('sizeUp');
			$('.bgDmmd').css('opacity', '0');
			$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').removeAttr('style');
			$('.sproutBgWrp').removeAttr('style');
			$('.asd').removeClass('shw');
			$(".mrlHdr").removeClass("whtBg");
		} else {
			$('.asd').addClass('shw');
		}

		if(nowSct != 1){
			$(".sctPcScrlBx").css("pointer-events","none");
		} else {
			$(".sctPcScrlBx").css("pointer-events","all");
		}

		if($(window).outerWidth() >= 1500){
			if(nowSct > 0){
				$(".prgrssBr").css("height",(((nowSct) / 4) * 100) + "%");
			} else {
				$(".prgrssBr").css("height","0");
			}
		}

		if(nowSct == 1){
			$(".mrlHdr").addClass("whtBg");
		}

		if(nowSct == 2){
			$('.mrlHdr').css({'top':'-100%', 'pointer-events': 'none'});
		} else {
			$('.mrlHdr').removeAttr('style');
		}

		if(nowSct < 4){
			$('.asd').removeClass('absol');
			$('.asd').css({
				'bottom' : '70px',
			});
		};


		console.log(nowSct);
		jQuery("html,body").stop().animate({
			scrollTop : ($(window).outerHeight() * nowSct) + "px",
		},500,function(){
			if(nowSct == 0){
				trxSclLck(0);
				$('.sproutBgWrp').css({
					'position': 'absolute',
					'top': 'auto',
					'bottom': '0',
				});
				$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').removeClass('on');
				cntFlg = true;
				innBoxSclLck = false;
			}
			
			if(nowSct == 1){
				$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').addClass('on');
				if(cntFlg) numCounter01();
				trxSclLck(0);
				txtEvnt = true;
				$('.sct02 > div .txtCnt01 > h2').removeAttr("style");
				$('.sct02 > div .txtCnt01 > h2').removeClass('on');
				$('.sct02 > div .txtCnt01 > h2 b, .sct02 > div .txtCnt01 > h2 span').removeAttr("style");
				$('.sct02 > div .txtCnt01').addClass('opcty');
				$('.sct02 > div .txtCnt02 .fdUp').removeClass('active');
				$('.sct02 > div .txtCnt01 .fdUp').removeClass('active');
				$('.sct02 > div .txtCnt02 > h2 .txtBg').removeClass('bgClr');
			}

			if(nowSct == 2){
				trxSclLck(0);
				
				$('.asd .rgt > ul > li.prg .prgrssBrWrp').removeAttr('style');
				if(txtEvnt) {
					txtEvnt = false;
					txtAniPer = 0;
					setTimeout(function() {
						$('.sct02 > div .txtCnt01 .fdUp').addClass('active');
					}, 300);
					setTimeout(function() {
						// 문구, 라인하이트, 텍스트 opacity 조절 영역
						var interval = setInterval(function() {
							if(txtAniPer < 1.01){
								txtAniPer = txtAniPer + 0.01;
								$('.sct02 > div .txtCnt01 > h2').css({
									'font-size' : (sct02_fntSze + (txtAniMaxFntSze * txtAniPer)) + 'px',
									'line-height' : (sct02_lneHgh + (txtAniMaxLneHgh * txtAniPer)) + 'px',
									'-webkit-text-fill-color' : 'rgba(0,0,0,' + (1.1 - (txtAniMaxOpt * txtAniPer)) + ')',
								});
								
								$('.sct02 > div .txtCnt01 > h2').addClass('on');
								$('.sct02 > div .txtCnt01 > h2 b, .sct02 > div .txtCnt01 > h2 span').css('font-weight','900');
							}
	
						}, 20);
						setTimeout(function() {
							clearInterval(interval);
							interval = 0;
						}, 1200);
						// 문구가 다 커지고 사라짐. 사라진 이후 타이틀 올라오고 텍스트 배경 채워짐.
						setTimeout(function() {
							$('.sct02 > div .txtCnt01').removeClass('opcty');
							$('.sct02 > div .txtCnt02 .fdUp').addClass('active');
							$('.sct02 > div .txtCnt02 > h2 .txtBg').addClass('bgClr');
						}, 1200);
					}, 1100);
				}
				$('.sct03 .txt > p .drkGreenBg').removeClass('bgClr');
			}
	
			if(nowSct == 3){
				$('.sct03 .txt > p .drkGreenBg').addClass('bgClr');
				trxSclLck(0);
				$('.vdoCntWrp > ul > li').removeClass('active');
			}
	
			if(nowSct == 4){
				$('.vdoCntWrp > ul > li').addClass('active');
				trxSclLck(0);
			}
			
			if(nowSct >= 4){
				$('.asd').addClass('absol');
				$('.asd').css({
					'bottom' : $('.mrlFt').outerHeight() + 70,
				})
			}
			
			if(nowSct == 5){
				trxSclLck(0);
			}
			
			
			// whlFlg = true;
		});
	}

    $(window).on("scroll touchmove mousewheel DOMMouseScroll", function(event) {
		sctChn();
	})
    
    // 휠 동작을 통해 이벤트가 발생하기 때문에 새로고침 시, 맨 상단에서 시작하게 함.
    window.onload = function() {
        if(!mobMde){
            setTimeout(function() {
                scrollTo(0,0);
            }, 100);
        }
    }
   
    
    let scrollTop = 0;
    window.addEventListener('scroll', function() {
        // scrollTop = window.scrollY;
        // let footer = document.querySelector('.mrlFt');
        // let prgrssBr = document.querySelector('.prgrssBr');
        // maxScrllVlu = scrollTop / (document.body.offsetHeight - window.innerHeight - footer.offsetHeight);
        // prgrssBr.style.height = (maxScrllVlu * 100) + '%';


       
    });

    
    
    let rld = true;
    window.addEventListener('resize', function() {
        scrollTop;
        window.innerWidth;
        window.innerHeight;
    });

    
    const isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };

    var winHghFxd = $(window).outerHeight();
	$(window).scroll(function() {
		if(!mobMde) return false;

        if( isMobile.any() ) winHghFxd = $(window).outerHeight() * 1.1;

		var mobScrollTop = 0;
        winSclTop = $(window).scrollTop();
		console.log(vdoPopFlg);
		if(!vdoPopFlg){
			mobScrollTop = window.scrollY;
			console.log(mobScrollTop);
			var footer = document.querySelector('.mrlFt');
			var prgrssBr = document.querySelector('.prgrssBr');
			maxScrllVlu = mobScrollTop / ($(".mrlWrp").outerHeight() - window.innerHeight - footer.offsetHeight);
			prgrssBr.style.height = (maxScrllVlu * 100) + '%';

	
			// 모바일 연도별 이미지 영역
			var imgBx = document.querySelectorAll('.mobcnt > div > div');
			const cnt02 = document.querySelector('.sct01 .cnt02');
			for(var i = 0; i < imgBx.length; i++){
				if(mobScrollTop - window.innerHeight * 1.25 >= imgBx[i].offsetTop ){
					imgBx[i].classList.add('on');
				} else {
					imgBx[i].classList.remove('on');
				}
	
			}
		}

		if((winSclTop + winHghFxd) >= $('.mrlFt').offset().top){
			// $('.asd').addClass('absol');
			$('.asd').css({
                'position' : 'absolute',
				'bottom' : 'auto',
				'top' : ($('.mrlCntnr').innerHeight() - $('.mrlFt').outerHeight() - $('.asd').outerHeight() - 40),
				// 'bottom' : $('.mrlFt').outerHeight() + 40,
			})
			console.log($('.mrlCntnr').outerHeight() + ', ' + $('.mrlFt').outerHeight())
		} else {
			// $('.asd').removeClass('absol');
			$('.asd').css({
                'position' : 'fixed',
				'bottom' : '70px',
				'top' : 'auto',
			})
			if(wndOtw <= 540){
				$('.asd').css({
					'top' : 'auto',
					'bottom' : '40px'
				});
			}
		}

		
		// 헤더
		if(winSclTop >= $('.sct02').offset().top && winSclTop <= $('.sct02').offset().top + $('.sct02').outerHeight()){
			$('.mrlHdr').css({'opacity':'0', 'pointer-events': 'none'});
		} else {
			$('.mrlHdr').removeAttr('style');
		}

		if( $('.jsSct01').offset().top <= winSclTop ){
			$('.asd').addClass('shw');
		} else {
			$('.asd').removeClass('shw');
		}
		
		// 섹션 01 타이틀 fade up
		if(winSclTop + wndOth / 3 >= $('.sct01').offset().top ){
			$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').addClass('on');
			// 숫자 카운팅
			if(cntFlg){
				numCounter01();
			}
		} else {
			$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').removeClass('on');
			numCounter01();
		}
		
		
		// 새싹 이미지
		// PC 새싹 배경 이미지 fixed
		if(winSclTop >= $('.sct01').offset().top && winSclTop + wndOth < $('.sct01').offset().top + $('.sct01').outerHeight()){
			$('.sproutBgWrp').css('position', 'fixed');
		} else if(winSclTop + wndOth >= $('.sct01').offset().top + $('.sct01').outerHeight() ){
			$('.sproutBgWrp').css({
				'position': 'absolute',
				'top': 'auto',
				'bottom': '0',
			});
		}
		else {
			$('.sproutBgWrp').removeAttr('style')
		}
		// 모바일 새싹 배경 이미지 fixed
		if(winSclTop >= $('.sct01').offset().top && winSclTop + wndOth <= $('.sct01').offset().top + $('.sct01').outerHeight() ){
			$('.mobHstryBg').addClass('mobFxd');
		} else {
			$('.mobHstryBg').removeClass('mobFxd');
		}
		

		if(winSclTop * 0.85 >= $('.sct01').offset().top) {
			$('.bgSizeChnge').addClass('sizeUp');
			$('.bgDmmd').css('opacity', '1');

			// 첫 번째 새싹 폰트 
			$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('opacity', ( 1 - ((winSclTop - $('.sct01 .txtBx01 .scrllBx01').offset().top) / $('.sct01 .txtBx01 .scrllBx01').outerHeight() * 2 ) ) )
			if(wndOtw >= 540) {
				$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('color', '#fff');
			}
			
		} else {
			$('.bgSizeChnge').removeClass('sizeUp');
			$('.bgDmmd').css('opacity', '0');

			$('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').removeAttr('style');
		}

		if(winSclTop + wndOth * cnt02_offsetTop >= $('.cnt02').offset().top) {
			if(cntFlg2){
				cntFlg2 = false;
				var countConTxt2= 1993;
				$({ val : 1979 }).animate({ val : countConTxt2 }, {
					duration: 1000,
					step: function() {
					var num = numberWithCommas(Math.floor(this.val));
					$(".countCon2").text(num);
					},
					complete: function() {
					var num = numberWithCommas(Math.floor(this.val));
					$(".countCon2").text(num);
					}
				});
			}
		} else {
			if(cntFlg2 != true){
				cntFlg2 = true;
				var countConTxt2= 1993;
				$({ val : 1979 }).animate({ val : countConTxt2 }, {
					duration: 1000,
					step: function() {
					var num = numberWithCommas(Math.floor(this.val));
					$(".countCon2").text(num);
					},
					complete: function() {
					var num = numberWithCommas(Math.floor(this.val));
					$(".countCon2").text(num);
					}
				});
			}
		}
		


		// 이미지 스크롤 모션
		if(winSclTop + (wndOth / 2) >= $('.miralHstryImg > div .hstryImgCntWrp').offset().top ){
			$('.miralHstryImg > div > div > .lftImgBx > ul > li').css({
				'transform': 'translateY(' + ( 120 -(winSclTop / 20)) + 'px)', 
			});
			$('.miralHstryImg > div > div > .rghtImgBx > ul > li').css({
				'transform': 'translateY(' + ( -120 + (winSclTop / 20)) + 'px)', 
			});
		} else {
			$('.miralHstryImg > div > div > .lftImgBx > ul > li').css({
				'transform': 'translateY(0)', 
			});
			$('.miralHstryImg > div > div > .rghtImgBx > ul > li').css({
				'transform': 'translateY(0)', 
			});
		}

		
		
		// 텍스트
		if(winSclTop + wndOth / 2 >= $('.sct02').offset().top) {
			$('.sct02 > div .txtCnt01 .fdUp').addClass('active')
		} else {
			$('.sct02 > div .txtCnt01 .fdUp').removeClass('active')
		}

		if(winSclTop - (wndOth / 5) < $('.sct02').offset().top){
			$('.sct02 > div .txtCnt01 > h2').removeAttr("style");
			$('.sct02 > div .txtCnt01 > h2').removeClass('on');
		}

		// if(winSclTop >= $('.sct02').offset().top && winSclTop + wndOth <= $(".sct02").offset().top + $(".sct02").outerHeight()){
		if(winSclTop - (wndOth / 5) >= $('.sct02').offset().top && winSclTop + wndOth <= $(".sct02").offset().top + $(".sct02").outerHeight()){
			$('.sct02 > div .txtCnt01 > h2').addClass('on');
			$('.sct02 > div .txtCnt01 > h2').css({
				"font-size":(sct02_fntSze + ((sct02_mxFntSze - sct02_fntSze) * ((winSclTop - (wndOth / 5) - $(".sct02").offset().top) / ($(".sct02").outerHeight() - wndOth)) )) + "px",
				"line-height" : (sct02_lneHgh + ((sct02_mxLneHgh - sct02_lneHgh) * ((winSclTop - (wndOth / 5) - $(".sct02").offset().top) / ($(".sct02").outerHeight() - wndOth)))) + "px",
				'-webkit-text-fill-color' : "rgba(0,0,0,"+(1 - (winSclTop - $(".sct02").offset().top) / ($(".sct02").outerHeight() - wndOth))+")"
			})
		}


		
		if(winSclTop + wndOth >= $('.sct02').offset().top + $('.sct02').outerHeight() * 0.8) {
			$('.sct02 > div .txtCnt02 .fdUp').addClass('active');
			$('.sct02 > div .txtCnt01 > h2').css({
				'font-size': sct02_mxFntSze * sct02_mxFntSze_times,
				'line-height': sct02_mxLneHgh + 'px',
			})
			$('.sct02 > div .txtCnt01').removeClass('opcty');
			$('.sct02 > div .txtCnt02 > h2 .txtBg ').addClass('bgClr');
		} else {
			$('.sct02 > div .txtCnt02 .fdUp').removeClass('active');
			$('.sct02 > div .txtCnt01').addClass('opcty');
			$('.sct02 > div .txtCnt02 > h2 .txtBg ').removeClass('bgClr');
		}

		// 섹션 03 텍스트 배경색 채우기
		if( winSclTop +  wndOth / 1.8 >= $('.sct03 .txt').offset().top ){
			$('.sct03 .txt > p .drkGreenBg').addClass('bgClr');
		} else {
			$('.sct03 .txt > p .drkGreenBg').removeClass('bgClr');
		}

		
		// 동영상 fade up
		if( winSclTop + wndOth / 2  >= $('.sct04').offset().top ){
			$('.vdoCntWrp > ul > li').addClass('active');
		} else {
			$('.vdoCntWrp > ul > li').removeClass('active');
		}
		// 섹션 02 부모 높이
		$('.sct02').css('height', sct02H);


		
	});
});