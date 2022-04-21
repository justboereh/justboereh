import { reactive } from 'vue';
import { get } from 'axios';

export default reactive({
  blogs: [],

  get(errorcallback, id) {
    if (!localStorage) return null;

    const request = async (req_id) => {
      try {
        for (const x of (await get(baseurl + (req_id ? '?id=' + req_id : '')))
          .data) {
          x.tags = x.tags.split(',');

          const ntags = [];

          for (const tag of x.tags) {
            if (tag.trim() === '') continue;

            ntags.push(tag.trim());
          }

          x.tags = ntags;

          x.lastfectched = Date.now();

          this.blogs.push(x);
        }

        if (this.blogs.length > 0) {
          localStorage.setItem(
            'blogs:downloaded',
            JSON.stringify({
              lastfectched: Date.now(),
              data: this.blogs,
            })
          );
        }
      } catch (_) {
        errorcallback(_);
      }
    };

    if (!localStorage.getItem(nameOfLS)) {
      request(id);

      return;
    }

    try {
      const blogsobj = JSON.parse(localStorage.getItem(nameOfLS));

      if (blogsobj.lastfectched + 86400000 <= Date.now()) {
        localStorage.removeItem(nameOfLS);

        request();

        return;
      }

      blogsobj.data.forEach((x) => {
        if (x.lastfectched + 86400000 <= Date.now()) {
          request(x.id);

          return;
        }

        this.blogs.push(x);
      });

      if (!blogsobj.data.some((x) => x.id === id)) request();
    } catch (_) {
      errorcallback(_);
    }
  },
});
