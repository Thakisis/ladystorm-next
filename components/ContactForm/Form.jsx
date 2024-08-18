import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"


function Form(props) {
    return (
        <form className="mt-4 space-y-4">
            <div className="space-y-2">
                <Label htmlFor="first-name" >
                    First Name
                </Label>
                <Input
                    id="first-name"
                    placeholder="Enter your first name"

                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="last-name" >
                    Last Name
                </Label>
                <Input
                    id="last-name"
                    placeholder="Enter your last name"
                    className=""
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="email" >
                    Email
                </Label>
                <Input
                    id="email"
                    placeholder="Enter your email"
                    type="email"
                    className=""
                />
            </div>
            <div className="space-y-2">
                <Label htmlFor="message" >
                    Message
                </Label>
                <Textarea
                    id="message"
                    placeholder="Enter your message"
                    className="min-h-[100px] "
                />
            </div>
            <Button className="w-full ">
                Send Message
            </Button>
        </form>
    )
}

export default Form
