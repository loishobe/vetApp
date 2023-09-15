"use client"
import { useState } from "react"
import Image from 'next/image'
import clinicImg from '../../public/assets/clinic.png'
import { MessageDarkIcon } from './icons/message-dark'
import { PhoneDarkIcon } from './icons/phone-dark'
import { AddressDarkIcon } from './icons/address-dark'
import DateTimePicker from 'react-datetime-picker';
import 'react-datetime-picker/dist/DateTimePicker.css';
import 'react-calendar/dist/Calendar.css';
import 'react-clock/dist/Clock.css';

type IAddApp = {
  appointments: any;
  setAppointments: any;
  setShowAddApp: any;
}

type dtPiece = Date | null;

type dtValue = dtPiece | [dtPiece, dtPiece];

const clinics = [
  {
      veterinary_name: "Anika Perry",
      address: "4517 Washington Avenue, Manchester, Kentucky 39495",
      building: "Green Bow Vett",
      contact_number: "+63 0123 123"
  },
  {
      veterinary_name: "Danica Jane",
      address: "4517 Washington Avenue, Manchester, Kentucky 39495",
      building: "Green Bow Vett",
      contact_number: "+63 0123 123"
  },
  {
      veterinary_name: "John Fins",
      address: "4517 Washington Avenue, Manchester, Kentucky 39495",
      building: "Green Bow Vett",
      contact_number: "+63 0123 123"
  },
]

export default function AddApp({
  appointments,
  setAppointments,
  setShowAddApp
}: IAddApp) {
  const [dtValue, setDtValue] = useState<dtValue>(new Date());

  const onSubmit = (e:any) => {
    e.preventDefault();
    let formData = new FormData(e.target);
    let objFormData = Object.fromEntries(formData);

    if(objFormData) {
      
      const vetFinal = clinics.filter((e:any) => e.veterinary_name == objFormData.veterinary_name);
  
      const finalObj = {
        veterinary: vetFinal[0],
        services: objFormData.services,
        pet: {
          pet_name: objFormData.pet_name,
          breed: objFormData.pet_breed,
          age: objFormData.pet_age,
          gender: objFormData.pet_gender,
        },
        owner_name: objFormData.owner_name,
        owner_email: objFormData.owner_email,
        owner_phone: objFormData.owner_phone,
        owner_address: objFormData.owner_address,
        date: objFormData.datetime,
      }


      let appArr = [...appointments];
      appArr.push(finalObj);

      console.log(objFormData)

      /**
       * for utc
       */
      console.log(objFormData.datetime);

      setAppointments(appArr);
      setShowAddApp(false);
    }
  }

  return (
    <form className="p-5 mt-4 pb-10" onSubmit={onSubmit}>
      <p className="font-semibold text-black1 mb-4">Choose a clinic</p>
      <div className="flex gap-5">
        {clinics.map((cl:any, idx:number) => (
          <div className="border border-gray1 p-2 rounded-lg">
            <div className="flex gap-4 items-center mb-4">
              <Image
                src={clinicImg}
                alt="clinic image"
                width={52}
                height={52}
              />
              <div>
                <p className="text-black1 font-bold">{cl.veterinary_name}</p>
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
                  {cl.contact_number}
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
                  {cl.address}
                </p>
              </div>
            </div>

            <div className='flex items-center gap-3'>
              <input type="radio" name="veterinary_name" id={`vet_name_${idx}`} value={cl.veterinary_name} required/>
              <label htmlFor={`vet_name_${idx}`}>Click here</label>
            </div>
          </div>
        ))}
      </div>

      <p className="font-semibold text-black1 mb-4 mt-10">Choose a Service</p>
      <select name="services" className="border border-gray1 px-5 py-2 rounded-lg">
        <option value="Consultation">Consultation</option>
        <option value="Vaccination">Vaccination</option>
      </select>


      <p className="font-semibold text-black1 text-2xl mb-2 mt-10">Pet Info</p>
      <div className="flex w-full gap-10">
        <div className="w-1/4">
          <p className="font-semibold text-black1 mb-4 ">Pet Name</p>
          <input type="text" className="text-gray1 w-full search-input" name="pet_name"/>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-black1 mb-4 ">Pet Breed</p>
          <input type="text" className="text-gray1 w-full search-input" name="pet_breed"/>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-black1 mb-4 ">Pet Age</p>
          <input type="text" className="text-gray1 w-full search-input" name="pet_age"/>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-black1 mb-4 ">Pet Gender</p>
          <select name="pet_gender" className="border border-gray1 px-5 py-2 rounded-lg">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>
      
      
      <p className="font-semibold text-black1 text-2xl mb-2 mt-10">Owner Info</p>
      <div className="flex w-full gap-10">
        <div className="w-1/4">
          <p className="font-semibold text-black1 mb-4 ">Owner Name</p>
          <input type="text" className="text-gray1 w-full search-input" name="owner_name"/>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-black1 mb-4 ">Owner Email</p>
          <input type="email" className="text-gray1 w-full search-input" name="owner_email"/>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-black1 mb-4 ">Owner Phone</p>
          <input type="text" className="text-gray1 w-full search-input" name="owner_phone"/>
        </div>
        <div className="w-1/4">
          <p className="font-semibold text-black1 mb-4 ">Owner Address</p>
          <input type="text" className="text-gray1 w-full search-input" name="owner_address"/>
        </div>
      </div>

      <p className="font-semibold text-black1 mb-2 mt-10">Set Date and Time</p>
      <div>
        <DateTimePicker onChange={setDtValue} value={dtValue} format={"dd.MM.yyyy hh:mm aa"} locale="vi"/>
      </div>


      <div className="flex justify-end mt-12 gap-3">
        <button className="text-black1 border border-gray1 py-3 px-4 rounded-xl" onClick={() => setShowAddApp(false)}>
          Cancel
        </button>
        <button className="text-white bg-orange1 py-3 px-4 rounded-xl" type="submit">
          Add Appointment
        </button>
      </div>
    </form>
  )
}
