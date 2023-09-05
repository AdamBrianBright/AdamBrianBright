<script lang="ts">
  import SizedImage from '$lib/components/SizedImage.svelte';
  import avatar from '$lib/images/avatar.png';
  import avatar_meta from '$lib/images/avatar.png?as=metadata';
  import avatar_jpeg from '$lib/images/avatar.png?w=32;64;128;256;512&withoutEnlargement&format=jpeg&as=srcset';
  import avatar_webp from '$lib/images/avatar.png?w=32;64;128;256;512&withoutEnlargement&format=webp&as=srcset';
  import gopher from '$lib/images/gopher.png';
  import gopher_meta from '$lib/images/gopher.png?as=metadata';
  import qr from '$lib/images/qr.png';
  import { locale } from '$lib/stores/locale';
  import { techs, type Stack } from './techs';

  $: _ = {
    ru: {
      title: 'Привет<span class="print:hidden"> 👋</span>, Я Адам',
      subtitle:
        'Реальное имя - Богдан<span class="hidden print:inline"> Парфенов</span>. Я full-stack веб разработчик, в основном состредоточенный на бекенде.',
      about: {
        title: 'Обо мне',
        points: [
          '<span class="print:hidden">⚙️</span> В данное время работаю в <a class="text-blue-500 print:text-black" href="https://cifrazia.com" target="_blank" rel="noopener noreferrer">Cifrazia</a> ',
          '<span class="print:hidden">🎸</span> У меня есть укулеле, которую едва трогаю',
          '<span class="print:hidden">🛠️</span> Сейчас использую <a class="text-blue-500 print:text-black" href="https://go.dev" target="_blank" rel="noopener noreferrer">Go</a >, <a class="text-blue-500 print:text-black" href="https://postgresql.org" target="_blank" rel="noopener noreferrer">PotgreSQL</a >, <a class="text-blue-500 print:text-black" href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a >, <a class="text-blue-500 print:text-black" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">TailwindCSS</a> как свой основной стэк',
          '<span class="print:hidden">📆</span> Работаю программистом с 2013',
          '<span class="print:hidden">💀</span> Всё ещё пытаюсь попасть в мир <a class="text-blue-500 print:text-black" href="https://neovim.io/" target="_blank" rel="noopener noreferrer">Neovim</a> ...',
        ],
      },
      tech: {
        title: 'Технологии<sup class="text-lg print:text-xs"> *</sup>',
        sorted: '<b>SORTED BY</b> <code class="code-inline">знакомство</code> <b>DESC</b>.',
        stacks: {
          active:
            '<span class="print:hidden">💡 </span>Технологии и окружение, которые использую или с которыми есть опыт',
          surface:
            '<span class="print:hidden">🧐 </span>Другие вещи, с которыми знаком поверхностно',
          pending: '<span class="print:hidden">🙃 </span>Хотелось бы изучить',
          inactive: '<span class="print:hidden">😔 </span>Давно прошли те времена',
        } as Record<Stack, string>,
        ps: '*Данный список не является исчерпывающим и ограничен значками, предоставляемыми пакетом simple-icons.',
      },
      contacts: {
        title: 'Контакты',
        points: [
          'VK: <a class="text-blue-500 print:text-black" href="https://vk.com/adam_bright" target="_blank" rel="noopener noreferrer">Богдан Парфенов</a>',
          'Telegram: <a class="text-blue-500 print:text-black" href="https://t.me/adam_ne_adam" target="_blank" rel="noopener noreferrer">@adam_ne_adam</a>',
          'Discord: <a class="text-blue-500 print:text-black" href="https://discordapp.com/users/241129119688032257/" target="_blank" rel="noopener noreferrer">adambright</a>',
          'Email: <a class="text-blue-500 print:text-black" href="mailto:adam.brian.bright@gmail.com" target="_blank" rel="noopener noreferrer">adam.brian.bright@gmail.com</a>',
        ],
      },
    } as const,
    en: {
      title: 'Hi<span class="print:hidden"> 👋</span>, I\'m Adam!',
      subtitle:
        'Real name is Bogdan<span class="hidden print:inline"> Parfenov</span> <i class="text-xs">(He/him)</i>. I\'m a full-stack web developer, primarily focused on backend.',
      about: {
        title: 'About me',
        points: [
          '<span class="print:hidden">⚙️</span> Currently working at <a class="text-blue-500 print:text-black" href="https://cifrazia.com" target="_blank" rel="noopener noreferrer">Cifrazia</a> ',
          '<span class="print:hidden">🎸</span> Have an ukulele that I barely touch',
          '<span class="print:hidden">🛠️</span> Currently using  <a class="text-blue-500 print:text-black" href="https://go.dev" target="_blank" rel="noopener noreferrer">Go</a >, <a class="text-blue-500 print:text-black" href="https://postgresql.org" target="_blank" rel="noopener noreferrer">PotgreSQL</a >, <a class="text-blue-500 print:text-black" href="https://kit.svelte.dev" target="_blank" rel="noopener noreferrer">SvelteKit</a >, <a class="text-blue-500 print:text-black" href="https://tailwindcss.com" target="_blank" rel="noopener noreferrer">TailwindCSS</a> as my primary stack',
          '<span class="print:hidden">📆</span> Have been working as a programmer since 2013',
          '<span class="print:hidden">💀</span> Still trying my way into <a class="text-blue-500 print:text-black" href="https://neovim.io/" target="_blank" rel="noopener noreferrer">Neovim</a> world...',
        ],
      },
      tech: {
        title: 'Technology<sup class="text-lg print:text-xs"> *</sup>',
        sorted: '<b>SORTED BY</b> <code class="code-inline">familiarity</code> <b>DESC</b>.',
        ps: '*This list is not exhaustive and limited to the icons provided by simple-icons package.',
        stacks: {
          active:
            '<span class="print:hidden">💡 </span>Technologies and environment that I use or had an experience with',
          surface:
            '<span class="print:hidden">🧐 </span>Other things I\'ve encountered on a surface level.',
          pending: '<span class="print:hidden">🙃 </span>Looking forward to learn about',
          inactive: '<span class="print:hidden">😔 </span>Long gone those days',
        } as Record<Stack, string>,
      },
      contacts: {
        title: 'Contact me',
        points: [
          'VK: <a class="text-blue-500 print:text-black" href="https://vk.com/adam_bright" target="_blank" rel="noopener noreferrer">Богдан Парфенов</a>',
          'Telegram: <a class="text-blue-500 print:text-black" href="https://t.me/adam_ne_adam" target="_blank" rel="noopener noreferrer">@adam_ne_adam</a>',
          'Discord: <a class="text-blue-500 print:text-black" href="https://discordapp.com/users/241129119688032257/" target="_blank" rel="noopener noreferrer">adambright</a>',
          'Email: <a class="text-blue-500 print:text-black" href="mailto:adam.brian.bright@gmail.com" target="_blank" rel="noopener noreferrer">adam.brian.bright@gmail.com</a>',
        ],
      },
    } as const,
  }[$locale];
