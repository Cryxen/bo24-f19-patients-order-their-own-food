"use client"

import React, { useEffect, useState } from 'react';
import '../styles/minidiet.scss';
import { Room } from '@/features/rooms/types';

const DietInfoContainer = () => {
  const [rooms, setRooms] = useState<Room[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true)
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch('/api/rooms');

        if (!response.ok) {
          throw new Error('Programmet feilet ved henting av rom');
        }

        const roomsData = await response.json();
        console.log('Hentede rom:', roomsData);
        setRooms(roomsData.data);
        setShowLoading(false)
      } catch (error) {
        console.error('Error ved henting a rom:', error);
      }
    };

    fetchRooms();
  }, []);




  const DietInfoComp = ({ dietType, dietName }: { dietType: string; dietName: string | undefined }) => {
    return (

      <article className='Minibox fadeIn'>
        <div className="Topbox">
          <p className='textDiet'>{dietType}</p>
        </div>

        <div className="Bottombox">
          <p className='textDiet'>{dietName}</p>
        </div>
      </article>

    );
  };

  if (showLoading)
    return <div>Laster restriksjoner...</div>
  else if (!Array.isArray(rooms) || rooms.length === 0) {
    return <div>Listen er tom</div>;
  }

  return (
    <div className="main-wrapper fadeIn">
      <div className='displayX'>

        {rooms.map((room, index) => {

          const hasRestrictions =
            (room.allergyRestrictions && room.allergyRestrictions.length > 0) ||
            (room.consistancyRestrictions && room.consistancyRestrictions.length > 0) ||
            (room.dietaryNeeds && room.dietaryNeeds.length > 0) ||
            (room.dietaryRestrictions && room.dietaryRestrictions.length > 0) ||
            (room.intoleranceRestrictions && room.intoleranceRestrictions.length > 0);


          if (!hasRestrictions) {
            return null;
          }

          return (
            <div key={index} className="gridLayout">
              <div className='div1'>
                <h1 className='RomTittel'>Rom {room.roomNumber}</h1>
              </div>
              <div className='div2'>

                {room.dietaryRestrictions.map((restriction, index) => (
                  <DietInfoComp key={index} dietType="Diettrestriksjoner" dietName={restriction.dietaryRestrictionId} />
                ))}

                {room.consistancyRestrictions.map((restriction, index) => (
                  <DietInfoComp key={index} dietType="Konsistensrestriksjoner" dietName={restriction.foodConsistencyRestrictionId} />
                ))}


                {room.allergyRestrictions.map((restriction, index) => (
                  restriction && <DietInfoComp key={index} dietType="Allergier" dietName={restriction.allergyRestricionId} />
                ))}

                {room.intoleranceRestrictions.map((restriction, index) => (
                  <DietInfoComp key={index} dietType="Intoleranser" dietName={restriction.intolleranceRestrictionId} />
                ))}

                {room.dietaryNeeds.map((restriction, index) => (
                  <DietInfoComp key={index} dietType="Andre kostbehov" dietName={restriction.dietaryNeedId} />
                ))}

              </div>
            </div>
          );
        })}
      </div>
    </div>
  );


};

export default DietInfoContainer;
