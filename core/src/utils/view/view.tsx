import {
  defineComponent,
  Transition,
  KeepAlive,
  ref,
  toRef,
  watchEffect,
} from "vue";
import { RouterView } from "vue-router";

import { eventBus, RouterEvents } from "@/utils/event_bus";
import { defineAnimationRouterViewProps } from "./props";
import { getComponentClass, getStyle } from "./params";

import type { VNode } from "vue";
import type { AnimationRouterViewProps, AnimationRouterView } from "@/types";
import type { DefineAnimationRouterViewParams } from "./params";

// 引入CSS
// import css
import "./style/index.css";
import ConfigClass from "./style/config_variables.module.css";

// 动画名称
// animation name
const BACK_ANIMATION_NAME = "--VAR-back";
const FORWARD_ANIMATION_NAME = "--VAR-forward";

const PREFIX_NAME = "Var"; // 组件前缀名称 prefix name of component
const ANIMATION_PROGRESS_STEP = 0.01; // 动画进度步长 animation progress step

// 创建动画路由视图
// create animation router view
export const defineAnimationRouterView = (
  config: DefineAnimationRouterViewParams,
): AnimationRouterView =>
  defineComponent({
    // 动画路由视图名称
    // component name
    name: `${PREFIX_NAME}${config.name}`,

    // 动画路由视图属性
    // component props
    props: defineAnimationRouterViewProps(config.componentProps),

    emits: [
      // 动画开始事件
      // animation start event
      "onStart",

      // 动画进度事件
      // animation progress event
      "onProgress",

      // 动画结束事件
      // animation end event
      "onFinish",

      // transition组件的emits
      // transition's emits
      "onBeforeAppear",
      "onAppear",
      "onAfterAppear",
      "onAppearCancelled",
      "onBeforeEnter",
      "onEnter",
      "onAfterEnter",
      "onEnterCancelled",
      "onBeforeLeave",
      "onLeave",
      "onAfterLeave",
      "onLeaveCancelled",
    ],
    setup(props: AnimationRouterViewProps, { emit }) {
      let animationConfig = toRef(props.animation); // 动画路由视图属性 animation router view props
      const animationName = ref<string | undefined>(undefined); // 动画名称 animation name

      // 监听动画路由视图属性变化
      // watching animation router view props change
      watchEffect(() => {
        animationConfig = toRef(props.animation);
      });

      // 监听路由返回事件
      // listening router back event
      eventBus.on(RouterEvents.ROUTER_REPLACE, () => {
        animationName.value = BACK_ANIMATION_NAME;
      });

      eventBus.on(RouterEvents.ROUTER_BACK, () => {
        animationName.value = BACK_ANIMATION_NAME;
      });

      // 监听路由前进事件
      // listening router forward event
      eventBus.on(RouterEvents.ROUTER_PUSH, () => {
        animationName.value = FORWARD_ANIMATION_NAME;
      });

      eventBus.on(RouterEvents.ROUTER_FORWARD, () => {
        animationName.value = FORWARD_ANIMATION_NAME;
      });

      let animationStepCount = 0; // 动画进度 animation progress
      let progressInterval: NodeJS.Timeout | undefined = undefined; // 动画进度定时器 animation progress timer

      // 触发动画开始事件，准备动画进度所需数据
      // trigger the animation start emit, prepare the progress data
      const prepareProgressInterval = (
        active: "enter" | "leave" | "appear",
      ) => {
        if (animationStepCount != 0) {
          animationStepCount = 0;
          clearInterval(progressInterval);
        }

        emit("onStart", {
          operation:
            animationName.value === BACK_ANIMATION_NAME ? "back" : "forward",
          active,
        });
      };

      // 开始触发动画进度事件
      // trigger the animation progress emit
      const startProgressInterval = (active: "enter" | "leave" | "appear") => {
        if (animationStepCount != 0) {
          animationStepCount = 0;
          clearInterval(progressInterval);
        }

        progressInterval = setInterval(
          () => {
            animationStepCount +=
              props.animationProgressStep ?? ANIMATION_PROGRESS_STEP;

            emit("onProgress", {
              operation:
                animationName.value === BACK_ANIMATION_NAME
                  ? "back"
                  : "forward",
              active,
              progress: animationStepCount.toFixed(3),
            });
          },
          (props.animationProgressStep ?? ANIMATION_PROGRESS_STEP) * 1000,
        );
      };

      // 结束触发动画结束事件，清除动画进度定时器
      // trigger the animation finish emit, clear animation progress timer
      const clearProgressInterval = (active: "enter" | "leave" | "appear") => {
        clearInterval(progressInterval);

        emit("onFinish", {
          operation:
            animationName.value === BACK_ANIMATION_NAME ? "back" : "forward",
          active,
        });
      };

      // 渲染动画路由视图方法
      // animation router view render method
      const renderAnimationRouterView = () => (
        <div class="--VAR-animation-router-view-container">
          <RouterView
            class={[
              ConfigClass["--VAR-animation-router-view-config"],
              ...getComponentClass(config),
            ]}
            style={getStyle(animationConfig)}
            name={props.name}
            route={props.route}
          >
            {{
              default: ({ Component }: { Component: VNode }) => {
                return (
                  <Transition
                    name={animationName.value}
                    mode={props.mode}
                    appear={props.appear}
                    onBeforeAppear={() => {
                      emit("onBeforeAppear");
                      prepareProgressInterval("appear");
                    }}
                    onAppear={() => {
                      emit("onAppear");
                      startProgressInterval("appear");
                    }}
                    onAfterAppear={() => {
                      emit("onAfterAppear");
                      clearProgressInterval("appear");
                    }}
                    onAppearCancelled={() => {
                      emit("onAppearCancelled");
                      clearProgressInterval("appear");
                    }}
                    onBeforeEnter={() => {
                      emit("onBeforeEnter");
                      prepareProgressInterval("enter");
                    }}
                    onEnter={() => {
                      emit("onEnter");
                      startProgressInterval("enter");
                    }}
                    onAfterEnter={() => {
                      emit("onAfterEnter");
                      clearProgressInterval("enter");
                    }}
                    onEnterCancelled={() => {
                      emit("onEnterCancelled");
                      clearProgressInterval("enter");
                    }}
                    onBeforeLeave={() => {
                      emit("onBeforeLeave");
                      prepareProgressInterval("leave");
                    }}
                    onLeave={() => {
                      emit("onLeave");
                      startProgressInterval("leave");
                    }}
                    onAfterLeave={() => {
                      emit("onAfterLeave");
                      clearProgressInterval("leave");
                    }}
                    onLeaveCancelled={() => {
                      emit("onLeaveCancelled");
                      clearProgressInterval("leave");
                    }}
                  >
                    {props.keepAlive ? (
                      <KeepAlive
                        include={props.include}
                        exclude={props.exclude}
                      >
                        {Component}
                      </KeepAlive>
                    ) : (
                      Component
                    )}
                  </Transition>
                );
              },
            }}
          </RouterView>
        </div>
      );

      return () => renderAnimationRouterView();
    },
  });
