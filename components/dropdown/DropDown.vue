<script setup lang="ts">
import remixiconUrl from "remixicon/fonts/remixicon.symbol.svg";
import { ref, watch } from "vue";
import DropDownItems from "./DropDownItems.vue";
const dropDownRef = ref<HTMLDivElement>();
const buttonRef = ref<HTMLButtonElement>();
const showDropDown = ref<boolean>(false);

const handleClose = () => {
  showDropDown.value = false;
  if (buttonRef && buttonRef.value) {
    buttonRef.value.focus();
  }
};

watch([dropDownRef, buttonRef, showDropDown], () => {
  const button = buttonRef.value;
  const dropDown = dropDownRef.value;

  if (showDropDown && button !== null && dropDown !== null) {
    const { top, left } = button.getBoundingClientRect();
    dropDown.style.top = `${top + 40}px`;
    dropDown.style.left = `${Math.min(
      left,
      window.innerWidth - dropDown.offsetWidth - 20
    )}px`;
  }
});
</script>
<template>
  <div>
    <button @click="showDropDown = !showDropDown" ref="buttonRef">
      <svg class="remix">
        <use :xlink:href="`${remixiconUrl}#ri-arrow-down-s-line`" />
      </svg>
    </button>
    <portal to="dropdown" v-show="showDropDown">
      <DropDownItems :dropdownRef="dropDownRef" @close="handleClose">
        <slot />
      </DropDownItems>
    </portal>
  </div>
</template>
