import '@carvana/showroom-forms/Checkbox/index.css';
import React from 'react';
import ShowroomCheckbox from '@carvana/showroom-forms/Checkbox';

export function Checkbox() {
  const [isChecked, setIsChecked] = React.useState(false);

  React.useEffect(() => {
    console.log('hooks work');
  }, []);

  return (
    <ShowroomCheckbox
      label="I'm a checkbox exposed from the remote-react app"
      checked={isChecked}
      onClick={() => setIsChecked(!isChecked)}
    />
  );
}
