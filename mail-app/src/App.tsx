import React from 'react'
import './App.css'
import { Button } from './components/ui/button'
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar"
import MailTitlebar from './components/mail-title-bar'

function App() {

  return (
    <React.Fragment>
      <MailTitlebar></MailTitlebar>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
            <MenubarSeparator></MenubarSeparator>
          </MenubarMenu>
        </Menubar>
      </div>
    </React.Fragment >
  )
}

export default App
