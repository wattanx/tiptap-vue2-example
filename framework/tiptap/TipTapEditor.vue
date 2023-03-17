<script setup lang="ts">
import { Editor, EditorContent } from '@tiptap/vue-2';
import StarterKit from '@tiptap/starter-kit';
import { useEditor } from './useEditor';

const editor = useEditor({
  content: '<p>I’m running Tiptap with Vue.js. 🎉</p>',
  extensions: [StarterKit],
});
</script>
<template>
  <EditorContent :editor="editor" />
</template>
