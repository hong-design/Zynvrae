import { Badge } from "@/components/ui/Badge";

type Status = "concept" | "building" | "beta";

type StatusChipProps = {
  status: Status;
};

const labels: Record<Status, string> = {
  concept: "Research",
  building: "Building",
  beta: "Private beta"
};

const variants: Record<Status, "warning" | "accent" | "success"> = {
  concept: "warning",
  building: "accent",
  beta: "success"
};

export function StatusChip({ status }: StatusChipProps) {
  return <Badge variant={variants[status]}>{labels[status]}</Badge>;
}
