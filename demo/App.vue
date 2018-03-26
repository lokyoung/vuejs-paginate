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
        :page-range="5"
        :initial-page="0"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link-item'"
        :prev-class="'prev-item'"
        :prev-link-class="'prev-link-item'"
        :next-class="'next-item'"
        :next-link-class="'next-link-item'"
        :break-view-class="'break-view'"
        :break-view-link-class="'break-view-link'"
      ></paginate>
    </div>

    <div>
      <h3>Pagination component without 'li' tag surrounded</h3>
      <!-- The css class comes from semantic ui. -->
      <paginate
        :page-count="20"
        :margin-pages="2"
        :page-range="5"
        :initial-page="0"
        :container-class="'ui pagination menu'"
        :page-link-class="'item'"
        :prev-link-class="'item'"
        :next-link-class="'item'"
        :break-view-link-class="'break-view-link'"
        :no-li-surround="true"
      ></paginate>
    </div>

    <div>
      <h3>Pagination component without margin pages</h3>
      <!-- The 'pagination' style using in containerClass comes from bootstrap -->
      <paginate
        :page-count="10"
        :margin-pages="0"
        :page-range="5"
        :initial-page="0"
        :container-class="'pagination'"
        :page-class="'page-item'"
        :page-link-class="'page-link-item'"
        :prev-class="'ignore prev-item'"
        :prev-link-class="'prev-link-item'"
        :next-class="'ignore next-item'"
        :next-link-class="'next-link-item'"
        :disabled-class="'ignore disabled'"
      ></paginate>
    </div>


    <div>
      <h3>Pagination component with SVG for view break</h3>
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
        :break-view-class="'break-view'"
        :break-view-link-class="'break-view-link'"
      >
        <span slot="breakViewContent">
          <svg width="16" height="4" viewBox="0 0 16 4">
            <circle fill="#999999" cx="2" cy="2" r="2" />
            <circle fill="#999999" cx="8" cy="2" r="2" />
            <circle fill="#999999" cx="14" cy="2" r="2" />
          </svg>
        </span>
      </paginate>
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
.break-view {
}
.break-view-item {
}
</style>
