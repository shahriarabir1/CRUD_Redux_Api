import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TablePagination,
  TableRow,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";

interface Column {
  id: string;
  name: string;
}

interface Row {
  id: number;
  name: string;
  email: string;
  phone: string;
  [key: string]: string | number;
}

interface MuiTableProps {
  data: Row[];
}

const TableContainers: React.FC<MuiTableProps> = ({ data }) => {
  const columns: Column[] = [
    { id: "id", name: "Id" },
    { id: "name", name: "Name" },
    { id: "email", name: "Email" },
    { id: "phone", name: "Phone" },
  ];

  const handlechangepage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const handleRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const [rows, setRows] = useState<Row[]>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    setRows(data);
  }, [data]);

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setPage(0);
  };

  const filteredRows = rows.filter((row) =>
    Object.values(row).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Show DataTable</h1>

      <Paper sx={{ width: "90%", marginLeft: "5%" }}>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={handleSearch}
          fullWidth
          margin="normal"
        />
        <TableContainer sx={{ maxHeight: 450 }}>
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                {columns?.slice(1)?.map((column) => (
                  <TableCell
                    style={{ backgroundColor: "black", color: "white" }}
                    key={column?.id}
                  >
                    {column.name}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredRows
                ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                ?.map((row, i) => (
                  <TableRow key={row.id}>
                    {columns.slice(1).map((column) => (
                      <TableCell key={column.id}>{row[column.id]}</TableCell>
                    ))}
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          rowsPerPage={rowsPerPage}
          page={page}
          count={filteredRows.length}
          component="div"
          onPageChange={handlechangepage}
          onRowsPerPageChange={handleRowsPerPage}
        />
      </Paper>
    </div>
  );
};

export default TableContainers;
