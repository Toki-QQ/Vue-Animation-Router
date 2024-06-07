import { defineComponent, Transition, KeepAlive, ref } from "vue";
import { RouterView } from "vue-router";

import { eventBus, RouterEvents } from "../event_bus";
import { createProps } from "./props";

import type {
  DefineComponent,
  ComponentOptionsWithObjectProps,
  VNode,
} from "vue";
import type { AnimationRouterViewProps } from "src/types";

// 引入CSS
// import css
import "./style/index.css";
import ConfigClass from "./style/config_variables.module.css";

/**
 * 动画名称
 * animation name
 */
const BACK_ANIMATION_NAME = "--VAR-back";
const FORWARD_ANIMATION_NAME = "--VAR-forward";

// 组件前缀名称
// prefix name of component
const PREFIX_NAME = "VAR-";

export const defineAnimationRouterView = (config: {
  name: string;
  componentClass?: string | Array<string> | CSSModuleClasses;
}): DefineComponent<ComponentOptionsWithObjectProps> =>
  defineComponent({
    // 动画路由视图名称
    // component name
    name: `${PREFIX_NAME}${config.name}`,

    // 动画路由视图属性
    // component props
    props: createProps(),

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
    ],
    setup(props: AnimationRouterViewProps, { emit }) {
      const animationName = ref<string | undefined>(undefined);

      const totleDuration = props.totalDuration ?? 1000;

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

      // 动画进度
      // animation progress
      let animationProgressStep = 1;
      let animationStepCount = 0;

      // 动画进度定时器
      // animation progress timer
      const progressInterval = setInterval(() => {
        if (animationStepCount == 0) {
          emit("onStart");
        }

        emit("onProgress", animationStepCount);

        animationStepCount += animationProgressStep;

        if (animationStepCount >= totleDuration) {
          emit("onFinish");
          clearInterval(progressInterval);
        }
      }, animationProgressStep);

      // 渲染动画路由视图方法
      // animation router view render method
      const renderAnimationRouterView = () => (
        <div class="--VAR-animation-router-view-container">
          <RouterView
            class={[
              ConfigClass["--VAR-animation-router-view-config"],
              typeof config.componentClass == "string"
                ? config.componentClass
                : "",
              Array.isArray(config.componentClass)
                ? [...config.componentClass]
                : "",
              typeof config.componentClass == "object"
                ? [
                    ...Object.keys(config.componentClass).map((item) => {
                      return (config.componentClass as CSSModuleClasses)[item];
                    }),
                  ]
                : "",
            ]}
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
