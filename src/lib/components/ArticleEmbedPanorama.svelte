<script>
    let {src} = $props();
</script>

<!-- iframe with lazy loading, meaning, it will only be loaded if it's in the viewport -->
<iframe allowfullscreen="" class="w-full rounded-xl mt-4 bg-base-200/50" height="400" loading="lazy" referrerpolicy="no-referrer-when-downgrade"
        {src} style="border:0;" title="Panorama Images" width="600"></iframe>