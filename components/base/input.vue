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
export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
    },
    modelValue: {
      type: String,
    },
  },
  setup(props, { emit }) {
    const model = useVModel(props, "modelValue", emit);

    return { model };
  },
});
</script>
