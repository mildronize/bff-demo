import React, { Suspense } from 'react';
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';
// import Button from "./Button";
const Button = React.lazy(() => import('./Button'));

const globalState = 'globalState';
const key = 'toggle';

if (window[globalState] === undefined) {
  window[globalState] = {
    toggle: false
  };
}

export default function ToggleButton({ title }: { title: string }) {
  const [toggle, setToggle] = React.useState(false);

  // UseEffect call Twice in dev mode: https://stackoverflow.com/questions/60618844/react-hooks-useeffect-is-called-twice-even-if-an-empty-array-is-used-as-an-ar
  React.useEffect(() => {
    const event = fromEvent(window, globalState);
    event.pipe(delay(100)).subscribe((event) => {
      console.log(window[globalState], 'from ', title);
      setToggle(window[globalState][key] as boolean);
    });
  }, []);

  const handleToggle = () => {
    const nextValue = !toggle;
    setToggle(nextValue);
    window[globalState][key] = nextValue;
    window.dispatchEvent(new Event(globalState));
  };

  return (
    <div className="mt-10 text-3xl mx-auto max-w-6xl">
      {title}
      <Suspense fallback={<div>Loading...</div>}>
        <Button toggle={toggle} onClick={handleToggle} />
      </Suspense>
    </div>
  );
}
