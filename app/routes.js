import { index, route } from "@react-router/dev/routes";

export default [
  index("./app/page.js"),
  route("c/:collectionName/p/:id", "./app/[collectionName]/[id]/page.js"),
];
