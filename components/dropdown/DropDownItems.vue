<script setup lang="ts">
import { ref, provide, Ref } from "vue";
import { injectionKey } from "./injectionKey";

type Props = {
  dropdownRef: Ref<HTMLDivElement>;
};

defineProps<Props>();

const emit = defineEmits<{
  (e: "close"): void;
}>();

const items = ref<HTMLButtonElement[]>([]);
const highlightedItem = ref<HTMLButtonElement>();

const registerItem = (item: HTMLButtonElement) => {
  items.value.push(item);
};

const handleKeyDown = (event: KeyboardEvent) => {
  if (!items) return;

  const key = event.key;

  if (["Escape", "ArrowUp", "ArrowDown", "Tab"].includes(key)) {
    event.preventDefault();
  }

  if (key === "Escape" || key === "Tab") {
    emit("close");
  } else if (key === "ArrowUp") {
    if (!highlightedItem.value) {
      return items.value[0];
    }
    const index = items.value.indexOf(highlightedItem.value) - 1;
    highlightedItem.value =
      items.value[index === -1 ? items.value.length - 1 : index];
  } else if (key === "ArrowDown") {
    if (!highlightedItem.value) {
      return items.value[0];
    }
    highlightedItem.value =
      items.value[items.value.indexOf(highlightedItem.value) + 1];
  }
};

provide(injectionKey, {
  registerItem,
});
</script>
<template>
  <div :ref="dropdownRef" @keydown="handleKeyDown">
    <slot />
  </div>
</template>
