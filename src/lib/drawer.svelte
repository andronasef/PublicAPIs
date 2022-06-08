<script>
  import { categories, category } from '../stores'
  import Nav from './nav.svelte'

  function drawerToggle() {
    document.getElementById('drawerToggle').click()
  }
</script>

<div class="drawer ">
  <input id="my-drawer" type="checkbox" class="drawer-toggle" />

  <div class="w-full  px-4 pt-5 drawer-content">
    <Nav />
    <!-- Content -->
    <div class="flex w-full ">
      <slot><!-- optional fallback --></slot>
    </div>
  </div>
  <div class="drawer-side">
    <label for="my-drawer" class="drawer-overlay" />
    <ul class="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content">
      <li class="menu-title">
        <span> Categories </span>

        {#if $categories}
          {#each $categories as cat}
            <li
              class:bg-primary={cat == $category}
              on:click={() => {
                category.set(cat)
                drawerToggle()
              }}
            >
              <a href="./#">{cat} </a>
            </li>
          {/each}
        {/if}
      </li>
      <li />
    </ul>
  </div>
</div>
