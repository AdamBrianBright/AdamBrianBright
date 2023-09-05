import hljs from 'highlight.js';
import 'highlight.js/styles/base16/onedark.css';

const code = `
package main

import "fmt"

func main() {
	fmt.Println("Konnichiwa, world!")
}
`;

export const helloWorld = hljs.highlight(code.trimStart(), { language: 'go' }).value;
