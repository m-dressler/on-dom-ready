# @md/on-dom-ready

Runs a function directly if the DOM is ready or once the DOMContentLoaded event is fired

## Example

```ts
onDomReady(() => console.log("DOM is ready"));
```

Equivalent without `@md/on-dom-ready`:

```ts
const run = () => console.log("DOM is ready");
if (document.readyState !== "loading") run();
else document.addEventListener("DOMContentLoaded", run);
```
