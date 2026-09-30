const dialog = document.querySelector('#contact-dialog');
const status = document.querySelector('.copy-status');

document.querySelectorAll('[data-open-contact]').forEach((button) => {
  button.addEventListener('click', () => dialog.showModal());
});

document.querySelector('[data-close-contact]').addEventListener('click', () => {
  dialog.close();
});

dialog.addEventListener('click', (event) => {
  if (event.target === dialog) dialog.close();
});

document.querySelector('[data-copy-url]').addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(location.href);
    status.textContent = 'URLをコピーしました';
  } catch {
    status.textContent = 'URLをコピーできませんでした';
  }
});
