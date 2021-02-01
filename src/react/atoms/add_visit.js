window.onload = function () {
  console.log(window.localStorage.getItem('blog'));
  if (!window.localStorage.getItem('blog')) {
    const myHeaders = new Headers();
    myHeaders.append('Content-Type', 'application/json');

    const blog = window.location.pathname.split('/')[1].split('.html')[0];
    console.log(blog);

    const raw = JSON.stringify({ blog_name: blog });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
    };

    window
      .fetch(
        'https://web-projects-api.ulisessg.vercel.app/api/blog/add-visit',
        requestOptions,
      )
      .then(() => window.localStorage.setItem('blog', 'visited'))
      .catch((error) => console.log('error', error));
  }
};
