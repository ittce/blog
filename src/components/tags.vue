<template functional>
  <template v-for="(category, $i) in props.categories">
    <a
      :key="category.title"
      class="category-link"
      :href="category.href">
      {{ category }}
    </a>
    {{ $i + 1 === article.categories.length ? '' : ',' }}
  </template>
</template>
