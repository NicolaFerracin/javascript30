(function() {
  const addGiftForm = document.querySelector('.presents-form');
  const presentsList = document.querySelector('.presents ul');
  const gifts = JSON.parse(localStorage.getItem('gifts')) || [];
  const toggleAllGiftsButton = document.querySelector('#toggleAllGifts');
  refreshPresentsList(gifts, presentsList);

  addGiftForm.addEventListener('submit', addGift);
  presentsList.addEventListener('click', togglePresent);
  toggleAllGiftsButton.addEventListener('click', toggleAllGifts);


  function addGift(e) {
    e.preventDefault();
    const name = this.querySelector('input[type="text"]').value;
    const newGift = {
      name,
      done: false
    };
    gifts.push(newGift);
    refreshPresentsList(gifts, presentsList);
    this.reset();
    storeInLocalStorage('gifts', JSON.stringify(gifts));
  }

  function refreshPresentsList(gifts, list) {
    list.innerHTML = gifts.map((gift, index) => {
      return `<li><label><input type="checkbox" id="${index}" ${gift.done ? 'checked' : ''}/>
      ${gift.name}</label></li>`;
    }).join('');
  }

  function storeInLocalStorage(key, string) {
    localStorage.setItem(key, string);
  }

  function togglePresent(e) {
    if (e.target.matches('input[type="checkbox"]')) {
      const index = e.target.id;
      gifts[index].done = !gifts[index].done;
      storeInLocalStorage('gifts', JSON.stringify(gifts));
    }
  }

  function toggleAllGifts() {
    gifts.forEach(gift => gift.done = this.dataset.action === 'check' ? true : false);
    refreshPresentsList(gifts, presentsList);
    storeInLocalStorage('gifts', JSON.stringify(gifts));
    this.dataset.action = this.dataset.action === 'check' ? 'uncheck' : 'check';
    this.innerHTML = this.dataset.action === 'check' ? 'Check All Gifts' : 'Unheck All Gifts';
  }
}());
