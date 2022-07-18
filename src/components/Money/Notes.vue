<template>
<div>
<label class="notes">
  <span class="name">备注</span>
  <input type="text" placeholder="在这里输入备注">
</label>
</div>
</template>

<script lang="ts">
import Vue from 'vue';
import {Component, Prop} from 'vue-property-decorator';
@Component
export default class Types extends Vue {
  type = '-'; // '-'表示支出，'+'表示收入
  selectType(type: string) {
    if (type !== '-' && type !== '+') {
      throw new Error('type is unknown');
    }
    this.type = type;
  }
}
</script>

<style lang="scss" scoped>
.notes {
  font-size: 14px;
  background: #f2eecf;
  padding-left: 16px;
  display: flex;
  align-items: center;
  .name {
    padding-right: 16px;
  }
  input {
    height: 64px;
    flex-grow: 1;
    background: transparent;
    border: none;
    padding-right: 16px;
  }
}
</style>