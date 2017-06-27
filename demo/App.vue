<template>
  <div style="padding-left: 20px;">
    <h2>vuejs-paginate</h2>
    <hr>
    <div>
      <h3>Pagination component with 'li' tag surrounded</h3>
      <!-- The 'pagination' style using in containerClass comes from bootstrap -->
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
    </div>

    <div>
      <h3>Pagination component without 'li' tag surrounded</h3>
      <!-- The css class comes from semantic ui. -->
      <paginate
        :page-count="20"
        :margin-pages="2"
        :page-range="4"
        :initial-page="0"
        :container-class="'ui pagination menu'"
        :page-link-class="'item'"
        :prev-link-class="'item'"
        :next-link-class="'item'"
        :no-li-surround="true"
      ></paginate>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="css">
.page-item {
}
.page-link-item {
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
