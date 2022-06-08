<script>
  import Icon from '@iconify/svelte'

  const links = [
    ['ic:baseline-star', 'https://github.com/andronasef/PublicAPIs'],
    ['uim:github-alt', 'https://github.com/andronasef/PublicAPIs'],
  ]
</script>

<nav class="w-full" id="nav">
  <div
    class="bg-neutral rounded-box shadow-lg text-neutral-content mb-2 navbar"
  >
    <div class="mx-2 px-2 navbar-start">
      <div class="flex-none mr-2 lg:hidden">
        <label
          id="drawerToggle"
          for="my-drawer"
          class=" text-2xl btn btn-square btn-ghost"
        >
          <Icon icon="ri:menu-2-fill" />
        </label>
      </div>
      <h1 class="font-bold text-lg">PublicAPIs</h1>
    </div>
    <div class="navbar-end">
      {#each links as link}
        <a href={link[1]}>
          <button class="text-2xl btn btn-square btn-ghost">
            <Icon icon={link[0]} />
          </button>
        </a>
      {/each}
    </div>
  </div>
</nav>
