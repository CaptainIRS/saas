// import {
//   Solc,
//   ImportCallbackFn,
//   ImportCallbackReturnType,
// } from "solc-browserify";

// export default async function compileContract(source: string, callback: ImportCallbackFn): Promise<any> {
//   const compiler = new Solc(callback);

//   const output = await compiler.compile(source);

//   if (output.errors) {
//     throw new Error(output.errors.join("\n"));
//   }

//   return output;
// }
