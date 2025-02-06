document.getElementById("fetchPosts").addEventListener("click", async () => {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: extractPosts
  });
});

function extractPosts() {
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

  chrome.runtime.sendMessage({ action: "displayPosts", data: articles });
}

chrome.runtime.onMessage.addListener((message) => {
  if (message.action === "displayPosts") {
    let postList = document.getElementById("postList");
    postList.innerHTML = ""; // 기존 내용 초기화

    message.data.forEach(post => {
      let li = document.createElement("li");
      li.innerHTML = `<a href="${post.link}" target="_blank">
                        <img src="${post.image}" alt="${post.title}">
                        <p>${post.title}</p>
                      </a>`;
      postList.appendChild(li);
    });
  }
});
