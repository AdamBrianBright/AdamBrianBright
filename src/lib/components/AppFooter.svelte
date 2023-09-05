<script>
  import { localePath } from '$lib/stores/locale';
</script>

<footer class="bg-zinc-200 p-4 dark:bg-zinc-950 print:hidden">
  <div class="text-center">
    Copyright © <a href={$localePath('/')} class="text-blue-500">Bogdan Parfenov</a> 2023
  </div>
  <div class="text-center text-zinc-400">I am not affiliated with the Rust Foundation.</div>
</footer>
