<script module>
    import QuizMapGame from "$lib/components/QuizMapGame.svelte";

    export const metadata = {
        title: "African Countries",
        tags: ["Africa"],
        region: "Africa",
        category: "countries"
    }
</script>

<QuizMapGame
        region={metadata.region}
/>