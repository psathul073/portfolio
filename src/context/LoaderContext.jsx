import { createContext, useState, useContext } from 'react';
import Loader from '../components/Loader';
const LoaderContext = createContext();

export const LoaderProvider = ({ children }) => {

    const [loading, setLoading] = useState(false);

    return (
        <LoaderContext.Provider value={{ loading, setLoading }}>
            {loading ? <div className='loader-container'> <Loader /> </div> : children}
        </LoaderContext.Provider>
    );
};

export const useLoader = () => useContext(LoaderContext);