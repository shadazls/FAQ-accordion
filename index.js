const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(item => {
  const button = item.querySelector('.accordion-btn');
  const content = item.querySelector('.accordion-content');
  const icon = item.querySelector('.icon');

  button.addEventListener('click', () => {
    content.classList.toggle('hidden');
    icon.src = content.classList.contains('hidden') ? './assets/images/icon-plus.svg' : './assets/images/icon-minus.svg';
  });
});