import { createWriteStream } from "fs";
import path, { dirname } from "path";
import { SitemapStream, streamToPromise } from "sitemap";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const siteUrl = "https://frandepe.vercel.app";

const routes = [
  "/",
  "/contact",
  "/about",
  "/portfolio",
  "/tu-web",
  "/jobs/guia-pellegrini",
  "/jobs/guruia",
  "/jobs/natura",
  "/jobs/ndcapacitaciones",
  "/jobs/pilsen-digital",
  "/jobs/congreso",
  "/practices/mil-opciones",
];

(async () => {
  const sitemap = new SitemapStream({ hostname: siteUrl });
  const outputPath = path.resolve(__dirname, "dist/sitemap.xml");
  const writeStream = createWriteStream(outputPath);

  sitemap.pipe(writeStream);

  routes.forEach((route) => {
    sitemap.write({ url: route, changefreq: "weekly", priority: 0.7 });
  });

  sitemap.end();

  await streamToPromise(sitemap);
  console.log("✅ Sitemap generado correctamente en:", outputPath);
})();
