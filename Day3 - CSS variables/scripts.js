const inputs = document.querySelectorAll('.filters input');
inputs.forEach(input => input.addEventListener('change', onChange));

function onChange(e) {
  const property = this.name;
  const newValue = this.value;
  const unit = this.dataset.unit || '';
  document.documentElement.style.setProperty(`--${property}`, newValue + unit);
}
