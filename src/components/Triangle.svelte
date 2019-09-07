<script>
  export let edgeState = 0;
  export let containerClasses = '';
  export let edge0ContainerClasses = containerClasses;
  export let edge1ContainerClasses = containerClasses;
  export let edge2ContainerClasses = containerClasses;

  export function rotateClockwise() {
    edgeState = (edgeState + 1) % 3;
  }
  export function rotateCounterClockwise() {
    edgeState = (edgeState - 1) % 3;
  }

  export function setEdge(edge) {
    edgeState = edge;
  }
</script>

<div class="flex flex-wrap items-center justify-center flex-shrink-0">
  <div class="w-1/2 flex flex-center justify-center">
    <div class="relative {edge0ContainerClasses}">

      {#if edgeState === 0}
        <slot name="a" />
      {:else if edgeState === 1}
        <slot name="c" />
      {:else}
        <slot name="b" />
      {/if}

    </div>
  </div>
  <div class="w-1/2 flex flex-center justify-center">
    <div class="relative {edge1ContainerClasses}">
      {#if edgeState === 0}
        <slot name="b" />
      {:else if edgeState === 1}
        <slot name="a" />
      {:else}
        <slot name="c" />
      {/if}
    </div>
  </div>
  <div class="w-1/2 flex flex-center justify-center">
    <div class="relative {edge2ContainerClasses}">
      {#if edgeState === 0}
        <slot name="c" />
      {:else if edgeState === 1}
        <slot name="b" />
      {:else}
        <slot name="a" />
      {/if}
    </div>
  </div>
</div>
