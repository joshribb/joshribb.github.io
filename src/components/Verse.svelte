<script lang="ts">
    export let ref: string;
    export let passage: string;
</script>

<h1>{ref}</h1>
<p>{passage}</p>

<style>
    * {
        font-weight: unset;
        margin: 1rem auto;
        text-align: center;
    }
    h1 {
        font-size: 1.5rem;
    }
    p {
        line-height: 1.5;
        max-width: 40ch;
    }
</style>