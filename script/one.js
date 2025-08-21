// // $(document).ready(function(){
// //     $('.smallimg li').mouseenter(function(){
// //        let sImg = $(this).find('img').attr('src');
// //        let sText1 = $(this).find('.title1').text();
// //        let sText2 = $(this).find('.title2').text();

// //         $('.bigimg img').attr('src', sImg);
// //         $('.bigimg .text').html(sText1+'<br>'+sText2);
// //         // $('.bigimg .title3').text(sText2)

// //        $(this).addClass('on').siblings().removeClass('on');
// //     });
// // });



// let pcNav = $('.pc_nav').html();
//     $('.mo_nav').html(pcNav);

//     $('.pc_nav li').mouseenter(function(){
//         $(this).find('.lnb').fadeIn(100);
//     })
//     $('.pc_nav li').mouseleave(function(){
//         $(this).find('.lnb').fadeOut(100);
//     })
//     $('.pc_nav').mouseenter(function(){
//         $('.pc_nav_bg').stop().fadeIn(100);
//     })
//     $('.pc_nav').mouseleave(function(){
//         $('.pc_nav_bg').stop().fadeOut(500);
//     })


//     // 모바일 하위메뉴 나타났다 사라지기
//     $('.mo_nav .gnb > li > a').click(function(){
//         $('.mo_nav .gnb .lnb').slideUp();           //슬라이드 먼저 접고
//         $(this).siblings('.lnb').stop().slideToggle();  //클릭하면 멈추었다가 슬라이드 열었다 접어라 
        
//         return false //링크가 걸리지 않게 함
//     });


//     $('.hamburger').click(function(){
//         $(this).toggleClass('on');
//         $('.mo_nav').fadeToggle().toggleClass('on');     
//         bodyNoScroll();
//     });



//     function bodyNoScroll(){
//         if($('.hamburger').hasClass('on')){
//             $('body').css({height:'100vh', overflow:'hidden'});
//         }else{
//             $('body').css({height:'', overflow:''});
//     };   
//     }



//     $(window).resize(function(){
//         let winW = $(window).width();
//         if(winW < 880){
//             $('#section3 .day').each(function(){
//             $(this).appendTo($(this).siblings('.textbox'))
//         })
//         }else {
//             $('#section3 .day').each(function(){
//             $(this).appendTo($(this).parents('.box1'))
//             });

//             $('.mo_nav').removeClass('on').hide();
//             $('.mo_nav .gnb .lnb').slideUp();
//             $('.hamburger').removeClass('on');
//             bodyNoScroll();
//         }


        

    


//     $(document).ready(function () {
//     let liNum = 0;
//     let rolling
//     let sLength = $('.smallimg li').length;

//     $('.smallimg li').mouseenter(function () {
//         liNum = $(this).index();
//         sImgActive()
//         clearInterval(rolling)
//     });

//     $('.smallimg li').mouseleave(function () {
//         rolling = setInterval(rollingImg, 2000)
//     })

//     scrollEffect()


//     $(window).scroll(function () {
//         scrollEffect()
//     })




//     function scrollEffect() {
//         let scrT = $(window).scrollTop();
//         let sec1Top = $('#section1').offset().top;
//         let sec2Top = $('#section2').offset().top;
//         let sec3Top = $('#section3').offset().top;
//         let winH = $(window).height();

//         if (scrT > 0) {
//             $('#hero').addClass('on')
//         } else {
//             $('#hero').removeClass('on')
//         }

//         if (scrT > sec1Top - winH / 2) {
//             $('#section1 .imgbox').addClass('on')
//         } else {
//             $('#section1 .imgbox').removeClass('on')
//         }

//         if (scrT > sec2Top - winH / 2) {
//             $('#section2 .imgbox').addClass('on')
//         } else {
//             $('#section2 .imgbox').removeClass('on')
//         }

//         if (scrT > sec3Top - winH / 2) {
//             $('#section3 .noticebox').addClass('on')

//         } else {
//             $('#section3 .noticebox').removeClass('on')
//         }
//     }




//     function rollingImg() {
//         liNum++;
//         if (liNum >= sLength) {
//             liNum = 0;
//         }

//         sImgActive()

//     }

//     function sImgActive() {
//         let sImg = $('.smallimg li').eq(liNum).find('img').attr('src');
//         let sText1 = $('.smallimg li').eq(liNum).find('.title1').text();
//         let sText2 = $('.smallimg li').eq(liNum).find('.title2').text();

//         $('.bigimg img').attr('src', sImg);
//         $('.bigimg .title1').text(sText1);
//         $('.bigimg .title2').text(sText2);

//         $('.smallimg li').eq(liNum).addClass('on').siblings().removeClass('on');


//     }

//     // 처 음 모 습
//     // let sImg0 = $('.smallimg li').eq(liNum).find('img').attr('src');
//     // let sText0 = $('.smallimg li').eq(liNum).find('.title1').text();

