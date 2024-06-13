import { parse } from ".";

import { expect, test } from "bun:test";

test("parsing", async () => {
  const input = "a,b,c\n1,2,3\n4,5,6";
  const options = { columns: true };

  const result = await parse<{ a: string; b: string; c: string }>(
    input,
    options
  );

  expect(result.success).toBe(true);
  if (result.success) {
    expect(result.records).toEqual([
      { a: "1", b: "2", c: "3" },
      { a: "4", b: "5", c: "6" },
    ]);
  }
});
