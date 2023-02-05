// 首页使用的js

// 引入公共css
import "../common/reset.css";
import "./index.less";
import "@/assets/global.less";

// 引入页面公共部分的js
import "../common/header";
import "../common/footer";

import Swiper from "swiper";
import Aos from "aos";

Aos.init({
  duration: 800,
  offset: 30,
});
// banner图
const bannerSwiper = new Swiper(".banner-swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay:{
    delay:8000
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
// 选择我们的理由
const chooseSwiper = new Swiper(".choose-swiper", {
  loop: true,
  autoplay:{
    delay:8000
  },
  on: {
    slideChangeTransitionStart: function () {
      $(".choose-icon-item")
        .eq(this.activeIndex - 1)
        .addClass("on")
        .siblings()
        .removeClass("on");
    },
  },
});

$(".choose-icon-item").on("click", function () {
  $(this).addClass("on").siblings().removeClass("on");
  const index = $(this).index();
  chooseSwiper.slideToLoop(index, 1000, false);
});

// 实验室展示

const laboratoryTabSwiper = new Swiper(".laboratory-tab-swiper", {
  spaceBetween: 0,
  slidesPerView: 3,
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 0,
    },
    1080: {
      slidesPerView: 8,
      spaceBetween: 0,
    },
  },
});

const laboratorySwiper = new Swiper(".laboratory-swiper", {
  loop: true,
  thumbs: {
    swiper: laboratoryTabSwiper,
  },
});

// 新闻中心切换

$(".news-cate-item").on("mouseenter", function(){
  $(this).addClass("on").siblings().removeClass("on");
  const index = $(this).index();
  $(".news-box-item").hide();
  $(".news-box-item").eq(index).show().css("display", "flex");
})



const mapArr = [];
$(".m-global-map-item").each((index,item) => {
  const it = $(item);
  mapArr.push({
    name:it.data("title"),
    value:it.data("url")
  })
})
// 绘制图表
let worldChart = echarts.init(document.getElementById("global-map"));
// 国家名英文中文对比
let nameComparison = {
  // beimei: "北美认证",
  // Russia: "俄罗斯认证",
  oumeng: "欧盟认证",
  feizhou: "非洲认证",
  China: "中国认证",
  yazhou: "亚洲认证",
  dayangzhou: "澳洲认证",
  // nanmei: "南美认证",
  meiguo:"美国认证"
  // ....其他省略 ，见文章末
};
// 数据
let dataMap = mapArr;
let option = {
  backgroundColor: "#f6f6f6",
  title: {
    //地图显示标题
    show: false,
    text: "",
    top: "0",
    left: "center",
    textStyle: {
      color: "#000",
    },
  },
  toolbox: {
    //工具栏
    show: false,
    orient: "vertical",
    top: 0,
    itemGap: 20,
    left: 30,
    feature: {
      dataView: {
        readOnly: false,
      },
      restore: {},
      saveAsImage: {},
    },
  },
  tooltip: {
    //提示框组件
    show: true,
    trigger: "item",
    formatter: "",
  },
  series: [
    {
      name: "使用情况",
      type: "map",
      mapType: "world",
      roam: false,
      zoom: 1,
      mapLocation: {
        y: 30,
      },
      data: dataMap, //绑定数据
      nameMap: nameComparison,
      symbolSize: 12,
      label: {
        show: false,
        color: "#000",
        fontSize: 0,
      },
      itemStyle: {
        normal: {
          borderWidth: 1, //边际线大小
          borderColor: "#999", //边界线颜色
          areaColor: "#ccc", //默认区域颜色
        },
        emphasis: {
          show: true,
          areaColor: "#33397d", //鼠标滑过区域颜色
          color:"#33397d",
          label: {
            show: true,
            textStyle: {
              color: "#fff",
            },
          },
        },
      },
      select: { // 地图选中区域样式
        label:{ // 选中区域的label(文字)样式
          color: '#fff'
        },
        itemStyle: {// 选中区域的默认样式
          areaColor: '#33397d'
        },
      },

    },
  ],
};
worldChart.setOption(option);
worldChart.on("click", function(e){
  // console.log(e.data);
  location.href = e.data.value
})