import {useContext} from 'react';
import PropContext from '../Context/PropProvider';

const useProps = () => {
  const context = useContext(PropContext);
  if (!context) {
    throw new Error('useProps is called outside of PropContext.Provider');
  }
  return context;
};

export default useProps;
