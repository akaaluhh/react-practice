import React from "react";
import { useSelectedEmail } from "./context/use-selected-mail";

export default function MailsViewComponent() {
    const { selectedEmail } = useSelectedEmail();

    function defaultView() {
        return (<div className="h-full flex">

            <div className="m-auto">Nothing is selected</div>
        </div>)
    }

    return (
        <div className="flex-1 flex-grow h-full">
            {selectedEmail ? selectedEmail.subject : defaultView()}
        </div>
    )
}