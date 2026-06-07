# Deep Dive: JavaScript Imports — 50 Interview Questions & Answers

Purpose: This file is a focused, interview-ready deep dive on JavaScript module imports. Topics: ES Modules (ESM), CommonJS (CJS), dynamic imports, circular dependencies, bundlers, Node/browser differences, performance, security, TypeScript interop, and troubleshooting. Each question includes a concise, accurate technical answer and examples where useful.

1. What is the fundamental difference between ESM and CommonJS?
- ESM: static, declarative import/export syntax evaluated by a module loader (supports static analysis and tree-shaking). CJS: imperative `require()` and `module.exports`, resolved at runtime.

2. Why does ESM enable tree-shaking better than CJS?
- ESM's static import graph and named exports allow bundlers to determine unused exports at build time. CJS's dynamic `require` and mutable `module.exports` make static analysis harder.

3. What are live bindings in ESM?
- Imports reference the original exported bindings; if the exporter later updates the binding, importers see the change. This is because imports create live references, not copies.

4. How do default exports work and what are pitfalls?
- `export default value` provides a single default binding. Pitfalls: mixing default with named exports across ecosystems causes interop issues; default can obscure exported shape and complicate IDE tooling or refactors.

5. How does `import()` (dynamic import) differ from static `import`?
- `import()` returns a promise and loads modules at runtime (useful for code-splitting). Static `import` is hoisted and resolved before execution.

6. Can you conditionally import modules? How?
- Yes: use `import()` inside conditionals (`if (cond) { const m = await import('./m.js') }`). For static `import`, you cannot use conditions.

7. How are circular dependencies handled in ESM vs CJS?
- ESM: live bindings allow cycles but exported values may be `undefined` until assigned; evaluation order matters. CJS: modules receive partially-initialized `module.exports` (the object as it exists at require time).

8. What is the Temporal Dead Zone (TDZ) and how can it affect imported values?
- TDZ occurs for `let/const` before initialization. In circular graphs, reading an imported binding that hasn't been initialized yet throws for TDZ (for `let/const`) or yields `undefined` for `var`.

9. How does Node resolve ESM module specifiers?
- Node supports file paths, package names, and conditional exports via `package.json`. File extensions are usually required (or use package exports); Node uses the `type` field to treat `.js` as ESM or CJS.

10. What does `package.json` `type: "module"` do?
- It tells Node to treat `.js` files as ESM by default within that package. Without it, `.js` is CJS and `.mjs` is ESM.

11. How do you import JSON in ESM and CJS?
- CJS: `const data = require('./data.json')`. ESM (Node >= 17.5): `import data from './data.json' assert { type: 'json' }` or use `await import('./data.json', { assert: { type: 'json' } })`.

12. What are named exports vs namespace imports?
- Named exports: `export const a = 1` → `import { a } from './m'`. Namespace import: `import * as ns from './m'` yields an object with live bindings.

13. How does scope/hoisting of `import` work?
- Static imports are hoisted and resolved before module execution. They cannot be inside blocks or functions (in static form) and cannot be conditionally declared.

14. What are module namespace objects?
- The object returned by `import * as ns` or the resolved object from dynamic `import()` — it contains exported bindings as properties and is frozen (some internal invariants apply).

15. How does bundling affect import semantics?
- Bundlers rewrite import graphs into bundles/chunks, preserving semantics but optimizing (inlining, tree-shaking, chunk splitting). Edge cases: modules with side effects, dynamic require patterns, and runtime `__dirname`/`__filename` in Node.

16. What is code-splitting and its relation with `import()`?
- Code-splitting splits app code into chunks loaded on demand. `import()` creates chunk boundaries for bundlers to generate separate files that load at runtime.

17. How do you ensure a module runs side effects only once?
- Modules are singletons per module identity in a runtime — the evaluated module code runs only the first time it's imported/required. Subsequent imports reuse cached exports.

18. How does module caching work?
- After a module is loaded and evaluated, the module record is cached by the loader (Node or browser). Further imports/require return the cached module, preventing re-execution.

19. How can caching affect tests and hot-reload?
- Cached modules mean state persists across imports; in tests you may need to clear caches (`delete require.cache[...]` for CJS or restart Node for ESM) or design modules to be pure. Hot-reload systems replace module instances or clear caches.

20. What problems arise from mixing ESM and CJS?
- Interop differences: `require()` of ESM needs dynamic import or transpilation; `import` of CJS yields a namespace with `default` often representing `module.exports` (tooling like Babel/TypeScript adds compat wrappers). Timing, live bindings, and default semantics differ.

21. How do `export =` and `module.exports` interoperate with ESM?
- `export =` (TypeScript/older patterns) maps to `module.exports` shape; when importing into ESM, the consumer may see `default` which points to `module.exports`. Node's interop uses synthetic default wrappers.

