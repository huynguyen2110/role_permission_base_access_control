const methodToActionMap: Record<string, string> = {
  GET: 'list',
  POST: 'create',
  PUT: 'update',
  PATCH: 'update',
  DELETE: 'delete'
};

export default {methodToActionMap}