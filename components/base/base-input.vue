<template>
  <div class="w-full">
    <label class="mb-2.5 block label-600">{{ label }}</label>
    <InputText
      v-bind="$attrs"
      class="!rounded-lg"
      type="text"
      v-model="model"
    />
  </div>
</template>

<script lang="ts">
import InputTextProps from "primevue/inputtext/InputText.vue";
import InputText from "primevue/inputtext";
import { useVModel } from "@vueuse/core";
import { PropType } from "vue";

export default defineComponent({
  components: {
    InputText,
  },
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    ...(InputTextProps["props"] as {
      [K in keyof InputText["$props"]]: PropType<InputText["$props"][K]>;
    }),
  },
  setup(props, { emit }) {
    const model = useVModel(props, "modelValue", emit);

    return { model };
  },
});
</script>
