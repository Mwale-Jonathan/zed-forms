"use client"; // 1. Add this directive to make it a Client Component

import { useRouter } from "next/navigation"; // 2. Import the router
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export default function SurveyForm() {
    const router = useRouter(); // 3. Initialize the router

    // 4. Create a function to handle the form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevents the default browser refresh

        // In a real application, you would collect and send the form data
        // to your backend API here.

        console.log("Form submitted. Redirecting to responses page...");

        // 5. Programmatically navigate to the responses page
        router.push("/responses");
    };

    return (
        <div className="container mx-auto p-4 lg:p-8">
            <Card className="max-w-4xl mx-auto">
                <CardHeader>
                    <CardTitle>University Survey</CardTitle>
                </CardHeader>
                <CardContent>
                    {/* 6. Attach the handleSubmit function to the form's onSubmit event */}
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="name">Name</Label>
                                <Input id="name" placeholder="Enter your name" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="email">Email</Label>
                                <Input id="email" type="email" placeholder="Enter your email" required />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="phone">Phone</Label>
                            <Input id="phone" type="tel" placeholder="Enter your phone number" />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <Label htmlFor="faculty">Faculty/Department</Label>
                                <Input id="faculty" placeholder="Enter your faculty" required />
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor="year-of-study">Year of Study</Label>
                                <Input id="year-of-study" type="number" placeholder="Enter your year of study" required />
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Label>Overall Satisfaction</Label>
                            <RadioGroup defaultValue="satisfied" className="flex flex-wrap gap-x-6 gap-y-2">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="very-satisfied" id="very-satisfied" />
                                    <Label htmlFor="very-satisfied">Very Satisfied</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="satisfied" id="satisfied" />
                                    <Label htmlFor="satisfied">Satisfied</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="neutral" id="neutral" />
                                    <Label htmlFor="neutral">Neutral</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="dissatisfied" id="dissatisfied" />
                                    <Label htmlFor="dissatisfied">Dissatisfied</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <div className="space-y-2">
                                <Label>Campus Facilities</Label>
                                <Select required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a rating" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="excellent">Excellent</SelectItem>
                                        <SelectItem value="good">Good</SelectItem>
                                        <SelectItem value="average">Average</SelectItem>
                                        <SelectItem value="poor">Poor</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Teaching Quality</Label>
                                <Select required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a rating" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="excellent">Excellent</SelectItem>
                                        <SelectItem value="good">Good</SelectItem>
                                        <SelectItem value="average">Average</SelectItem>
                                        <SelectItem value="poor">Poor</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="space-y-2">
                                <Label>Campus Life</Label>
                                <Select required>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Select a rating" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="excellent">Excellent</SelectItem>
                                        <SelectItem value="good">Good</SelectItem>
                                        <SelectItem value="average">Average</SelectItem>
                                        <SelectItem value="poor">Poor</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="space-y-3">
                            <Label>Would you recommend the university to others?</Label>
                            <RadioGroup defaultValue="yes" className="flex flex-wrap gap-x-6 gap-y-2">
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="yes" id="yes" />
                                    <Label htmlFor="yes">Yes</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="maybe" id="maybe" />
                                    <Label htmlFor="maybe">Maybe</Label>
                                </div>
                                <div className="flex items-center space-x-2">
                                    <RadioGroupItem value="no" id="no" />
                                    <Label htmlFor="no">No</Label>
                                </div>
                            </RadioGroup>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="additional-feedback">Additional Feedback</Label>
                            <Textarea id="additional-feedback" placeholder="Enter any additional feedback" />
                        </div>
                        <Button type="submit" size="lg">
                            Submit Feedback
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    );
}
