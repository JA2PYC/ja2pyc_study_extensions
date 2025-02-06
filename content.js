chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === "extractPosts") {
      let articles = [];
      document.querySelectorAll(".list_item").forEach((item) => {
        let titleElement = item.querySelector(".post_title");
        let linkElement = item.querySelector("a.info_link");
        let imageElement = item.querySelector(".thumb_img");
  
        if (titleElement && linkElement && imageElement) {
          articles.push({
            title: titleElement.innerText,
            link: linkElement.href,
            image: imageElement.src
          });
        }
      });
  
      sendResponse({ data: articles });
    }
  });
  