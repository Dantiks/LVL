type Document = Record<string, any>;

const db: Record<string, Document> = {};

export const getDoc = async (id: string): Promise<Document | null> => {
  return new Promise(resolve => setTimeout(() => resolve(db[id] ?? null), 300));
};

export const setDoc = async (id: string, data: Document): Promise<void> => {
  return new Promise(resolve => setTimeout(() => {
    db[id] = data;
    resolve();
  }, 300));
};

export const deleteDoc = async (id: string): Promise<void> => {
  return new Promise(resolve => setTimeout(() => {
    delete db[id];
    resolve();
  }, 300));
};
