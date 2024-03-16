# useContentful Hook

## Overview
`useContentful` is a React hook designed for managing and synchronizing a list of data items with Contentful's CMS. It provides functionality for adding and removing items optimistically, ensuring UI responsiveness and data integrity.

## Features
- **Optimistic UI Updates**: Immediately reflects add and delete operations in the UI.
- **Server State Synchronization**: Uses polling to sync local state with the server after operations.
- **Error Handling**: Comprehensive error management.

## Usage
Import and use the hook in your component. It provides `listful` actions for adding (`listfulAdd`) and removing (`listfulRemove`) items, and automatically fetches data on mount.

```javascript
const { data, isLoading, error, listful } = useContentful<Wish>('your-endpoint');
```

### Adding Items
```javascript
await listful.add(newItem);
```

### Removing Items
```javascript
await listful.remove(itemId);
```
