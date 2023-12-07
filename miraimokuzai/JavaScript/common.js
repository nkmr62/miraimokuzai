//ハンバーガーメニュー
window.addEventListener("scroll", function () {
  // ヘッダーを変数の中に格納する
  const header = document.querySelector("header");
  // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
  header.classList.toggle("scroll-nav", window.scrollY > 100);
});

//会社案内
const company_pic = document.getElementById("company_pic");
let options1 = { threshold: 0.5 };
const observer1 = new IntersectionObserver(callback1, options1);
observer1.observe(company_pic);
function callback1(entries) {
  if (entries[0].isIntersecting) {
    company_pic.classList.add("huwa");
  }
}

//マップ
const map_1 = document.getElementById("map_1");
let options2 = { threshold: 0.5, rootMargin: "0px" };
const observer2 = new IntersectionObserver(callback2, options2);
observer2.observe(map_1);
function callback2(entries) {
  if (entries[0].isIntersecting) {
    map_1.classList.add("huwa");
  }
}

const targets = document.getElementsByClassName("fade");
for (let i = targets.length; i--; ) {
  let observer = new IntersectionObserver((entries, observer) => {
    for (let j = entries.length; j--; ) {
      if (entries[j].isIntersecting) {
        entries[j].target.classList.add("active");
      } else {
        entries[j].target.classList.remove("active");
      }
    }
  });
  observer.observe(targets[i]);
}

// 会社案内 母ちゃん
const biz1 = document.getElementById("biz1");
let options_biz1 = { threshold: 0.5, rootMargin: "0px" };
const observer_biz1 = new IntersectionObserver(callback2, options2);
observer_biz1.observe(biz1);
function callback2(entries) {
  if (entries[0].isIntersecting) {
    biz1.classList.add("line");
  }
}
