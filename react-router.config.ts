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
    // activeViewsArray = res.map( (view) => {
    //   return "/" + view._id;
    // })
    //   // .then( (val) => {
    //   //   console.log('test: ', val)
    //   // } )
    // console.log('activeViewsArray: ', activeViewsArray);
    // let res2 = ["poems", "stories", "journals"].map( async (collectionName) => {
    //   async function getViewDocs(viewName) {
    //     return await getDocuments(viewName);
    //   }
    //   // console.log('collectionName: ', await getViewDocs(collectionName))
    //   return await getViewDocs(collectionName);
    //   // console.log('test: ', res[0]);
    //   // console.log('res: ', res)
    //   // let resArray = []
    //   // resArray = res.map( (item) => {
    //   //   // console.log('??: ', item)
    //   //   return "/" + item.realPath;
    //   // });
    //   // realPathsArray = [...realPathsArray, ...resArray];
    // //   console.log('realPathsArray: ', realPathsArray)
    // //   // return resArray;
    // });

    // console.log('realPathsArray final: ', realPathsArray)

//   // TODO: Fix the dynamic method above to replace this hardcoded logic
    let poemsRealPaths = [];
    const poemsPathArray = await getDocuments('poems');
    poemsRealPaths = poemsPathArray.map( (item) => {
      return "/" + item.realPath;
    });

    let storiesRealPaths = [];
    const storiesPathArray = await getDocuments('stories');
    storiesRealPaths = storiesPathArray.map( (item) => {
      return "/" + item.realPath;
    });

    let journalsRealPaths = [];
    const journalsPathArray = await getDocuments('journals');
    journalsRealPaths = journalsPathArray.map( (item) => {
      return "/" + item.realPath;
    });
    // console.log('res2: ', res2)


    // return ["/",
    //         "/poems", ...poemsRealPaths,
    //         "/stories", ...storiesRealPaths,
    //         "/journals", ...journalsPathArray];

        // return ["/",
        //     ...activeViewsArray];

    // console.log('???: ', ...res2.map( (item) => {
    //       return "/" + item.realPath;
    //     }))

    return ["/",
      ...res.map( (view) => {
          return "/" + view._id;
        }),
        ...poemsRealPaths,
        ...storiesRealPaths,
        ...journalsRealPaths
           ]



  },
} satisfies Config;



// prerender: async ({ getStaticPaths }) => {
//     return ["/", "/poems", ":collectionName/", ":collectionName/:id"];
//   },
