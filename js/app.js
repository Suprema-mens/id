addEventListener("load", function () {
    function countdown() {
        let now = new Date();
        let evenDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours()+4);

        let actualTime = now.getTime();
        let eventTime = evenDate.getTime();
        let remTime = eventTime - actualTime;

        let s = Math.floor(remTime / 1000);
        let m = Math.floor(s / 60);
        let h = Math.floor(m / 60);
        // let d = Math.floor(h / 24);

        h %= 24;
        m %= 60;
        s %= 60;

        h = h < 10 ? '0' + h : h;
        m = m < 10 ? '0' + m : m;
        s = s < 10 ? '0' + s : s;

        // document.querySelector('#days').textContent = d;
        document.querySelector('#hours').textContent = h;
        document.querySelector('#minutes').textContent = m;
        document.querySelector('#seconds').textContent = s;
        // Ну ок, не очень хочется делать 3 цикла, поэтому пусть будет так.
        document.querySelector('#hours-footer').textContent = h;
        document.querySelector('#minutes-footer').textContent = m;
        document.querySelector('#seconds-footer').textContent = s;

        setTimeout(countdown, 1000)

    };

    countdown();

    $("#review").slick({
        adaptiveHeight: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: false,
        dots: true,
        prevArrow: false,
        nextArrow: false,
        responsive: [{
            breakpoint: 991,
            settings: {
                fade: true,
                cssEase: 'linear',
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
            }
        }]
    });
    $('.toform').click(function(){
        $("html, body").animate({scrollTop: $("#order_form").offset().top-300}, 1000);
        return false;
    });
})
