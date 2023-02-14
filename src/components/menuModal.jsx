import { useState, useEffect, useParams } from 'react'
import { getWeather } from '../helperFunctions/getWeather.js'
import FavoriteInput from './favoriteInput.jsx';


export default function MenuModal() {
    let [favorite, setFavorite] = useState("");

    
    return(
<div className='flex flex-col bg-gray-900 opacity-75 min-h-screen z-10'>
    <FavoriteInput setFavorite={setFavorite} favorite={favorite}/>
</div>
    )
}