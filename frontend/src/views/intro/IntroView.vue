<script setup>
import { defineProps, defineEmits } from "vue";

defineProps({
  isOpen: Boolean,
});

const emit = defineEmits(["closeModal"]);

const closeModal = () => {
  emit("closeModal");
};

</script>

<template>
  <div class="received" v-if="isOpen">
    <div class="window">
      <div class="title-bar">
        <div class="title-bar-text" style="font-size: 12px">
          개발자 소개
        </div>
        <div class="title-bar-controls">
          <button aria-label="Minimize"></button>
          <button aria-label="Maximize"></button>
          <button aria-label="Close" @click="closeModal"></button>
        </div>
      </div>

      <div class="window-body">

        <div class="main" style="backgroud-color: black">
          <div class="console">
              <div class="console-body" style="padding: 0">
                  <pre>

██╗   ██╗███████╗███╗   ███╗██╗███╗   ██╗      ██╗██╗██╗     ██╗███╗   ███╗
██║   ██║██╔════╝████╗ ████║██║████╗  ██║      ██║██║██║     ██║████╗ ████║
╚██╗ ██╔╝█████╗  ██╔████╔██║██║██╔██╗ ██║      ██║██║██║     ██║██╔████╔██║
   ██║   ██╔══╝  ██║╚██╔╝██║██║██║╚██╗██║██║   ██║██║██║     ██║██║╚██╔╝██║
   ██║   ███████╗██║ ╚═╝ ██║██║██║ ╚████║ ╚█████╔╝██║███████╗██║██║ ╚═╝ ██║
   ╚═╝   ╚══════╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝  ╚═══╝ ╚═╝╚══════╝╚═╝╚═╝     ╚═╝
    :: SSAFY WORLD ::                                              (v1.0.0)

11기 구미 4반 '예민지림'이 개발한 SSAFY 롤링페이퍼 서비스 '싸피월드'에 오신 것을 환영합니다!

11기라면 누구나, 누구에게나 익명으로 롤링페이퍼를 전달할 수 있습니다
한 학기동안 감사했던 강사님, 프로님, 친구들에게 진심을 전해보세요💌

받은 편지는 2024년 5월 24일 (금) 00:00시에 공개됩니다🎉
많은 쪽지 참여 부탁드립니다.

📌공지사항
- 회원가입을 완료한 사용자만 보여집니다.
- 회원가입은 로그인 후 최초 1회만 보여집니다.
- 비방, 욕설, 조롱, 성희롱 등 타인에게 불쾌함을 주는 내용은 금지합니다.🚫

✅체크 포인트
- 반별로 만들어진 채팅방으로 재밌는 이야기를 주고 받아요!
- 응원을 받고 싶다면 시계를 눌러보세요!
- 싸피월드 개발자를 찾아 사용 후기를 보내주세요!
- windows 98이 있던 그때 그 시절로 돌아가보세요!
- 숨어있는 이스터 에그를 찾아보세요!

💻개발 툴 소개
- Backend: Spring Webflux, Spring Security, MySQL R2DBC
- Frontend: Vue.js
- release: Google Cloud Platform
- Version Control : GitHub
- Cooperation: Notion, Figma, Jira

🙋‍♀️개발자소개🙋‍♂️
⠀⠀⠀⠀⠀⢀⣀⣄⣄⡀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⣞⣿⠻⢳⢯⣿⣳⡀⠀⠀⠀
⠀⠀⠀⠸⡾⠂⠐⡀⢻⣿⣻⡇⠀⠀⠀
⠀⠀⠀⠀⡃⠍⢕⠐⠭⠭⢹⠀⠀⠀⠀
⠀⠀⠀⠀⠀⡂⠄⠢⡡⡈⡂⠀⠀⠀⠀
⠀⠀⠀⠀⠀⠢⡡⢙⢌⠢⠀⠀⠀⠀⠀
⠀⡀⣀⣤⣶⠡⢊⠕⡕⢍⣶⣦⣄⣀⠀
⣾⣿⣿⣿⣿⣿⣦⣵⣼⣾⣿⣿⣿⣿⣿
⣽⣿⣽⣾⣿⣾⣿⡿⣟⣿⣿⣟⣿⣟⣿
⣿⡿⣿⣿⣻⣿⣽⣿⣿⣿⡿⣿⣿⣿⣿

