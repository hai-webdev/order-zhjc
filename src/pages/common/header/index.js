// 头部的js代码
import "./index.less";
import "swiper/css/swiper.min.css";
import "aos/dist/aos.css";
import Aos from "aos";
Aos.init({
  duration: 800,
  offset: 30,
});
function stopScroll() {
  var html = document.getElementsByTagName("html")[0];
  var body = document.getElementsByTagName("body")[0];
  var o = {};
  (o.can = function () {
    html.style.overflow = "visible";
    html.style.height = "auto";
    body.style.overflow = "visible";
    body.style.height = "auto";
  }),
    (o.stop = function () {
      html.style.overflow = "hidden";
      html.style.height = "100%";
      body.style.overflow = "hidden";
      body.style.height = "100%";
    });
  return o;
}

var scroll = stopScroll();
scroll.stop(); //禁止页面滚动
scroll.can(); //接触禁止
// var flag = true;
// $(".nav-container .nav-item").hover(
//   function () {
//     console.log(flag);
//     if(!$(this).find(".nav-sublist").length){
//       flag = true;
//       return;
//     }
//     if (flag) {
//       flag = false;
//       $(this)
//         .find(".nav-sublist")
//         .slideDown(function () {
//           flag = true;
//         });
//     }
//   },
//   function () {
//     if(!$(this).find(".nav-sublist").length){
//       flag = true;
//       return;
//     }
//     if (flag) {
//       flag = false;
//       $(this)
//         .find(".nav-sublist")
//         .slideUp(function () {
//           flag = true;
//         });
//     }
//   }
// );

$(".m-nav-container .nav-item > .title").on("click", function () {
  const self = $(this).parents(".nav-item");
  self.find(".nav-sublist").slideToggle();
  return false;
});
$(".m-nav-container .nav-subitem > .title").on("click", function () {
  const self = $(this).parents(".nav-subitem");
  self.find(".nav-sublist2").slideToggle();
  return false;
});

$(".menu").on("click", function () {
  $(this).toggleClass("on");
  const flag = $(this).hasClass("on");
  $(".m-nav-container").slideToggle();
  if (flag) {
    scroll.stop(); //禁止页面滚动
  } else {
    scroll.can(); //接触禁止
  }
});
