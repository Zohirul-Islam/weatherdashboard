import { FavouriteContext } from "../context";
import { useLocalStorage } from "../components/Hooks";

const FavouriteProvider =({children})=>{
    const [favourites,setFavourites] =useLocalStorage("favourites",[]);

    const addToFavourite =(latitude,longitude,location)=>{
        setFavourites(
            [
            ...favourites,
            {latitude:latitude,longitude:longitude,location:location}
        ]
        )
    }
    const removeFromFav =(location)=>{
        const restFav = favourites.filter((val)=> val.location !== location);
        setFavourites(restFav);
    }

    return <FavouriteContext.Provider value={{favourites,addToFavourite,removeFromFav}}>
        {children}
    </FavouriteContext.Provider>
}
export default FavouriteProvider

