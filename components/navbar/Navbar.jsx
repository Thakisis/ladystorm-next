import Logo from "./Logo"
import { menus } from "@/data/Menus"
import { getTranslator } from "@/lib"
import LangSelector from "./LangSelector"
import { Link } from "@/navigation"
async function Navbar(props) {
    const { locale, t } = await getTranslator("Navigation")
    const menulist = menus.map(item => {
        return <Link href={`/${item}`} key={item}>{t(item)}</Link>
    })
    return (
        <div className="flex  absolute w-full justify-between px-10 py-5 b  items-center">
            <Logo />
            <div className="flex gap-8 items-center">
                <div className="flex gap-6 font-extralight text-[1.2rem]">{menulist}</div>
                <LangSelector locale={locale} />
            </div>
        </div>
    )
}

export default Navbar
