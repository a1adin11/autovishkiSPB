import { useCallback, useSyncExternalStore } from 'react'

const BREAKPOINTS = {
  mobile: '(max-width: 767.98px)',
  tablet: '(min-width: 768px) and (max-width: 1199.98px)',
  desktop: '(min-width: 1200px)',
} as const

/**
 * @desc Значения media-query хука
 *
 * @prop {boolean} isMobile - Активен мобильный брейкпоинт
 * @prop {boolean} isTablet - Активен планшетный брейкпоинт
 * @prop {boolean} isDesktop - Активен десктопный брейкпоинт
 */
interface IMediaQueryValues {
  isMobile: boolean
  isTablet: boolean
  isDesktop: boolean
}

/** Снимок для SSR и первого рендера при гидрации — всегда false, иначе hydration mismatch */
const getServerSnapshot = (): boolean => false

/** Подписка на одну media-query через useSyncExternalStore. Безопасно для SSR */
const useMediaQuery = (query: string): boolean => {
  /** useSyncExternalStore переподписывается при смене ссылки subscribe — нужна стабильная ссылка */
  const subscribe = useCallback(
    (onChange: () => void): (() => void) => {
      const mql = matchMedia(query)
      mql.addEventListener('change', onChange)

      return (): void => mql.removeEventListener('change', onChange)
    },
    [query]
  )

  const getSnapshot = (): boolean => matchMedia(query).matches

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}

/**
 * @desc Хук определения текущего брейкпоинта. Безопасен для SSR: на сервере и при гидрации
 * возвращает все флаги false, после маунта синхронизируется с реальным viewport
 *
 * @returns {IMediaQueryValues} Флаги активных брейкпоинтов
 */
export const useMatchMedia = (): IMediaQueryValues => {
  const isMobile = useMediaQuery(BREAKPOINTS.mobile)
  const isTablet = useMediaQuery(BREAKPOINTS.tablet)
  const isDesktop = useMediaQuery(BREAKPOINTS.desktop)

  return { isMobile, isTablet, isDesktop }
}
