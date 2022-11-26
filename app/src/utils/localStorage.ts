function getByKey(key: string): string | null {
  const data = localStorage.getItem(key);
  return data;
}

function setByKey(key: string, value: string): void {
  localStorage.setItem(key, value);
}

export const storageHandler = {
  getByKey,
  setByKey,
};
