import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ArrowRight, FileText, ListChecks, BarChart2 } from 'lucide-react';

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* --- Hero Section --- */}
      <section className="flex-grow flex items-center justify-center py-24 md:py-32">
        <div className="container px-4 md:px-6 text-center">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              University Survey System
            </h1>
            <p className="mt-4 text-lg text-muted-foreground md:text-xl">
              An elegant and efficient platform to gather, view, and analyze student feedback. Improve your institution with actionable data.
            </p>
            <div className="mt-8">
              <Link href="/survey-form" passHref>
                <Button size="lg">
                  Submit Feedback
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* --- Features Section --- */}
      <section className="w-full py-12 md:py-24 bg-muted/40 border-t">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Key Features</h2>
            <p className="max-w-[700px] mx-auto mt-2 text-muted-foreground">
              Everything you need to run a successful feedback cycle.
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl items-start gap-8 sm:grid-cols-2 md:grid-cols-3">

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                  <FileText className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Easy Form Submission</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  A clean, intuitive form for students to provide detailed feedback effortlessly.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                  <ListChecks className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">View All Responses</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Browse, search, and view every submitted response in an organized and accessible list.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="mx-auto bg-primary/10 text-primary rounded-full p-3 w-fit">
                  <BarChart2 className="h-8 w-8" />
                </div>
                <CardTitle className="mt-4">Insightful Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Visualize key metrics and trends with an interactive analytics dashboard.
                </p>
              </CardContent>
            </Card>

          </div>
        </div>
      </section>
    </div>
  );
}
