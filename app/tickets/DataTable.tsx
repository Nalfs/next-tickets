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

interface DataTableProps {
  tickets: Ticket[];
}

const DataTable = ({ tickets }: DataTableProps) => {
  console.log("DataTable Tickets: ", tickets);
  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Title</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Priority</TableHead>
            <TableHead>Created at</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {tickets ? (
            tickets.map((ticket) => (
              <TableRow key={ticket.id} data-href="/">
                <TableCell>{ticket.title}</TableCell>
                <TableCell>{ticket.status}</TableCell>
                <TableCell>{ticket.priority}</TableCell>
                <TableCell>{ticket.createdAt.toLocaleDateString()}</TableCell>
              </TableRow>
            ))
          ) : (
            <div>No data</div>
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default DataTable;
