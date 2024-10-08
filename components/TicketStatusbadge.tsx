import React from "react";
import { Badge } from "./ui/badge";
import { Status } from "@prisma/client";

interface Props {
  status: Status;
}

const statusMap: Record<
  Status,
  { label: string; color: "bg-red-400" | "bg-blue-400" | "bg-green-400" }
> = {
  OPEN: { label: "Open", color: "bg-red-400" },
  STARTED: { label: "Started", color: "bg-blue-400" },
  CLOSED: { label: "Closed", color: "bg-green-400" },
};
console.log("test");
const TicketStatusbadge = ({ status }: Props) => {
  return (
    <Badge
      className={`${statusMap[status].color} text-background hover:${statusMap[status].color} py-1 px-3 w-20 flex items-center justify-center`}
    >
      {statusMap[status].label}
    </Badge>
  );
};

export default TicketStatusbadge;
