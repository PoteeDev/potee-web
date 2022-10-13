<template>
  <div class="w-full">
    <label class="mb-2.5 block label-600">{{ label }}</label>
    <Password
      :feedback="false"
      v-bind="$attrs"
      :inputClass="passwordInputClass"
      toggleMask
      type="text"
      v-model="model"
    />
  </div>
</template>

<script lang="ts">
import PasswordProps from "primevue/password/Password.vue";
import Password from "primevue/password";

import { useVModel } from "@vueuse/core";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  components: {
    Password,
  },
  inheritAttrs: true,
  props: {
    label: {
      type: String,
    },
    ...(PasswordProps["props"] as {
      [K in keyof Password["$props"]]: PropType<Password["$props"][K]>;
    }),
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
