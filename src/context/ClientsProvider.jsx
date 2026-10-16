import { useCallback, useMemo, useState } from "react";
import { ClientsContext } from "./ClientsContext";
import { initialClients } from "../data/mockData";
import { toIsoDate } from "../utils/format";

const ClientsProvider = ({ children }) => {
    const [clients, setClients] = useState(initialClients);

    const addClient = useCallback((client) => {
        setClients((prev) => [
            ...prev,
            {
                ...client,
                id: Math.max(0, ...prev.map((c) => c.id)) + 1,
                createdAt: toIsoDate(new Date()),
            },
        ]);
    }, []);

    const value = useMemo(() => ({ clients, addClient }), [clients, addClient]);

    return <ClientsContext.Provider value={value}>{children}</ClientsContext.Provider>;
};

export default ClientsProvider;
