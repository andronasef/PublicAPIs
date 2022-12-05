<script>
  import { apis, categories, category } from '../stores';
  import { getApis } from './func';

  $: if ($category) getApis();
</script>

<main class="py-4 w-full" id="apis">
  <ul class="bg-neutral rounded-box space-y-3 shadow-lg p-5">
    <div class="flex justify-between items-center mb-5 mx-3">
      <h1 class="text-2xl">{$category} APIs</h1>
      <select
        bind:value={$category}
        class="hidden lg:block select select-bordered"
      >
        {#if $categories}
          <span> Categories </span>
          {#each $categories as category}
            <option value={category}>{category}</option>
          {/each}
        {/if}
      </select>
    </div>

    {#if $apis}
      <div class="flex flex-wrap gap-6 justify-center md:justify-items-start">
        {#each $apis['entries'] as api}
          <a
            target="_blank"
            href={api['Link']}
            class="rounded-xl bg-base-100 w-[calc(100%-1rem)] card overflow-hidden h-[12.5rem] md:w-[calc(33%-1rem)] hover:scale-105 transition active:scale-95"
          >
            <div class="card-body ">
              <h2 class="card-title">{api['API']}</h2>
              <p class="text-ellipsis">{api['Description']}</p>
            </div>
          </a>
        {/each}
      </div>
    {:else}
      <div class="flex flex-wrap gap-6 justify-center md:justify-items-start">
        {#each Array.from( { length: 50 }, () => Math.floor(Math.random() * 50) ) as i}
          <div
            class="animate-pulse rounded-xl  bg-base-100 w-[calc(100%-1rem)] min-h-[12.5rem] card md:w-[calc(33%-1rem)] "
          />
        {/each}
      </div>
    {/if}
  </ul>
</main>
