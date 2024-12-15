import React, { useEffect } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import EmailCard from "./mail-item";
import { dummyEmails, Email } from "@/types/emailTypes";

export default function MailsListComponent() {
    return (
        <div id='mail-div' className="flex-grow h-[41rem]">
            <ScrollArea id='mail-scroll' className="flex-grow rounded-md border max-h-full h-full z-10">
                < div className="p-4" >
                    {
                        dummyEmails.map((mailItem, index) => (
                            <EmailCard {...mailItem} id={mailItem.id}></EmailCard>
                        ))
                    }
                </div >
            </ScrollArea >
        </div >
    )
}