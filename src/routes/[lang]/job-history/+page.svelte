<script lang="ts">
  import qr from '$lib/images/qr.png';
  import { locale } from '$lib/stores/locale';
  import ArrowRight from '~icons/mdi/arrow-right';

  $: _ = {
    ru: {
      title: 'История работы',
      info: {
        title: 'Привет<span class="print:hidden"> 👋</span>, Я Адам',
        subtitle:
          'Реальное имя - Богдан<span class="hidden print:inline"> Парфенов</span>. Я full-stack веб разработчик, в основном состредоточенный на бекенде.',
      },
      jobs: [
        {
          date: `с 2019, Тольятти`,
          title:
            'Full-stack разработчик в <a href="https://cifrazia.com" rel="noopener noreferrer" class="text-blue-500 print:text-black">Cifrazia</a>',
          desc: 'Разработал и поддерживаю облачные сервисы на Python, Node.js, Go; веб-сайт на Nuxt2, Svelte. Ответственен за системное администрирование бекенд серверов.',
          skills: [
            'Go',
            'Svelte',
            'Python3.10',
            'Typescript',
            'Docker swarm',
            'PostgreSQL',
            'Minio',
            'Django',
            'Tornado',
            'Nuxt2',
          ],
        },
        {
          date: '2019-2020, Palo Alto',
          title:
            'Full-stack разработчик в <a href="https://cherryhome.ai" rel="noopener noreferrer" class="text-blue-500 print:text-black">Cherry Labs</a>',
          desc: 'В партнёрстве с 4taps.me, разрабатывал и поддерживал облачный сервис системы умных камер на Python, а также создал и поддерживал админ. панель на Vue',
          skills: [
            'Python3.6',
            'Tornado',
            'MongoDB',
            'AWS S3',
            'AWS Gateway',
            'Docker',
            'Vue',
            'Vuetify',
            'crossbar.io',
          ],
        },
        {
          date: '2019-2020, Тольятти',
          title:
            'Python разработчик в <a href="https://4taps.me" rel="noopener noreferrer" class="text-blue-500 print:text-black">4taps</a>',
          desc: 'Разрабатывал и поддерживал веб-сервисы партнёров на Python',
          skills: ['Python3.6', 'Django2', 'Django REST', 'MongoDB', 'PostgreSQL', 'Celery', 'Vue'],
        },
        {
          date: '2018-2019, Санкт-Петербург',
          title:
            'Служба в <a href="https://mil.ru/commemoration/memorial/90_batallion.htm" rel="noopener noreferrer" class="text-blue-500 print:text-black">90 ОСПБ</a>',
          desc: 'Участвовал в мероприятиях, направленных на поиск пропавших без вести солдат и их последующую идентификацию на основе медальонов, именных личных вещей и архивных документов',
          link: 'https://ru.wikipedia.org/wiki/Поисковое_движение',
        },
        {
          date: '2016-2018, Тольятти',
          title: 'PHP разработчик, фриланс',
          desc: 'Разрабатывал сайты под различные системы на PHP, изучал JavaScript',
          skills: [
            'PHP5',
            'Symfony',
            'Rarchet',
            'Joomla',
            'Wordpress',
            'Drupal',
            'HostCMS',
            'jQuery',
            'Bootstrap',
          ],
        },
        {
          date: '2014-2016, Тольятти',
          title:
            'PHP разработчик в <a href="https://vk.com/surov.marketing" rel="noopener noreferrer" class="text-blue-500 print:text-black">Суровый Маркетинг</a>',
          desc: 'Вёрстка сайтов под различные CMS, разработка уникальных решений на PHP',
          skills: ['PHP5', 'Symfony', 'Joomla', 'Wordpress', 'jQuery', 'Bootstrap'],
        },
      ],
      learnMore: 'Узнать больше',
    } as const,
    en: {
      title: 'Job history',
      info: {
        title: 'Hi<span class="print:hidden"> 👋</span>, I\'m Adam!',
        subtitle:
          'Real name is Bogdan<span class="hidden print:inline"> Parfenov</span> <i class="text-xs">(He/him)</i>. I\'m a full-stack web developer, primarily focused on backend.',
      },
      jobs: [
        {
          date: `Since 2019, Tolyatti`,
          title:
            'Full-stack developer at в <a href="https://cifrazia.com" rel="noopener noreferrer" class="text-blue-500 print:text-black">Cifrazia</a>',
          desc: 'Created and maintaining cloud services on Python, Node.js, Go; website on Nuxt2, Svelte. Responsible for system administration of a backend servers.',
          skills: [
            'Go',
            'Svelte',
            'Python3.10',
            'Typescript',
            'Docker swarm',
            'PostgreSQL',
            'Minio',
            'Django',
            'Tornado',
            'Nuxt2',
          ],
        },
        {
          date: '2019-2020, Palo Alto',
          title:
            'Full-stack developer at <a href="https://cherryhome.ai" rel="noopener noreferrer" class="text-blue-500 print:text-black">Cherry Labs</a>',
          desc: 'In partnership with 4taps.me, developed and maintained cloud services for smart cameras on Python, also created and maintained admin panel on Vue',
          skills: [
            'Python3.6',
            'Tornado',
            'MongoDB',
            'AWS S3',
            'AWS Gateway',
            'Docker',
            'Vue',
            'Vuetify',
            'crossbar.io',
          ],
        },
        {
          date: '2019-2020, Tolyatti',
          title:
            'Python deverloper at <a href="https://4taps.me" rel="noopener noreferrer" class="text-blue-500 print:text-black">4taps</a>',
          desc: 'Developed and maintained partners Python web services',
          skills: ['Python3.6', 'Django2', 'Django REST', 'MongoDB', 'PostgreSQL', 'Celery', 'Vue'],
        },
        {
          date: '2018-2019, Saint-Petersburg',
          title:
            'Served at <a href="https://mil.ru/commemoration/memorial/90_batallion.htm" rel="noopener noreferrer" class="text-blue-500 print:text-black">90 ОСПБ</a>',
          desc: 'Participated in events aimed at searching for missing soldiers and their subsequent identification based on coins, nominal personal items and archival documents.',
          link: 'https://ru.wikipedia.org/wiki/Поисковое_движение',
        },
        {
          date: '2016-2018, Tolyatti',
          title: 'PHP developer, freelance',
          desc: 'Developed websited for different PHP CMS, learned JavaScript',
          skills: [
            'PHP5',
            'Symfony',
            'Rarchet',
            'Joomla',
            'Wordpress',
            'Drupal',
            'HostCMS',
            'jQuery',
            'Bootstrap',
          ],
        },
        {
          date: '2014-2016, Tolyatti',
          title:
            'PHP developer at <a href="https://vk.com/surov.marketing" rel="noopener noreferrer" class="text-blue-500 print:text-black">Суровый Маркетинг</a>',
          desc: 'Website markup for CMS, development of unique soltions with PHP',
          skills: ['PHP5', 'Symfony', 'Joomla', 'Wordpress', 'jQuery', 'Bootstrap'],
        },
      ],
      learnMore: 'Learn more',
    } as const,
  }[$locale];
