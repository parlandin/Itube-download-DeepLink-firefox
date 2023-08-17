function createIcon() {
  const icon = document.createElement("img");
  icon.src = chrome.runtime.getURL("images/link.svg");
  icon.style.width = "15px";
  icon.style.height = "15px";
  icon.style.marginLeft = "5px";

  return icon;
}

function createButton() {
  const button = document.createElement("button");
  button.textContent = "Baixar";
  button.className = "button-download-itube-class ytd-button-renderer";
  button.style.background = "#ffffff1a";
  button.style.border = "none";
  button.style.color = "#0db6e9";
  button.style.padding = "10px";
  button.style.borderRadius = "15px";
  button.style.margin = "0 10px";
  button.style.cursor = "pointer";
  button.style.textWrap = "nowrap";
  button.style.whiteSpace = "nowrap";
  button.style.fontWeight = "500";
  button.style.fontFamily = "Roboto, Arial, sans-serif";
  button.style.display = "flex";
  button.style.alignItems = "center";
  button.style.justifyContent = "center";

  return button;
}

async function openDeepLinkOrCopy() {
  const tabUrl = window.location.href;
  await navigator.clipboard.writeText(tabUrl);

  window.open(`itube-download-link://${tabUrl}`, "_blank");
}

function createCopyButton() {
  const copyButton = createButton();
  const icon = createIcon();

  copyButton.appendChild(icon);

  copyButton.onclick = openDeepLinkOrCopy;

  /*  const menuElement = document.querySelector(
    "#top-level-buttons-computed.top-level-buttons.style-scope.ytd-menu-renderer"
  );
 */

  const menuElement = document.querySelector(
    "#content ytd-watch-flexy ytd-menu-renderer.style-scope.ytd-watch-metadata #top-level-buttons-computed.top-level-buttons.style-scope.ytd-menu-renderer"
  );

  menuElement.appendChild(copyButton);
}

document.addEventListener("yt-navigate-finish", function () {
  const isElement = document.querySelector(
    "#content ytd-watch-flexy ytd-menu-renderer.style-scope.ytd-watch-metadata #top-level-buttons-computed.top-level-buttons.style-scope.ytd-menu-renderer"
  );

  if (!isElement) {
    setTimeout(() => {
      createCopyButton();
    }, 2000);
    return;
  }

  setTimeout(() => {
    createCopyButton();
  }, 1500);
});

document.addEventListener("visibilitychange", function () {
  const isButton = document.querySelector(".button-download-itube-class");

  if (!isButton) {
    createCopyButton();
  }
});
