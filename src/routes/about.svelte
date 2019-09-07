<script>
  import Triange from "../components/Triangle.svelte";
  import { send, receive } from "../components/crossfade.js";
  import { fade, fly } from "svelte/transition";
  import { flip } from "svelte/animate";
  import { writable } from "svelte/store";

  const edge = writable(0);
  let triangle;
</script>

<svelte:head>
  <title>About</title>
</svelte:head>

<main transition:fade>
  <div class="flex select-none items-center justify-center p-10">
    <span
      on:click={() => edge.set(0)}
      class="w-1/5 shadow-lg text-center {$edge === 0 ? 'bg-gray-400' : 'bg-gray-200'}">
      Price + Quality
    </span>
    <span
      on:click={() => edge.set(2)}
      class="w-1/5 shadow-lg text-center {$edge === 2 ? 'bg-gray-400' : 'bg-gray-200'}">
      Quality + Time
    </span>
    <span
      on:click={() => edge.set(1)}
      class="w-1/5 shadow-lg text-center {$edge === 1 ? 'bg-gray-400' : 'bg-gray-200'}">
      Time + Price
    </span>
  </div>
  <div class="flex cursor-default select-none p-10">
    <Triange
      bind:this={triangle}
      edgeState={$edge}
      containerClasses="h-6 w-6 md:h-16 md:w-16"
      edge0ContainerClasses="h-8 w-8 md:h-20 md:w-20"
      edge1ContainerClasses="h-8 w-8 md:h-20 md:w-20">

      <div
        slot="a"
        on:click={() => edge.set(0)}
        in:receive={{ key: 'a' }}
        out:send={{ key: 'a' }}
        class="absolute overflow-hidden rounded-full h-full w-full flex
        items-center justify-center bg-gray-200 shadow-lg">
        Price
      </div>

      <div
        slot="b"
        on:click={() => edge.set(2)}
        in:receive={{ key: 'b' }}
        out:send={{ key: 'b' }}
        class="absolute overflow-hidden rounded-full h-full w-full flex
        items-center justify-center bg-gray-400 shadow-lg">
        Quality
      </div>

      <div
        slot="c"
        on:click={() => edge.set(1)}
        in:receive={{ key: 'c' }}
        out:send={{ key: 'c' }}
        class="absolute overflow-hidden rounded-full h-full w-full flex
        items-center justify-center bg-gray-600 shadow-lg">
        Time
      </div>

    </Triange>
    <div
      class="relative flex flex-wrap items-center justify-center mx-auto ml-5
      mr-5">
      {#if $edge === 0}
        
          <p>
            Make sure you take time to think about exactly what you need. We
            will wait for our best people for the job to become available. They
            are going to ask you to provide a lot of documentation. Don't worry,
            we will teach you how to think like us!
          </p>
        
      {:else if $edge === 2}
        
          <p>
            We need to meet now. Get all your SME's ready to go. Expect an
            escallation fee because we are paying bonuses to get our people
            available - and some freelancers. Give us all your documentation and
            schedule that whiteboarding session!
          </p>
        
      {:else}
        
          <p>
            Let's find something out-of-the-box! Be ready to change your
            processes to match what we find. There's no time or budget for
            customizations. It's got to be just good enough in this crunch time.
          </p>
        
      {/if}
    </div>
  </div>
</main>
