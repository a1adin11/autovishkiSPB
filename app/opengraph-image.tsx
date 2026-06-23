import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Аренда автовышки в Санкт-Петербурге и Ленинградской области'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          backgroundColor: '#1a1a1a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '60px 80px',
          position: 'relative',
          overflow: 'hidden',
          fontFamily: 'sans-serif',
        }}
      >
        {/* Синее свечение справа сверху */}
        <div
          style={{
            position: 'absolute',
            right: -100,
            top: -100,
            width: 560,
            height: 560,
            borderRadius: '50%',
            backgroundImage:
              'radial-gradient(circle, rgba(0,136,255,0.25) 0%, transparent 70%)',
          }}
        />

        {/* Жёлтое свечение слева снизу */}
        <div
          style={{
            position: 'absolute',
            left: -60,
            bottom: -60,
            width: 360,
            height: 360,
            borderRadius: '50%',
            backgroundImage:
              'radial-gradient(circle, rgba(255,204,0,0.12) 0%, transparent 70%)',
          }}
        />

        {/* Шапка — синяя черта + регион */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 48,
              height: 4,
              backgroundColor: '#0088ff',
              borderRadius: 2,
            }}
          />
          <span
            style={{
              color: '#0088ff',
              fontSize: 18,
              fontWeight: 600,
              letterSpacing: 3,
              textTransform: 'uppercase',
            }}
          >
            Санкт-Петербург и Ленинградская область
          </span>
        </div>

        {/* Главный заголовок + чипы */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>
          <div
            style={{
              fontSize: 88,
              fontWeight: 700,
              color: '#ffffff',
              lineHeight: 1.0,
              letterSpacing: -3,
            }}
          >
            Аренда
            <br />
            автовышки
          </div>

          <div style={{ display: 'flex', gap: 12 }}>
            <div
              style={{
                backgroundColor: '#FFCC00',
                color: '#1a1a1a',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 22,
                paddingRight: 22,
                borderRadius: 100,
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              Высота от 9 до 75 м
            </div>
            <div
              style={{
                backgroundColor: '#FFCC00',
                color: '#1a1a1a',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 22,
                paddingRight: 22,
                borderRadius: 100,
                fontSize: 20,
                fontWeight: 700,
              }}
            >
              Работаем 24/7
            </div>
            <div
              style={{
                backgroundColor: 'rgba(255,255,255,0.1)',
                color: '#ffffff',
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 22,
                paddingRight: 22,
                borderRadius: 100,
                fontSize: 20,
                fontWeight: 600,
              }}
            >
              С оператором
            </div>
          </div>
        </div>

        {/* Подвал — телефон + домен */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
          }}
        >
          <div
            style={{
              color: '#ffffff',
              fontSize: 42,
              fontWeight: 700,
              letterSpacing: -0.5,
            }}
          >
            +7 (921) 955-78-08
          </div>
          <div
            style={{
              color: '#555555',
              fontSize: 20,
            }}
          >
            автовышки-спб.online
          </div>
        </div>
      </div>
    ),
    { ...size },
  )
}
