import { createContext, useContext, useState } from "react";

const PathState = createContext();
const init = "/"

export const usePathState = () => {
    return useContext(PathState);
}

export const PathStateProvider = ({ children }) => {
    const [path, setPath] = useState(init);
    
    const changePath = (path) => {
        setPath(path)
    }

    return (
        <PathState.Provider value={{ path, changePath }}>
            {children}
        </PathState.Provider>
    )
}