import { marked } from "marked";
import hljs from "highlight.js"; // 引入 highlight.js

marked.setOptions({
  renderer: new marked.Renderer(),
  highlight: function (code, lang) {
    const language = hljs.getLanguage(lang) ? lang : "";
    return language ? hljs.highlight(code, { language }).value : hljs.highlightAuto(code).value;
  },
  pedantic: false,
  gfm: true,
  breaks: true,
  sanitize: false,
  smartLists: true,
  smartypants: false,
  xhtml: false,
  langPrefix: "hljs language-", // highlight.js css expects a top-level 'hljs' class.
});

marked.use({
  renderer: {
    // 处理图片格式 参考：https://marked.js.org/using_pro#inline-level-renderer-methods
    image(href: string, title: string, text: string) {
      return `<div class="image-block">
        <img src="${href}" alt="${href}" />
        <div class="image-caption">${text}</div>
      </div>`;
    }
  }
})

export default marked;