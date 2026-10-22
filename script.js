document.documentElement.classList.add('js-enabled');

const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

function setMenuOpen(isOpen) {
  menuToggle.setAttribute('aria-expanded', String(isOpen));
  menuToggle.setAttribute('aria-label', isOpen ? 'Close navigation' : 'Open navigation');
  navigation.classList.toggle('is-open', isOpen);
}

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});

navigation.addEventListener('click', (event) => {
  if (event.target.closest('a')) setMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

document.querySelectorAll('.photo-frame img').forEach((image) => {
  const frame = image.closest('.photo-frame');
  const updatePhotoState = () => frame.classList.toggle('has-image', image.naturalWidth > 0);
  image.addEventListener('load', updatePhotoState);
  image.addEventListener('error', updatePhotoState);
  if (image.complete) updatePhotoState();
});