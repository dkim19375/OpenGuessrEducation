<script>
    import {page} from "$app/stores"; // To get the current URL
    import {timesPlayed} from "$lib/stores/historyData.js";

    let {children} = $props();

    let currentRoute = $state();

    let metadata = $state({}); // Metadata of the current quiz
    let loading = $state(true); // Loading flag

    async function loadSimilarQuizzes() {
        loading = false;
    }

    $effect(() => {
        currentRoute = $page.url.pathname; // Current path, if it changes, re-load similar quizzes
    });

    $effect(() => {
        if (currentRoute) {
            loadSimilarQuizzes();
        }
    });
</script>

<article class="container mx-auto p-6 px-1 max-w-6xl">

    <!-- Display the current quiz title -->
    <div class="flex w-full justify-between content-baseline">
        <h1 class="text-4xl font-bold mb-8 mt-4 flex">Africa Quiz (AP World)</h1>
        <span class="text-xl mt-8 flex">last-minute studying?{"!".repeat($timesPlayed)}</span>
    </div>

    <!-- Slot for quiz content -->
    {@render children?.()}

</article>
