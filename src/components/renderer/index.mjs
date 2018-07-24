// @flow
const { Parser } = window.Htmlparser2;
const {
  elementOpen,
  elementClose,
  text,
  patch,
} = window.IncrementalDOM;

export const idomParser = new Parser({
  onopentag: (name, attrs) => {
    const listStatics = Object.keys(attrs)
      .reduce((statics, k) => statics.concat([k, attrs[k]]), []);
    elementOpen(name, null, null, ...listStatics);
  },
  ontext: text,
  onclosetag: elementClose,
});

export function html2idom(html/*: string*/) {
  idomParser.write(html);
  idomParser.end();
}

export function render(el/*: HTMLElement*/, html/*: string*/) {
  patch(el, () => html2idom(html));
}

export default function renderer(el/*: HTMLElement*/)/*: (html: string) => void */ {
  return html => render(el, html);
}
