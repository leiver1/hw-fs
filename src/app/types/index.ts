export interface Post {
  id: number; // Primärschlüssel, automatisch hochgezählt
  title: string; // Titel des Posts, max. Länge 255
  createdAt: Date; // Erstellungszeitpunkt
  content?: string | null; // Optionaler Textinhalt des Posts
  published: boolean; // Veröffentlichungsstatus
  authorId: number; // Fremdschlüssel, verweist auf User
}

export interface Profile {
  id: number; // Primärschlüssel, automatisch hochgezählt
  bio?: string | null; // Optionaler Text als Biografie
  userId: number; // Fremdschlüssel, verweist auf User (eindeutig)
}

export interface User {
  id: number; // Primärschlüssel, automatisch hochgezählt
  name?: string | null; // Optionaler Name des Users, max. Länge 255
  password: string;
  email: string; // E-Mail-Adresse, muss einzigartig sein
  Post: Post[]; // Liste von Posts, die mit dem User verknüpft sind
  Profile?: Profile | null; // Optionales Profil, das mit dem User verknüpft ist
}
