const shell = document.querySelector(".desktop-scale-shell");
const stage = document.querySelector(".desktop-scale-stage");

function applyDesktopScale() {
  if (!shell || !stage) return;

  if (window.innerWidth > 760) {
    stage.style.width = "100%";
    stage.style.transform = "none";
    shell.style.height = "auto";
    return;
  }

  stage.style.width = "1440px";
  stage.style.transform = "none";

  const scale = Math.min(window.innerWidth / 1440, 1);
  const stageHeight = stage.scrollHeight;

  stage.style.transform = `scale(${scale})`;
  shell.style.height = `${stageHeight * scale}px`;
}

window.addEventListener("load", applyDesktopScale);
window.addEventListener("resize", applyDesktopScale);
