export type UriString = string;
export type UniqueString = string;
export type EntityId = number | UniqueString;
export type Category = 'Technology' | 'Science' | 'Arts';
export type DateIsoString = string;
export type Person = string;
export type RelativeTime = string;

export interface Post {
  id: EntityId;
  date: DateIsoString;
  category: Category;
  title: string;
  lead: string;
  content: string;
  image: UriString;
  source: UriString;
}

export interface Comment {
  id: EntityId;
  author: Person;
  content: string;
  time: RelativeTime;
  post: EntityId;
}
