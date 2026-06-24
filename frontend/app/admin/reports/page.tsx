import { Download, FileSpreadsheet } from "lucide-react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/layout/page-header";

const reports = ["Hostel Occupancy", "Fee Collection", "Complaint Statistics", "Attendance Records"];

export default function ReportsPage() {
  return (
    <>
      <PageHeader title="Reports" description="Export operational reports as PDF or Excel for administration review." />
      <div className="grid gap-4 md:grid-cols-2">
        {reports.map((report) => (
          <Card key={report}>
            <CardHeader>
              <CardTitle>{report}</CardTitle>
              <FileSpreadsheet className="size-5 text-primary" />
            </CardHeader>
            <p className="mb-4 text-sm text-muted-foreground">Prepared from the latest normalized PostgreSQL records.</p>
            <Button variant="secondary">
              <Download className="size-4" /> Export
            </Button>
          </Card>
        ))}
      </div>
    </>
  );
}
