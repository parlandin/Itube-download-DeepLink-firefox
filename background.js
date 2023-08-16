chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: copyLink,
  });
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
  window.open(`itube-download-link://${tabUrl}`, "_blank");
}
