<script>
import {
    goto
} from "$app/navigation";

import {
    hide,
    showPopout
} from "../../stores/navbar";
import {
    navbarmain,
    navbarmenu
} from "../../scripts/classes";
import {
    home
} from "../../stores/layout";

let topbarclass = navbarmain
let navbarmenuclass = navbarmenu
let homehref = '/'
let popoutshown = false

hide.subscribe((x) => {
    topbarclass = `${navbarmain} ${x && !popoutshown ? '-translate-y-full' : ''}`
})

showPopout.subscribe((x) => {
    popoutshown = x
    navbarmenuclass = `${navbarmenu} ${x ? 'ri-close-line' : 'ri-menu-line'}`
})

home.subscribe(x => {
    homehref = x
})

const gohome = () => {
    if (location.pathname === homehref) return

    goto(homehref)
}

const menuclicked = () => {
    showPopout.update(x => !x)
}
</script>

<nav class={topbarclass}>
    <div class="flex w-screen h-full items-center px-1">
        <img src="/logo-long.svg" alt="long version of logo" class="h-8 px-2 hidden sm:block" on:click={gohome}>
        <img src="/logo-short-white.svg" alt="short version of logo" class="h-6 px-2 sm:hidden" on:click={gohome}>

        <span class="flex-1"></span>

        <span class={navbarmenuclass} on:click={menuclicked}></span>
    </div>
</nav>
