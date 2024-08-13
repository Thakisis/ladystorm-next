import { getTranslator } from '@/lib'

async function Textblock({ color, section, textDark }) {
    const { t } = await getTranslator('Sections')

    return (

        <div className={`p-8 z-10  mb-3 text-xl font-light  ${textDark ? 'text-black' : 'text-white'} `}>
            {t.rich(section, {
                p: (children) => <p className='mb-4' >{children}</p>,
            })}
        </div>)
}

export default Textblock