//     // $('.bigimg img').attr('src', sImg0);
//     // $('.bigimg .title1').text(sText0);


//     $('#section3 .box1 li span.text2').each(function () {
//         let dot = 50;
//         let text = $(this).text().trim();

//         if (text.length > dot) {
//             let realText = text.substring(0, dot)
//             $(this).text(realText + '...')
//         }
//     });

//     document.addEventListener('visibilitychange', function () {
//         if (document.hidden) {
//             // 비활성화: 롤링 정지
//             if (rolling) {
//                 clearInterval(rolling);
//                 rolling = null;
//             }
//         } else {
//             // 활성화: 중복 방지 후 재시작
//             if (!rolling) {
//                 rolling = setInterval(rollingImg, 2000);
//             }
//         }
//     });



//     // ▼ 선택 추가: 창 포커스 기준으로도 안전하게 (원치 않으면 생략)
//     window.addEventListener('blur', function () {
//         if (rolling) {
//             clearInterval(rolling);
//             rolling = null;
//         }
//     });

//     window.addEventListener('focus', function () {
//         if (!rolling) {
//             rolling = setInterval(rollingImg, 2000);
//         }
//     });


    
// });

    


// // 탭 시각 상태만 토글
//     $('.navi span a').on('click', function(e){
//         e.preventDefault();
//         $(this).parent().addClass('on').siblings().removeClass('on');
//         // 내용 전환 예시(섹션 아이디는 예시)
//         const tab = $(this).text().trim().toLowerCase(); // "history" / "location"
//         $('[data-tab]').hide();
//         $('[data-tab="'+tab+'"]').show();
//     });



// })

// // document.querySelectorAll('.stars').forEach((starsBox) => {
// //     const stars = Array.from(starsBox.querySelectorAll('.star'));
// //     let selected = 0;

// //     const paint = (n) => {
// //         stars.forEach((btn, i) => btn.setAttribute('data-filled', String(i < n)));
// //     };

// //     starsBox.addEventListener('mouseover', (e) => {
// //         const btn = e.target.closest('.star');
// //         if (!btn) return;
// //         paint(Number(btn.dataset.value));
// //     });

// //     starsBox.addEventListener('mouseleave', () => paint(selected));

// //     starsBox.addEventListener('click', (e) => {
// //         const btn = e.target.closest('.star');
// //         if (!btn) return;
// //         selected = Number(btn.dataset.value);
// //         paint(selected);
// //     });

// //     paint(0);
// // });




