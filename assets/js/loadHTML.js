fetch(`/components/header.html`)
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    document.querySelector('header').innerHTML = html;
  });

fetch(`/components/footer.html`)
  .then(function (response) {
    return response.text();
  })
  .then(function (html) {
    document.querySelector('footer').innerHTML = html;
  });

/* Setting Title of the page */
let title = document.URL;
title = title.slice(title.lastIndexOf('/') + 1, title.indexOf('.html'));
title = title.toUpperCase()[0] + title.toLowerCase().substr(1);
document.title = `${title} - Divine Diagnostics`;
