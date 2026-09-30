(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.nav');
  const chat = document.getElementById('chat-panel');
  const openers = document.querySelectorAll('.js-open-chat');
  const closeChat = document.querySelector('.chat-panel__close');
  const year = document.getElementById('year');

  if (year) year.textContent = new Date().getFullYear();

  if (menuButton && nav) {
    menuButton.addEventListener('click', () => {
      const open = nav.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(open));
      menuButton.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('is-open');
      menuButton.setAttribute('aria-expanded', 'false');
    }));
  }

  const toggleChat = (forceOpen = null) => {
    if (!chat) return;
    const shouldOpen = forceOpen === null ? chat.hidden : forceOpen;
    chat.hidden = !shouldOpen;
    document.body.classList.toggle('chat-open', shouldOpen);
    if (shouldOpen) closeChat?.focus({ preventScroll: true });
  };

  openers.forEach(button => button.addEventListener('click', () => toggleChat(null)));
  closeChat?.addEventListener('click', () => toggleChat(false));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && chat && !chat.hidden) toggleChat(false);
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('is-visible'));
  }
})();
