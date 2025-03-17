import TopMenuItem from './TopMenuItem'
import Image from 'next/image'

export default function TopMenu(){
    return(
        <div className="bg-white shadow-sm">
            {/* <div className="max-w-6xl w-full mx-auto px-4"> */}
                <div className="h-14 flex flex-row-reverse ">
                    <div className="px-1 h-full flex items-center justify-center">
                        <Image src="/img/logo.png"
                            alt="Card Picture"
                            width="100"
                            height="100"
                            className="h-5/6 w-auto rounded-lg"
                        />
                    </div>
                    <TopMenuItem menuName="Booking" link="/booking"/>
                </div>
            {/* </div> */}
        </div>
    )
}