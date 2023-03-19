<script setup lang="ts">
import { ref, inject, watch } from "vue";
import { injectionKey } from "./injectionKey";

defineProps<{
  title: string;
}>();

const emit = defineEmits<{
  (e: "click", event: MouseEvent): void;
}>();

const buttonRef = ref<HTMLButtonElement>();
const injected = inject(injectionKey);

if (injected === null) {
  throw new Error("DropDownItem must be used within a DropDown");
}

const { registerItem } = injected;

watch(buttonRef, () => {
  registerItem(buttonRef.value);
});
</script>
<template>
  <button
    :title="title"
    type="button"
    ref="buttonRef"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>
</template>
