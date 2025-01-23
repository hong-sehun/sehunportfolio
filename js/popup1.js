// 공주온밤 팝업
document.addEventListener("DOMContentLoaded", () => {
    const gongjuImage = document.querySelector(".gongju_hover");
    const popup = document.querySelector(".popup");
    const closeButton = popup.querySelector("button");
  
    // 공주온밤 이미지를 클릭했을 때 팝업 열기
    gongjuImage.addEventListener("click", () => {
      popup.classList.add("on");
    });
  
    // 닫기 버튼 클릭 시 팝업 닫기
    closeButton.addEventListener("click", () => {
      popup.classList.remove("on");
    });
  
    // 팝업 외부 클릭 시 팝업 닫기
    document.addEventListener("click", (event) => {
      if (!popup.contains(event.target) && event.target !== gongjuImage) {
        popup.classList.remove("on");
      }
    });
  });

//   훕훕베이글 팝업
  document.addEventListener("DOMContentLoaded", () => {
    const hoopImage = document.querySelector(".hoop_hover");
    const popup5 = document.querySelector(".popup5"); 
    const closeButton = popup5.querySelector("button");

    // hoop_hover 이미지를 클릭했을 때 팝업 열기
    hoopImage.addEventListener("click", () => {
      popup5.classList.add("on"); 
    });
  
    // 닫기 버튼 클릭 시 팝업 닫기
    closeButton.addEventListener("click", () => {
      popup5.classList.remove("on"); 
    });
  
    // 팝업 외부 클릭 시 팝업 닫기
    document.addEventListener("click", (event) => {
      if (!popup5.contains(event.target) && event.target !== hoopImage) {
        popup5.classList.remove("on"); 
      }
    });
  });

//   무신사 팝업
document.addEventListener("DOMContentLoaded", () => {
    const musinsaImage = document.querySelector(".musinsa_hover"); 
    const popup6 = document.querySelector(".popup6"); 
    const closeButton = popup6.querySelector("button"); 
  
    // musinsa_hover 이미지를 클릭했을 때 팝업 열기
    musinsaImage.addEventListener("click", () => {
      popup6.classList.add("on"); 
    });
  
    // 닫기 버튼 클릭 시 팝업 닫기
    closeButton.addEventListener("click", () => {
      popup6.classList.remove("on"); 
    });
  
    // 팝업 외부 클릭 시 팝업 닫기
    document.addEventListener("click", (event) => {
      if (!popup6.contains(event.target) && event.target !== musinsaImage) {
        popup6.classList.remove("on");
      }
    });
  });

//   에뛰드 팝업
document.addEventListener("DOMContentLoaded", () => {
    const etudeImage = document.querySelector(".etude_hover");
    const popup7 = document.querySelector(".popup7"); 
    const closeButton = popup7.querySelector("button"); 
  
    // etude_hover 이미지를 클릭했을 때 팝업 열기
    etudeImage.addEventListener("click", () => {
      popup7.classList.add("on"); 
    });
  
    // 닫기 버튼 클릭 시 팝업 닫기
    closeButton.addEventListener("click", () => {
      popup7.classList.remove("on"); 
    });
  
    // 팝업 외부 클릭 시 팝업 닫기
    document.addEventListener("click", (event) => {
      if (!popup7.contains(event.target) && event.target !== etudeImage) {
        popup7.classList.remove("on"); 
      }
    });
  });

//   베스트펜 팝업
  document.addEventListener("DOMContentLoaded", () => {
    const bestpenImage = document.querySelector(".bestpen_hover");
    const popup8 = document.querySelector(".popup8");
    const closeButton = popup8.querySelector("button");
  
    bestpenImage.addEventListener("click", () => {
      popup8.classList.add("on");
    });
  
    closeButton.addEventListener("click", () => {
      popup8.classList.remove("on");
    });
  
    document.addEventListener("click", (event) => {
      if (!popup8.contains(event.target) && event.target !== bestpenImage) {
        popup8.classList.remove("on");
      }
    });
  });

// 베이비너리 팝업
  document.addEventListener("DOMContentLoaded", () => {
    const babyImage = document.querySelector(".baby_hover");
    const popup9 = document.querySelector(".popup9");
    const closeButton = popup9.querySelector("button");
  
    babyImage.addEventListener("click", () => {
      popup9.classList.add("on");
    });
  
    closeButton.addEventListener("click", () => {
      popup9.classList.remove("on");
    });
  
    document.addEventListener("click", (event) => {
      if (!popup9.contains(event.target) && event.target !== babyImage) {
        popup9.classList.remove("on");
      }
    });
  });