export type ItemMeta = {
  id: string;
  createdAt: string;
  optimistic?: boolean;
};

export type NewItem<T> = Omit<T, 'id' | 'createdAt'>;

export type Listful<T> = {
  add: (item: NewItem<T>) => Promise<T>;
  remove: (id: string) => void;
};

export type UseContentfulReturn<T extends ItemMeta> = {
  data: T[] | undefined;
  listful: Listful<T>;
  isLoading: boolean;
  error: null | { message: string };
};
