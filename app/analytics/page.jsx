"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { mockResponses } from "@/lib/mock-data";
import { Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function AnalyticsDashboard() {
    const totalResponses = mockResponses.length;

    const satisfactionCounts = mockResponses.reduce((acc, response) => {
        acc[response.overallSatisfaction] = (acc[response.overallSatisfaction] || 0) + 1;
        return acc;
    }, {});

    const recommendationCounts = mockResponses.reduce((acc, response) => {
        acc[response.recommend] = (acc[response.recommend] || 0) + 1;
        return acc;
    }, {});

    const facilitiesRatingData = [
        { name: "Excellent", count: mockResponses.filter((r) => r.campusFacilities === "Excellent").length },
        { name: "Good", count: mockResponses.filter((r) => r.campusFacilities === "Good").length },
        { name: "Average", count: mockResponses.filter((r) => r.campusFacilities === "Average").length },
        { name: "Poor", count: mockResponses.filter((r) => r.campusFacilities === "Poor").length },
    ];

    const teachingQualityData = [
        { name: "Excellent", count: mockResponses.filter((r) => r.teachingQuality === "Excellent").length },
        { name: "Good", count: mockResponses.filter((r) => r.teachingQuality === "Good").length },
        { name: "Average", count: mockResponses.filter((r) => r.teachingQuality === "Average").length },
        { name: "Poor", count: mockResponses.filter((r) => r.teachingQuality === "Poor").length },
    ];

    const campusLifeData = [
        { name: "Excellent", count: mockResponses.filter((r) => r.campusLife === "Excellent").length },
        { name: "Good", count: mockResponses.filter((r) => r.campusLife === "Good").length },
        { name: "Average", count: mockResponses.filter((r) => r.campusLife === "Average").length },
        { name: "Poor", count: mockResponses.filter((r) => r.campusLife === "Poor").length },
    ];

    const facultyDistribution = mockResponses.reduce((acc, response) => {
        acc[response.faculty] = (acc[response.faculty] || 0) + 1;
        return acc;
    }, {});
    const facultyData = Object.keys(facultyDistribution).map((key) => ({ name: key, count: facultyDistribution[key] }));

    const yearDistribution = mockResponses.reduce((acc, response) => {
        const year = `Year ${response.yearOfStudy}`;
        acc[year] = (acc[year] || 0) + 1;
        return acc;
    }, {});
    const yearData = Object.keys(yearDistribution).map((key) => ({ name: key, count: yearDistribution[key] }));

    const satisfactionScore = totalResponses > 0 ? ((((satisfactionCounts["Very Satisfied"] || 0) + (satisfactionCounts["Satisfied"] || 0)) / totalResponses) * 100).toFixed(2) : 0;

    const recommendationRate = totalResponses > 0 ? (((recommendationCounts["Yes"] || 0) / totalResponses) * 100).toFixed(2) : 0;

    return (
        <div className="container mx-auto p-4 space-y-4">
            <div className="grid gap-4 md:grid-cols-3">
                <Card>
                    <CardHeader>
                        <CardTitle>Total Responses</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{totalResponses}</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Satisfaction Score</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{satisfactionScore}%</p>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Recommendation Rate</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-2xl font-bold">{recommendationRate}%</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Campus Facilities Rating</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={facilitiesRatingData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#8884d8" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Teaching Quality Rating</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={teachingQualityData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#82ca9d" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Campus Life Rating</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={campusLifeData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#ffc658" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Distribution by Faculty</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={facultyData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#ff8042" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Distribution by Year of Study</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={yearData}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis dataKey="name" />
                                <YAxis />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="count" fill="#0088FE" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
