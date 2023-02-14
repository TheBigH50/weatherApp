import { useState, useEffect, useParams } from 'react'
import { getWeather } from '../helperFunctions/getWeather.js'
import FavoriteInput from './favoriteInput.jsx';


export default function MenuModal() {
    let [favorite, setFavorite] = useState("");

    
    return(
<div className='flex flex-col bg-gray-900 min-h-screen z-10 fixed w-screen h-screen touch-none'>
    <FavoriteInput setFavorite={setFavorite} favorite={favorite}/>
</div>
    )
}