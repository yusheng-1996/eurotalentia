import Script from "next/script";

/**
 * Google Ads global site tag + conversion helper.
 *
 * Driven by environment variables so the tag stays OFF (and the site stays
 * cookie-free) until configured:
 *   NEXT_PUBLIC_GADS_CONVERSION_ID     e.g. "AW-123456789"
 *   NEXT_PUBLIC_GADS_CONVERSION_LABEL  e.g. "AbC-D_efGhIjK"  (optional)
 *
 * When the ID is set, this loads gtag.js and defines
 * window.gtag_report_conversion(), which FormCraftEmbed calls once on a
 * successful submission.
 */
const ADS_ID =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_ID || "AW-18243474806";
const LABEL =
  process.env.NEXT_PUBLIC_GADS_CONVERSION_LABEL || "zckRCNKa7r8cEPaqlftD";

export default function GoogleAdsTag() {
  if (!ADS_ID) return null;

  const sendTo = LABEL ? `${ADS_ID}/${LABEL}` : ADS_ID;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`}
        strategy="afterInteractive"
      />
      <Script id="gtag-base" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${ADS_ID}');
          window.gtag_report_conversion = function(url) {
            var callback = function () {
              if (typeof(url) !== 'undefined') { window.location = url; }
            };
            gtag('event', 'conversion', {
              'send_to': '${sendTo}',
              'value': 1.0,
              'currency': 'USD',
              'event_callback': callback
            });
            return false;
          };
        `}
      </Script>
    </>
  );
}
