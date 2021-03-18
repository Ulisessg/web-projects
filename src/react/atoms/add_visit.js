window.onload = function () {
  // Check that service workers are supported
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }

  console.log(window.localStorage.getItem('blog'));
  if (!window.localStorage.getItem('blog')) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('Access-Control-Allow-Origin', '*');
    myHeaders.append('Accept', '*/*');

    const blog = window.location.pathname.split('/')[1].split('.html')[0];

    const raw = JSON.stringify({ blog_name: blog });

    window
      .fetch(
        'https://web-projects-api-ulisessg.vercel.app/api/blog/add-visit',
        {
          method: 'POST',
          headers: myHeaders,
          body: raw,
          redirect: 'follow',
        },
      )
      .then((response) => response.text())
      .then(() => window.localStorage.setItem('blog', 'visited'))
      .catch((error) => console.log('error', error));
  }
};
