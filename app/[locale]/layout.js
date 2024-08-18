import Navbar from "@/components/navbar";
const locales = ['en', 'es',"cs"];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}
const Layout = ({children,modal}) => {
    return (
        <div>
            {modal}
            <Navbar />
            {children}
        </div>
    );
};

export default Layout;
