<script setup lang="ts">
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";

type Props = {
  icon: string;
  title: string;
  action: () => void;
  isActive?: (() => boolean) | null;
};

withDefaults(defineProps<Props>(), {
  isActive: null,
});
</script>

<template>
  <button
    class="menu-item"
    :class="{ 'is-active': isActive ? isActive() : null }"
    @click="action"
    :title="title"
  >
    <svg class="remix">
      <use :xlink:href="`${remixiconUrl}#ri-${icon}`" />
    </svg>
  </button>
</template>

<style lang="scss">
.menu-item {
  width: 1.75rem;
  height: 1.75rem;
  color: #0d0d0d;
  border: none;
  background-color: transparent;
  border-radius: 0.4rem;
  padding: 0.25rem;
  margin-right: 0.25rem;
  svg {
    width: 100%;
    height: 100%;
    fill: currentColor;
  }
  &.is-active,
  &:hover {
    color: #fff;
    background-color: #0d0d0d;
  }
}
</style>
