<script lang="ts">
    import { onDestroy } from 'svelte';
    import dayjs from 'dayjs';

    let now: string;
    let timeout: number;

    (function tick() {
        now = dayjs().format('MMMM D, YYYY h:mm A');
        timeout = setTimeout(tick, 1000);
    })();

    onDestroy(() => {
        clearTimeout(timeout);
    });
</script>

<p>{now}</p>

<style>
    p {
        font-size: .75em;
        opacity: 0.5;
    }
</style>