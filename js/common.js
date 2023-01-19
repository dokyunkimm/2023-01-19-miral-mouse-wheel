$(function() {

    var wndOtw = $(window).outerWidth();
    var wndOth = $(window).outerHeight();
    var wndIth = $(window).innerHeight();
    var winSclTop = $(window).scrollTop();
    $(window).resize(function() {
        wndOth = $(window).outerHeight();
        wndOtw = $(window).outerWidth();
        wndIth = $(window).innerHeight();
        winSclTop = $(window).scrollTop();
    });
    
    // 탑 버튼
    $('.asd .rgt > ul > li.topBtn > a').click(function() {
        $('html, body').animate({
            scrollTop : 0
        })
    });

    // 모바일 메뉴 버튼
    $('.mobNav').click(function() {
        $(this).toggleClass('on');
        $('.mobMenu').toggleClass('on');
        $('.mrlHdr').toggleClass('on');
        $('html, body').toggleClass('on');
    });

    // 푸터 패밀리 사이트 팝업
    $('.mrlFt .ftTop .innr > div.ftTop01 > div:nth-child(2) .fmlySt').click(function() {
        $(this).toggleClass('fld');
        $('.ftFmlySt').toggle();
        $('html, body').addClass('ovfHdn');
        // if(wndOtw > 1024){
        //     $('.ftFmlySt').css({
        //         'bottom': $('.mrlFt').outerHeight(),
        //     })
        // }
    });
    // 푸터 패밀리 사이트 팝업 닫기
    $('.ftFmlySt .fmlyClsBtn').click(function() {
        $('.ftFmlySt').hide();
        if($('.mrlFt .ftTop .innr > div.ftTop01 > div:nth-child(2) .fmlySt').hasClass('fld')) {
            $('.mrlFt .ftTop .innr > div.ftTop01 > div:nth-child(2) .fmlySt').removeClass('fld'); 
        }
        $('html, body').removeClass('ovfHdn');
    });

    $(window).scroll(function() {
        winSclTop = $(window).scrollTop();


        // 헤더 영역
        if(winSclTop >= 50){
            $('.mrlHdr').addClass('whtBg');
        } else {
            $('.mrlHdr').removeClass('whtBg');
        }
        // aside 영역 노출/미노출
        if( $('.jsSct01').offset().top <= winSclTop ){
            $('.asd').addClass('shw');
        } else {
            $('.asd').removeClass('shw');
        }


		// if($(window).outerWidth() <= 1500){
		// 	if((winSclTop + wndOth) >= $('.mrlFt').offset().top + 40) {
		// 		$('.asd').addClass('absol');
		// 		$('.asd').css({
		// 			'bottom' : $('.mrlFt').outerHeight() + 40,
		// 		})
		// 	} else {
		// 		$('.asd').removeClass('absol');
		// 		$('.asd').css({
		// 			'bottom' : '70px',
		// 		})
		// 		if(wndOtw <= 540){
		// 			$('.asd').css({
		// 				'bottom' : '40px'
		// 			});
		// 		}
		// 	}
		// }




    });


});







