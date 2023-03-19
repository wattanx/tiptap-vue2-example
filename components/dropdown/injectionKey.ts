import { InjectionKey } from "vue";
export const injectionKey = Symbol("dropdown") as InjectionKey<{
  registerItem: (item: HTMLButtonElement) => void;
}>;
