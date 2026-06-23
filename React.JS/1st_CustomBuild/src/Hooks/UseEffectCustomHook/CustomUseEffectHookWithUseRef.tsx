
import { useRef, type EffectCallback, type DependencyList } from "react";

// However, if you want to mimic React's useEffect, the callback can also return a cleanup function:
export const useCustomEffect1 = (callback: () => void | (() => void), deps: any[]) => {
    const prevDeps = useRef<null | any>(null);

    let hasChanged = true;

    if(prevDeps.current) {
        hasChanged = deps.some((dep, index) => dep !== prevDeps.current[index])        
    }

    if(hasChanged) {
        callback();
        prevDeps.current = deps;
    }
}
export const useCustomEffect2 = (callback: EffectCallback, deps: DependencyList) => {
    const prevDeps = useRef<null | DependencyList>(null);
    const previousDeps = prevDeps.current;
    let hasChanged = true;

    if(previousDeps) {
        hasChanged = deps.some((dep, index) => dep !== previousDeps[index])        
    }

    if(hasChanged) {
        callback();
        prevDeps.current = deps;
    }
}

const effects: any[] = [];
let hookIndex = 0;
export function useEffect(callback: () => void | (() => void), deps: any) {
  const oldDeps = effects[hookIndex];

  let changed = true;

  if (oldDeps) {
    changed = deps.some(
      (dep: any, i: number) => dep !== oldDeps[i]
    );
  }

  if (changed) {
    callback();
  }

  effects[hookIndex] = deps;
  hookIndex++;
}

/* 
Store Dependencies
       ↓
Compare Dependencies
       ↓
Run Callback If Changed
       ↓
Save New Dependencies

Internaly what happened in useEffect

Component Render
       ↓
React Creates Fiber
       ↓
Store Hook Information
       ↓
Compare Dependency Array
       ↓
Commit DOM Updates
       ↓
Execute Effect
       ↓
Store Cleanup
       ↓
Next Render
       ↓
Run Cleanup
       ↓
Run New Effect
*/