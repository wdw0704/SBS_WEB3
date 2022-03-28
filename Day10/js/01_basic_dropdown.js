
// 문서 준비 이벤트
$(function() {

    $('.mainmenu').on('mouseover', function() {
        // 메인메뉴의 자식 서브메뉴만
        // $(this).children('.submenu').stop().slideDown(500)
        // 모든 서브메뉴
        $('.submenu').stop().slideDown(500)
    })

    $('.mainmenu').on('mouseleave', function() {
        // 메인메뉴의 자식 서브메뉴만
        // $(this).children('.submenu').stop().slideUp(500)
        // 모든 서브메뉴
        // $('.submenu').stop().slideUp(500)
    })

    $('.mainmenu').on('click', function() {
        // 메인메뉴의 자식 서브메뉴만
        $('.submenu').stop().slideUp(500)
        $(this).children('.submenu').stop().slideToggle(500)
        // 모든 서브메뉴
        // $('.submenu').stop().slideUp(500)
    })
})