import React from 'react';

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = '' }) => {
  return (
    <div className={`w-full px-container md:px-container-md lg:px-container-lg xl:px-container-lg ${className}`}>
      {children}
    </div>
  );
};

export default Container;
