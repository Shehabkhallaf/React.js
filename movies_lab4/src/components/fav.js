import {useSelector} from "react-redux";
import FavCard from "./favCard";

function Favorites(){
    const favSet = useSelector((state) => state.favs);


    return(
        <>
             <div className="row row-cols-4 justify-content-evenly">
                {favSet.map((item) => {
                    return <div className="col m-3" key={item.id}>
                        <FavCard cardDetails={item} />
                    </div>
                })}

            </div>
        </>
    )
}

export default Favorites;