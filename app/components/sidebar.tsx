"use client"
import Image from 'next/image'
import userImg from '../../public/assets/user-img.png'
import clinicImg from '../../public/assets/clinic.png'
import dogImg from '../../public/assets/dog.png'
import { MoreDotsIcon } from './icons/more-dots'
import { MessageDarkIcon } from './icons/message-dark'
import { PhoneDarkIcon } from './icons/phone-dark'
import { AddressDarkIcon } from './icons/address-dark'
import { DogDarkIcon } from './icons/dog-dark'
import { GenderDarkIcon } from './icons/gender-dark'
import { CrossDarkIcon } from './icons/cross-dark'
import { CalendarDarkIcon } from './icons/calendar-dark'

type ISidebar = {
  selectedApp: any;
  setShowEditApp: any;
}

export default function Sidebar({
  selectedApp,
  setShowEditApp
}: ISidebar) {
  return (
    <div className="">
      <div className="border-b border-gray1 px-7 py-5 flex justify-between items-center">
        <div className="flex gap-4 items-center w-11/12 ">
          <Image
            src={userImg}
            alt="user image"
            width={80}
            height={80}
          />
          <div>
            <p className="text-black1 font-bold text-2xl">{selectedApp?.owner_name}</p>
            <p className="text-gray2 ">Client</p>
          </div>
        </div>
        <div className="w-1/12">
          <button>
            <MoreDotsIcon/>
          </button>
        </div>
      </div>

      <div className="border-b border-gray1 px-7 py-5">
        <p className="font-semibold text-sm text-gray2 mb-4">CONTACT INFORMATION</p>
        <div className="flex items-center mb-3">
          <div className="flex gap-2 items-center w-2/6">
            <MessageDarkIcon/>
            <p className="text-gray2 ">
              Email
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              {selectedApp?.owner_email}
            </p>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex gap-2 items-center w-2/6">
            <PhoneDarkIcon/>
            <p className="text-gray2 ">
              Phone
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              {selectedApp?.owner_phone}
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-2 w-2/6">
            <AddressDarkIcon/>
            <p className="text-gray2 ">
              Address
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              {selectedApp?.owner_address}
            </p>
          </div>
        </div>
      </div>


      <div className="border-b border-gray1 px-7 py-5">
        <p className="font-semibold text-sm text-gray2 mb-4">CLINIC DETAILS</p>

        <div className="flex gap-4 items-center mb-4">
          <Image
            src={clinicImg}
            alt="clinic image"
            width={52}
            height={52}
          />
          <div>
            <p className="text-black1 font-bold">{selectedApp?.veterinary?.veterinary_name}</p>
            <p className="text-gray2 ">Los Angeles</p>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex gap-2 items-center w-2/6">
            <MessageDarkIcon/>
            <p className="text-gray2 ">
              Email
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              branch1@gmail.com
            </p>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex gap-2 items-center w-2/6">
            <PhoneDarkIcon/>
            <p className="text-gray2 ">
              Phone
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              {selectedApp?.veterinary?.contact_number}
            </p>
          </div>
        </div>

        <div className="flex">
          <div className="flex gap-2 w-2/6">
            <AddressDarkIcon/>
            <p className="text-gray2 ">
              Address
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              {selectedApp?.veterinary?.address}
            </p>
          </div>
        </div>
      </div>


      <div className="border-b border-gray1 px-7 py-5">
        <p className="font-semibold text-sm text-gray2 mb-4">PET DETAILS</p>

        <div className="flex gap-4 items-center mb-4">
          <Image
            src={dogImg}
            alt="dog image"
            width={52}
            height={52}
          />
          <div>
            <p className="text-black1 font-bold">{selectedApp?.pet?.pet_name}</p>
            <p className="text-gray2 ">Dog</p>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex gap-2 items-center w-2/6">
            <DogDarkIcon/>
            <p className="text-gray2 ">
              Breed
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              {selectedApp?.pet?.breed}
            </p>
          </div>
        </div>

        <div className="flex items-center mb-3">
          <div className="flex gap-2 items-center w-2/6">
            <GenderDarkIcon/>
            <p className="text-gray2 ">
              Sex
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              {selectedApp?.pet?.gender}
            </p>
          </div>
        </div>

        <div className="flex mb-3">
          <div className="flex gap-2 w-2/6">
            <CrossDarkIcon/>
            <p className="text-gray2 ">
              Age
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              {selectedApp?.pet?.age} months
            </p>
          </div>
        </div>

        <div className="flex items-center">
          <div className="flex gap-2 items-center w-2/6">
            <CalendarDarkIcon/>
            <p className="text-gray2 ">
              Birthday
            </p>
          </div>
          <div className="flex w-4/6">
            <p className="text-black1">
              January 12, 2023
            </p>
          </div>
        </div>
      </div>


      <div className="border-b border-gray1 px-7 py-5">
        <button className="text-white bg-orange1 py-3 px-4 rounded-xl w-full" onClick={() => setShowEditApp(true)}>
          Reschedule Appointment
        </button>
      </div>

    </div>
  )
}
