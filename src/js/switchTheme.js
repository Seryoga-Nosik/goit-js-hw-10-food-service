const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const refs = {
  checkbox: document.querySelector('#theme-switch-toggle'),
  body: document.querySelector('body'),
};

refs.checkbox.addEventListener('change', onClickCheckbox);

function onClickCheckbox(e) {
  refs.body.classList.toggle(Theme.LIGHT);
  refs.body.classList.toggle(Theme.DARK);

  if (e.currentTarget.checked) {
    localStorage.setItem('theme', Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme === Theme.DARK) {
  refs.checkbox.checked = true;
  refs.body.classList.add(Theme.DARK);
}
if (savedTheme === Theme.LIGHT) {
  refs.checkbox.checked = false;
  refs.body.classList.add(Theme.LIGHT);
}
