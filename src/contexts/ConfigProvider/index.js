import React, { createContext, useContext, useState } from "react";

const configContext = createContext();

export function useConfig() {
    return useContext(configContext);
}

export default function ConfigProvider({ children }) {
    const [config, setConfig] = useState({
        modal: {
            open: false,
            data: null
        }
    })

    const toggleModal = (open, data = null) => {
        setConfig({ ...config, modal: { open, data } })
    }

    return (
        <configContext.Provider value={{ modal: config.modal, toggleModal }}>
            {children}
        </configContext.Provider>
    );
}

