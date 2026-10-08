::: danger Attention
This project only supports Vue 3.x version. It does not support Vue 2.x version. There is no plan to support Vue 2.x version.(Actually, Vue 2.x is also supported, but I haven't tested it.)
:::

<br>

# Introduction {#introduction}

Vue Animation Router is an animation routing library built on top of Vue.js, Vue Router, and Mitt. By encapsulating smooth transition animations within the router view, it makes route view switches better align with human visual habits. It provides an extremely simple way to create animated router views, and it is precisely this simplicity that makes it easy to pick up and minimally invasive to your project. With just a few simple steps, you can easily integrate it into your Vue.js project, or use this animation routing library to upgrade and retrofit your existing projects. In short, the goal of developing this project is to make route switching "come alive".

## Project Origin {#origin}

The idea for this project originated from one of our team's on-campus project practices. During our time at school, our [TurboSnail software development team](https://github.com/turbosnailcn)
was responsible for developing a campus life platform for the university. While I was in charge of building and developing the mobile web application for this platform,
the idea of developing this project (Vue Animation Router) came to my mind. Because it was a user-facing mobile web application, the user experience and visual design
had to be highly refined and detail-oriented. However, when I was using Vue Router for the project's routing configuration and development, I found that the default
RouterView felt too abrupt during transitions, which was quite unfriendly in terms of user experience and visually uncomfortable. Although the official Vue provides
a Transition API to handle the animation of RouterView transitions, every time I used RouterView or started a new project, I had to rewrite the CSS animations from
scratch, which caused significant hassle and wasted a great deal of unnecessary time. So I began to wonder: could I encapsulate commonly used transition animations
together with RouterView into a single component, and then package these animated RouterView components into an animation routing library? This would not only make
it much more convenient to use, but also save the time spent repeatedly writing animations. That is how the idea of developing this project came to me.

## Why Use It? {#why-use}

As mentioned above, using this animation routing library can save you the time spent repeatedly writing animations. In addition, it provides an extremely
simple way to create animated router views, so that even when you first get started with it, you will find it very easy to use. It is minimally invasive
to your project and offers a wide range of configuration parameters to meet your customization needs. In short, if you need to add some router views with
transition animations to your Vue project, then Vue Animation Router might be a good choice for you.

## Why This Name? {#why-name}

The reason for this name is that its core is to encapsulate Vue Router's default RouterView component into an animated component. Therefore, its focus is
on the encapsulation of Animation first, and the usage of Router second, hence the name Vue Animation Router. (And it's definitely not because the name
"Vue Router Animation" was already taken on GitHub — definitely not! 😎)
