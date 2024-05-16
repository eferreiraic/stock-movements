// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export default function formatToSelectElem(elems: any) {
    // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  return elems.map((elem: any) => {
    return {
      value: elem.id,
      label: elem.name,
    };
  });
}
