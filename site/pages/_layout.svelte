<script>
import {
    onMount
} from 'svelte';

import {
    hide,
    showPopout
} from "../stores/navbar";
import {
    layoutdiv,
    layoutscrolltotop
} from "../scripts/classes";

import hidenbfunc from "../scripts/hidenbfunc"

import "../css/app.css";
import thememode from "../scripts/thememode";
import NavbarMain from "../components/navbar/main.svelte"
import Popout from "../components/popout/mobile.svelte"

let divclass = layoutdiv
let scrolltotopclass = layoutscrolltotop + ' opacity-0 pointer-events-none';
let hidescrollnum = 0
let popoutshown = false

thememode();

onMount(() => {
    if (!location.hash) return;
    if (!document.querySelector(location.hash)) return;

    document.querySelector(location.hash).scrollIntoView({
        behavior: 'smooth'
    });
});

function mainscrolled(e) {
    const newscrollnum = Math.random()
    hidescrollnum = newscrollnum

    setTimeout(() => {
        if (newscrollnum !== hidescrollnum || e.target.scrollTop < 80) return
        scrolltotopclass = `${layoutscrolltotop} bg-primary/10`
    }, 2000)

    scrolltotopclass = `${layoutscrolltotop}${e.target.scrollTop < 80 ? ' opacity-0 bg-primary pointer-events-none' : ' bg-primary '}`
    hidenbfunc(e)
}

function scrolltotop() {
    document.querySelector('main').scrollTo(0, 0)
}

showPopout.subscribe((x) => {
    popoutshown = x
})

hide.subscribe((isHide) => {
    divclass = `${layoutdiv}${!isHide && !popoutshown ? ' pt-14 sm:pt-20' : ''}`
})
</script>

<NavbarMain />

<div class={divclass}>
    <main class="overflow-x-hidden overflow-y-auto h-full w-screen" on:scroll={mainscrolled}>
        <slot />
    </main>
</div>

<span class={scrolltotopclass} on:click={scrolltotop}>
    <i class="ri-arrow-up-line text-gray-100"></i>
</span>

<Popout></Popout>