// jQuery DOM Ready
$(function () {

  /* =====================================
   * 0) 공통 헤더 include + 헤더 초기화
   * ===================================== */
  
  $('header').load('include/header.html', function () {
    // 0-1) PC ↔ MO 네비 복제
    const pcNav = $('.pc_nav').html();
    $('.mo_nav').html(pcNav);

    // 0-2) PC 네비 하위메뉴 호버
    $('.pc_nav li')
      .on('mouseenter', function () {
        $(this).find('.lnb').stop(true, true).fadeIn(100);
      })
      .on('mouseleave', function () {
        $(this).find('.lnb').stop(true, true).fadeOut(100);
      });

    // 0-3) (선택) PC 네비 배경
    $('.gnb')
      .on('mouseenter', function () {
        $('.pc_nav_bg').stop(true, true).fadeIn(100);
      })
      .on('mouseleave', function () {
        $('.pc_nav_bg').stop(true, true).fadeOut(500);
      });

    // 0-4) 모바일 1뎁스 클릭 → 해당 lnb만 토글
    $('.mo_nav').on('click', '.gnb > li > a', function (e) {
      e.preventDefault();
      const $lnb = $(this).siblings('.lnb');
      $('.mo_nav .gnb .lnb').not($lnb).slideUp();
      $lnb.stop(true, true).slideToggle();
    });

    // 0-5) 햄버거 토글 + 바디 스크롤 잠금
    $('.hamburger').on('click', function () {
      $(this).toggleClass('on');
      $('.mo_nav').fadeToggle().toggleClass('on');
      lockBodyScroll($(this).hasClass('on'));
    });

    function lockBodyScroll(lock) {
      $('body').css(lock ? { height: '100vh', overflow: 'hidden' } : { height: '', overflow: '' });
    }

    // 0-6) 리사이즈 시 헤더(모바일 네비) 상태 정리
    function headerResizeReset() {
      const winW = $(window).width();
      if (winW >= 880) {
        $('.mo_nav').removeClass('on').hide();
        $('.mo_nav .gnb .lnb').slideUp();
        $('.hamburger').removeClass('on');
        lockBodyScroll(false);
      }
    }
    $(window).on('resize.header', headerResizeReset);
    headerResizeReset(); // 최초 1회
  });

  /* =====================================
   * 1) 섹션3 레이아웃 리사이즈 대응
   * ===================================== */
  function section3Resize() {
    const winW = $(window).width();
    if (winW < 880) {
      $('#section3 .day').each(function () {
        $(this).appendTo($(this).siblings('.textbox'));
      });
    } else {
      $('#section3 .day').each(function () {
        $(this).appendTo($(this).parents('.box1'));
      });
    }
  }
  $(window).on('resize.section3', section3Resize);
  section3Resize(); // 최초 1회

  /* =====================================
   * 2) 스크롤 효과
   * ===================================== */
  function scrollEffect() {
    const scrT = $(window).scrollTop();
    const winH = $(window).height();
    const sec1Top = $('#section1').offset()?.top ?? Infinity;
    const sec2Top = $('#section2').offset()?.top ?? Infinity;
    const sec3Top = $('#section3').offset()?.top ?? Infinity;

    $('#hero').toggleClass('on', scrT > 0);
    $('#section1 .imgbox').toggleClass('on', scrT > sec1Top - winH / 2);
    $('#section2 .imgbox').toggleClass('on', scrT > sec2Top - winH / 2);
    $('#section3 .noticebox').toggleClass('on', scrT > sec3Top - winH / 2);
  }
  scrollEffect();
  $(window).on('scroll.effects', scrollEffect);

  /* =====================================
   * 3) 썸네일 롤링
   * ===================================== */
  let liNum = 0;
  let rolling = null;
  const $smallLis = $('.smallimg li');
  const sLength = $smallLis.length;

  function sImgActive() {
    const $li = $smallLis.eq(liNum);
    const sImg = $li.find('img').attr('src');
    const sText1 = $li.find('.title1').text();
    const sText2 = $li.find('.title2').text();

    $('.bigimg img').attr('src', sImg);
    $('.bigimg .title1').text(sText1);
    $('.bigimg .title2').text(sText2);
    $li.addClass('on').siblings().removeClass('on');
  }

  function rollingImg() {
    if (sLength === 0) return;
    liNum = (liNum + 1) % sLength;
    sImgActive();
  }

  if (sLength > 0) {
    $smallLis.on('mouseenter', function () {
      liNum = $(this).index();
      sImgActive();
      clearInterval(rolling);
    });

    $smallLis.on('mouseleave', function () {
      rolling = setInterval(rollingImg, 2000);
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        clearInterval(rolling);
        rolling = null;
      } else if (!rolling) {
        rolling = setInterval(rollingImg, 2000);
      }
    });
    window.addEventListener('blur', function () {
      clearInterval(rolling);
      rolling = null;
    });
    window.addEventListener('focus', function () {
      if (!rolling) rolling = setInterval(rollingImg, 2000);
    });

    sImgActive();
    rolling = setInterval(rollingImg, 2000);
  }

  /* =====================================
   * 4) 섹션3 말줄임
   * ===================================== */
  $('#section3 .box1 li span.text2').each(function () {
    const limit = 50;
    const text = $(this).text().trim();
    if (text.length > limit) $(this).text(text.substring(0, limit) + '...');
  });

  /* =====================================
   * 5) About 탭 전환 (history/location)
   * ===================================== */
  const $tabs  = $('#hero_sub .navi span a');
  const $panes = $('#hero_sub [data-tab]');

  (function initTab() {
    const target = $('#hero_sub .navi span.on a').data('target') || 'history';
    $panes.hide().filter('[data-tab="' + target + '"]').show();
  })();

  $tabs.on('click', function (e) {
    e.preventDefault();
    const target = $(this).data('target');
    $(this).parent().addClass('on').siblings().removeClass('on');
    $panes.hide().filter('[data-tab="' + target + '"]').show();
  });


  $('.fa-eye').click(function(){
    $(this).siblings('input[type="password"]').attr('type','text');

    $('.fa-eye-slash').show();
    $(this).hide();
  })

    $('.fa-eye-slash').click(function(){
    $(this).siblings('input[type="text"]').attr('type','password');

    $('.fa-eye').show();
    $(this).hide();
  })
  $('.login .id_box input').keydown(function(){
    console.log(e.key);
  })
  
});



$(function () {
  function showSection(target) {
    // 모든 콘텐츠 숨김
    $("#history, #location").hide();

    // 선택한 콘텐츠만 보이기
    $("#" + target).show();

    // 탭 메뉴 on 처리
    $("span").removeClass("on");
    $("span a[data-target='" + target + "']").parent().addClass("on");
  }

  // 현재 해시값에 따라 섹션 보여주기
  function checkHash() {
    let hash = window.location.hash.replace("#", "");
    if (hash) {
      showSection(hash);
    } else {
      showSection("history"); // 기본값
    }
  }

  // 페이지 로드 시 실행
  checkHash();

  // 해시값 바뀔 때마다 실행
  $(window).on("hashchange", function () {
    checkHash();
  });

  // 탭 클릭 시 전환
  $("a[data-target]").on("click", function (e) {
    e.preventDefault();
    let target = $(this).data("target");
    showSection(target);

     // 해시 변경 (화면 이동 없음)
  history.replaceState(null, "", "#" + target);
  });
});
