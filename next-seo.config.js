const title = "Gabriel Longás";
const description = "Full Stack developer and Web enthusiast based in Spain.";

const SEO = {
  title,
  description,
  canonical: "https://glongas.com/",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://glongas.com/",
    title,
    description,
    images: [
      {
        url: "https://glongas.com/static/images/banner.jpg",
        alt: title,
        width: 1200,
        height: 627,
      },
    ],
  },
  twitter: {
    handle: "@glongas",
    site: "@glongas",
    cardType: "summary_large_image",
  },
};

export default SEO;
