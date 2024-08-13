import LangWrapper from './LangWrapper'
import { locales } from '@/navigation'
import LangLink from './LangLink'
import { getTranslator } from '@/lib'

async function LangSelector({ locale }) {
    const { t } = await getTranslator("Navigation")
    const langs = locales.map((lang) => <LangLink key={lang} locale={locale} lang={lang} langName={t(lang)} />)

    return (

        <LangWrapper locale={locale}>

            {langs}

        </LangWrapper>

    )
}

export default LangSelector



