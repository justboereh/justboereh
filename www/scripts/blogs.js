import { get } from 'axios';
const baseurl =
  (process.env.NODE_ENV === 'development'
    ? '//localhost:80/'
    : '//api.justboereh.com/') + 'blogs/';

const nameOfLS = 'blogs:downloaded';

const dotags = (str) => {
  const arr = [];

  for (const t of str.split(',')) {
    if (t.trim() === '') continue;

    arr.push(t.trim());
  }

  return arr;
};

const request = async ({ params = {}, callback }) => {
  console.log('umm');
  try {
    console.log('ysdas');
    const { data } = await get(baseurl, { params });

    console.log(data);
    for (const x of data.data) {
      console.log('x');

      x.tags = dotags(x.tags);

      x.lastfectched = Date.now();

      useContent.blogs.push(x);
    }

    if (useContent.blogs.length > 0) {
      localStorage.setItem(
        nameOfLS,
        JSON.stringify({
          lastfectched: Date.now(),
          data: useContent.blogs,
        })
      );
    }
  } catch (e) {
    callback('error', e);
  }
};

export const getBlogs = function ({ callback, pagenumber }) {
  if (!localStorage) return callback('error', 'no localstorage');

  if (!localStorage[nameOfLS]) {
    console.log('umm');
    request({ callback, params: { page: pagenumber } });

    return;
  }

  try {
    const blogsobj = JSON.parse(localStorage[nameOfLS]);
    console.log('hi');
    if (blogsobj.lastfectched + 86400000 <= Date.now()) {
      console.log('okay');
      localStorage.removeItem(nameOfLS);

      request();

      return;
    }

    for (const x of blogsobj.data) {
      console.log('why');
      if (x.lastfectched + 86400000 <= Date.now()) {
        console.log('lol');
        request({ params: { id: x.id } }, callback);

        return;
      }

      if (!useContent.blogs.some((v) => v.id === x.id))
        useContent.blogs.push(x);
    }

    let excludestr = '';

    for (const x of useContent.blogs) {
      excludestr += excludestr === '' ? x.id : ',' + x.id;
    }

    request({ params: { exclude: excludestr }, callback });
  } catch (e) {
    console.log(e);
    callback('error', e);
  }
};

export const getBlog = (id, errorcallback) => {};
