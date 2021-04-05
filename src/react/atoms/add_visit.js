window.onload = function registerVisit() {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }

  if (!window.localStorage.getItem('blog')) {
    const blog = window.location.pathname.split('/')[1].split('.html')[0];

    const raw = JSON.stringify({ blog_name: blog });

    const request = new XMLHttpRequest();

    request.open(
      'POST',
      'https://web-projects-api.vercel.app/api/blog/add-visit',
      true,
    );

    request.send(raw);
  }
};
