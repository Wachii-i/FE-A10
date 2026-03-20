'use client'
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "@/redux/store";
import { removeBooking } from "@/redux/features/bookSlice";
import { BookingItem } from "../../interface";


export default function BookingList() {
   const bookItems = useSelector((state: RootState) => state.bookSlice.bookItems)
    const dispatch = useDispatch<AppDispatch>()

    return (
        <div className="w-full flex flex-col items-center space-y-4 p-5">
            <div className="text-2xl font-bold">My Booking</div>
            {
                bookItems.length === 0 ? (
                    <div className="text-gray-500">No Venue Booking</div>
                ) : (
                    bookItems.map((item: BookingItem, index: number) => (
                        <div key={index}
                            className="bg-white border border-amber-200 rounded-lg p-4 w-fit min-w-[300px] space-y-1 shadow-sm">
                            <div><span className="font-medium">Name:</span> {item.nameLastname}</div>
                            <div><span className="font-medium">Tel:</span> {item.tel}</div>
                            <div><span className="font-medium">Venue:</span> {item.venue}</div>
                            <div><span className="font-medium">Date:</span> {item.bookDate}</div>
                            <button
                                onClick={() => dispatch(removeBooking(item))}
                                className="mt-2 block rounded-md bg-red-500 hover:bg-red-700 px-3 py-1 text-white shadow-sm"
                            >
                                Cancel Booking
                            </button>
                        </div>
                    ))
                )
            }
        </div>
    )
}