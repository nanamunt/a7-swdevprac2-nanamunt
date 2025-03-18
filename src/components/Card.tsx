"use client"
import Image from 'next/image';
import InteractiveCard from './InteractiveCard';
import { Rating } from '@mui/material';

export default function Card({
  venueName,
  imgSrc,
  onUpdateList,
}: {
  venueName: string;
  imgSrc: string;
  onUpdateList?: (venueName: string, rating: number) => void; // Optional
}) {
  function ratingChangeHandler(newValue: number | null) {
    console.log("New rating received:", newValue);
    if (newValue !== null) {
      console.log(`Calling onUpdateList for ${venueName} with rating: ${newValue}`);
      onUpdateList?.(venueName, newValue);
    } else {
      console.log(`Calling onUpdateList for ${venueName} with rating: 0`);
      onUpdateList?.(venueName, 0);
    }
  }

  return (
    <InteractiveCard>
      <div className='w-[250px] h-[300px] p-[5px]'>
        <div className="w-full h-[70%] relative">
          <Image
            src={imgSrc}
            alt="Card Picture"
            fill={true}
            priority
            style={{ objectFit: 'cover' }}
            className="rounded-[5px] w-auto h-auto"
          />
        </div>
        <div className="h-[30%] p-[10px] space-y-2">
          <h4 className="font-semibold text-[16px] text-[#055D70]">{venueName}</h4>
          <Rating
            onChange={(event, newValue) => {
              ratingChangeHandler(newValue);
            }}
            onClick={(event) => {
              event.stopPropagation();
            }}
            name={`${venueName} Rating`}
            precision={1}
            id={`${venueName} Rating`}
            data-testid={`${venueName} Rating`}
          />
        </div>
      </div>
    </InteractiveCard>
  );
}
