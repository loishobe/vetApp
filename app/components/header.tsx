"use client"
import Image from 'next/image'
import { SearchIcon } from "./icons/search"
import { ArrowDownIcon } from "./icons/arrow-down"
import { NotificationIcon } from './icons/notification'
import { SettingsDarkIcon } from './icons/settings-dark'
import { SignOutIcon } from './icons/sign-out'
import profile from "../../public/assets/profile.png"

export default function Header() {
  return (
    <div className="main-header h-32 border-b border-gray1 px-5 flex items-center gap-5">
      <div className="w-5/6 relative">
        <input type="text" placeholder="Search" className="text-gray1 w-full search-input" />
        <div className="absolute search-input-icon">
          <SearchIcon/>
        </div>
      </div>
      <div className="w-2/6 flex justify-end">
        <div className="flex gap-3">
          <div className="flex gap-3 items-center">
            <Image
              src={profile}
              alt="Picture of the logo"
            />
            <button className="text-black1 flex items-center gap-2">
              Jane Dee
              <ArrowDownIcon/>
            </button>
          </div>
          <div className="flex gap-2 items-center">
            <button className="head-icon-button flex items-center justify-center">
              <NotificationIcon/>
            </button>
            <button className="head-icon-button flex items-center justify-center">
              <SettingsDarkIcon/>
            </button>
            <button className="head-icon-button flex items-center justify-center">
              <SignOutIcon/>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
