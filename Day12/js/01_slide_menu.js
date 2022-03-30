
// 슬라이드 바 ON/Off
let slideOn = 'off'

// 문서 준비 이벤트
$(function() {

    // 메인 메뉴 - 마우스 올렸을 때, 이벤트
    $('.mainmenu').on('mouseover', function() {
        let index = $(this).index()
        // eq(index) : index 번호에 해당하는 요소를 선택

        $('header').addClass('active')
        $('.submenu').removeClass('active')
        $(this).children('.submenu').addClass('active')
    })

    // 메인 메뉴 - 마우스 벗어날 때, 이벤트
    $('.mainmenu').on('mouseleave', function() {
        $('header').removeClass('active')
        $('.submenu').removeClass('active')
    })

    // 햄버거 메뉴 클릭 이벤트
    let slideOn = 'off'
    $('.slide-open').on('click', function() {
        // 햄버거 -> X (슬라이드 메뉴 오픈)
        if(slideOn == 'off') {
            slideBarOpen()
        }
        // X -> 햄버거 (슬라이드 메뉴 종료)
        else {
            slideBarClose()
        }
    })

    //슬라이드 바 바깥 클릭 시, 슬라이드 닫힘
    $('.bg, .cancel').on('click', function() {
        slideBarClose()
    })

})
    // 슬라이드바 오픈
    function slideBarOpen() {
        // 슬라이드 오픈 애니메이션
        $('.slide').animate({left: 0}, 1000)

        // 햄버거 -> X 애니메이션
        $('.slide-open').addClass('on')
        // 슬라이드 바 바깥 영역 fadeIn
        $('.bg').fadeIn(1000)

        slideOn = 'on'
    }
    
    // 슬라이드바 종료
    function slideBarClose() {
        // 슬라이드 종료 애니메이션
        $('.slide').animate({left: '-400px'}, 1000)
        // -> X 햄버거 애니메이션
        $('.slide-open').removeClass('on')
        // 슬라이드 바 바깥 영역 fadeOut
        $('.bg').fadeOut(1000)

        slideOn = 'off'
    }
