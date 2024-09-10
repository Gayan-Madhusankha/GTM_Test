import React from 'react';
import TagManager from 'react-gtm-module';

const TrackButtonClick = () => {
  const handleButtonClick = () => {
    const tagManagerArgs = {
      dataLayer: {
        event: 'button_click',
        button_id: 'example_button', 
      },
    };
    TagManager.dataLayer(tagManagerArgs); 
    alert('Button clicked, event sent to GTM!');
  };

  return (
    <button onClick={handleButtonClick} className="btn">
      Click Me
    </button>
  );
};

export default TrackButtonClick;
