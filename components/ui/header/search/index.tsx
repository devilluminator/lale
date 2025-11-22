"use client"
import { MicIcon, CameraIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ButtonGroup } from "@/components/ui/button-group"
import { Input } from "@/components/ui/input"
import React, { useState, useEffect } from "react"

export function Search() {
  const [isMobile, setIsMobile] = useState(false)
  const [inputValue, setInputValue] = useState("")

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768) // md breakpoint
    }

    checkIsMobile()
    window.addEventListener('resize', checkIsMobile)

    return () => {
      window.removeEventListener('resize', checkIsMobile)
    }
  }, [])

  return (
    <ButtonGroup className="relative bg-custom-gray border border-custom-border-gray rounded-full w-[390px] md:w-[50vw]">
      <Button variant="outline" aria-label="Search" className="bg-transparent hover:bg-transparent shadow-none border-none rounded-full h-[46px] hover:scale-105 transition-all cursor-pointer">
        <CameraIcon className="size-6" />
      </Button>
      <Button variant="outline" aria-label="Search" className="bg-transparent hover:bg-transparent shadow-none -ml-3 border-none h-[46px] hover:scale-105 transition-all cursor-pointer">
        <MicIcon className="size-6" />
      </Button>
      <div className="relative flex-1">
        <Input
          placeholder={isMobile ? "" : "سرچ محصول، برند یا خدمات"}
          className="bg-transparent border-none active:border-none rounded-r-full outline-0 ring-0 active:ring-0 w-full h-[46px] text-right"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        {isMobile && !inputValue && (
          <div className="left-0 text-sm absolute inset-y-0 flex justify-end items-center px-4 w-full text-gray-400 text-right pointer-events-none">
            <span className="font-bold text-black">تک استور</span> <span className="ml-1">جستجو در</span>
          </div>
        )}
      </div>
    </ButtonGroup>
  )
}