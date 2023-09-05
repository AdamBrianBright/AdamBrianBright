<script lang="ts">
  import { page } from '$app/stores';
  import AppFooter from '$lib/components/AppFooter.svelte';
  import AppHeader from '$lib/components/AppHeader.svelte';
  import { setLocale } from '$lib/stores/locale';
  import type { Locale } from '$lib/utils/locale';
  import { setContext } from 'svelte';

  setContext('locale', $page.params.lang as Locale);
  page.subscribe((p) => {
    setLocale(p.params.lang as Locale);
  });
</script>

<AppHeader />
<div class="min-h-[calc(100svh-128px)]">
  <slot />
</div>
<AppFooter />
