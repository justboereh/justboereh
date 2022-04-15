import { reactive } from 'vue';

export default reactive({
  scrolltop: 0,
  blogs: [],
  blogssort: '',

  scrolltopSet(value) {
    if (typeof value !== 'number') return;

    this.scrollTop = value;
  },
  blogsAdd(value) {
    if (typeof value !== 'object') return;
    if (this.blogs.some((x) => x.id === value.id)) return;

    this.blogs.push(value);
  },
  blogsSet(value) {
    this.blogs = value;
  },
});
