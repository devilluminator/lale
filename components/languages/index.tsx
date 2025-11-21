"use client"
import React from 'react'
import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { GlobeIcon } from 'lucide-react'
function SelectLanguage() {
  const [selectedLanguage, setSelectedLanguage] = useState("FA")

  return (

    <DropdownMenu>
      <DropdownMenuTrigger className='flex flex-row-reverse justify-center items-center gap-1 p-1.5 hover:bg-custom-border-gray/20 rounded-md min-w-[60px] cursor-pointer'>{selectedLanguage === "FA" ? " فارسی " : " English "} <GlobeIcon /> </DropdownMenuTrigger>
      <DropdownMenuContent className='ml-3 lg:ml-0 text-right'>
        <DropdownMenuLabel>انتخاب زبان</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem className='flex justify-end' onSelect={() => setSelectedLanguage("EN")}>
          انگلیسی - EN
        </DropdownMenuItem>
        <DropdownMenuItem className='flex justify-end' onSelect={() => setSelectedLanguage("FA")}>
          فارسی - FA
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>

  )
}

export default SelectLanguage