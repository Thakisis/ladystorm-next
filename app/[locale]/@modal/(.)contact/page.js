import {unstable_setRequestLocale} from 'next-intl/server';
import {
    Dialog,
    DialogContent,
} from "@/components/ui/dialog"
import ContactForm from "@/components/ContactForm"

export  default function Contact({params: {locale}}) {
      unstable_setRequestLocale(locale);
    return (
        <Dialog defaultOpen={true} routerBack={true}>
            <DialogContent className="sm:max-w-none w-auto h-auto p-10">
                <ContactForm />
            </DialogContent>

            
        </Dialog>
    )
}
