import React, {useState, createContext} from 'react';
import {NavigationStatus} from '../enums/navigation-status.enum';

export const NavigationContext = createContext();

export const NavigationContextProvider = ({children}) => {
  const [navigationStatus, setNavigationStatus] = useState(
    NavigationStatus.Onboarding,
  );

  const onNavigationStausChange = status => {
    setNavigationStatus(status);
  };

  return (
    <NavigationContext.Provider
      value={{
        navigationStatus: navigationStatus,
        onNavigationStausChange,
      }}>
      {children}
    </NavigationContext.Provider>
  );
};

