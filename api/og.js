import { ImageResponse } from '@vercel/og';

export const config = {
  runtime: 'edge',
};

export default async function handler(req) {
  const { searchParams } = new URL(req.url);
  const title = searchParams.get('title') || 'earmarkIQ';
  const subtitle = searchParams.get('subtitle') || '';
  const stat = searchParams.get('stat') || '';

  const fontData = await fetch(
    'https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZOIHTWEBlw.ttf'
  ).then((res) => res.arrayBuffer());

  const fontBold = await fetch(
    'https://fonts.gstatic.com/s/dmsans/v15/rP2Hp2ywxg089UriCZ2NHTWEBlw.ttf'
  ).then((res) => res.arrayBuffer());

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#06080f',
          padding: '60px 80px',
          fontFamily: 'DM Sans',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              background: 'linear-gradient(135deg, #4ECDC4, #44B3AB)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#06080f',
              fontSize: '20px',
              fontWeight: 800,
            }}
          >
            e
          </div>
          <span style={{ color: '#a0a5bc', fontSize: '24px', fontWeight: 500 }}>
            earmarkIQ
          </span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {stat && (
            <div
              style={{
                fontSize: '72px',
                fontWeight: 800,
                color: '#4ECDC4',
                lineHeight: 1,
              }}
            >
              {stat}
            </div>
          )}
          <div
            style={{
              fontSize: title.length > 40 ? '42px' : '52px',
              fontWeight: 800,
              color: '#eaecf5',
              lineHeight: 1.15,
              maxWidth: '900px',
            }}
          >
            {title}
          </div>
          {subtitle && (
            <div
              style={{
                fontSize: '24px',
                color: '#a0a5bc',
                lineHeight: 1.4,
                maxWidth: '800px',
              }}
            >
              {subtitle}
            </div>
          )}
        </div>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ color: '#4ECDC4', fontSize: '18px', fontWeight: 600 }}>
            earmarkiq.app
          </span>
          <span style={{ color: '#555b75', fontSize: '16px' }}>
            Smart Money, No Effort
          </span>
        </div>

        {/* Background decoration */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(78,205,196,0.08) 0%, transparent 70%)',
          }}
        />
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        { name: 'DM Sans', data: fontData, weight: 400, style: 'normal' },
        { name: 'DM Sans', data: fontBold, weight: 800, style: 'normal' },
      ],
    },
  );
}
