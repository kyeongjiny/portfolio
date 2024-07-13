$(function () {
    $('#portfolio .in').slick({
        prevArrow: $('#portfolio .left_arrow'),
        nextArrow: $('#portfolio .right_arrow'),
        dots: false,
        autoplay: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        infinite: false,
        accessibility: true,
        responsive: [{
            breakpoint: 1200,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 640,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      })
});

/*tab*/
function tab() {
  var tab = $('[data-ui="tab"]');
  tab.each(function(idx, item) {
      var tabBtn = $(item).find(".tab-menu a"),
          tabContent = $(item).find(".tab-cont-item");

      tabBtn.find("span.hidden").remove();
      tabBtn.each(function(idx, item) {
          if($(item).parent("li").hasClass("is-open")) {
              $(item).append('<span class="hidden">현재 페이지</span>');
          } else {
              $(item).append('<span class="hidden">해당 내용 보기</span>');
          }
      });
      tabContent.each(function(idx, item) {
          if($(item).hasClass("is-open")) {
              $(item).attr("aria-hidden", false);
          } else {
              $(item).attr("aria-hidden", true);
          }
      });

      tabBtn.on("click", function(e) {
          e.preventDefault();
          var target    = $(e.currentTarget),
              targetLi  = target.parent("li"),
              targetIdx = targetLi.index();

          if(targetLi.hasClass("is-open")) {
              return;
          } else {
              targetLi.addClass("is-open").siblings().removeClass("is-open");
              $(tabContent[targetIdx]).addClass("is-open").attr({
                  "aria-hidden" : false,
                  "tabindex" : 0
              }).siblings().removeClass("is-open").attr("aria-hidden", true).removeAttr("tabindex");
          }
      });
  });
}



function init() {
  tab();
}

$(function() {
  init();
});
