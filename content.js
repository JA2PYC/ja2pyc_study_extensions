// 현재 페이지의 URL 가져오기
console.log('content.js')
const currentUrl = window.location.href;
// 정규식을 사용하여 boardSeq와 listSeq 값을 추출
const urlPattern = /boardSeq=(\d+)&listSeq=(\d+)/;
const match = currentUrl.match(urlPattern);

if (match) {
  const boardSeq = match[1];
  const listSeq = match[2];

  // 특정 boardSeq와 listSeq에 대해 창을 띄우기
  if (boardSeq === '60' && listSeq === '5751263') {
    // 확장 프로그램의 창 또는 모달을 표시하는 코드 작성
    // 예: alert("확장 프로그램 창 표시");
    console.log('test')
    let shareButton = document.getElementById('danawa-community-newsView-article-option-button-share');
    if (shareButton) {
      console.log(shareButton)
        shareButton.click();
        let bandButton = document.getElementById('danawa-community-newsView-article-option-share-button-naverband');
        if (bandButton) {
      console.log(bandButton)
      // bandButton.click();
        }
    }
  }
}


// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//     if (message.action === "extractPosts") {
//       let articles = [];
//       document.querySelectorAll(".list_item").forEach((item) => {
//         let titleElement = item.querySelector(".post_title");
//         let linkElement = item.querySelector("a.info_link");
//         let imageElement = item.querySelector(".thumb_img");
  
//         if (titleElement && linkElement && imageElement) {
//           articles.push({
//             title: titleElement.innerText,
//             link: linkElement.href,
//             image: imageElement.src
//           });
//         }
//       });
  
//       sendResponse({ data: articles });
//     }
//   });
  