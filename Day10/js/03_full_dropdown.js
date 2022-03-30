

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

})