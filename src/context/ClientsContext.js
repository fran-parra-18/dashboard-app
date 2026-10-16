import { createContext, useContext } from "react";

export const ClientsContext = createContext(null);

export const useClients = () => useContext(ClientsContext);
