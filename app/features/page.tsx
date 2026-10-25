import { redirect } from "next/navigation";

// The features content now lives on /services (under "The quality behind every
// build"). Keep this path working for old links and search results.
export default function FeaturesPage() {
  redirect("/services");
}
