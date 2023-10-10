import React from 'react';

const MapComponent: React.FC = () => {
  return (
    <div className='w-full h-full shadow-mainShadow'>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113294.53700769524!2d152.9898905481655!3d-27.455113157654615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2f175bd5bb6e5edf%3A0x708396005c445db4!2sMaiker%20Constructions%20%7C%20Renovation%20Builder%20Brisbane!5e0!3m2!1sen!2sph!4v1696891057856!5m2!1sen!2sph"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default MapComponent;