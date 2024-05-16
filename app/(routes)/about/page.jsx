"use client"
import React, { useEffect, useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import BookingHistoryList from './_component/BookingHistoryList'
import GlobalApi from '@/app/_services/GlobalApi'
import { useSession } from 'next-auth/react'
import moment from 'moment'

function MyBooking() {

    const {data}=useSession();
    const [bookingHistory,setBookingHistory]=useState([]);
    useEffect(()=>{
        data&&GetUserBookingHistory();
    },[data])

    /**
     * Used to Get User Booking History
     */
    const GetUserBookingHistory=()=>{
        GlobalApi.GetUserBookingHistory(data.user.email).then(resp=>{
            console.log(resp);
            setBookingHistory(resp.bookings);
        })
    }

    const filterData=(type)=>{
        const result=bookingHistory.filter(item=>
            type=='booked'?
            new Date(item.date)>=new Date()
            :new Date(item.date)<=new Date());

            return result;
    }

    return (
        <div className='my-10 mx-5 md:mx-36'>
           <h2 className='font-bold text-[20px] my-2'>About us</h2>
           <p>Coming soon!</p>
           

        </div>
    )
}

export default MyBooking