1. 팀장 김민종
   Role: Backend Developer
   About: 삼성 갈꺼니께~
   etc: 구미 4반 CA, 종바오 가지마
  
---------------------------------------------

⠀⠀⠀⠀⠀⠀⢀⢀⢀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⢀⢔⣞⣞⣞⣞⢮⡢⡄⠀⠀⠀
⠀⠀⠀⢸⡳⡳⡱⢱⠹⢱⠹⡮⠀⠀⠀
⠀⠀⠀⢸⢰⡑⡎⡆⡇⣇⢣⠹⠀⠀⠀
⠀⠀⠀⠠⢡⠩⢣⠑⢌⠪⡊⠌⠀⠀⠀
⠀⠀⠀⠀⢕⢕⢱⢪⢢⠣⡪⡨⠀⠀⠀
⠀⠀⠀⠀⠡⡣⡓⡗⡕⢕⢕⠄⠀⠀⠀
⠀⠀⠀⢀⢌⢎⢦⡱⡬⡪⡊⡎⡄⡀⠀
⡄⡆⡎⡎⢎⢎⢎⢎⢎⢎⢎⢎⢎⢎⢆
⢎⢎⢎⢮⢘⢜⣜⣞⣎⢎⢎⢢⢣⢣⢣

2. 팀원 이예찬
   Role: Backend Developer
   About: 다이어트 3주차.. 예민지림 
   etc: 구미 4반 확성기, pinia 닮음, 큰형님, 구미 4반 최강 기요미

---------------------------------------------

⠀⠀⠀⢀⣴⢾⣿⣿⣽⢷⢦⡀⠀⠀⠀
⠀⠀⠀⣾⢽⣻⢳⢯⢟⣿⢽⣖⠀⠀⠀
⠀⠀⠀⣽⠻⡢⠣⡣⠫⠾⠿⡽⠀⠀⠀
⠀⠀⠀⠕⠈⠈⠂⠄⠑⠉⠄⠕⠀⠀⠀
⠀⠀⠀⠁⠌⢀⢑⠠⢁⠂⡐⠀⠀⠀⠀
⠀ ⠀ ⢈⠄⢂⠨⠐⡀⣂⠀⠀⠀
⠀⡀⣄⣴⣗⠁⠅⠊⠨⠐⢼⣧⣄⡀⡀
⣟⣿⣻⣽⣧⠁⠄⠁⠌⠠⢱⣿⣽⢿⣳
⣻⣽⣿⣽⣾⠄⠀⠀⠀⢀⣿⢷⡿⣟⣿

3. 팀원 이지언
   Role: Backend Developer
   About: https://trillium.tistory.com/
   etc: 일타싸피 결승 진출, 포항의 자랑

---------------------------------------------

⠀⠀⠀⠀⠀⠀⡀⣀⢀⠀⠀⠀⠀⠀⠀
⠀⠀⠀⠀⡠⣮⡻⣪⡳⣕⠄⠀⠀⠀⠀
⠀⠀⠀⢀⣟⢎⠂⠄⠉⢮⡳⡀⠀⠀⠀
⠀⠀⠀⢰⡻⡐⡔⢈⢐⠌⡿⡄⠀⠀⠀
⠀⠀⠀⣮⡣⢈⢐⠠⠐⢀⢹⣕⠀⠀⠀
⠀⠀⠀⣗⢧⢂⠆⡅⠌⢄⣞⢮⠀⠀⠀
⠀⠀⠰⡽⡽⡇⢇⠄⠕⣸⣺⢽⡅⠀⠀
⢀⣀⢼⢝⢽⢕⠡⠊⡐⢸⢮⢯⣳⣀⠀
⡳⡽⡽⡽⣝⠆⡁⠂⠄⢱⣝⣗⣗⢷⢽
⢯⢯⢯⡻⣮⡃⠠⢈⠀⢜⣞⣞⢮⢯⣳
⡯⣯⡳⣝⢮⡇⠠⠀⠀⣗⢷⢽⣝⣗⣗

