$(document).ready( function() {

//////////////SERVICE-BLOCK-CODE
    let arrow = $('.arrow-down');
    $(arrow).first().css('display','inline-block');

    $('.service-flex-item-child').click(function(e) {
        $('.service-flex-item-child').removeClass('service-active');
        $(e.target).addClass('service-active');
        let index = $('.service-flex-item-child').index(this);
        let img = $('.service-img');
        let text = $('.service-text');

        $(arrow).css('display','none');
        $('.service-flex-item-child').css({'backgroundColor': '#ebf2ff', 'color': '#717171'});

        switch (true) {
            case(index === 0):  $(this).find(arrow).css("display","inline-block");
                                $(this).css({'backgroundColor': '#18cfab', 'color': '#fff'});
                                $(img).attr('src', 'img/web design/web-design1.jpg');
                                $(text).text('Corporis, cumque cupiditate debitis delectus deleniti est expedita harum ipsa laboriosam, modi numquam officia pariatur perferendis possimus quam qui quisquam rem sit ullam unde vero voluptas voluptatem. Ab accusamus accusantium, simos distinctio doloremque libero nulla repudiandae sunt vero voluptatibus voluptatum? Consequatur debitis dignissimos, dolores dolorum eos, et excepturi iendis sint soluta ut vero, voluptate, voluptatibus voluptatum? A, amet debitis dolorem iure quod sapiente suscipit! Assumenda culpa, cupiditate distinctio doloribus eveniet fugit impedit ipsam ipsum, modi nam necessitatibus quae repellat sit vero vitae? Adipisci, beatae est exercitationem laboriosam odit sit.');
                break;
            case(index === 1):  $(this).find(arrow).css("display","inline-block");
                                $(this).css({'backgroundColor': '#18cfab', 'color': '#fff'});
                                $(img).attr('src', 'img/web design/web-design2.jpg');
                                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur delectus quia voluptatem corrupti quaerat, esse quidem alias nostrum dignissimos iste praesentium deleniti, non numquam magni nam nesciunt, soluta quasi libero veniam! Rem hic doloribus eveniet blanditiis corporis perspiciatis ratione quaerat.');
                break;
            case(index === 2):  $(this).find(arrow).css("display","inline-block");
                                $(this).css({'backgroundColor': '#18cfab', 'color': '#fff'});
                                $(img).attr('src', 'img/web design/web-design3.jpg');
                                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, quis nulla totam, nihil, voluptas omnis vel facilis veniam perferendis doloremque ipsa adipisci voluptatibus distinctio ex esse. Saepe minima quidem, perspiciatis unde molestiae nobis, quo dolor voluptatibus, obcaecati, quam suscipit itaque nam error laboriosam dolorum laudantium sit voluptatem. Eaque veritatis ipsam blanditiis possimus eos doloremque adipisci, eius, totam natus illum, vitae mollitia non iure! Aperiam facere, harum, delectus doloribus cumque, dignissimos incidunt dolorem alias sit, at nostrum enim. Cum optio doloremque quos earum labore, ea rerum inventore, minus delectus dolores quod!');
                break;
            case(index === 3):  $(this).find(arrow).css("display","inline-block");
                                $(this).css({'backgroundColor': '#18cfab', 'color': '#fff'});
                                $(img).attr('src', 'img/web design/web-design4.jpg');
                                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus doloribus nam, provident unde delectus architecto perspiciatis sunt eius! Amet repudiandae quae et quod voluptates sequi culpa modi sit dolor quisquam praesentium beatae repellendus officia enim, maxime, saepe blanditiis facilis omnis placeat necessitatibus. Sit deleniti reiciendis labore quasi sequi dolorem, qui neque non officia suscipit obcaecati expedita rem enim, porro? Commodi hic quia, unde deleniti? Neque, nostrum amet dolor maxime esse quibusdam iste, doloribus repellendus magni vero, ad aspernatur blanditiis voluptas!');
                break;
            case(index === 4):  $(this).find(arrow).css("display","inline-block");
                                $(this).css({'backgroundColor': '#18cfab', 'color': '#fff'});
                                $(img).attr('src', 'img/web design/web-design5.jpg');
                                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error aspernatur autem magni reprehenderit, libero, officia deserunt quidem nesciunt modi eaque inventore laboriosam enim voluptate, laborum! Necessitatibus dolor ducimus, quaerat totam quod quis! Et ducimus est dignissimos quia sequi quisquam, unde obcaecati ut delectus accusamus asperiores optio quis exercitationem impedit autem iste incidunt, nemo fugit. Fugit similique esse exercitationem autem, earum laudantium eius, provident dolorum cum ab delectus quod eum voluptatem iste dolores illum odit impedit quasi eos adipisci voluptatum omnis. Fuga explicabo magni, error odio nulla?');
                break;
            case(index === 5):  $(this).find(arrow).css("display","inline-block");
                                $(this).css({'backgroundColor': '#18cfab', 'color': '#fff'});
                                $(img).attr('src', 'img/web design/web-design6.jpg');
                                $(text).text('Lorem ipsum dolor sit amet, consectetur adipisicing elit. Hic earum beatae ratione alias dolorum laboriosam totam reprehenderit quibusdam dignissimos! Repellendus nam distinctio laboriosam nulla asperiores amet alias, provident, eligendi, suscipit ullam nemo, inventore rerum officiis animi cum! Optio nisi repellat veritatis, sunt expedita molestias nostrum, quisquam quae officiis quas ullam tempora deserunt rerum quam vitae itaque nobis nesciunt maiores! Commodi totam, vitae aut molestiae culpa.');
                break;
            default:
        }
    });

//////////PORTFOLIO-BLOCK-CODE
      $(function() {

        let selectedClass = "";
        let gallery = $('#gallery');
        let loadMore = $('.load-more');

        $(".filter").click(function(){
            $(".filter").removeClass("portfolio-active");
            $(this).addClass("portfolio-active");
            selectedClass = $(this).attr("data-rel");
            $(gallery).fadeTo(100, 0.1);
            $("#gallery div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
            setTimeout(function() {
                $("."+selectedClass).fadeIn().addClass('scale-anm');
                $(gallery).fadeTo(300, 1);
            }, 300);
            if($("."+selectedClass).length > 12){
                $(loadMore).html("<i class='fas fa-plus'></i>Load More").removeClass("noContent");
                $(gallery).css('max-height','660px');
            }else {
              $(loadMore).text("No Content").addClass("noContent");;
            }
        });

        $(loadMore).click(function() {
          let = maxHeight = $(gallery).css('max-height');
          $(gallery).css('max-height', "+=639px");

          if (maxHeight == "1299px") {
            $(loadMore).text("No Content").addClass("noContent");;
          }
        });
    });

/////////HOVER-GALLERY-ITEM
    $('.gallery-item').hover(function() {
      if ($(this).hasClass('graphic')) {
        $(this).append($("<div class='portfolio-hover'><div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class = 'portfolio-info'><p>awesome graphic</p><p>awesome graphic</p></div></div>"));
      }
      if ($(this).hasClass('web')) {
        $(this).append($("<div class='portfolio-hover'><div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class = 'portfolio-info'><p>awesome web-design</p><p>awesome web-design</p></div></div>"));
      }
      if ($(this).hasClass('wordpress')) {
        $(this).append($("<div class='portfolio-hover'><div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class = 'portfolio-info'><p>awesome wordpress</p><p>awesome wordpress</p></div></div>"));
      }
      if ($(this).hasClass('landing')) {
        $(this).append($("<div class='portfolio-hover'><div class='portfolio-links'><a href='#'><i class='fas fa-link'></i></a><a href='#'><i class='fas fa-search'></i></a></div><div class = 'portfolio-info'><p>awesome landing</p><p>awesome landing</p></div></div>"));
      }
    $('.portfolio-hover').hide().show('normal')
  }, function() {
    $(this).find(".portfolio-hover").remove();
  }
);


///////////SLIDER
    $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav',
  autoplay: true,
  autoplaySpeed: 2300,
  cssEase: 'linear'
});

$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  speed: 1000,
  centerMode: true,
  centerPadding: '0',
  cssEase: 'linear'
});


/////////////MASONRY AND LOADER
    $(".grid-item").slice(0, 8).css('display', 'inline-block').show();
    $(".load-more-masonry").on("click", function(e){
      $(".load-wrapper").css("display", "block");
      setTimeout(function() {
        e.preventDefault();
        $(".grid-item:hidden").slice(0, 4).slideDown();
        $('.grid').masonry({
            itemSelector: '.grid-item',
            columnWidth: 370,
            isFitWidth: true,
            gutter: 20,
        });
        if($(".grid-item:hidden").length == 0) {
            $(".load-more-masonry").text("No Content").addClass("noContent");
        }
        $(".load-wrapper").css("display", "none");
    }, 3000);
    });

    $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: 370,
        isFitWidth: true,
        gutter: 20,
    });
});
