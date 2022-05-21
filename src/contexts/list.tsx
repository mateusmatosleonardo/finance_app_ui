import React from 'react';

export const ListContext = React.createContext({});

const ListProvider = ({children}: any) => {
  return <ListContext.Provider value={{}}>{children}</ListContext.Provider>;
};

export default ListProvider;