</script>

<div class="hidden px-4 print:block">
  <h1 class="text-lg font-medium">{@html _.info.title}</h1>
  <p class="text-xs">{@html _.info.subtitle}</p>
</div>

<div class="p-4">
  <h1 class="mt-8 text-center text-4xl font-semibold print:mt-0 print:text-left print:text-base">
    {_.title}
  </h1>

  <ol
    class="relative mx-auto mt-8 max-w-screen-md -translate-x-1.5 border-l border-zinc-200 dark:border-zinc-700 print:mt-2">
    {#each _.jobs as job, n}
      <li class="mb-10 ml-4 print:mb-2">
        <div
          class="absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-zinc-200 data-[selected=true]:bg-zinc-800 dark:border-zinc-900 dark:bg-zinc-700 dark:data-[selected=true]:bg-zinc-300 print:border-[6px] print:border-zinc-300"
          data-selected={n === 0} />
        <time
          class="mb-1 text-sm font-normal leading-none text-zinc-400 dark:text-zinc-500 print:text-xs"
          >{@html job.date}</time>
        <h3 class="text-lg font-semibold text-zinc-900 dark:text-white print:text-base">
          {@html job.title}
        </h3>
        <p
          class="mb-2 text-base font-normal text-zinc-500 dark:text-zinc-400 print:mb-0 print:text-sm">
          {@html job.desc}
        </p>
        {#if 'skills' in job && job.skills}
          <div class="font-medium text-zinc-500 dark:text-zinc-400 print:text-sm print:font-normal">
            {job.skills.join(', ')}
          </div>
        {/if}
        {#if 'link' in job && job.link}
          <a
            href={job.link}
            class="inline-flex items-center rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-100 hover:text-blue-700 focus:z-10 focus:text-blue-700 focus:outline-none focus:ring-4 focus:ring-zinc-200 dark:border-zinc-600 dark:bg-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-700 dark:hover:text-white dark:focus:ring-zinc-700 print:hidden">
            {_.learnMore}
            <ArrowRight class="ml-2 h-3 w-3" aria-hidden="true" />
          </a>
        {/if}
      </li>
    {/each}
  </ol>
</div>
<img src={qr} width={128} height={128} alt="QR Code" class="mt-2 hidden w-16 print:block" />
