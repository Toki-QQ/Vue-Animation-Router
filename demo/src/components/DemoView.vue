<template>
  <div class="w-full h-full">
    <div
      class="h-full flex flex-col justify-center items-center gap-10 border rounded-md bg-gray-100 dark:bg-gray-950 overflow-hidden"
    >
      <div class="text-2xl text-gray-400">{{ props.subTitle }}</div>

      <div class="text-5xl font-extrabold text-gray-700">{{ props.title }}</div>

      <Button
        :icon="getButtonIcon()"
        :label="props.buttonLabel"
        @click="props.buttonClickEvent"
      />

      <div class="text-gray-400">{{ props.description }}</div>
    </div>
  </div>
</template>

<script setup lang="ts">
// props
const props = withDefaults(
  defineProps<{
    title?: string;
    subTitle?: string;
    description?: string;
    buttonLabel?: string;
    buttonClickEvent?: () => void;
    type: "from" | "to";
    buttonIcon?: string; // see: https://primevue.org/icons/
  }>(),
  {
    title: "",
    subTitle: "",
    description: "",
    buttonLabel: "",
    buttonClickEvent: () => {},
    buttonIcon: undefined,
  },
);

// computed buttonIcon
const getButtonIcon = computed(() => {
  return (): string => {
    if (props.buttonIcons) {
      return props.buttonIcons;
    }

    if (props.type === "to") {
      return "pi pi-arrow-left";
    }

    return "pi pi-arrow-right";
  };
});
</script>

<style scoped></style>
