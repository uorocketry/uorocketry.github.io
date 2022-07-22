// https://stackoverflow.com/a/72061876
export function toSpaceCase(str) {
  return (
    str
      .replace(/[-_]/g, " ")
      /*
       * insert a space between lower & upper
       * HttpRequest => Http Request
       */
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      /*
       * space before last upper in a sequence followed by lower
       * XMLHttp => XML Http
       */
      .replace(/\b([A-Z]+)([A-Z])([a-z])/, "$1 $2$3")
      .trim()
      // uppercase the first character
      .replace(/^./, (str) => str.toUpperCase())
      .replace(/\s+/g, " ")
      .trim()
  );
}
