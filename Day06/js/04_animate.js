
// 문서 준비 이벤트
$(function() {

    /* item1 */
    // hide 버튼 클릭 이벤트
    $('#item1 .hide').on('click', function() {
        // 박스
        $('#item1 .target-box').hide()
    })

    // show 버튼 클릭 이벤트
    $('#item1 .show').on('click', function() {
        // 박스
        $('#item1 .target-box').show()
     })


     /*
        hide( 인자1, 인자2 )
        show( 인자1, 인자2 )

        * 인자1 : duration (시간)
        - hide : margin, padding, width, height, opacity 속성들을
                지정된 값에서 0으로, 지정시간(ms) 동안 애니메이션 한다.
                그 이후에, display : none 으로 변경한다.
        - show : 0 에 지정한 값으로 애니메이션 한다.

        * 인자2 : function (함수)
        - 애니메이션이 완료 되면 호출할 콜백 함수
     */

        // hide1000 버튼 클릭 이벤트
        $('#item1 .hide1000').on('click', function() {
            $('#item1 .target-box').hide(1000, () => {
                alert('hide')
            })
        })

        // show1000 버튼 클릭 이벤트
        $('#item1 .show1000').on('click', function() {
            $('#item1 .target-box').show(1000, () => {
                alert('show')
            })
        })
})