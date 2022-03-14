<script>
import {
    onMount
} from 'svelte';

import {
    home
} from "../../stores/layout";
import {
    blogs
} from "../../stores/blogs";

blogs.subscribe()

onMount(() => {
    if (!window.localStorage) return;
});

home.update(_ => '/blogs')
</script>

<slot />
