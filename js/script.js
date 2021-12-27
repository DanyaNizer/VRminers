// Скрипты для бургер меню

// Анимации бургер меню
var Menu = {

    el: {
        ham: $('.menu'),
        menuTop: $('.menu-top'),
        menuMiddle: $('.menu-middle'),
        menuBottom: $('.menu-bottom')
    },

    init: function() {
        Menu.bindUIactions();
    },

    bindUIactions: function() {
        Menu.el.ham
            .on(
                'click',
                function(event) {
                    Menu.activateMenu(event);
                    event.preventDefault();
                }
            );
    },

    activateMenu: function() {
        Menu.el.menuTop.toggleClass('menu-top-click');
        Menu.el.menuMiddle.toggleClass('menu-middle-click');
        Menu.el.menuBottom.toggleClass('menu-bottom-click');
    }
};

Menu.init();

// выпадание меню
$(document).ready(function() {
    $('.menu').click(function(event) {
        $('.header__bottom').toggleClass('active');
        $('.menu').toggleClass('wi');
    });
    $('.fl').click(function(event) {
        $('.header__bottom').toggleClass('active');
        $('.menu-top').toggleClass('menu-top-click');
        $('.menu-middle').toggleClass('menu-middle-click');
        $('.menu-bottom').toggleClass('menu-bottom-click');
        $('.menu').toggleClass('wi');
    });
});


// Скрипт добавления класса для слайдера логотопов


(function($) {
    var $window = $(window), // Переменная размера экрана
        $BrendSlider = $('.brand-logo'); // Переменная елемента к которому будем добавлять класс

    function resize() {
        if ($window.width() < 1200) { // Ширина экрана
            return $BrendSlider.addClass('brand-slider'); // добавление класса
        }


        $BrendSlider.removeClass('brand-slider'); // удаление добавленого класса 
    }

    $window
        .resize(resize)
        .trigger('resize');
})(jQuery);



// Скрипты слайдеров

$(document).ready(function() {
    // Скрипт слайдара товара
    $('.cards-slider__slider').slick({
        infinite: true,
        // variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,

            }


        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                centerMode: true,
            }


        }, {
            breakpoint: 769,
            settings: {
                centerMode: true,

                variableWidth: true,

            }


        }]
    });
    $('.brand-slider').slick({
        // infinite: false,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        centerMode: true,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [{
            breakpoint: 900,
            settings: {
                slidesToShow: 2,
                centerMode: true,
            }


        }, {
            breakpoint: 769,
            settings: {

            }


        }]
    });
    $('.comments-slider__comments').slick({
        infinite: true,
        variableWidth: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        focusOnSelect: false,
        responsive: [{
            breakpoint: 1300,
            settings: {
                slidesToShow: 3,
                centerMode: true,
            }


        }, {
            breakpoint: 900,
            settings: {
                slidesToShow: 2,

            }


        }, {
            breakpoint: 769,
            settings: {
                centerMode: true,

                variableWidth: true,

            }


        }]
    });
});