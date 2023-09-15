"use client"
import { useEffect, useState } from "react"
import Image from 'next/image'
import logo from '../public/assets/Logo.png'
import Navbar from './components/navbar'
import Header from './components/header'
import Sidebar from './components/sidebar'
import AddApp from "./components/addapp"
import EditApp from "./components/editapp"
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'

type CalendarAppointment = {
  id: string;
  title: string;
  date: Date | null;
}

export default function Home() {
  const [appointments, setAppointments] = useState([
    {
      veterinary: {
        veterinary_name: "Anika Perry",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123"
      },
      services: "Vaccination",
      pet: {
        pet_name: "Brownie",
        breed: "Dog",
        age: "1",
        gender: "Female",
      },
      owner_name: "Chrissie Lee",
      owner_email: "cl@gmail.com",
      owner_phone: "+01 234 567 8910",
      owner_address: "1st Avenue, Golden Street, Springville Village, San Diego, California",
      date: "2023-09-15 12:00:00",
    },
    {
      veterinary: {
        veterinary_name: "Danica Jane",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123"
      },
      services: "Consultation",
      pet: {
        pet_name: "Blackie",
        breed: "Dog",
        age: "3",
        gender: "Male",
      },
      owner_name: "John Lee",
      owner_email: "jl@gmail.com",
      owner_phone: "+01 234 567 8910",
      owner_address: "1st Avenue, Golden Street, Springville Village, San Diego, California",
      date: "2023-09-15 08:00:00",
    },
    {
      veterinary: {
        veterinary_name: "John Fins",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123"
      },
      services: "Consultation",
      pet: {
        pet_name: "Storm",
        breed: "Cat",
        age: "1",
        gender: "Female",
      },
      owner_name: "John Smith",
      owner_email: "js@gmail.com",
      owner_phone: "+01 234 567 8910",
      owner_address: "1st Avenue, Golden Street, Springville Village, San Diego, California",
      date: "2023-09-15 10:00:00",
    },
    {
      veterinary: {
        veterinary_name: "John Fins",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123"
      },
      services: "Vaccination",
      pet: {
        pet_name: "Sunny",
        breed: "Cat",
        age: "5",
        gender: "Female",
      },
      owner_name: "Small Lee",
      owner_email: "sl@gmail.com",
      owner_phone: "+01 234 567 8910",
      owner_address: "1st Avenue, Golden Street, Springville Village, San Diego, California",
      date: "2023-09-17 18:00:00",
    },
    {
      veterinary: {
        veterinary_name: "Danica Jane",
        address: "4517 Washington Avenue, Manchester, Kentucky 39495",
        building: "Green Bow Vett",
        contact_number: "+63 0123 123"
      },
      services: "Consultation",
      pet: {
        pet_name: "Summer",
        breed: "Cat",
        age: "7",
        gender: "Male",
      },
      owner_name: "Stephen Lee",
      owner_email: "sl2@gmail.com",
      owner_phone: "+01 234 567 8910",
      owner_address: "1st Avenue, Golden Street, Springville Village, San Diego, California",
      date: "2023-09-16 14:00:00",
    },
  ])
  const [eventsCalendar, setEventsCalendar] = useState<any>();
  const [showSidebar, setShowSidebar] = useState<boolean>(false);
  const [selectedEventCal, setSelectedEventCal] = useState<CalendarAppointment>();
  const [selectedApp, setSelectedApp] = useState<any>();
  const [selectedAppIndex, setSelectedAppIndex] = useState<number>();
  const [showAddApp, setShowAddApp] = useState<boolean>(false);
  const [showEditApp, setShowEditApp] = useState<boolean>(false);


  useEffect(() => {
    if(appointments) {
      let eveArr = new Array();
      appointments.map((app:any, idx:number) => {
        let obj = {
          id: idx,
          title: app.services,
          date: app.date,
        }
        eveArr.push(obj);
      });
      setEventsCalendar(eveArr);
    }
  }, [appointments]);

  useEffect(() => {
    if(selectedEventCal) {
      let idx = parseInt(selectedEventCal?.id);
      setSelectedAppIndex(idx);
      setSelectedApp(appointments[idx])
    }
  }, [selectedEventCal]);


  console.log(appointments)

  return (
    <main className="flex min-h-screen">
      <div className="main-nav z-10 w-56 min-h-screen relative">
        <div className="nav-logo-div flex items-center justify-center h-32 gap-3 py-10 border-b border-blue1">
          <Image
            src={logo}
            alt="Picture of the logo"
          />
          <p className="font-semibold text-orange1">LOREM</p>
        </div>
        <Navbar/>

        <div className="navbar-footer-div text-center border-t border-blue1 py-8">
          <Image
            src={logo}
            alt="Picture of the logo"
            width={20}
            height={20}
            className="mx-auto block mb-3"
          />
          <p className="text-xs text-gray3">© Lorem 2023</p>
        </div>
      </div>
      <div className="main-content min-h-screen">
        <Header/>


        {showAddApp ? (
          <AddApp
            appointments={appointments}
            setAppointments={setAppointments}
            setShowAddApp={setShowAddApp}
          />
        ) : showEditApp ? (
          <EditApp
            appointments={appointments}
            setAppointments={setAppointments}
            setShowEditApp={setShowEditApp}
            selectedApp={selectedApp}
            selectedAppIndex={selectedAppIndex}
          />
        ) : (
          <div className="content-div flex">
            <div className={`content-left-div min-h-screen ${showSidebar ? 'w-3/4' : "w-full"}`}>
              <div className="upper-content-div pt-2 pb-3 px-6 flex justify-between items-center">
                <div>
                  <p className="text-gray2 ">Appointments</p>
                </div>
                <div>
                  <button className="text-white bg-orange1 py-2 px-4 rounded-xl" onClick={() => setShowAddApp(true)}>
                    New Appointment
                  </button>
                </div>
              </div>

              <div className="px-6 ">
                <FullCalendar
                  plugins={[ timeGridPlugin, dayGridPlugin ]}
                  initialView="timeGridDay"
                  headerToolbar={{
                    left: "title prev,next",
                    right: "dayGridMonth,timeGridWeek,timeGridDay"
                  }}
                  events={eventsCalendar}
                  eventClick={
                    function(arg){
                      setShowSidebar(true);
                      setSelectedEventCal({
                        id: arg.event.id,
                        title: arg.event.title,
                        date: arg.event.start,
                      })
                    }
                  }
                />
              </div>
            </div>

            {showSidebar && (
              <div className="content-right-div w-1/4 min-h-screen border-l border-gray1">
                <Sidebar selectedApp={selectedApp} setShowEditApp={setShowEditApp}/>
              </div>
            )}

          </div>
        )}

        



      </div>
    </main>
  )
}
