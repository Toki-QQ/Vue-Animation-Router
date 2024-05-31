<template>
  <div>
    <RouterView :name="props.name" :route="props.route" v-slot="{ Component }">
      <slot>
        <Transition :name="animationName" mode="out-in">
          <KeepAlive>
            <component :is="Component" />
          </KeepAlive>
        </Transition>
      </slot>
    </RouterView>
  </div>
</template>

<script setup lang="ts">
import { Transition } from "vue";
import { RouterView } from "vue-router";

import { defineAnimationRouterViewPorps } from "src/utils/view";

const props = defineAnimationRouterViewPorps();
</script>

<style scoped></style>