</script>

<div
  class="relative isolate overflow-hidden px-4 py-8 odd:bg-zinc-100 dark:odd:bg-zinc-800 print:px-0 print:py-2">
  <div
    class="my-8 flex flex-col-reverse items-center justify-center gap-4 print:m-0 print:block sm:my-16 sm:flex-row sm:gap-16">
    <div class="max-w-sm print:max-w-none md:max-w-md lg:max-w-lg">
      <h1 class="text-4xl font-medium print:text-xl">{@html _.title}</h1>
      <p class="print:text-sm">{@html _.subtitle}</p>
    </div>
    <SizedImage
      alt="Adam Bright's avatar"
      width={avatar_meta.width}
      height={avatar_meta.height}
      src={avatar}
      jpeg={avatar_jpeg}
      webp={avatar_webp}
      class="aspect-square w-16 rounded-full ring-2 ring-blue-500 transition hover:ring-8 print:hidden md:w-32 lg:w-64" />
    <a href="https://go.dev/" target="_blank" rel="noopener noreferrer" class="group print:hidden">
      <img
        src={gopher}
        alt="Gopher"
        width={gopher_meta.width}
        height={gopher_meta.height}
        class="absolute bottom-0 left-1/2 w-16 translate-x-[-200px] translate-y-4 rotate-[16deg] transition group-focus-within:bottom-2 group-hover:bottom-2 sm:w-32 sm:translate-x-[-250px] md:translate-x-[-300px] md:translate-y-8 lg:translate-x-[-400px]" /></a>
  </div>
  <div class="h-8 print:hidden sm:h-16 md:h-0" />
</div>
<div class="px-4 py-8 odd:bg-zinc-100 dark:odd:bg-zinc-800 print:px-0 print:py-2">
  <h2 class="text-center text-4xl font-bold print:text-left print:text-xl print:font-medium">
    {_.about.title}
  </h2>
  <ul class="mx-auto mt-4 w-fit text-xl print:mx-0 print:mt-0 print:text-base">
    {#each _.about.points as point}
      <li class="w-fit print:before:mr-1 print:before:content-['-']">{@html point}</li>
    {/each}
  </ul>
</div>
<div class="px-4 py-8 odd:bg-zinc-100 dark:odd:bg-zinc-800 print:px-0 print:py-2">
  <h2 class="text-center text-4xl font-bold print:text-left print:text-xl print:font-medium">
    {@html _.tech.title}
  </h2>
  <p class="mt-2 text-center text-sm font-medium text-zinc-400 print:text-left print:text-xs">
    {@html _.tech.sorted}
  </p>
  <p class="mt-2 text-center text-xs text-zinc-600 print:text-left">{@html _.tech.ps}</p>
  {#each techs as [stackName, stackTechs]}
    <h3
      class="my-4 text-center text-xl font-semibold print:mb-0 print:mt-2 print:text-left print:text-base print:font-medium">
      {@html _.tech.stacks[stackName]}
    </h3>
    {#each stackTechs as stackTech}
      <div
        class="m-4 mx-auto flex w-full max-w-full flex-wrap items-center justify-center gap-4 rounded-md p-2 odd:bg-zinc-200 even:bg-zinc-100 dark:odd:bg-zinc-700 dark:even:bg-zinc-800 print:m-0 print:mt-1 print:block print:p-0 print:text-sm md:max-w-screen-md">
        {#each stackTech as t, i}
          <img src={t.img} alt={t.name} class="print:hidden" />
          <span
            class="hidden print:inline-block print:after:content-[','] print:last:after:content-['.']"
            >{t.name}</span>
        {/each}
      </div>
    {/each}
  {/each}
</div>
<div class="px-4 py-8 odd:bg-zinc-100 dark:odd:bg-zinc-800 print:px-0 print:py-2">
  <h2 class="text-center text-4xl font-bold print:text-left print:text-xl print:font-medium">
    {@html _.contacts.title}
  </h2>
  <ul class="mx-auto mt-4 w-fit text-xl print:mx-0 print:mt-0 print:text-base">
    {#each _.contacts.points as point}
      <li class="w-fit print:before:mr-1 print:before:content-['-']">{@html point}</li>
    {/each}
  </ul>
</div>
<img src={qr} width={128} height={128} alt="QR Code" class="mt-2 hidden w-16 print:block" />
