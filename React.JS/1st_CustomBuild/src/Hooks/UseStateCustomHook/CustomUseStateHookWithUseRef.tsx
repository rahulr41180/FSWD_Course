
const hooks: any[] = [];
let hookIndex = 0;

export function useState(initial: any): any {
  const currentIndex = hookIndex;

  hooks[currentIndex] =
    hooks[currentIndex] ?? initial;

  function setState(newValue: any) {
    hooks[currentIndex] = newValue;

    // render();
  }

  hookIndex++;

  return [hooks[currentIndex], setState];
}