22. What is `createRequire()` in Node and when to use it?
- `module.createRequire(import.meta.url)` or `createRequire` allows you to use `require()` inside ESM to load CJS modules or JSON synchronously when needed.

23. Explain conditional exports in `package.json`.
- Conditional exports allow packages to expose different entry points depending on conditions (`import`, `require`, `node`, `browser`, `development`). This enables providing separate ESM and CJS builds.

24. How do you design a package for both ESM and CJS consumers?
- Provide dual entry points (via `exports` or `main` + `module`), publish both CJS and ESM builds, set `package.json` `exports` to map conditions, and mark sideEffects properly.

25. How do you debug import resolution issues in Node?
- Check `package.json` `type`, `exports`, file extensions, and exact import specifiers. Use Node diagnostic flags or reproduce a minimal example to see resolution path.

26. What is import assertions and why are they used?
- Import assertions (`import data from './d.json' assert { type: 'json' }`) let you declare the expected type (e.g., JSON, wasm) enforcing loader checks and avoiding ambiguous behavior.

27. How do browsers handle module imports vs bundlers?
- Browsers load modules via `<script type="module">` and resolve specifiers as URLs. Bundlers allow using bare package specifiers and do transformations and optimizations not available in browsers by default.

28. What is a bare specifier and how do you handle it in browsers?
- Bare specifier: `import x from 'lodash'`. Browsers don't support these natively; bundlers or import maps are used to map bare specifiers to URLs.

29. What are import maps?
- Import maps allow mapping module specifiers to URLs in browsers (`<script type="importmap">`), enabling use of bare specifiers without bundling.

30. How should you structure modules for optimal tree-shaking?
- Use named exports, avoid side effects at module top-level, provide small focused modules, and mark packages with `sideEffects: false` when safe.

31. How do side effects affect bundling and tree-shaking?
- Side-effectful modules must be preserved even if their exports appear unused. `package.json` `sideEffects` hints allow bundlers to safely drop modules without side effects.

32. How to lazy-load a module while preserving type safety in TypeScript?
- Use `const m = await import('./m')` in TS with proper types: `import type { SomeType } from './m'` for static types, or declare `const m: typeof import('./m')` for runtime import shape.

33. How to share a singleton across module systems?
- Expose shared state via a single module entry point and ensure both ESM and CJS consumers import the same module identity (careful with dual publishing that creates duplicate copies).

34. What is the difference between `import './polyfill'` and `import x from './x'`?
- `import './polyfill'` imports for side effects only (no bindings). `import x from './x'` imports bindings. Side-effect imports are evaluated for their top-level code.

35. How to safely migrate a codebase from CJS to ESM?
- Incrementally: add `type: 'module'` in a test area, use `.mjs` for isolated ESM modules, provide dual builds, adapt tooling (linters, test runners), and shift exports to named ESM exports gradually.

36. What happens when you import a module that throws during initialization?
- The loader signals a failure: the module record is marked errored, imports fail, and the cache may contain a failed record. Subsequent imports may reattempt load depending on environment.

37. How do source maps and modules interact in debugging?
- Source maps map transpiled bundles back to original modules. Proper bundler/source-map config preserves module boundaries and improves step-through debugging.

38. How does TypeScript output ESM and interop with CJS?
- TS can emit `module: 'esnext'` or `commonjs`. Emit choices affect runtime interop; using `esModuleInterop` and `allowSyntheticDefaultImports` toggles helper generation to ease default import semantics.

39. What are practical pitfalls with circular dependencies?
- Uninitialized values, runtime `undefined`, order-dependent behavior, and subtle bugs. Solve by refactoring, moving shared code to third module, or using functions rather than values to delay access.

40. How to write tests that involve modules with singletons/state?
- Reset module state between tests by clearing cache (CJS) or isolating tests in separate processes; design modules to expose factory functions for testable instances.

41. How do ES module loaders differ across environments?
- Browsers use URL-based resolution and CORS; Node uses package resolution and `exports`; bundlers implement virtual loaders with enhanced features (e.g., aliasing, virtual files).

42. What is the `module` field historically used for in packages?
- Historically the `module` field pointed to an ES module build for bundlers while `main` pointed to CJS; modern packages use `exports` conditional mapping instead.

