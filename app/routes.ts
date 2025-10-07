import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("/", "routes/index.tsx", [
        route(":collectionName/", "routes/entrylist.tsx"),
        route(":collectionName/:id", "routes/entry.tsx")
    ]),
] satisfies RouteConfig;
