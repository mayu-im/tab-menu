const tabMenuItems = document.querySelectorAll(".tab-container ul li");
const tabContents = document.querySelectorAll(".tab-container .tab-content");

tabMenuItems.forEach((tabMenuItem) => {
  tabMenuItem.addEventListener("mouseover", () => {
    // 全てのタブからselectedクラスを外す。
    tabMenuItems.forEach((tabMenuItem) => {
      tabMenuItem.classList.remove("selected");
    });

    // クリックされたタブのみselectedクラスを付ける。
    tabMenuItem.classList.add("selected");

    // 全てのタブのコンテンツからselectedクラスを外す。
    tabContents.forEach((tabContent) => {
      tabContent.classList.remove("selected");
    });

    // クリックされたタブのカスタムデータ属性と同じIDを持つコンテンツに、selectedクラスを付ける。
    document.getElementById(tabMenuItem.dataset.id).classList.add("selected");
  });
});