43. What are loader hooks and how can you use them?
- Runtime-specific loader hooks (like Node's experimental loaders) let you customize how modules are resolved and transformed (e.g., to support non-standard extensions). Use with caution — they are advanced/experimental.

44. How does security (CSP, CORS) affect module loading in browsers?
- `type="module"` scripts follow CORS rules; modules fetched from other origins require CORS approval. Content Security Policy (CSP) can restrict `import` sources.

45. How to optimize startup perf wrt modules?
- Reduce critical import graph size, use code-splitting for non-critical paths, prefer smaller modules, avoid heavy synchronous top-level computations, and delay work behind `import()`.

46. How do you inspect the module graph in Node/bundlers?
- Node: use diagnostic flags, traces, or custom loader hooks. Bundlers: many provide visualization (e.g., `webpack-bundle-analyzer`, Rollup visualizers) showing dependency graph.

47. What are common mistakes when authoring libraries for ESM consumers?
- Shipping only CJS, missing `exports` mapping, shipping untranspiled code that breaks older runtimes, forgetting `sideEffects` hints, and mismatched bundler assumptions.

48. How do you handle platform-specific imports (browser vs node)?
- Use conditional exports in `package.json`, runtime checks with dynamic `import()`, or provide separate entry points for platform-specific builds.

49. How does minification interact with module bundling?
- Minifiers operate on bundled output or per-chunk input. ESM's static shape enables better renaming and elimination; minification should be applied after bundling/chunking for best results.

50. Practical debugging checklist when imports fail:
- 1) Verify file path and extension. 2) Check `package.json` `type` and `exports`. 3) Confirm runtime supports the import pattern (Node/browser/version). 4) Look for circular init issues. 5) Reproduce minimal case. 6) Inspect bundler resolution config (alias, resolve.extensions).

Appendix: Quick examples

- ESM named export/import:

```js
// lib.js
export function sum(a, b) { return a + b }

// app.js
import { sum } from './lib.js'
console.log(sum(1,2))
```

- Dynamic import for code-splitting:

```js
async function loadFeature() {
  const { feature } = await import('./feature.js')
  feature.doIt()
}
```

- Handling CJS in ESM (Node):

```js
import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const pkg = require('./pkg.cjs')
```

Further reading
- MDN: Modules guide. Node.js docs: ESM in Node, `package.json` exports. Bundler docs: Webpack, Rollup, Vite.

If you'd like, I can:
- Expand any of the 50 answers into a longer walkthrough with diagrams and code examples.
- Create a shorter cheat-sheet for on-the-spot interview review.
# JavaScript Interview Master Repository 🚀

This repository is a comprehensive guide to mastering JavaScript for interviews. It covers everything from core fundamentals to advanced concepts, with theory, code examples, and deep-dive interview questions.

## 📌 Master Guides
*   **[JS Theory Masterclass: Part 1 - Fundamentals](file:///home/ravi/Desktop/interview/js/docs/MASTER_THEORY_PART1.md)**
*   **[JS Theory Masterclass: Part 2 - Scopes & Closures](file:///home/ravi/Desktop/interview/js/docs/MASTER_THEORY_PART2.md)**
*   **[JS Theory Masterclass: Part 3 - Prototypes & Objects](file:///home/ravi/Desktop/interview/js/docs/MASTER_THEORY_PART3.md)**
*   **[JS Theory Masterclass: Part 4 - Asynchronous JS](file:///home/ravi/Desktop/interview/js/docs/MASTER_THEORY_PART4.md)**
*   **[100 Full-Stack Telephonic Interview Questions](file:///home/ravi/Desktop/interview/js/telephonic-interview/README.md)** 📞
*   **[Practice Coding Challenges (Polyfills)](file:///home/ravi/Desktop/interview/js/coding-challenges/polyfills/)**

---

## 📌 Roadmap

### [00. JavaScript Fundamentals](file:///home/ravi/Desktop/interview/js/topics/00-js-fundamentals/README.md)
* Value types vs Reference types.
* Type Coercion, Equality (== vs ===), and Truthy/Falsy.

### [01. Execution Context & Hoisting](file:///home/ravi/Desktop/interview/js/topics/01-execution-context/README.md)
* How JavaScript runs under the hood.
* Memory management and the Thread of Execution.

### [02. Closures & Lexical Environment](file:///home/ravi/Desktop/interview/js/topics/02-closures/README.md)
* Scoping, closures, and data privacy.
* Real-world use cases (Module pattern, Currying).

### [03. Prototypes & Inheritance](file:///home/ravi/Desktop/interview/js/topics/03-prototypes/README.md)
* Prototype chain, `__proto__` vs `prototype`.
* Functional vs Class-based inheritance.

### [04. Asynchronous JavaScript](file:///home/ravi/Desktop/interview/js/topics/04-async-js/README.md)
* The Event Loop, Microtask vs Macrotask queue.
* Promises, Async/Await, and error handling.

### [05. 'this' Keyword & Call/Apply/Bind](file:///home/ravi/Desktop/interview/js/topics/05-this-keyword/README.md)
* Implicit, Explicit, and Default binding.
* Arrow functions vs Normal functions.

### [06. ES6+ Features](file:///home/ravi/Desktop/interview/js/topics/06-es6-features/README.md)
* Modern JS syntax and why it matters.

## 🛠️ How to practice
1. Read the `README.md` in each topic folder for theory.
2. Run the `.js` files in each folder using Node.js: `node filename.js`.
3. Try solving the challenges in the `challenges.js` files.

---
*Happy Coding!*
