<template>
  <!-- The 'pagination' style using in containerClass is from bootstrap -->
  <paginate
    :pageCount="20"
    :marginPages="2"
    :pageRange="4"
    :initialPage="0"
    :containerClass="'pagination'"
    :pageClass="'page-item'"
    :pageLinkClass="'page-link-item'"
    :prevClass="'prev-item'"
    :prevLinkClass="'prev-link-item'"
    :nextClass="'next-item'"
    :nextLinkClass="'next-link-item'"
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
