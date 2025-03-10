import {
    createLocalizedPathnamesNavigation
} from 'next-intl/navigation'

export const defaultLocale = 'en'

export const locales = ['en', 'es','cs']

export const localePrefix =
    process.env.NEXT_PUBLIC_LOCALE_PREFIX === 'never' ? 'never' : 'as-needed'

export const pathnames = {
    '/': '/',

}

export const { Link, redirect, usePathname, useRouter } =
    createLocalizedPathnamesNavigation({
        locales,
        localePrefix,
        pathnames
    })
