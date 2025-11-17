"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {personalSchema, PersonalSchema } from "@/lib/schemas/personal";
import {useAppDispatc, useAppSelector} from "@/lib/hooks";
import { updatePersonal} from "@/store/resumeSlice";
import { Button } from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Textarea} from "@/components/ui/textarea";
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";

export default function PersonalForm() {
    const dispatch = useAppDispatch();
    const personal = useAppSelector((state) => state.resume.personal);

    const form = useForm<PersonalSchema> ({
        resolver: zodResolver(personalSchema),
        defaultValues: personal,
    })

    const onSubmit = (values: PersonalSchema) => {
        dispatch(updatePersonal(values))
    };

    return (
        <div className="max-w-xl space-y-6">
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                    <FormField control={form.control} name="fullname" render={({field}) => (
                        <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                                <Input placeholder="John Doe" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>

                    {/*job title*/}
                    <FormField control={form.control} name="tittle" render={({field}) => (
                        <FormItem>
                            <FormLabel>Peofessional Title</FormLabel>
                            <FormControl>
                                <Input placeholder="Software Engineer" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>

                    {/*email*/}
                    <FormField control={form.control} name="email" render={({field}) => (
                        <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl>
                                <Input type="email" placeholder="john.doe@example.com" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>

                    {/*phone*/}
                    <FormField control={form.control} name="phone" render={({field}) => (
                        <FormItem>
                            <FormLabel>Phone Number</FormLabel>
                            <FormControl>
                                <Input placeholder="+1 234 567 890" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>

                    {/*location*/}
                    <FormField control={form.control} name="location" render={({field}) => (
                        <FormItem>
                            <FormLabel>Location</FormLabel>
                            <FormControl>
                                <Input placeholder="City, Country" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>

                    {/*summary*/}
                    <FormField control={form.control} name="summary" render={({field}) => (
                        <FormItem>
                            <FormLabel>Professional Summary</FormLabel>
                            <FormControl>
                                <Textarea placeholder="A brief summary about experience" {...field} />
                            </FormControl>
                            <FormMessage />
                        </FormItem>
                    )}></FormField>

                    <Button type="submit" className="w-full">Save Personal Info</Button>
                </form>
            </Form>
        </div>
    )
}