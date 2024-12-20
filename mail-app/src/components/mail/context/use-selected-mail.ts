import { useContext } from "react";
import { SelectedEmailContext, SelectedEmailUpdaterContext } from "./selected-email-context";

const useSelectedEmail = () => {
    const context = useContext(SelectedEmailContext);
    if (!context) {
        throw new Error('useSelectedEmail hook should be used within bounds of SelectedEmailProvider');
    }
    return context;
}

const useSetSelectedEmail = () => {
    const context = useContext(SelectedEmailUpdaterContext);
    if (!context) {
        throw new Error('useSelectedEmail hook should be used within bounds of SelectedEmailUpdaterProvider');
    }
    return context.setSelectedEmail;
}

export { useSelectedEmail, useSetSelectedEmail };