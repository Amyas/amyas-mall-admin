<template>
  <BaseListLayout :loading="list.loading" :list-total="100">

    <template #ctrl>
      <ElButton type="primary" @click="toggleForm('add')">主要按钮</ElButton>
    </template>

    <BaseTable :list="list">
      <ElTableColumn
        prop="date"
        label="日期"
        width="180">
      </ElTableColumn>
      <ElTableColumn
        prop="name"
        label="姓名"
        width="180">
      </ElTableColumn>
      <ElTableColumn
        prop="address"
        label="地址">
      </ElTableColumn>
      <template #ctrl>
        <ElButton
          size="mini"
          @click="toggleForm('edit')">编辑</ElButton>
        <ElButton
          size="mini"
          type="danger">删除</ElButton>
      </template>
    </BaseTable>

    <template #dialogs>
      <UserForm />
    </template>

  </BaseListLayout>
</template>
<script>
import { mapState, mapActions } from 'vuex'

import UserForm from './dialogs/UserForm'

export default {
  components: {
    UserForm
  },
  computed: {
    ...mapState('user', ['list'])
  },
  beforeMount () {
    this.index()
  },
  methods: {
    ...mapActions('user', ['toggleForm', 'index'])
  }
}
</script>
