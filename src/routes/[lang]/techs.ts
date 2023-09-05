export const stacks = ['active', 'surface', 'pending', 'inactive'] as const;
export type Stack = (typeof stacks)[number];

export const techs = new Map([
  [
    'active',
    [
      [
        {
          name: 'macOS',
          img: 'https://img.shields.io/badge/mac%20os-000000?style=for-the-badge&logo=macos&logoColor=F0F0F0',
        },
        {
          name: 'Windows',
          img: 'https://img.shields.io/badge/Windows-0078D6?style=for-the-badge&logo=windows&logoColor=white',
        },
        {
          name: 'Ubuntu',
          img: 'https://img.shields.io/badge/Ubuntu-E95420?style=for-the-badge&logo=ubuntu&logoColor=white',
        },
      ],
      [
        {
          name: 'iTerm2',
          img: 'https://img.shields.io/badge/iTerm2-0f0f0f?&style=for-the-badge&logo=iterm2&logoColor=white',
        },
        {
          name: 'GoLand',
          img: 'https://img.shields.io/badge/GoLand-0f0f0f?&style=for-the-badge&logo=goland&logoColor=white',
        },
        {
          name: 'WebStorm',
          img: 'https://img.shields.io/badge/webstorm-143?style=for-the-badge&logo=webstorm&logoColor=white&color=black',
        },
        {
          name: 'PyCharm',
          img: 'https://img.shields.io/badge/pycharm-143?style=for-the-badge&logo=pycharm&logoColor=black&color=black&labelColor=green',
        },
        {
          name: 'Visual Studio Code',
          img: 'https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white',
        },
        {
          name: 'Figma',
          img: 'https://img.shields.io/badge/Figma-F24E1E.svg?style=for-the-badge&logo=figma&logoColor=white',
        },
        {
          name: 'Obsidian',
          img: 'https://img.shields.io/badge/Obsidian-483699.svg?style=for-the-badge&logo=obsidian&logoColor=white',
        },
      ],
      [
        {
          name: 'Go',
          img: 'https://img.shields.io/badge/go-00ADD8.svg?style=for-the-badge&logo=go&logoColor=white',
        },
        {
          name: 'Python',
          img: 'https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54',
        },
        {
          name: 'TypeScript',
          img: 'https://img.shields.io/badge/typescript-007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white',
        },
        {
          name: 'NodeJS',
          img: 'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
        },
        {
          name: 'CSS3',
          img: 'https://img.shields.io/badge/css3-1572B6.svg?style=for-the-badge&logo=css3&logoColor=white',
        },
        {
          name: 'HTML5',
          img: 'https://img.shields.io/badge/html5-E34F26.svg?style=for-the-badge&logo=html5&logoColor=white',
        },
        {
          name: 'Shell Script',
          img: 'https://img.shields.io/badge/shell_script-121011.svg?style=for-the-badge&logo=gnu-bash&logoColor=white',
        },
      ],
      [
        {
          name: 'Postgres',
          img: 'https://img.shields.io/badge/postgres-316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
        },
        {
          name: 'Redis',
          img: 'https://img.shields.io/badge/redis-DD0031.svg?style=for-the-badge&logo=redis&logoColor=white',
        },
        {
          name: 'NATS.io',
          img: 'https://img.shields.io/badge/NATS.io-27AAE1.svg?style=for-the-badge&logo=nats.io&logoColor=white',
        },
        {
          name: 'Minio',
          img: 'https://img.shields.io/badge/minio-C72E49.svg?style=for-the-badge&logo=minio&logoColor=white',
        },
        {
          name: 'MongoDB',
          img: 'https://img.shields.io/badge/MongoDB-4ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white',
        },
        {
          name: 'Neo4J',
          img: 'https://img.shields.io/badge/Neo4j-008CC1?style=for-the-badge&logo=neo4j&logoColor=white',
        },
      ],
      [
        {
          name: 'TailwindCSS',
          img: 'https://img.shields.io/badge/tailwindcss-38B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white',
        },
        {
          name: 'Svelte',
          img: 'https://img.shields.io/badge/svelte-f1413d.svg?style=for-the-badge&logo=svelte&logoColor=white',
        },
        {
          name: 'JWT',
          img: 'https://img.shields.io/badge/JWT-black?style=for-the-badge&logo=JSON%20web%20tokens',
        },
        {
          name: 'Zod',
          img: 'https://img.shields.io/badge/Zod-3E67B1?style=for-the-badge&logo=zod&logoColor=#00DC82',
        },
        {
          name: 'Nuxtjs',
          img: 'https://img.shields.io/badge/Nuxt-002E3B?style=for-the-badge&logo=nuxtdotjs&logoColor=#00DC82',
        },
        {
          name: 'Vue.js',
          img: 'https://img.shields.io/badge/vuejs-35495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D',
        },
        {
          name: 'Django',
          img: 'https://img.shields.io/badge/django-092E20.svg?style=for-the-badge&logo=django&logoColor=white',
        },
        {
          name: 'ThreeJS',
          img: 'https://img.shields.io/badge/threejs-black?style=for-the-badge&logo=three.js&logoColor=white',
        },
        {
          name: 'Chart.js',
          img: 'https://img.shields.io/badge/chart.js-F5788D.svg?style=for-the-badge&logo=chart.js&logoColor=white',
        },
        {
          name: 'Lodash',
          img: 'https://img.shields.io/badge/lodash-3492FF.svg?style=for-the-badge&logo=lodash&logoColor=white',
        },
        {
          name: 'Disgord',
          img: 'https://img.shields.io/badge/Disgord-5865F2.svg?style=for-the-badge&logo=discord&logoColor=white',
        },
      ],
      [
        {
          name: 'Git',
          img: 'https://img.shields.io/badge/git-F05033.svg?style=for-the-badge&logo=git&logoColor=white',
        },
        {
          name: 'GitLab CI',
          img: 'https://img.shields.io/badge/gitlab%20ci-181717.svg?style=for-the-badge&logo=gitlab&logoColor=white',
        },
        {
          name: 'Sentry',
          img: 'https://img.shields.io/badge/Sentry-362D59?style=for-the-badge&logo=Sentry&logoColor=white',
        },
        {
          name: 'Docker',
          img: 'https://img.shields.io/badge/docker-0db7ed.svg?style=for-the-badge&logo=docker&logoColor=white',
        },
        {
          name: 'Traefik',
          img: 'https://img.shields.io/badge/traefik-24A1C1.svg?style=for-the-badge&logo=traefik-proxy&logoColor=white',
        },
        {
          name: "Let's Encrypt",
          img: "https://img.shields.io/badge/Let's_Encrypt-003A70.svg?style=for-the-badge&logo=let's-encrypt&logoColor=white",
        },
        {
          name: 'Nginx',
          img: 'https://img.shields.io/badge/nginx-009639.svg?style=for-the-badge&logo=nginx&logoColor=white',
        },
        {
          name: 'Cloudflare',
          img: 'https://img.shields.io/badge/Cloudflare-F38020?style=for-the-badge&logo=Cloudflare&logoColor=white',
        },
      ],
      [
        {
          name: 'Yarn',
          img: 'https://img.shields.io/badge/yarn-2C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white',
        },
        {
          name: 'Vite',
          img: 'https://img.shields.io/badge/vite-646CFF.svg?style=for-the-badge&logo=vite&logoColor=white',
        },
        {
          name: 'Poetry',
          img: 'https://img.shields.io/badge/poetry-60A5FA.svg?style=for-the-badge&logo=poetry&logoColor=white',
        },
        {
          name: 'ESBuild',
          img: 'https://img.shields.io/badge/ESBuild-FFCF00.svg?style=for-the-badge&logo=ESBuild&logoColor=white',
        },
        {
          name: 'ESLint',
          img: 'https://img.shields.io/badge/ESLint-4B3263?style=for-the-badge&logo=eslint&logoColor=white',
        },
        {
          name: 'Prettier',
          img: 'https://img.shields.io/badge/Prettier-F7B93E?style=for-the-badge&logo=Prettier&logoColor=black',
        },
        {
          name: 'Babel',
          img: 'https://img.shields.io/badge/Babel-F9DC3e?style=for-the-badge&logo=babel&logoColor=black',
        },
        {
          name: 'Lighthouse',
          img: 'https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=lighthouse&logoColor=white',
        },
      ],
    ],
  ],
  [
    'surface',
    [
      [
        {
          name: 'SonarLint',
          img: 'https://img.shields.io/badge/SonarLint-CB2029?style=for-the-badge&logo=SONARLINT&logoColor=white',
        },
        {
          name: 'Swagger',
          img: 'https://img.shields.io/badge/-Swagger-Clojure?style=for-the-badge&logo=swagger&logoColor=white',
        },
        {
          name: 'Blender',
          img: 'https://img.shields.io/badge/Blender-E87D0D?style=for-the-badge&logo=blender&logoColor=white',
        },
        {
          name: 'Express.js',
          img: 'https://img.shields.io/badge/express.js-404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB',
        },
        {
          name: 'Prometheus',
          img: 'https://img.shields.io/badge/Prometheus-E6522C?style=for-the-badge&logo=Prometheus&logoColor=white',
        },
        {
          name: 'Grafana',
          img: 'https://img.shields.io/badge/grafana-F46800.svg?style=for-the-badge&logo=grafana&logoColor=white',
        },
        {
          name: 'ElasticSearch',
          img: 'https://img.shields.io/badge/-ElasticSearch-005571?style=for-the-badge&logo=elasticsearch',
        },
        {
          name: 'DjangoREST',
          img: 'https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray',
        },
        {
          name: 'Flask',
          img: 'https://img.shields.io/badge/flask-000.svg?style=for-the-badge&logo=flask&logoColor=white',
        },
        {
          name: 'Amazon S3',
          img: 'https://img.shields.io/badge/Amazon_S3-569A31.svg?style=for-the-badge&logo=amazon-s3&logoColor=white',
        },
        {
          name: 'Firebase',
          img: 'https://img.shields.io/badge/Firebase-039BE5?style=for-the-badge&logo=Firebase&logoColor=white',
        },
        {
          name: 'Kubernetes',
          img: 'https://img.shields.io/badge/kubernetes-326ce5.svg?style=for-the-badge&logo=kubernetes&logoColor=white',
        },
        {
          name: 'helm',
          img: 'https://img.shields.io/badge/helm-0F1689.svg?style=for-the-badge&logo=helm&logoColor=white',
        },
        {
          name: 'Electron',
          img: 'https://img.shields.io/badge/Electron-47848F.svg?style=for-the-badge&logo=Electron&logoColor=white',
        },
        {
          name: 'OWASP',
          img: 'https://img.shields.io/badge/OWASP-000000.svg?style=for-the-badge&logo=OWASP&logoColor=white',
        },
      ],
    ],
  ],
  [
    'pending',
    [
      [
        {
          name: 'HTMX',
          img: 'https://img.shields.io/badge/HTMX-000000.svg?style=for-the-badge&logo=html5&logoColor=white',
        },
        {
          name: 'Neovim',
          img: 'https://img.shields.io/badge/neovim-57A143.svg?style=for-the-badge&logo=neovim&logoColor=white',
        },
        {
          name: 'Rust',
          img: 'https://img.shields.io/badge/Rust-000000.svg?style=for-the-badge&logo=Rust&logoColor=white',
        },
        {
          name: 'Tauri',
          img: 'https://img.shields.io/badge/Tauri-FFC131.svg?style=for-the-badge&logo=Tauri&logoColor=black',
        },
        {
          name: 'Leptos UI',
          img: 'https://img.shields.io/badge/Leptos_UI-EF3939.svg?style=for-the-badge&logo=Leptos&logoColor=white',
        },
        {
          name: 'Zig',
          img: 'https://img.shields.io/badge/Zig-F7A41D.svg?style=for-the-badge&logo=zig&logoColor=white',
        },
      ],
    ],
  ],
  [
    'inactive',
    [
      [
        {
          name: 'Axios',
          img: 'https://img.shields.io/badge/Axios-5A29E4.svg?style=for-the-badge&logo=Axios&logoColor=white',
        },
        {
          name: 'PHP',
          img: 'https://img.shields.io/badge/php-777BB4.svg?style=for-the-badge&logo=php&logoColor=white',
        },
        {
          name: 'Joomla',
          img: 'https://img.shields.io/badge/joomla-5091CD.svg?style=for-the-badge&logo=joomla&logoColor=white',
        },
        {
          name: 'Symfony',
          img: 'https://img.shields.io/badge/Symfony-000000.svg?style=for-the-badge&logo=Symfony&logoColor=white',
        },
        {
          name: 'jQuery',
          img: 'https://img.shields.io/badge/jquery-0769AD.svg?style=for-the-badge&logo=jquery&logoColor=white',
        },
        {
          name: 'Pug',
          img: 'https://img.shields.io/badge/Pug-FFF?style=for-the-badge&logo=pug&logoColor=A86454',
        },
        {
          name: 'SASS',
          img: 'https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white',
        },
        {
          name: 'Vuetify',
          img: 'https://img.shields.io/badge/Vuetify-1867C0?style=for-the-badge&logo=vuetify&logoColor=AEDDFF',
        },
        {
          name: 'Webpack',
          img: 'https://img.shields.io/badge/webpack-8DD6F9.svg?style=for-the-badge&logo=webpack&logoColor=black',
        },
        {
          name: 'Postman',
          img: 'https://img.shields.io/badge/Postman-FF6C37?style=for-the-badge&logo=postman&logoColor=white',
        },
        {
          name: 'Apache',
          img: 'https://img.shields.io/badge/apache-D42029.svg?style=for-the-badge&logo=apache&logoColor=white',
        },
        {
          name: 'FileZilla',
          img: 'https://img.shields.io/badge/FileZilla-BF0000.svg?style=for-the-badge&logo=FileZilla&logoColor=white',
        },
        {
          name: 'GameMaker',
          img: 'https://img.shields.io/badge/GameMaker-BF0000.svg?style=for-the-badge&logo=GameMaker&logoColor=white',
        },
      ],
    ],
  ],
]) as Map<Stack, { name: string; img: string }[][]>;
