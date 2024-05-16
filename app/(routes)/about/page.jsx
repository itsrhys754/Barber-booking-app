"use client"
import React, { useEffect, useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BookingHistoryList from './_component/BookingHistoryList';
import GlobalApi from '@/app/_services/GlobalApi';
import { useSession } from 'next-auth/react';


function MyBooking() {
    const { data } = useSession();
    const [bookingHistory, setBookingHistory] = useState([]);

    useEffect(() => {
        if (data) {
            GetUserBookingHistory();
        }
    }, [data]);

    /**
     * Used to Get User Booking History
     */
    const GetUserBookingHistory = () => {
        if (data && data.user && data.user.email) {
            GlobalApi.GetUserBookingHistory(data.user.email).then(resp => {
                console.log(resp);
                setBookingHistory(resp.bookings);
            }).catch(error => {
                console.error('Error fetching booking history:', error);
            });
        }
    };

    const filterData = (type) => {
        return bookingHistory.filter(item => 
            type === 'booked'
                ? new Date(item.date) >= new Date()
                : new Date(item.date) <= new Date()
        );
    };


    return (
        <div className='my-10 mx-5 md:mx-36'>
            <h2 className='font-bold text-[20px] my-2'>About us</h2>
            <p>Coming soon!</p>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2371.9061496487807!2d-2.1717838237066864!3d53.52373296143662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487bb1dffffb7d55%3A0x7028a25c8b3c86!2sThe%20Blackwood%20Barber%20Co.!5e0!3m2!1sen!2suk!4v1715893245247!5m2!1sen!2suk" 
                width="1000" 
                height="450"
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    );
    
}

export default MyBooking;
