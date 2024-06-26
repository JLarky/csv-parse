# @jlarky/csv-parse [![JSR](https://jsr.io/badges/@jlarky/csv-parse)](https://jsr.io/@jlarky/csv-parse)


## Installation

```bash
bunx jsr add @jlarky/csv-parse
# or
npx jsr add @jlarky/csv-parse
```

## Example

```jsx
import { parse } from "@jlarky/csv-parse";

const input = "a,b,c\n1,2,3\n4,5,6";
const options = { columns: true };

const result = await parse(input, options);

if (result.success) {
  console.log(result.records);
} else {
  console.error(result.err);
}
```

## Browser

```js
const { parse } = await import("https://esm.sh/jsr/@jlarky/csv-parse@latest");
await parse("123,456")
```

## Development

To install dependencies:

```bash
bun install
```

To test:

```bash
bun test
```

To publish:

```bash
bun run publish
```
