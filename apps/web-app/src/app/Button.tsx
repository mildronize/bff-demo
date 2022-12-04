import { css } from '@emotion/react';

export default function Button({toggle,onClick}: { toggle?: boolean, onClick?: any}) {
  const color = toggle ? 'hsla(214, 62%, 21%, 1)': 'gray';
  return (
    <button css ={css`
        color: white;
        background-color: ${color};
        border: 1px solid ${color};
    `} onClick={onClick}>
        {toggle?`ON`:`OFF`}
    </button>
  );
}
