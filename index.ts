import {
  parse as csvParse,
  type Options,
  type Parser,
  type CastingContext,
} from "csv-parse";

/**
 * Some info about the CSV parsing
 */
export type Info = Parser["info"];
/**
 * Error that occurred during parsing
 */
export type CsvError = CastingContext["error"];
/**
 * Result of parsing as a union type of success and failure
 */
export type Result<T = string[]> =
  | { success: false; err: CsvError; info: Info }
  | { success: true; records: T[]; info: Info };

/**
 * Wrapper around csv-parse to return a promise
 *
 * @example
 * import { parse } from "@jlarky/csv-parse";
 *
 * const input = "a,b,c\n1,2,3\n4,5,6";
 * const options = { columns: true };
 *
 * const result = await parse(input, options);
 *
 * if (result.success) {
 *   console.log(result.records);
 * } else {
 *   console.error(result.err);
 * }
 */
export async function parse<T = string[]>(
  input: Buffer | string,
  options: Options = {}
): Promise<Result<T>> {
  return new Promise<Result<T>>((resolve, reject) => {
    csvParse(input, options, (err, records, info) => {
      if (err) {
        resolve({ success: false, err, info });
      } else {
        resolve({ success: true, records, info });
      }
    });
  });
}
