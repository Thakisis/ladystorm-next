import Home from "@/components/Home";
import {unstable_setRequestLocale} from 'next-intl/server';
export default async function HomePage({params: {locale}}) {
  
  unstable_setRequestLocale(locale);
  
  return (
    <main className="flex min-h-screen flex-col ">
      
        <Home />
      
    </main>
  );
}

