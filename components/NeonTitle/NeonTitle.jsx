import { NeonClassName } from '@/components/fonts'
import { getTranslator } from '@/lib'
async function NeonTitle({ section, textDark, color, colorSpan }) {
    const { t } = await getTranslator('Sections')
    const styleBlink = colorSpan ? { "--neon-color": colorSpan } : {}
    return (
        <h2 className={`flex  p-4 text-wrap  text-6xl lg:text-8xl ${NeonClassName} neon mb-3 ${textDark ? 'text-black' : 'text-white'}`} style={{ "--color-neon": color }}>

            {t.rich(`title-${section}`, {
                span: (children) => < span className='animate-Blink neon mx-3' style={{ "--color-neon": colorSpan }}> {children}</span>,
            })}
        </h2>

    )

}

export default NeonTitle

