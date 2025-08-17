import { fetchNotes } from "@/lib/api";
import NotesClient from "./Notes.client";

export default async function NotesPage() {
  const initialPage = 1;
  const initialQuery = "";

  const initialData = await fetchNotes(initialPage, initialQuery);

  return <NotesClient initialData={initialData} />;
}
