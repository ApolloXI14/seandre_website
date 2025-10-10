import type { Config } from "@react-router/dev/config";
import { getViews, getDocuments } from 'app/serverFunctions.ts';

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  future: {
    v8_middleware: true,
  },
  ssr: false,
  async prerender({ getStaticPaths }) {
    let realPathsArray = [];
    let activeViewsArray = [];
    //const collectionNameArray = ["homes", "poems", "stories"];
    let res = await getViews();

    let res2 = await Promise.all(
      ["poems", "stories", "journals"].map(async (collectionName) => {
        async function getViewDocs(viewName) {
          return await getDocuments(viewName);
        }
        return await getViewDocs(collectionName);
      })
    );

    var test = res2.map( (item) => {
      return item.map( (item2) => {
        return "/" + item2.realPath
      } )
    } )
    realPathsArray = test.flat();

        return ["/",
      ...res.map( (view) => {
          return "/" + view._id;
        }),
        ...realPathsArray
           ]



  },
} satisfies Config;



// prerender: async ({ getStaticPaths }) => {
//     return ["/", "/poems", ":collectionName/", ":collectionName/:id"];
//   },
