<script>
    import DarkModeToggle from "./DarkModeToggle.svelte";
    import AccountButton from "./AccountButton.svelte";
    import {page} from "$app/stores";
    import {onMount} from 'svelte';

    let {isOpen = $bindable(false)} = $props();

    let activeButton = $state("");
    let mounted = $state(false);

    onMount(() => {
        mounted = true;
    });

    $effect(() => {
        const currentPath = $page.url.pathname;
        if (currentPath === "/") {
            activeButton = "home";
        } else if (currentPath === "/get-started") {
            activeButton = "get-started";
        } else if (currentPath.startsWith("/guides")) {
            activeButton = "guides";
        } else if (currentPath.startsWith("/quiz")) {
            activeButton = "quiz";
        } else if (currentPath.startsWith("/countries")) {
            activeButton = "countries";
        }
    });

    function switchSelection(buttonId) {
        activeButton = buttonId;
        if (window.innerWidth < 1024) {
            isOpen = false;
        }
    }
</script>

<aside class="bg-base-200 w-64 h-full overflow-y-auto fixed left-0 top-0 bottom-0 z-[100] transition-transform duration-300 ease-in-out lg:translate-x-0 overflow-x-hidden"
       class:-translate-x-full={!isOpen || !mounted}
       class:translate-x-0={isOpen}>
    <nav class="flex h-full flex-col justify-between p-4">
        <div class="flex justify-between mt-auto">
            <DarkModeToggle/>
            <AccountButton/>
        </div>
    </nav>
</aside>

<!-- Overlay for mobile -->
{#if isOpen}
    <button class="fixed inset-0 bg-black bg-opacity-50 z-[99] lg:hidden" onclick={() => isOpen = false}
            aria-label="Toggle Sidebar"></button>
{/if}

<style>
    .custom-max-height {
        max-height: 70dvh;
        overflow-y: auto;
        overflow-x: hidden;
    }
</style>