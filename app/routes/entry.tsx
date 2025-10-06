import type { Route } from "./+types/entry";
import { Navbar } from '../components/Navbar';
import { getThreeDocuments } from '../serverFunctions.ts';
import { EntryComp } from '../components/Entry';


export async function loader({params}: Route.LoaderArgs) {
  let journalEntryObj = await getThreeDocuments(params.collectionName, params.id);
  return { journalEntryObj }
}

export default function Entry({loaderData, params}: Route.ComponentProps) {
    const { journalEntryObj } = loaderData;
    let currentEntryObj;
    let previousEntryObj;
    let nextEntryObj;
    nextEntryObj = journalEntryObj[0]?.nextMatch[0];
    previousEntryObj = journalEntryObj[0]?.lastMatch[0];
    const prevEntryTitle = previousEntryObj?.baseCase || '';
    const nextEntryTitle = nextEntryObj?.baseCase || '';
    const html = journalEntryObj[0]?.content || '';
    const collectionName = params.collectionName;

    const arr = [<Navbar />, <EntryComp
                prevEntryTitle={prevEntryTitle}
                nextEntryTitle={nextEntryTitle}
                collectionName={collectionName}
                html={html}
	      	/>];

    return arr;
}
