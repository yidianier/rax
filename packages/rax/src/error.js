import Host from './vdom/host';

export function getRenderErrorInfo() {
  const ownerComponent = Host.owner;
  if (ownerComponent) {
    const name = ownerComponent.__getName();
    if (name) {
      return `check the render method of <${name}>`;
    }
  }
  return '';
}

/**
 * Error code:
 *  0: Type of createElement should not be null or undefined.
 *  1: Hooks can only be called inside a component.
 *  2: Invalid component type.
 *  3: ref: multiple version of Rax used in project.
 * @param code {Number}
 */
export function throwMinifiedError(code, info) {
  throw new Error(`Error: #${code}, ${info || getRenderErrorInfo()}.`);
}
