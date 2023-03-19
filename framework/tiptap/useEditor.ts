import { EditorOptions } from "@tiptap/core";
import { onBeforeUnmount, onMounted, ref } from "vue";

import { Editor } from "@tiptap/vue-2";

export const useEditor = (options: Partial<EditorOptions> = {}) => {
  const editor = ref<Editor>();

  onMounted(() => {
    editor.value = new Editor(options);
  });

  onBeforeUnmount(() => {
    editor.value?.destroy();
  });

  return editor;
};
