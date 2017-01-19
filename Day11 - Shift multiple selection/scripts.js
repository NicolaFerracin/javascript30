const checkboxes = document.querySelectorAll('input[type="checkbox"]');
let lastSelected = null;

checkboxes.forEach(checkbox => checkbox.addEventListener('click', function(e) {
  if (e.shiftKey && this.checked) {
    if (lastSelected < this.dataset.position) {
      for (let i = lastSelected; i < this.dataset.position; i++) {
        checkboxes[i].checked = true;
      }
    } else {
      for (let i = this.dataset.position; i < lastSelected; i++) {
        checkboxes[i].checked = true;
      }
    }
  }
  lastSelected = this.dataset.position;
}));
