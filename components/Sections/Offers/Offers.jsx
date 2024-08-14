import { offersList } from "@/data/Offers"
import OfferCardClient from "./OfferCard/OfferCardClient"
import OfferCard from "./OfferCard"

export async function Offers(props) {
    const offers = offersList.map(offer => <OfferCard key={offer} offer={offer} />)
    return (
        <div className="flex justify-center w-full pt-10 pb-10 mb-20 overflow-x-hidden">
            <div className=" w-full grid text-white grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4 1xl:grid-cols-5 place-items-center gap-10">
                {
                    offers
                }
            </div>
        </div>
    )
}

export default Offers
