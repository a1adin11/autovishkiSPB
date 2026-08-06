import { ImageResponse } from 'next/og'
import { readFileSync } from 'fs'
import { join } from 'path'

export const dynamic = 'force-static'
export const alt = 'Аренда автовышки в Санкт-Петербурге и Ленинградской области'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  const skyData = readFileSync(join(process.cwd(), 'public/pictures/sky.png'))
  const skySrc = `data:image/png;base64,${skyData.toString('base64')}`

  const basketData = readFileSync(join(process.cwd(), 'public/pictures/Синяя корзина.png'))
  const basketSrc = `data:image/png;base64,${basketData.toString('base64')}`

  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Sky background */}
        <img
          src={skySrc}
          style={{ position: 'absolute', top: 0, left: 0, width: 1200, height: 630, objectFit: 'cover' }}
        />

        {/* Cherry picker — right side, partially cropped like on the site */}
        <img
          src={basketSrc}
          style={{ position: 'absolute', right: -80, top: -140, width: 560, height: 840 }}
        />

        {/* Gradient overlay for text readability */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 750,
            height: 630,
            display: 'flex',
            backgroundImage: 'linear-gradient(to right, rgba(0,15,40,0.72) 0%, transparent 100%)',
          }}
        />

        {/* Text layer */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 1200,
            height: 630,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            padding: '56px 80px',
          }}
        >
          {/* Region tag */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
            <div style={{ width: 44, height: 4, backgroundColor: '#0A8FBF', borderRadius: 2 }} />
            <span style={{ color: '#ffffff', fontSize: 20, fontWeight: 600, letterSpacing: 2 }}>
              Санкт-Петербург и Ленинградская область
            </span>
          </div>

          {/* Title + chips */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                fontSize: 88,
                fontWeight: 800,
                color: '#ffffff',
                lineHeight: 1.0,
                letterSpacing: -3,
              }}
            >
              <span>Аренда</span>
              <span>автовышки</span>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <div
                style={{
                  backgroundColor: '#0A8FBF',
                  color: '#ffffff',
                  padding: '10px 24px',
                  borderRadius: 100,
                  fontSize: 22,
                  fontWeight: 700,
                }}
              >
                от 9 до 75 м
              </div>
              <div
                style={{
                  backgroundColor: 'rgba(255,255,255,0.18)',
                  color: '#ffffff',
                  padding: '10px 24px',
                  borderRadius: 100,
                  fontSize: 22,
                  fontWeight: 600,
                }}
              >
                Работаем 24/7
              </div>
            </div>
          </div>

          {/* Phone + domain */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <span style={{ color: '#ffffff', fontSize: 46, fontWeight: 700, letterSpacing: -0.5 }}>
              +7 (921) 955-78-08
            </span>
            <span style={{ color: 'rgba(255,255,255,0.75)', fontSize: 22 }}>
              автовышки-спб.online
            </span>
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
