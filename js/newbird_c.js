// if($(window).scrollTop() >= $('.sldWrp02').offset().top ){
//     $('.sldWrp01').css({
//         'opacity': '0',
//         'pointer-events': 'none',
//     });
// }

$('.sldWrp01').css({'height' : $(window).outerHeight()});
$('.sldWrp02').css({'margin-top' : $(window).outerHeight()});

$(function(){
    // var wndOtw = $(window).outerWidth();
    // var wndOth = $(window).outerHeight();
    // var wndIth = $(window).innerHeight();
    // var winSclTop = $(window).scrollTop();


    //sub02
    // var swiper = new Swiper(".wrapSub02Swiper", {
    //     navigation: {
    //         nextEl: ".swiperBtnNext",
    //         prevEl: ".swiperBtnPrev",
    //     },
    //     pagination: {
    //         el: ".swiper-pagination",
    //         clickable: true,
    //       },
    //     slidesPerView: "auto",
    //     centeredSlides: true,
    //     loop: true,
    // });

    //숫자 단위 3마다 콤마
    // function numberWithCommas(x) {     
    //     return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ","); 
    // } 


    // function numCounter01() {
    //     cntFlg = false;

    //     var countConTxt1= 1442;
    //     var countConTxt2= 842;
    //     var countConTxt3= 4.8;
    //     var countConTxt4= 9.4;
    //     var countConTxt5= 32;
    //     $({ val : 0 }).animate({ val : countConTxt1 }, {
    //         duration: 1500,
    //         step: function() {
    //         var num = numberWithCommas(Math.floor(this.val));
    //         $(".countCon").text(num);
    //         },
    //         complete: function() {
    //         var num = numberWithCommas(Math.floor(this.val));
    //         $(".countCon").text(num);
    //         }
    //     });
    //     $({ val : 0 }).animate({ val : countConTxt2 }, {
    //         duration: 1500,
    //         step: function() {
    //         var num = numberWithCommas(Math.floor(this.val));
    //         $(".countCon2").text(num);
    //         },
    //         complete: function() {
    //         var num = numberWithCommas(Math.floor(this.val));
    //         $(".countCon2").text(num);
    //         }
    //     });
    //     $({ val : 0 }).animate({ val : countConTxt3 }, {
    //         duration: 1500,
    //         step: function() {
    //         var num = numberWithCommas(this.val.toFixed(1));
    //         $(".countCon3").text(num);
    //         },
    //         complete: function() {
    //         var num = numberWithCommas(this.val.toFixed(1));
    //         $(".countCon3").text(num);
    //         }
    //     });
    //     $({ val : 0 }).animate({ val : countConTxt4 }, {
    //         duration: 1500,
    //         step: function() {
    //         var num = numberWithCommas(this.val.toFixed(1));
    //         $(".countCon4").text(num);
    //         },
    //         complete: function() {
    //         var num = numberWithCommas(this.val.toFixed(1));
    //         $(".countCon4").text(num);
    //         }
    //     });
    //     $({ val : 0 }).animate({ val : countConTxt5 }, {
    //         duration: 1500,
    //         step: function() {
    //         var num = numberWithCommas(Math.floor(this.val));
    //         $(".countCon5").text(num);
    //         },
    //         complete: function() {
    //         var num = numberWithCommas(Math.floor(this.val));
    //         $(".countCon5").text(num);
    //         }
    //     });

    // }


    // $(window).scroll(function(){
    //     var winSclTop = $(window).scrollTop();


        
        



    //     // sub02 slide02 fade up
    //     if(winSclTop + wndOth / 3 >= $('.fadeSld01').offset().top ){
    //         $('#wrapSub02 .sldWrp02 .sct01 .fadeUp').addClass('on');
    //         // 숫자 카운팅
    //         if(cntFlg){
    //             numCounter01();

    //         }
            
    //     } else {
    //         $('#wrapSub02 .sldWrp02 .sct01 .fadeUp').removeClass('on');
    //         numCounter01();
    //     }

    //     // if(winSclTop + wndOth / 3 >= $('#wrapSub02 .sldWrp02 .sct01').offset().top ){
    //     //     $('#wrapSub02 .sldWrp02 .sct01 .fadeUp').addClass('on');
    //     //     // 숫자 카운팅
    //     //     if(cntFlg){
    //     //         numCounter01();
    //     //     }
    //     // } else {
    //     //     $('#wrapSub02 .sldWrp02 .sct01 .fadeUp').removeClass('on');
    //     //     numCounter01();
    //     // }


    //     // sub04 slide04 fadeLeft
    //     if(winSclTop + wndOth / 2  >= $('.fadeSld01 .sct01').offset().top ){
    //         $('#wrapSub03 .sldWrp04 .sct01 .fadeLeft').addClass('on');
    //     } else {
    //         $('#wrapSub03 .sldWrp04 .sct01 .fadeLeft').removeClass('on');
    //     }

    //     // sub04 slide04 fadeRight
    //     if(winSclTop + wndOth / 2 >= $('.fadeSld01 .sct02').offset().top ){
    //         $('#wrapSub03 .sldWrp04 .sct02 .fadeRight').addClass('on');

    //     } else {
    //         $('#wrapSub03 .sldWrp04 .sct02 .fadeRight').removeClass('on');

    //     }
        

        

    // });










    
    var sct01AddPd = 80;
    if(wndOtrW <= 540){

    } else if(wndOtrW <= 1024){
        
    } else {
        sct01AddPd = 80;
    }

    var wndOtrW = $(window).outerWidth();
    var wndOtrH = $(window).outerHeight();
    var wndOtrHFxd = $(window).outerHeight();
    var wndScrlTp = $(window).scrollTop();
    $(window).resize(function() {
        wndOtrH = $(window).outerHeight();
        wndScrlTp = $(window).scrollTop();

        if(wndOtrW <= 540){

        } else if(wndOtrW <= 1024){
            
        } else {
            sct01AddPd = 80;
        }
    });

    

    $(window).scroll(function() {
        wndOtrH = $(window).outerHeight();
        wndScrlTp = $(window).scrollTop();
        
        if(wndScrlTp >= $('.jsSct01').offset().top ){
            $('.sldWrp01').css('position', 'relative');
            $('.sldWrp02').removeAttr('style');
        } else {
            $('.sldWrp01').css('position', 'fixed');
            $('.sldWrp02').css({'margin-top' : wndOtrHFxd});
            // $('.sldWrp02').css('margin-top', $('.sldWrp01').outerHeight());
            // $('.sldWrp01').removeAttr('style');
            // $('.sldWrp02').removeAttr('style');
        }
        

        if((wndScrlTp + wndOtrH) >= $('.mrlFt').offset().top + 40) {
            $('.asd').addClass('absol');
            $('.asd').css({
                'bottom' : $('.mrlFt').outerHeight() + 40,
            })
        } else {
            $('.asd').removeClass('absol');
            $('.asd').css({
                'bottom' : '70px',
            })
            if(wndOtrW <= 540){
                $('.asd').css({
                    'bottom' : '40px'
                });
            }
        }

    });




    


}); //end


// $(window).scroll(startCounter);

// function startCounter() {
//     let scrollY = (window.pageYOffset || document.documentElement.scrollTop) + window.innerHeight;
//     let divPos = document.querySelector('#main_count').offsetTop;

//     if (scrollY > divPos) {
//         $(window).off("scroll", startCounter);
//         $('.count').each(function() {
//         var $this = $(this);
//         jQuery({
//             Counter: 0
//         }).animate({
//             Counter: $this.text().replace(/,/g, '')
//         }, {
//             duration: 3000,
//             easing: 'swing',
//             step: function() {
//             $this.text(commaSeparateNumber(Math.floor(this.Counter)));
//             },
//             complete: function() {
//             $this.text(commaSeparateNumber(this.Counter));
//             }
//         });
//     }); 

//     function commaSeparateNumber(num) {
//     return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//     }
// }
// }