4. 팀원 이예림
   Role: Frontend Developer
   About: 이거 끝나고 저희 손절해요.
   etc: 구미 4반 반장, 잠 좀 그만 자

---------------------------------------------

⠀⠀⠀⠀⣠⡲⡽⡽⣽⡳⣄⡀⠀⠀⠀
⠀⠀⠀⣞⢮⢫⠹⡸⡐⢝⢜⣖⠄⠀⠀
⠀⠀⢸⢮⢳⠱⢱⢐⠌⠌⠦⡫⣇⠀⠀
⠀⠀⢼⢕⢈⠊⢂⠂⠨⠁⠅⠸⡸⠀⠀
⠀⠀⢽⢧⢂⢐⢐⠡⢈⢐⠠⣱⢽⠀⠀
⠀⠀⢽⢽⢧⢂⠅⢃⠡⠀⡦⡯⣯⡃⠀
⠀⠀⡯⡯⡯⣇⠪⡐⠄⢱⢽⣝⣞⣆⠀
⣔⢶⢽⢽⢽⡎⡂⢂⠁⢮⣻⣺⣺⡺⡦
⡯⡯⡯⡯⡯⣟⡶⣕⣞⣞⣞⣞⡮⡯⡯

5. 팀원 주효림
   Role: Backend Developer
   About: 벌써 관통 프로젝트 끝냄 ㅎ
   etc: 알고리즘 고수, 양배추환 중독자, 강박증 보유
   

서비스를 이용해주셔서 감사합니다.

                  </pre>
                <span style="padding: 5px; font-size: 15px;">
                  C:\&gt;
                  <a href="https://laced-anger-a26.notion.site/31b7c2774bd842a580718419dcaf3b53?pvs=4" style="color: lightblue" target="_blank">자세히보기</a>
                </span>
                <div style="height: 10px"></div>
              </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <HiddenListComponent :showModal="isHiddenOpen" @close-modal="closeHiddenModal"/>
</template>

<style scoped>
/* @import url('https://fonts.googleapis.com/css2?family=Yanolja+Yawang&display=swap'); */
    
body {
  /* font-family:'Yanolja Yawang', 'Nanum Gothic', Arial, sans-serif;  */
    /* font-family: "Pixelated MS Sans Serif", Arial; */
    background-color: #0f0f0f;
    color: #00ff00;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
}

pre {
  background-color: #0f0f0f;
  border: none;
  box-shadow: inset -1px -1px #000000,inset 1px 1px grey,inset -2px -2px #000000,inset 2px 2px #0a0a0a
}



@font-face {
    font-family: "Pixelated MS Sans Serif", Arial;
    src: url(https://unpkg.com/98.css@0.1.16/dist/ms_sans_serif.woff) format("woff");
}


.console {
    width: 100%;
    height: 70vh;
    min-height: 100px;
    background-color: #000;
    /* border: 1px solid #c5bf00; */
    /* border-radius: 5px; */
    overflow: hidden;
    color: #fff; /* 모든 텍스트를 하얀색으로 설정 */
}

.console-body {
    height: calc(100%);
    overflow-y: auto;
    font-size: 15px;
}


.received {
  position: fixed;
  width: 800px;
  min-width: 100px;
  height: 60%;
  top: 35%;            /* 화면의 중앙에 위치 */
  left: 50%;           /* 화면의 중앙에 위치 */
  transform: translate(-50%, -50%); /* 정확한 중앙 */
}

/* 반응형 레이아웃 설정 */
@media (max-width: 800px) {
  .received {
    width: 500px;
  }
}

@media (max-width: 500px) {
  .received {
    width: 300px;
  }
}

.window-body {
  font-size: 13px;
  margin: 0
}

.inner-nav {
  margin-top: 0;
}

.inner-nav > span {
  margin-right: 1%;
}

.inner-tab {
  margin-top: 5px;
  border-style: groove;
}

.go-to-write {
  width: 10%;
  margin: 10px;
}

.side-bar {
  width: 20%;
  background-color: white;
}

.letter-area {
  width: 80%;
  margin-left: 5px;
  margin-bottom: 10px;
}
</style>
