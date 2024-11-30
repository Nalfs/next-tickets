import { Ticket } from "@prisma/client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import React from "react";
import TicketStatusbadge from "@/components/TicketStatusbadge";
import TicketPriority from "@/components/TicketPriority";
import Link from "next/link";

interface DataTableProps {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: DataTableProps) => {
  return (
    <div className="w-full mt-5">
      <div className="rounded-md sm:border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title</TableHead>
              <TableHead>
                <div className="flex justify-center">Status</div>
              </TableHead>
              <TableHead>
                <div className="flex justify-center">Priority</div>
              </TableHead>
              <TableHead>Created at</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {tickets ? (
              tickets.map((ticket) => (
                <TableRow key={ticket.id} data-href="/">
                  <TableCell>
                    <Link href={`/tickets/${ticket.id}`}>{ticket.title}</Link>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <TicketStatusbadge status={ticket.status} />
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="flex justify-center">
                      <TicketPriority priority={ticket.priority} />
                    </div>
                  </TableCell>
                  <TableCell>
                    {ticket.createdAt.toLocaleDateString("sv-SE", {
                      year: "2-digit",
                      month: "2-digit",
                      day: "2-digit",
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <div>No data</div>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default DataTable;
