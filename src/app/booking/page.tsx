'use client'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { addBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../../interface";
import TextField from "@mui/material/TextField";
import DateReserve from "@/components/DateReserve";
import dayjs, { Dayjs } from "dayjs";

export default function Booking() {
    const dispatch = useDispatch<AppDispatch>()
    const [nameLastname, setNameLastname] = useState("")
    const [tel, setTel] = useState("")
    const [venue, setVenue] = useState("")
    const [bookDate, setBookDate] = useState<Dayjs | null>(null)

    const handleBooking = () => {
        if (!nameLastname || !tel || !venue || !bookDate) return

        const bookingItem: BookingItem = {
            nameLastname,
            tel,
            venue,
            bookDate: dayjs(bookDate).format("YYYY-MM-DD"),
        }
        dispatch(addBooking(bookingItem))
        alert("Booking Successful!")
    }

    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <div className="text-xl">New Booking</div>
            <div className="w-fit flex flex-col gap-4">
                <TextField
                    variant="standard"
                    name="Name-Lastname"
                    label="Name-Lastname"
                    value={nameLastname}
                    onChange={(e) => setNameLastname(e.target.value)}
                />
                <TextField
                    variant="standard"
                    name="Contact-Number"
                    label="Contact-Number"
                    value={tel}
                    onChange={(e) => setTel(e.target.value)}
                />
                <DateReserve
                    onDateChange={(date: Dayjs) => setBookDate(date)}
                    onVenueChange={(venue: string) => setVenue(venue)}
                />
            </div>
            <button
                name="Book Venue"
                onClick={handleBooking}
                className="block rounded-md bg-sky-600 hover:bg-indigo-600 px-3 py-2 text-white shadow-sm"
            >
                Book Venue
            </button>
        </main>
    );
}