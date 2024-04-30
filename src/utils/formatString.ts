export function formatString(entryStr: string) {
  return entryStr
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str: string) => str.toUpperCase());
}
