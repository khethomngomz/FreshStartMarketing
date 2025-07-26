// Cookie banner functionality
function acceptCookies() {
  document.getElementById('cookieBanner').style.display = 'none';
  localStorage.setItem('cookiesAccepted', 'true');
}

window.onload = function () {
  if (localStorage.getItem('cookiesAccepted')) {
    document.getElementById('cookieBanner').style.display = 'none';
  }
};
