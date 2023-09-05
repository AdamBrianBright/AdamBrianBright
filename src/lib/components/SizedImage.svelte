<script lang="ts">
  import { cn } from '$lib/utils/utils';

  /**
   * string represeting img[srcset] attribute
   */
  export let avif: string = '';
  export let heic: string = '';
  export let webp: string = '';
  export let png: string = '';
  export let jpeg: string = '';
  export let svg: string = '';
  export let loading: 'lazy' | 'eager' = 'lazy';
  export let src: string;
  export let width: number;
  export let height: number;
  export let alt: string;
  export let resetWidth: number | undefined = undefined;

  let className = '';
  export { className as class };
</script>

<!--
  @component
  Responsive image with srcset and lazy-loading support
  
  Usage:
  ```html
  <script lang="ts">
    import bg_webp from '$lib/images/header_original.webp?w=200;400;800;1200;1800&withoutEnlargement&format=webp&as=srcset';
    import { width, height } from '$lib/images/header_original.webp?as=metadata';
    import bg from '$lib/images/header_original.webp';
    import SizedImage from '$lib/components/SizedImage.svelte';
  </script>

  <SizedImage alt="Header" {width} {height} src={bg} webp={bg_webp} />
  ```
-->
<picture>
  {#if avif} <source srcset={avif} type="image/avif" />{/if}
  {#if heic} <source srcset={heic} type="image/heic" />{/if}
  {#if webp} <source srcset={webp} type="image/webp" />{/if}
  {#if png} <source srcset={png} type="image/png" />{/if}
  {#if jpeg} <source srcset={jpeg} type="image/jpeg" />{/if}
  {#if svg} <source srcset={svg} type="image/svg+xml" />{/if}
  <img
    {src}
    {alt}
    {width}
    {height}
    {loading}
    style:width={resetWidth ? resetWidth + 'px' : ''}
    class={cn('w-full object-cover object-center', className)} />
</picture>
