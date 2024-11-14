<script lang="ts">
    import type { Snippet } from 'svelte';
    import type { LayoutData } from './$types';

    let { data, children }: { data: LayoutData, children: Snippet } = $props();
</script>

<div class="bg-gray-100 h-screen w-screen p-4">
    {@render children()}
</div>
