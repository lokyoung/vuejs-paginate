<template>
  <!-- The 'pagination' style using in containerClass is from bootstrap -->
  <paginate
    :page-count="20"
    :margin-pages="2"
    :page-range="4"
    :initial-page="0"
    :container-class="'pagination'"
    :page-class="'page-item'"
    :page-link-class="'page-link-item'"
    :prev-class="'prev-item'"
    :prev-link-class="'prev-link-item'"
    :next-class="'next-item'"
    :next-link-class="'next-link-item'"
  ></paginate>
</template>

<script>
export default {
}
</script>

<style lang="css">
.page-item {
}
.page-link-item{
}
.prev-item {
}
.prev-link-item {
}
.next-item {
}
.next-link-item {
}
</style>
