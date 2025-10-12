
// jQuery DOM Ready
$(function () {

  /* =====================================
   * 0) 공통 헤더 include + 헤더 초기화
   * ===================================== */
  $('footer').load('include/footer.html') 
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

  $('.selectbox .title').click(function(){
    $('.selectbox ul').stop().slideToggle();
  });
  $('.selectbox ul li').click(function(){
    let sT = $(this).text();
    $('.selectbox .title p').text(sT);
    $('.selectbox ul').slideUp();
  });

  $('.search_input').keyup(function(){
    let searchVal = $(this).val();
    if(searchVal !=''){
      $('.search_wrap i').css({color:'#D14C00'});
    }else {
      $('.search_wrap i').css({color:''});
    };
    // $('body').animate({marginLeft:'5px', marginTop:'20px'},10)
    // $('body').animate({marginLeft:'-5px',marginTop:'-20px'},10)
  })

});
