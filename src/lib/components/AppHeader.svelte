<script lang="ts">
  import { browser } from '$app/environment';
  import { page } from '$app/stores';
  import svelte from '$lib/images/svelte.png';
  import { locale, localePath } from '$lib/stores/locale';
  import type { Locale } from '$lib/utils/locale';
  import Ru from '~icons/flag/ru-4x3';
  import En from '~icons/flag/us-4x3';
  import Print from '~icons/mdi/printer';

  $: invertLang = { ru: 'en', en: 'ru' }[$locale] as Locale;
  $: _ = {
    ru: {
      about: 'Обо мне',
      jobs: 'История работы',
      github: 'GitHub',
    } as const,
    en: {
      about: 'About me',
      jobs: 'Job history',
      github: 'GitHub',
    } as const,
  }[$locale];
  $: langPath = browser
    ? $localePath($page.url.pathname + $page.url.search, invertLang)
    : $localePath($page.url.pathname, invertLang);

  function printPage() {
    print();
  }
</script>

<header
  class="sticky top-0 z-50 bg-zinc-200 text-zinc-900 dark:bg-zinc-950 dark:text-white print:hidden">
  <nav class="relative flex h-12 justify-between px-2 sm:px-8" aria-label="Navigation">
    <div class="flex items-stretch sm:w-full">
      <a
        href="https://kit.svelte.dev"
        target="_blank"
        rel="noopener noreferrer"
        class="flex items-center">
        <img
          src={svelte}
          width="106"
          height="128"
          alt="SvelteKit"
          class="aspect-square w-6 object-contain object-center" />
      </a>
    </div>
    <div class="flex h-full w-full items-stretch justify-center">
      <a
        href={$localePath('/')}
        class="flex items-center bg-transparent px-4 text-sm font-semibold leading-6 transition hocus:bg-zinc-300 dark:hocus:bg-zinc-800">
        {_.about}
      </a>
      <a
        href={$localePath('/job-history')}
        class="flex items-center bg-transparent px-4 text-sm font-semibold leading-6 transition hocus:bg-zinc-300 dark:hocus:bg-zinc-800">
        {_.jobs}
      </a>
      <a
        href="https://github.com/AdamBrianBright"
        class="flex items-center bg-transparent px-4 text-sm font-semibold leading-6 transition hocus:bg-zinc-300 dark:hocus:bg-zinc-800">
        {_.github}
      </a>
    </div>
    <div class="flex items-stretch justify-end sm:w-full">
      <a
        href={langPath}
        class="flex items-center bg-transparent px-4 text-sm font-semibold leading-6 transition hocus:bg-zinc-300 dark:hocus:bg-zinc-800">
        {#if invertLang == 'ru'}
          <Ru />
        {:else if invertLang == 'en'}
          <En />
        {/if}
      </a>
      <button
        class="flex items-center bg-transparent px-4 text-sm font-semibold leading-6 transition hocus:bg-zinc-300 dark:hocus:bg-zinc-800"
        on:click={printPage}>
        <Print />
      </button>
    </div>
  </nav>
</header>
