/**
 * Runs the {@link callback} as soon as the DOM is ready
 *
 * @example
 * ```ts
 * onDomReady(() => console.log("DOM is ready"));
 * ```
 */
export default function onDomReady(callback: () => unknown): void {
  if (document.readyState !== "loading") callback();
  else document.addEventListener("DOMContentLoaded", callback);
}
