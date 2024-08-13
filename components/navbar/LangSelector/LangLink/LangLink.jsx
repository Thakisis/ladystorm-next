
import { Link } from '@/navigation'


function LangElement({ locale, lang, langName }) {
    const checkSelected = locale === lang ? <span className="ml-auto">✓ </span> : <span className="ml-auto opacity-0">✓ </span>
    return (
        <Link href="/" locale={lang}

            className={`px-3 py-3 flex  items-center ${lang === locale && "bg-gray-800"} hover:bg-gray-800 no-underline hover:no-underline transition-colors duration-100`}
        >
            <span className="block  h-[.9rem] aspect-[4/3]  mr-3" style={{ backgroundImage: `url(/${lang}.svg)` }}></span>
            <span className="inline-block ml text-white mr-2" >{langName}</span>
            {checkSelected}
        </Link>

    )
}

export default LangElement
