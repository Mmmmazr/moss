(() => {
  const scrollButton = document.querySelector('.scroll-top');
  if (!scrollButton) return;
  const updateScrollButton = () => scrollButton.classList.toggle('is-visible', window.scrollY > 500);
  scrollButton.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  window.addEventListener('scroll', updateScrollButton, { passive: true });
  updateScrollButton();

  document.querySelectorAll('[data-copy-target]').forEach((button) => {
    button.addEventListener('click', async () => {
      const target = document.getElementById(button.dataset.copyTarget);
      if (!target) return;
      try {
        await navigator.clipboard.writeText(target.textContent.trim());
        button.textContent = 'Copied';
      } catch {
        button.textContent = 'Select & copy';
      }
      window.setTimeout(() => { button.textContent = 'Copy'; }, 1800);
    });
  });
})();
