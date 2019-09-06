<script>
  import { fade } from "svelte/transition";
  import Nav from "../components/Nav.svelte";

  export let segment;
</script>

<Nav {segment} />
<slot />
