export function replacePathParams(path, newData) {
  let newPath = path;
  Object.keys(newData).forEach((it) => {
    newPath = newPath.replace(`:${it}`, newData[it]);
  });
  return newPath;
}
