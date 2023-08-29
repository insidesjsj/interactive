window.addEventListener("load", () => {
    const grid = new Isotope("section", {
        itemSelector: "article",    // 배치할 요소명
        columnWidth: "article",     // 너비값을 구할 요소명
        transitionDuration: "0.5s"  // 화면 재배치 시 요소가 움직이는 속도
    });
});