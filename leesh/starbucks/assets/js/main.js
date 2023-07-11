// mobile sidebar
$("#sidebar_button").on("click", (e) => {
  let current = $(e.currentTarget);
  let open = current.attr("src");
  let close = current.data("over");
  current.attr("src", close);
  current.data("over", open);

  if (current.attr("src") == close) {
    $(".sidebar_background").css("display", "block");
  } 
});

// mobile sidebar 메뉴 탭 클릭시
$(".sidebar_menu").on("click", (e) => {
  e.preventDefault();

  $(e.currentTarget).next(".sidebar_sub").slideToggle(300);
});

// 상단 메뉴 탭 클릭시 이동 방지
$(".main").on("click", (e) => {
  e.preventDefault();
});

// 상단 메뉴 탭 열림 및 닫힘
$(".top_menu2_item_sub").on("mouseenter mouseleave", (e) => {
  $(e.currentTarget).children(".top_sub_menu").slideToggle(200);
  $(e.currentTarget).children(".top_sub_menu").css("display", "flex");
});

// 스타벅스 프로모션 클릭시 우측 이미지 변경
$(".promotion").on("click", (e) => {
  let current = $(e.currentTarget);
  let arrow = current.children(".arrow");
  let src = arrow.attr("src");
  let over = arrow.data("over");
  arrow.attr("src", over);
  arrow.data("over", src);
});

// SUMMER ON fadeIn 적용
$(".fade_in_1").fadeIn(600);

setTimeout(() => {
  $(".fade_in_2").fadeIn(600);
}, 600);

setTimeout(() => {
  $(".fade_in_3").fadeIn(600);
}, 1200);

setTimeout(() => {
  $(".fade_in_4").fadeIn(600);
}, 1800);

setTimeout(() => {
  $(".fade_in_5").fadeIn(600);
}, 2400);

$(".promotion").on("click", (e) => {
  const target = $(".hide");

  if (target.css("max-height") == "0px") {
    const h = target.prop("scrollHeight");
    target.css("max-height", `${h}px`);
  } else {
    target.css("max-height", "0px");
  }
});

// 하단 메뉴 탭 클릭시 페이지 이동 방지
$(".arrow_down").on("click", (e) => {
  e.preventDefault();
});

// 하단 메뉴 탭 열림 및 닫힘 + 우측 이미지 변경
$(".bottom_menu_mobile_item").on("click", (e) => {
  let current = $(e.currentTarget);
  current.find(".bottom_sub_menu").slideToggle(200);

  let arrowDown = current.find(".arrow_down");
  let src = arrowDown.attr("src");
  let over = arrowDown.data("over");
  arrowDown.attr("src", over);
  arrowDown.data("over", src);
});
