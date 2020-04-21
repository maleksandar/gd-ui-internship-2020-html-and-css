export const insertItemToPosition = (obj, itemKey, item, position) => {
  const newObj = {};
  const keys = Object.keys(obj);
  keys.forEach((key, i) => {
    if(i === position) {
      newObj[itemKey] = item;
    }
    newObj[key] = obj[key];
  })
  return newObj;
}