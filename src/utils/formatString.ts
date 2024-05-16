export function formatCamelToTitle(entryStr: string) {
  return entryStr
    .replace(/([A-Z])/g, ' $1')
    .replace(/^./, (str: string) => str.toUpperCase());
}

export function capitalizeFirstLetter(entryStr: string) {
  return entryStr.charAt(0).toUpperCase() + entryStr.slice(1).toLowerCase();
}
