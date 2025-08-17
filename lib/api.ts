// import axios from "axios";
// import type { NewNote, Note, FetchNoteList } from "../types/note";

// axios.defaults.baseURL = "https://notehub-public.goit.study/api";

// const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

// export const fetchNotes = async (
//   page: number,
//   query: string
// ): Promise<FetchNoteList> => {
//   const params: Record<string, string | number> = {
//     perPage: 12,
//     page,
//   };

//   if (query.trim() !== "") {
//     params.search = query;
//   }

//   const response = await axios.get<FetchNoteList>("/notes", {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//     params,
//   });

//   return response.data;
// };

// export const fetchNoteById = async (id: string): Promise<Note> => {
//   const res = await axios.get<Note>(`/notes/${id}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return res.data;
// };

// export const createNote = async (noteData: NewNote): Promise<Note> => {
//   const response = await axios.post<Note>("/notes", noteData, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });
//   return response.data;
// };

// export const deleteNote = async (noteId: string): Promise<Note> => {
//   const response = await axios.delete<Note>(`/notes/${noteId}`, {
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//   return response.data;
// };

import axios from "axios";
import type { NewNote, Note } from "../types/note";

interface fetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

const token = process.env.NEXT_PUBLIC_NOTEHUB_TOKEN;

export const fetchNotes = async (
  page: number,
  query: string
): Promise<fetchNotesResponse> => {
  const params: Record<string, string | number> = {
    perPage: 10,
    page,
  };

  if (query.trim() !== "") {
    params.search = query;
  }

  const response = await axios.get<fetchNotesResponse>(
    "https://notehub-public.goit.study/api/notes",
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params,
    }
  );

  return response.data;
};

export const createNote = async (noteData: NewNote): Promise<Note> => {
  const response = await axios.post<Note>(
    "https://notehub-public.goit.study/api/notes",
    noteData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const deleteNote = async (noteId: number): Promise<Note> => {
  const response = await axios.delete<Note>(
    `https://notehub-public.goit.study/api/notes/${noteId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  return response.data;
};
