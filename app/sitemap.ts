import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://finance-tools-eta.vercel.app/";

  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/calculators`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/loan-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/savings-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/roi-calculator`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides/how-loan-payments-work`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides/how-compound-interest-grows-savings`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides/what-roi-really-means`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/guides/loan-term-vs-interest-cost`,
      lastModified: new Date(),
    },
    {
  url: `${baseUrl}/guides/how-to-calculate-loan-payment`,
  lastModified: new Date(),
},
  ];
}