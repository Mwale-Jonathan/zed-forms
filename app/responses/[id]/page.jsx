import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockResponses } from "@/lib/mock-data";
import Link from "next/link";
import { ArrowLeft, Download, User, Mail, Phone, GraduationCap, Calendar, Smile, ThumbsUp } from "lucide-react";

// Helper function to determine badge color based on sentiment
const getSatisfactionBadgeVariant = (satisfaction) => {
    switch (satisfaction) {
        case "Very Satisfied":
        case "Excellent":
        case "Yes":
            return "success"; // You might need to define this variant in your theme
        case "Satisfied":
        case "Good":
            return "default";
        case "Neutral":
        case "Average":
        case "Maybe":
            return "secondary";
        case "Dissatisfied":
        case "Poor":
        case "No":
            return "destructive";
        default:
            return "outline";
    }
};

export default async function ResponseDetail({ params }) {
    const { id } = await params; // ✅ unwrap the promise
    const response = mockResponses.find((r) => r.id === id);

    if (!response) {
        return (
            <div className="container mx-auto p-4 flex items-center justify-center h-screen">
                <Card className="w-full max-w-md text-center">
                    <CardHeader>
                        <CardTitle className="text-destructive">Response Not Found</CardTitle>
                        <CardDescription>The survey response you are looking for does not exist.</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <Link href="/responses" passHref>
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back to All Responses
                            </Button>
                        </Link>
                    </CardContent>
                </Card>
            </div>
        );
    }

    // Get the first letter of the name for the Avatar fallback
    const nameInitial = response.name ? response.name.charAt(0).toUpperCase() : "?";

    return (
        <div className="container mx-auto p-4 lg:p-8">
            <Card className="border-none shadow-none">
                {/* --- HEADER --- */}
                <CardHeader className="flex flex-col md:flex-row md:items-center md:justify-between px-0 pb-4 border-b">
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-16 w-16">
                            <AvatarImage src={`https://avatar.vercel.sh/${response.email}.png`} alt={response.name} />
                            <AvatarFallback>{nameInitial}</AvatarFallback>
                        </Avatar>
                        <div>
                            <CardTitle className="text-2xl">{response.name}</CardTitle>
                            <CardDescription>Submitted on {response.submissionDate}</CardDescription>
                        </div>
                    </div>
                    <div className="flex space-x-2 mt-4 md:mt-0">
                        <Link href="/responses" passHref>
                            <Button variant="outline">
                                <ArrowLeft className="mr-2 h-4 w-4" />
                                Back
                            </Button>
                        </Link>
                        <Button>
                            <Download className="mr-2 h-4 w-4" />
                            Export
                        </Button>
                    </div>
                </CardHeader>

                {/* --- BODY --- */}
                <CardContent className="p-0 pt-6">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Left Column: Personal & Academic Info */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg">Contact Information</h3>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Mail className="mr-3 h-4 w-4" />
                                    <span>{response.email}</span>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Phone className="mr-3 h-4 w-4" />
                                    <span>{response.phone}</span>
                                </div>
                            </div>
                            <div className="space-y-3">
                                <h3 className="font-semibold text-lg">Academic Details</h3>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <GraduationCap className="mr-3 h-4 w-4" />
                                    <span>{response.faculty}</span>
                                </div>
                                <div className="flex items-center text-sm text-muted-foreground">
                                    <Calendar className="mr-3 h-4 w-4" />
                                    <span>Year {response.yearOfStudy}</span>
                                </div>
                            </div>
                        </div>

                        {/* Right Column: Survey Ratings & Feedback */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Key Metrics */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <Card className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <Smile className="h-6 w-6 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Overall Satisfaction</p>
                                            <Badge variant={getSatisfactionBadgeVariant(response.overallSatisfaction)}>{response.overallSatisfaction}</Badge>
                                        </div>
                                    </div>
                                </Card>
                                <Card className="p-4">
                                    <div className="flex items-center space-x-3">
                                        <ThumbsUp className="h-6 w-6 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Would Recommend?</p>
                                            <Badge variant={getSatisfactionBadgeVariant(response.recommend)}>{response.recommend}</Badge>
                                        </div>
                                    </div>
                                </Card>
                            </div>

                            {/* Detailed Ratings Table */}
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Detailed Ratings</h3>
                                <Card>
                                    <Table>
                                        <TableBody>
                                            <TableRow>
                                                <TableCell className="font-medium">Campus Facilities</TableCell>
                                                <TableCell className="text-right">
                                                    <Badge variant={getSatisfactionBadgeVariant(response.campusFacilities)} className="text-xs">
                                                        {response.campusFacilities}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Teaching Quality</TableCell>
                                                <TableCell className="text-right">
                                                    <Badge variant={getSatisfactionBadgeVariant(response.teachingQuality)} className="text-xs">
                                                        {response.teachingQuality}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                            <TableRow>
                                                <TableCell className="font-medium">Campus Life</TableCell>
                                                <TableCell className="text-right">
                                                    <Badge variant={getSatisfactionBadgeVariant(response.campusLife)} className="text-xs">
                                                        {response.campusLife}
                                                    </Badge>
                                                </TableCell>
                                            </TableRow>
                                        </TableBody>
                                    </Table>
                                </Card>
                            </div>

                            {/* Additional Feedback */}
                            <div>
                                <h3 className="font-semibold text-lg mb-2">Additional Feedback</h3>
                                <Card className="p-4 bg-muted/20">
                                    <p className="text-sm text-muted-foreground italic">{response.additionalFeedback || "No additional feedback was provided."}</p>
                                </Card>
                            </div>
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
