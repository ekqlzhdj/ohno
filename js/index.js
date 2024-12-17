var amswer_array = [];

document.addEventListener("DOMContentLoaded", function () {
  const snowContainer = document.querySelector(".snow-container");
  const createSnowflake = () => {
    const snowflake = document.createElement("div");
    snowflake.classList.add("snowflake");

    // 눈송이의 모양 (유니코드 사용)
    snowflake.innerText = "❄";

    // 랜덤 위치와 크기 설정
    const randomSize = Math.random() * 2 + 1; // 눈송이 크기 (1rem ~ 3rem)
    const randomLeft = Math.random() * 100; // 화면 너비 기준 위치 (%)
    const randomDuration = Math.random() * 5 + 5; // 떨어지는 속도 (5s ~ 10s)

    snowflake.style.left = `${randomLeft}vw`;
    snowflake.style.fontSize = `${randomSize}rem`;
    snowflake.style.animationDuration = `${randomDuration}s`;

    // 눈송이를 컨테이너에 추가
    snowContainer.appendChild(snowflake);

    // 애니메이션 종료 후 제거
    setTimeout(() => {
      snowflake.remove();
    }, randomDuration * 1000);
  };

  // 일정 시간 간격으로 눈송이를 생성
  setInterval(createSnowflake, 200);
});

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".twenty-image");
  if (image) {
    // 요소가 존재하는 경우만 이벤트 리스너 추가
    image.addEventListener("click", function () {
      this.classList.add("hidden"); // 클릭 시 'hidden' 클래스 추가 (문처럼 회전)
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".twentyone-image");
  if (image) {
    // 요소가 존재하는 경우만 이벤트 리스너 추가
    image.addEventListener("click", function () {
      this.classList.add("hidden"); // 클릭 시 'hidden' 클래스 추가 (문처럼 회전)
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".twentytwo-image");
  if (image) {
    // 요소가 존재하는 경우만 이벤트 리스너 추가
    image.addEventListener("click", function () {
      this.classList.add("hidden"); // 클릭 시 'hidden' 클래스 추가 (문처럼 회전)
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".twentythree-image");
  if (image) {
    // 요소가 존재하는 경우만 이벤트 리스너 추가
    image.addEventListener("click", function () {
      this.classList.add("hidden"); // 클릭 시 'hidden' 클래스 추가 (문처럼 회전)
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".twentyfour-image");
  if (image) {
    // 요소가 존재하는 경우만 이벤트 리스너 추가
    image.addEventListener("click", function () {
      this.classList.add("hidden"); // 클릭 시 'hidden' 클래스 추가 (문처럼 회전)
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const image = document.querySelector(".twentyfive-image");
  if (image) {
    // 요소가 존재하는 경우만 이벤트 리스너 추가
    image.addEventListener("click", function () {
      this.classList.add("hidden"); // 클릭 시 'hidden' 클래스 추가 (문처럼 회전)
    });
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(
    ".twenty-image, .twentyone-image, .twentytwo-image, .twentythree-image, .twentyfour-image, .twentyfive-image"
  );

  images.forEach((image) => {
    image.addEventListener("click", function () {
      this.classList.add("hidden"); // 클릭 시 'hidden' 클래스 추가 (문처럼 회전)
    });
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // 이미지와 팝업 요소 선택
  const letterImage = document.querySelector(".letter-image");
  const popupContainer = document.getElementById("popup-container");

  // 요소가 제대로 선택되었는지 확인
  if (!letterImage || !popupContainer) {
    console.error("요소를 찾을 수 없습니다. HTML을 확인하세요.");
    return;
  }

  // 원본 이미지를 클릭하면 팝업 표시
  letterImage.addEventListener("click", () => {
    popupContainer.style.display = "block"; // 팝업 표시
  });

  // 팝업 이미지를 클릭하면 팝업 숨기기
  popupContainer.addEventListener("click", () => {
    popupContainer.style.display = "none"; // 팝업 숨기기
  });
});

document.addEventListener("DOMContentLoaded", function () {
  // 이미지 요소들
  const cookieImage = document.getElementById("cookieImage");
  const footImage = document.getElementById("footImage");

  let clickCount = 0;

  // 클릭 이벤트 리스너 추가
  cookieImage.addEventListener("click", function () {
    clickCount++; // 클릭 횟수 증가
    console.log("클릭 횟수:", clickCount); // 클릭 횟수 로그 확인

    // 클릭 횟수에 따라 동작
    if (clickCount === 3) {
      footImage.style.opacity = 1; // foot-image 서서히 보이기
      console.log("foot-image 보이기"); // 이미지가 보일 때 로그 확인
    }
  });
});
