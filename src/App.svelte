<script>
  import { onMount } from 'svelte'
  import Apis from './lib/apis.svelte'
  import Drawer from './lib/drawer.svelte'
  import { getApis, getCategories } from './lib/func'
  import Icon from '@iconify/svelte'

  onMount(async () => {
    getCategories()
    getApis()
  })
</script>

<Drawer>
  <Apis />
</Drawer>

<a href="#nav">
  <button class="fixed bottom-5 right-5 btn btn-md btn-circle bg-primary"
    ><Icon class="text-2xl text-white" icon="mdi:arrow-up-bold" /></button
  >
</a>
