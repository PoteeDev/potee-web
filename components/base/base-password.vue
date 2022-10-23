<template>
  <div class="w-full">
    <label class="mb-2.5 block label-600">{{ label }}</label>
    <Password
      :feedback="false"
      v-bind="$attrs"
      :inputClass="passwordInputClass"
      toggleMask
      :inputProps="$attrs"
      type="text"
      v-model="model"
    />
  </div>
</template>

<script lang="ts">
import Password from "primevue/password";

import { useVModel } from "@vueuse/core";
import { defineComponent, Prop } from "vue";

export default defineComponent({
  components: {
    Password,
  },
  inheritAttrs: true,
  props: {
    label: {
      type: String,
    },
    modelValue: String,
  },
  setup(props, { emit, attrs }) {
    const passwordInputClass = computed(() => {
      return ["!rounded-lg", "p-inputtext", attrs.class].join(" ");
    });

    const model = useVModel(props, "modelValue", emit);

    return { passwordInputClass, model };
  },
});
</script>
