<template>
  <ElUpload
    action="/api/upload"
    list-type="picture-card"
    v-bind="$attrs"
    v-on="$listeners">
    <i class="el-icon-plus"></i>
  </ElUpload>
</template>
<script>
