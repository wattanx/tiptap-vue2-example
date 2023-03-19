<script setup lang="ts">
import { ref, computed } from "vue";
import { transformColor } from "./utils";
import DropDown from "../dropdown/DropDown.vue";

interface Position {
  x: number;
  y: number;
}
const basicColors = [
  "#d0021b",
  "#f5a623",
  "#f8e71c",
  "#8b572a",
  "#7ed321",
  "#417505",
  "#bd10e0",
  "#9013fe",
  "#4a90e2",
  "#50e3c2",
  "#b8e986",
  "#000000",
  "#4a4a4a",
  "#9b9b9b",
  "#ffffff",
];

const WIDTH = 214;
const HEIGHT = 150;

type Props = {
  color: string;
  title?: string;
};

const props = defineProps<Props>();

const selfColor = ref(transformColor("hex", props.color));
const inputColor = ref(props.color);
const innerDivRef = ref<HTMLDivElement>(null);

const saturationPosition = computed(() => ({
  x: (selfColor.value.hsv.s / 100) * WIDTH,
  y: ((100 - selfColor.value.hsv.v) / 100) * HEIGHT,
}));

const huePosition = computed(() => ({
  x: (selfColor.value.hsv.h / 360) * WIDTH,
}));

const onSetHex = (hex: string) => {
  inputColor.value = hex;
  if (/^#[0-9A-Fa-f]{6}$/i.test(hex)) {
    const newColor = transformColor("hex", hex);
    selfColor.value = newColor;
  }
};

const onMoveSaturation = ({ x, y }: Position) => {
  const newHsv = {
    ...selfColor.value.hsv,
    s: (x / WIDTH) * 100,
    v: 100 - (y / HEIGHT) * 100,
  };
  const newColor = transformColor("hsv", newHsv);
  selfColor.value = newColor;
  inputColor.value = newColor.hex;
};

const onMoveHue = ({ x }: Position) => {
  const newHsv = { ...selfColor.value.hsv, h: (x / WIDTH) * 360 };
  const newColor = transformColor("hsv", newHsv);

  selfColor.value = newColor;
  inputColor.value = newColor.hex;
};
</script>
<template>
  <DropDown> </DropDown>
</template>
