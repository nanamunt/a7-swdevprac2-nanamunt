import DateReserve from "@/components/DateReserve";
import { Select, MenuItem, TextField } from "@mui/material";

export default function BookingPage() {
    return (
    <main>
        <h1 className='text-3xl font-bold text-center mt-10 mb-5'>Venue Booking</h1>
        
        <form className="flex flex-col max-w-md mx-auto space-y-5 p-5">  
            <TextField variant="standard" name="Name-Lastname" label="Name-Lastname" placeholder="Enter your name"></TextField>
            <TextField variant="standard" name="Contact-Number" label="Contact-Number" placeholder="Enter contact number"></TextField>
            <Select variant="standard" id="venue" className="h-12">
                    <MenuItem value="Bloom">The Bloom Pavilion</MenuItem>
                    <MenuItem value="Spark">Spark Space</MenuItem>
                    <MenuItem value="GrandTable">The Grand Table</MenuItem>
            </Select>

            <DateReserve />

            <button name="Book Venue" type="submit" className="rounded bg-[#055D70] text-white font-medium h-14 hover:bg-[#277381]">Book Venue</button>
        </form>

    </main>
    );
  }