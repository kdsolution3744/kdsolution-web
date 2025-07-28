import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IPETExample } from "@/constants/PETExample";

export default function ExampleCard({ target }: { target: IPETExample }) {
  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader>
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg flex items-center justify-center">
              <target.icon className={`w-5 h-5 ${target.color}`} />
            </div>
            <CardTitle className="text-xl">{target.title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {target.content.map((v) => {
            return (
              <div key={v} className="flex items-center space-x-2">
                <div className={`w-2 h-2 rounded-full ${target.bgColor}`}></div>
                <span className="text-sm text-gray-700">{v}</span>
              </div>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}
