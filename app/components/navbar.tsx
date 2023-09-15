"use client"
import Link from 'next/link';
import { HomeIcon } from './icons/home';
import { TaskListIcon } from './icons/tasklist';
import { MessageIcon } from './icons/message';
import { SmileFaceIcon } from './icons/smile-face';
import { DataAnalyticsIcon } from './icons/data-analytics';
import { SubscriptionIcon } from './icons/subscription';
import { HelpCenterIcon } from './icons/help-center';
import { SettingsIcon } from './icons/settings';

export default function Navbar() {
  return (
    <div className="p-5 mt-10">
      <div className="mb-9">
        <Link href="/" className="flex gap-3 text-white">
          <HomeIcon/>
          Home
        </Link>
      </div>
      <div className="mb-9">
        <Link href="/" className="flex gap-3 text-white">
          <TaskListIcon/>
          Appointments
        </Link>
      </div>
      <div className="mb-9">
        <Link href="/" className="flex gap-3 text-white">
          <MessageIcon/>
          Messages
        </Link>
      </div>
      <div className="mb-9">
        <Link href="/" className="flex gap-3 text-white">
          <SmileFaceIcon/>
          Contacts
        </Link>
      </div>
      <div className="mb-9">
        <Link href="/" className="flex gap-3 text-white">
          <DataAnalyticsIcon/>
          Data Analytics
        </Link>
      </div>
      <div className="mb-9">
        <Link href="/" className="flex gap-3 text-white">
          <SubscriptionIcon/>
          Subscription
        </Link>
      </div>
      <div className="mb-9">
        <Link href="/" className="flex gap-3 text-white">
          <HelpCenterIcon/>
          Help Center
        </Link>
      </div>
      <div className="mb-9">
        <Link href="/" className="flex gap-3 text-white">
          <SettingsIcon/>
          Settings
        </Link>
      </div>
    </div>
  )
}
