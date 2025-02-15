chrome.browserAction.onClicked.addListener((tab) => {
  chrome.tabs.executeScript(tab.id, { code: `(${copyLink})()` });
});

function copyLink() {
  const tabUrl = window.location.href;
  navigator.clipboard
    .writeText(tabUrl)
    .then(() => {
      console.log("Link copiado com sucesso:", tabUrl);
    })
    .catch((error) => {
      console.error("Erro ao copiar o link:", error);
    });

    const encodedUrl = encodeURIComponent(tabUrl);

 
  
  window.open(`itube-download-link://${tabUrl}`, "_blank");
}



