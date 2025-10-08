/*
 * https://www.npmjs.com/package/vite-plugin-node
 * https://reactrouter.com/api/other-api/serve
 * https://reactrouter.com/api/other-api/adapter#server-adapters
 *
 */

import { reactRouter } from "@react-router/dev/vite";
import autoprefixer from "autoprefixer";
import tailwindcss from "tailwindcss";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import netlifyPlugin from "@netlify/vite-plugin-react-router";
import { reactRouterDevTools } from "react-router-devtools";
import { VitePluginNode } from 'vite-plugin-node';

export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwindcss, autoprefixer],
    },
  },
  plugins: [reactRouterDevTools(), reactRouter(), tsconfigPaths(), netlifyPlugin(),
//       VitePluginNode({
//       // Nodejs native Request adapter
//       // currently this plugin support 'express', 'nest', 'koa' and 'fastify' out of box,
//       // you can also pass a function if you are using other frameworks, see Custom Adapter section
//
//       // adapter({ app, server, req, res, next }) {
//       //   app(res, res);
//       // },
//
//       adapter: 'express',
//
//       // tell the plugin where is your project entry
//       appPath: './app/root.tsx',
//
//       // Optional, default: 'viteNodeApp'
//       // the name of named export of you app from the appPath file
//       exportName: 'viteNodeApp',
//
//       // Optional, default: false
//       // if you want to init your app on boot, set this to true
//       initAppOnBoot: false,
//
//       // Optional, default: false
//       // if you want to reload your app on file changes, set this to true, rebounce delay is 500ms
//       reloadAppOnFileChange: false,
//
//       // Optional, default: 'esbuild'
//       // The TypeScript compiler you want to use
//       // by default this plugin is using vite default ts compiler which is esbuild
//       // 'swc' compiler is supported to use as well for frameworks
//       // like Nestjs (esbuild dont support 'emitDecoratorMetadata' yet)
//       // you need to INSTALL `@swc/core` as dev dependency if you want to use swc
//       tsCompiler: 'esbuild',
//
//       // Optional, default: {
//       // jsc: {
//       //   target: 'es2019',
//       //   parser: {
//       //     syntax: 'typescript',
//       //     decorators: true
//       //   },
//       //  transform: {
//       //     legacyDecorator: true,
//       //     decoratorMetadata: true
//       //   }
//       // }
//       // }
//       // swc configs, see [swc doc](https://swc.rs/docs/configuration/swcrc)
//       swcOptions: {}
//     })
  ],
});
