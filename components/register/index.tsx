"use client"
import React, { useState } from 'react'
import { User } from "lucide-react"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { Input } from '../ui/input'
import { toast } from "sonner"

function Login() {
  const [phone, setPhone] = useState("")

  const handleSubmit = () => {
    if (!phone.trim()) {
      toast("لطفا شماره همراه را وارد کنید", {
        style: { textAlign: "right", backgroundColor: "red", color: "white" }
      })
      return
    }
    toast(` کد به شماره ${phone} ارسال شد، از اینجا دیگه میره سمت بک اند `, {
      style: { textAlign: "right", backgroundColor: "green", color: "white" }
    })
    // clean the input
    setPhone("")
  }

  return (
    <AlertDialog>
      <AlertDialogTrigger className='hidden lg:flex justify-center items-center gap-1 bg-custom-blue mr-3 px-2 py-2 rounded-md min-w-[140px] text-white cursor-pointer'>
        <User />
        <h3>ورود | ثبت نام </h3>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle className='flex justify-end w-full'>ورود و یا ثبت نام</AlertDialogTitle>
          <AlertDialogDescription className='text-right'>
            لطفا شماره همراه خود را برای دریافت کد ورود وارد نمایید
          </AlertDialogDescription>
          <Input
            placeholder=' شماره همراه '
            className='bg-custom-gray border border-custom-border-gray text-right'
            type='tel'
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSubmit()
            }}
          />
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel className='bg-custom-gray cursor-pointer'>بازگشت</AlertDialogCancel>
          <AlertDialogAction
            className='bg-custom-blue cursor-pointer'
            onClick={handleSubmit}
          >
            دریافت کد
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}

export default Login