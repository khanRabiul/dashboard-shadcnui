'use client'
import {
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

const formSchema = z.object({
  username:
    z.string()
      .min(2, {
        message: "Username must be at least 2 characters.",
      })
      .max(50),
  email: z.string().email({ message: 'Invalid email!' }),
  phone: z.string().min(10).max(15),
  location: z.string().min(2),
  role: z.enum([ 'admin', 'user'])

})


const EditUser = () => {

 const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "jhon.doe",
      email: 'jhondoe@gmail.com',
      phone: '+1 234 5678',
      location: 'New Yourk',
      role: 'admin',
    },
  })

  return (
    <SheetContent>
      <SheetHeader>
        <SheetTitle className="mb-4">Edit User</SheetTitle>
        <SheetDescription>

        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  );
};

export default EditUser;