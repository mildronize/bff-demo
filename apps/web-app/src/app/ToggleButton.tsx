import React, { Suspense } from 'react';
import { fromEvent } from 'rxjs';
import { delay } from 'rxjs/operators';
// import Button from "./Button";
const Button = React.lazy(() => import('./Button'));

const key = 'toggle';

export default function ToggleButton({ title }: { title: string }) {
  const [toggle, setToggle] = React.useState(false);

  // https://stackoverflow.com/questions/40393703/rxjs-observable-angular-2-on-localstorage-change
  React.useEffect(() => {
    const event = fromEvent(window, 'storage');
    event.pipe(delay(300)).subscribe(() => {
      console.log(localStorage.getItem(key));
      setToggle(localStorage.getItem(key) === 'true' ? true : false);
    });
  }, []);

  const handleToggle = () => {
    const nextValue = !toggle;
    setToggle(nextValue);
    localStorage.setItem(key, nextValue ? 'true' : 'false');
    window.dispatchEvent(new Event('storage'));
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
