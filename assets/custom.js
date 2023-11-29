var footerBlocks = document.querySelectorAll('.footer-block');
if (footerBlocks) {
  footerBlocks.forEach((footerBlock) => {
    footerBlock.addEventListener('click', () => {
      const content = footerBlock.querySelector('.footer-block__details-content');
      content.classList.toggle('active');
    });
  });
}

const body = document.querySelector('body');
if (body.classList.contains('store-finder')){
      const cityButtons = document.querySelectorAll('.city-list-wrap li');
      const rows = document.querySelectorAll('.row');

      cityButtons.forEach((button, index) => {
          button.addEventListener('click', () => {
              cityButtons.forEach(cityButton => {
                  cityButton.classList.remove('active');
              });
              button.classList.add('active');
              rows.forEach(row => {
                  row.classList.remove('active');
              });
              rows[index].classList.add('active');
          });
      });
}

document.querySelector("button.close.popup__close").addEventListener("click", function() {
  document.querySelector(".popup-section.jsPopup").classList.add("close");
  document.querySelector("body").classList.remove("popup-open");
});