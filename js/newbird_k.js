$(function() {
    var wndOtw = $(window).outerWidth();

    var thisSclTop;
    var vdoPopFlg = false;
    //vdo 시작, popUp class 추가
    $('.sct04 .vdoBx01').click(function(){
        $('#ytbPop01').addClass('active');
        $("#ytbPop01 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        vdoPopFlg = true;

        if(wndOtw <= 1500){
            thisSclTop = $(window).scrollTop();
            $("body").css({
                overflow: "hidden",
                height: "100vh"
            });
            $("body").scrollTop(thisSclTop);
        }

        $(".mrlWrp").addClass("onnPop");
    });
    $('.sct04 .vdoBx02').click(function(){
        $('#ytbPop02').addClass('active');
        $("#ytbPop02 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        vdoPopFlg = true;

        if(wndOtw <= 1500){
            thisSclTop = $(window).scrollTop();
            $("body").css({
                overflow: "hidden",
                height: "100vh"
            });
            $("body").scrollTop(thisSclTop);
        }

        $(".mrlWrp").addClass("onnPop");
    });
    $('.sct04 .vdoBx03').click(function(){
        $('#ytbPop03').addClass('active');
        $("#ytbPop03 iframe")[0].contentWindow.postMessage('{"event":"command","func":"' + 'playVideo' + '","args":""}', '*');
        vdoPopFlg = true;

        if(wndOtw <= 1500){
            thisSclTop = $(window).scrollTop();
            $("body").css({
                overflow: "hidden",
                height: "100vh"
            });
            $("body").scrollTop(thisSclTop);
        }

        $(".mrlWrp").addClass("onnPop");
    });
    
    //popUp class 제거
    $('#wrapSub01 .closeBtn, #wrapSub01 .popUpBg').click(function(){
        $('#wrapSub01 .popUp').removeClass('active');
        // $('body,html').css('overflow', '');
        // $("body").removeAttr("style");
        $(window).scrollTop(thisSclTop);
        $(".mrlWrp").removeClass("onnPop");

        if(wndOtw <= 1500){
            $('body,html').css('overflow', '');
            $("body").removeAttr("style");
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

    function numberWithCommas(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, "");
    }

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
    
    var wndOth = $(window).outerHeight();
    var wndIth = $(window).innerHeight();
    var winSclTop = $(window).scrollTop();
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
    

    $(window).resize(function(){
        wndOth = $(window).outerHeight();
        wndOtw = $(window).outerWidth();
        wndIth = $(window).innerHeight();
        winSclTop = $(window).scrollTop();
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


        // 메인 히어로 영역
        $('.vslSct').css('height', wndIth);

        
    });


    // 메인 히어로 영역
    $('.vslSct').css('height', wndIth);
    



    // 자동으로 텍스트 커지는 인터렉션 동작 시키는 변수 
    var txtEvnt = true;

    

    // 휠 영역
    if(wndOtw > 1500){
        // 탑 버튼 클릭 시 리셋
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
            
        });

        var idx = 0;
        var txtAniMaxFntSze = 1500;
        var txtAniMaxLneHgh = 2500;
        var txtAniMaxOpt = 1;
        var txtAniPer = 0;
        var aft;

       
        var whlFlg = true;


        


    
        $('html, body').css('overflow', 'hidden');
        jQuery(".mswhlBox").each(function (bfr) {
            // 개별적으로 Wheel 이벤트 적용
            jQuery(this).on("scroll touchmove mousewheel DOMMouseScroll", function(event) {
                //vod popUp
                if(vdoPopFlg) return false;
    
                var delta = 0;
                var moveTop = null;
                var boxMax = jQuery(".mswhlBox").length - 1;
    
                var winEvent = "";
    
                
    
                    
                if(!winEvent) {
                    winEvent = window.event;
                }
    
                if(winEvent.wheelDelta) {
    
                    delta = winEvent.wheelDelta / 120;
                    if(window.opera) {
                        delta = -delta;
                    }
                }
    
                
                else if(winEvent.detail) {
                    delta = -winEvent.detail / 3;
                }
    
                
                if(whlFlg == true){
                    whlFlg = false;
                    // 마우스휠을 위에서 아래로 이동
                    if(delta < 0) {
                        aft = bfr + 1;
                        // 마지막 BOX 보다 순서값이 작은 경우에 실행
                        if(jQuery(this).index() < boxMax) {
        
                            if(jQuery(this).next() != undefined) {
                                moveTop = jQuery(this).next().offset().top;
                            }
        
                        }
        
                        // 마지막 BOX보다 더 아래로 내려가려고 하는경우 알림창 출력
                        else {
                            whlFlg = true;
                            return false;
                        }
                        
                        
                        // 1979 타이틀이 있는 영역
                        if(aft == 1){
                            // 섹션 01 타이틀 fade up 및 1979 타이틀 카운트
                            setTimeout(function() {
                                $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').addClass('on');
                                if(cntFlg){
                                    numCounter01();
                                }
                            }, 600);
                            
                        }
                        if(bfr == 1){
                            // 새싹 이미지 영역에 닿았을 때, 일반 스크롤 되게 
                            if($('.sctPcScrlBx').scrollTop() + wndOth < $('.sctCntWrp').outerHeight()){
                                moveTop = jQuery(this).offset().top;
                                aft = 1

                                whlFlg = true; // 이게 없으면 $('.sctPcScrlBx').scrollTop 오류 발생
                            }
    
                            // PC 새싹 배경 이미지 fixed 및 타이틀 올라오게.
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
        
                        }
    
                        if(aft == 2){
                            // 문구 커지는 인터렉션 영역에서 헤더 숨기기
                            $('.mrlHdr').css({'top':'-100%', 'pointer-events': 'none'});
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
    
                                
        
                                    // 문구가 다 커지고 사라짐, 사라진 이후 타이틀 올라오고 텍스트 배경 채워짐.
                                    setTimeout(function() {
                                        $('.sct02 > div .txtCnt01').removeClass('opcty');
                                        $('.sct02 > div .txtCnt02 .fdUp').addClass('active');
                                        $('.sct02 > div .txtCnt02 > h2 .txtBg').addClass('bgClr');
            
                                    }, 1200);
                                }, 1100);
                            }
                            
                        } else {
                            // 숨긴 헤더 다시 보이게
                            $('.mrlHdr').removeAttr('style')
                        }
    
                        if(aft == 3){
                            // '30주년 엠블럼' 영역에서 텍스트 배경 채워짐. 
                            setTimeout(function() {
                                $('.sct03 .txt > p .drkGreenBg').addClass('bgClr');
                            }, 800)
                        }
    
                        if(aft == 4){
                            // '인사말 & 축하메세지' 유튜브 올라옴.
                            setTimeout(function() {
                                $('.vdoCntWrp > ul > li').addClass('active');
                            }, 500)
                        }
                        
        
                            
                    }
        
                    // 마우스휠을 아래에서 위로 이동
                    else {
                        aft = bfr - 1;
                        // 첫번째 BOX 보다 순서값이 큰 경우에 실행
                        if(jQuery(this).index() > 0) {
        
                            if(jQuery(this).prev() != undefined) {
                                moveTop = jQuery(this).prev().offset().top;
                            }
        
                        }
        
                        // 첫번째 BOX 더 위로 올라가려고 하는 경우 알림창 출력
                        else {
                            whlFlg = true;
                            return false;
                        }
        
        
                        if(aft == 0){
                            
                            // 새싹 이미지 영역에 닿았을 때, 일반 스크롤 되게
                            if($('.sctPcScrlBx').scrollTop() > 0){
                                moveTop = jQuery(this).offset().top;

                                whlFlg = true; // 이게 없으면 $('.sctPcScrlBx').scrollTop 오류 발생
                            }
        
                            // 1979 영역 보다 위로 올라갔을 때, 새싹배경 fixed, 타이틀 fade up 리셋
                            if($('.sctPcScrlBx').scrollTop() <= 0){
                                $('.sproutBgWrp').removeAttr('style');
                                $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl > b.ttlFdUp').removeClass('on');
                                // 새싹 영역 년도 카운트 리셋
                                cntFlg = true;
                            }
                            
                            // 새싹배경 커짐 및 배경 opacity, 타이틀 흰색 색상 , 스크롤 프로그래스바 배경 색상 리셋
                            if($('.sctPcScrlBx').scrollTop() <= wndOth * 0.5) {
                                $('.asd .rgt > ul > li.prg .prgrssBrWrp').removeAttr('style');
                                $('.bgSizeChnge').removeClass('sizeUp');
                                $('.bgDmmd').css('opacity', '0');
                                $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').removeAttr('style');
                            }
        
                            // 배경 커짐 및 1979타이틀 opacity 조절
                            if($('.sctPcScrlBx').scrollTop() >= wndOth / 10) {
                                $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('opacity', ( 1.5 - ($('.sctPcScrlBx').scrollTop() / $('.txtBx01').outerHeight()) ) );
                            }
                            
                            // 1979타이틀이 내려왔을 때 opacity 1
                            if($('.sctPcScrlBx').scrollTop() + wndOth / 2 <= $('.txtBx01').outerHeight() ) {
                                $('.sct01 .txtBx01 .scrllBx01 .cmmnSctTtl').css('opacity', '1' );
                            }
        
                            // 년도별 이미지 스크롤 모션
                            if($('.sctPcScrlBx').scrollTop() + wndOth >= $('.miralHstryImg > div .hstryImgCntWrp').offset().top ){
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
        
                        }
                        if(aft == 1){
                            // 새싹배경 영역 우측 프로그래스 바 배경색 하얀색으로
                            $('.asd .rgt > ul > li.prg .prgrssBrWrp').css('background-color', 'rgba(255,255,255,0.15)');
                        }
    
                        if(aft < 2){
                            // 텍스트 커지는 영역 보다 더 올라갔을 때, 텍스트 커짐 및 스타일 리셋
                            setTimeout(function() {
                                $('.sct02 > div .txtCnt01 > h2').removeClass('on');
            
                                
                                $('.sct02 > div .txtCnt01 .fdUp').removeClass('active');
                                $('.sct02 > div .txtCnt01').addClass('opcty');
            
                                $('.sct02 > div .txtCnt02 .fdUp').removeClass('active');
                                $('.sct02 > div .txtCnt02 > h2 .txtBg').removeClass('bgClr');
            
                                
                                $('.sct02 > div .txtCnt01 > h2').removeAttr("style");
                                $('.sct02 > div .txtCnt01 > h2 b, .sct02 > div .txtCnt01 > h2 span').removeAttr("style");
    
                            }, 700)

                            // 텍스트 커지는 이벤트 true로 
                            txtEvnt = true;
                        }
                        if(aft == 2){
                            // 텍스트 커지는 영역에서 헤더 숨김
                            $('.mrlHdr').css({'top':'-100%', 'pointer-events': 'none'});
                        } else {
                            $('.mrlHdr').removeAttr('style');
                        }
                        if(aft < 3){
                            // '30주년 엠블럼' 영역에서 텍스트 배경 채워짐.
                            setTimeout(function() {
                                $('.sct03 .txt > p .drkGreenBg').removeClass('bgClr');
                            }, 800)
                        }
                        if(aft < 4){
                            // '인사말 & 축하메세지' 유튜브 active 리셋.
                            setTimeout(function() {
                                $('.vdoCntWrp > ul > li').removeClass('active');
                            }, 500)
                        }
        
                        
        
                    }
        
                    
        
                    // 화면 이동 0.8초(800)
                    jQuery("html,body").stop().animate({
                        scrollTop : moveTop + "px",
                    },800,function(){
                        whlFlg = true;
                    });
                }
    
            });
    
        });
    } 
    
    // 일반 스크롤 영역
    else {
        $(window).scroll(function() {
            winSclTop = $(window).scrollTop();

            

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
    
    
            
            if(winSclTop + wndOth >= $('.sct02').offset().top + $('.sct02').outerHeight() * 0.80) {
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
    }
    

    // 휠 동작을 통해 이벤트가 발생하기 때문에 새로고침 시, 맨 상단에서 시작하게 함.
    
    // window.onload = function() {
    //     scrollTo(0,0);
    //     setTimeout(function() {
    //     }, 100);
    // }
    
    
    let scrollTop = 0;
    window.addEventListener('scroll', function() {
        if(!vdoPopFlg){
            scrollTop = window.scrollY;
            let footer = document.querySelector('.mrlFt');
            let prgrssBr = document.querySelector('.prgrssBr');
            maxScrllVlu = scrollTop / (document.body.offsetHeight - window.innerHeight - footer.offsetHeight);
            prgrssBr.style.height = (maxScrllVlu * 100) + '%';
    
    
            // 모바일 연도별 이미지 영역
            let imgBx = document.querySelectorAll('.mobcnt > div > div');
            const cnt02 = document.querySelector('.sct01 .cnt02');
            for(let i = 0; i < imgBx.length; i++){
                if(scrollTop - window.innerHeight * 1.25 >= imgBx[i].offsetTop ){
                    imgBx[i].classList.add('on');
                } else {
                    imgBx[i].classList.remove('on');
                }
    
            }
        }
    });
    
    
    
    let rld = true;
    window.addEventListener('resize', function() {
        scrollTop;
        window.innerWidth;
        window.innerHeight;
    });
});

$("body, html").scrollTop(0);