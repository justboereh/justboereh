<script>
import {
    goto
} from "$app/navigation";

import {
    showPopout
} from "../../stores/navbar";
import {
    popout
} from "../../scripts/classes";

let popoutclass = popout
let links = [{
        href: '/',
        emoji: '🏠',
        text: 'head home',
    },
    {
        href: '//github.com/justboereh',
        emoji: '💻',
        text: 'my works',
        target: '_blank'
    },
    {
        href: '/about',
        emoji: '👦',
        text: 'about me',
    },
    {
        href: '/blogs',
        emoji: '📰',
        text: 'my blogs',
    },
    {
        href: '/tools',
        emoji: '🛠',
        text: 'just tools',
    },
]

showPopout.subscribe((x) => {
    popoutclass = `${popout} ${!x ? 'opacity-0 pointer-events-none' : ''}`
})

const linkclicked = ({target}) => {
    if (target.tagName === 'TD') target = target.parentNode
    if (!target.hasAttribute('href')) return

    showPopout.update(_ => false)

    let isNewTab = false
    for (const link of links) {
        if (link.target) {
            isNewTab = true

            break
        }
    }

    isNewTab ? window.open(target.getAttribute('href'), '_blank') : goto(target.getAttribute('href'))
}

// <div class={popout}>
//     <div class="h-14 w-full flex justify-center items-center">
//         <img src="/logo-short-white.svg" alt="short version of logo" class="h-6 px-2 sm:hidden">

//         <span class="flex-1"></span>

//         <span class={menuclass} on:click={closePopout}></span>
//     </div>
// </div>
</script>

<div class={popoutclass}>

    <div class="flex flex-col h-full overflow-y-auto">
        <table class="w-full border-0">
            {#each links as link}
            <tr href={link.href} on:click={linkclicked}>
                <td class="py-4 text-center">{link.emoji}</td>
                <td class="py-4">{link.text}</td>
            </tr>
            {/each}
        </table>

        <span class="grow"></span>

        <span class="mx-1 py-2 bg-gradient-to-br from-primary to-secondary border border-gray-100/5 rounded-md text-center" href="/#contact" on:click={linkclicked}>📝 contact</span>

    </div>
</div>
