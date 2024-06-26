import fs from 'fs';
import path from 'path';
import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth/next";
import CapacityProfileMainWrapper from "../components/CapacityProfileMainWrapper";

export default async function CapacityPage() {
  const cookieStore = cookies();
  const session = await getServerSession();
  const darkMode = cookieStore.get("dark_mode") === undefined ? "false" : cookieStore.get("dark_mode");
  const language = cookieStore.get("language") === undefined ? "en" : cookieStore.get("language").value;

  // Loading page content based on selected language
  const filePath = path.join(process.cwd(), 'locales', `${language}.json`);
  const pageContent = JSON.parse(fs.readFileSync(filePath, 'utf8'));

  // Capacity ID
  const pathname = headers().get("x-pathname") || "";
  const selectedCapacityId = pathname.split("/").slice(-1)[0];

  if (session) {
    return (
      <CapacityProfileMainWrapper
        session={session !== null}
        language={language}
        darkMode={darkMode}
        pageContent={pageContent}
        selectedCapacityId={selectedCapacityId}
      />
    )
  } else {
    redirect('/');
  }
}