import type { Route } from "./+types/entrylist";
import { getDocuments } from '../serverFunctions.ts';
import { EntryListComp } from '../components/EntryList';


export async function loader({params}: Route.LoaderArgs) {
  let entryList = await getDocuments(params.collectionName);
  return { entryList }
}

export default function EntryList({loaderData, params}: Route.ComponentProps) {
    const { entryList } = loaderData;
    const collectionName = params.collectionName;
    const arr = [<EntryListComp
                list={entryList}
                collectionName={params.collectionName}
                />];
    return arr;
}
