$(function(){
    $('.tabnav li').click(function(){
        $('.tabnav li').removeClass('on')
        $(this).addClass('on')
        $('.item').hide()

        let idx = $(this).index()
        $('.item').eq(idx).show()
    })
    $('.tabbav li').eq(0).trigger('click')
})

function popup() {
    window.open('images/minall.png','민음사','width=400, height=900')
}

function popup2() {
    window.open('images/h1all.png','하이원','width=300, height=900')
}

// 토리든 팝업
$(function () {
    $('.to_hover').click(function () {
        const scrollTop = $(window).scrollTop(); 
        $('.bannerpopup').css('top', scrollTop + 'px').show(); 

        $('.bannerpopup .bpopuptx button').click(function () {
            $('.bannerpopup').hide(); 
        });
    });
});

// 빽보이 피자 팝업
$(function () {
    $('.piza_hover').click(function () {
        const scrollTop = $(window).scrollTop(); 
        $('.bannerpopup1').css('top', scrollTop + 'px').show(); 

        $('.bannerpopup1 .bpopuptx1 button').click(function () {
            $('.bannerpopup1').hide(); 
        });
    });
});

// 호미곶 팝업
$(function () {
    $('.ha_hover').click(function () {
        const scrollTop = $(window).scrollTop(); 
        $('.bannerpopup2').css('top', scrollTop + 'px').show(); 

        $('.bannerpopup2 .bpopuptx2 button').click(function () {
            $('.bannerpopup2').hide(); 
        });
    });
});