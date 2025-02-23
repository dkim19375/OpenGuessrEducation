<script>
    import "../app.css";
    import {onMount} from 'svelte';
    import DarkModeToggle from "$lib/components/DarkModeToggle.svelte";

    let {children} = $props();

    let isDrawerOpen = $state(false);

    onMount(() => {
        const mediaQuery = window.matchMedia('(min-width: 1024px)');
        isDrawerOpen = mediaQuery.matches;

        const handleMediaQueryChange = (e) => {
            isDrawerOpen = e.matches;
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    });

    function toggleDrawer() {
        isDrawerOpen = !isDrawerOpen;
    }
</script>

<div class="flex flex-col h-screen bg-base-100 dark:bg-base-900">
    <!-- Sidebar -->
    <aside class="overflow-y-auto fixed left-0 top-0 bottom-0 z-[100] lg:translate-x-0 overflow-x-hidden"
           class:-translate-x-full={!true}
           class:translate-x-0={true}>
        <nav class="flex h-full flex-col justify-between p-4">
            <div class="flex justify-between mt-auto">
                <DarkModeToggle/>
            </div>
        </nav>
    </aside>

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
        <!-- The main content where route content will be displayed -->
        <main class="flex-1 p-6 overflow-y-auto w-full mt-16 lg:mt-0 overflow-x-hidden">
            {@render children?.()}  <!-- formerly <slot /> in Svelte 4 -->
        </main>
    </div>
</div>

