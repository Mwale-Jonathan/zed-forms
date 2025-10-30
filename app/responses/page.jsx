"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockResponses } from "@/lib/mock-data";

export default function ResponsesList() {
    const [searchTerm, setSearchTerm] = useState("");

    const filteredResponses = mockResponses.filter((response) => response.name.toLowerCase().includes(searchTerm.toLowerCase()));

    return (
        <div className="container mx-auto p-4">
            <Card>
                <CardHeader>
                    <CardTitle>Survey Responses</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="mb-4">
                        <Input placeholder="Search by name..." value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Name</TableHead>
                                <TableHead>Email</TableHead>
                                <TableHead>Faculty</TableHead>
                                <TableHead>Satisfaction</TableHead>
                                <TableHead>Submission Date</TableHead>
                                <TableHead>Action</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredResponses.map((response) => (
                                <TableRow key={response.id}>
                                    <TableCell>{response.name}</TableCell>
                                    <TableCell>{response.email}</TableCell>
                                    <TableCell>{response.faculty}</TableCell>
                                    <TableCell>{response.overallSatisfaction}</TableCell>
                                    <TableCell>{response.submissionDate}</TableCell>
                                    <TableCell>
                                        <Link href={`/responses/${response.id}`} passHref>
                                            <Button variant="outline">View Details</Button>
                                        </Link>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
}
