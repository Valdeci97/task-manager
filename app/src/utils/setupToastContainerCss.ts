export function setupToastContainerCss(
  bottom = '10vh',
  rigth = '5%',
  width = '15rem',
): void {
  const mainContainer = document.getElementById('toast-container');
  if (!mainContainer) return;
  mainContainer.style.alignItems = 'center';
  mainContainer.style.bottom = bottom;
  mainContainer.style.display = 'flex';
  mainContainer.style.flexDirection = 'column';
  mainContainer.style.position = 'fixed';
  mainContainer.style.right = rigth;
  mainContainer.style.width = width;
  mainContainer.style.zIndex = '10';
}
