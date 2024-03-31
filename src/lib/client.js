import SanityClient from "@sanity/client";

export const client = SanityClient({
  projectId: "kmyfcqnv",
  dataset: "production",
  apiVersion: "2024-01-10",
  useCdn: true,
});
