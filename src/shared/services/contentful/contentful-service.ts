import { ContentfulService } from './contentful.types';
import { readEntries, createEntry, deleteEntry } from './functions';

const contentfulService = <T>(): ContentfulService<T> => {
  return {
    read: (endpoint) => readEntries<T>(endpoint),
    create: (endpoint, data) => createEntry<T>(endpoint, data),
    delete: (endpoint) => deleteEntry<T>(endpoint),
  };
};

export default contentfulService;
