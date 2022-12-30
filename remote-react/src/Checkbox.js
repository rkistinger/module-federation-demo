import React from 'react';

export function Checkbox() {
  React.useEffect(() => {
    console.log('hooks work');
  }, []);

  return (
    <div>
      <input type="checkbox" id="check" />
      <label htmlFor="check">I'm a checkbox from the remote-react app</label>
    </div>
  );
}
