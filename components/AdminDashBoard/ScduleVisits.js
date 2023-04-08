import React, { useCallback, useMemo, useState } from "react";
import MaterialReactTable from "material-react-table";
import { Box, IconButton, MenuItem, Tooltip } from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import { data } from "./makeData";
import { useQuery } from "react-query";

import scheduleVisitApi from "../../utils/Api/scheduleVisit.api";
import { useAuthToken } from "../../contexts/authContext";

const ScheduleVisit = () => {
  const [tableData, setTableData] = useState(() => data);
  const [validationErrors, setValidationErrors] = useState({});
  const token = useAuthToken();
  const { isLoading } = useQuery({
    queryFn: () => scheduleVisitApi.getAllScheduleVisits(token),
    queryKey: ["scheduleVisits"],
    onSuccess: (data) => {
      console.log(data.data);
      setTableData(data.data);
    },
  });

  const handleSaveRowEdits = async ({ exitEditingMode, row, values }) => {
    if (!Object.keys(validationErrors).length) {
      tableData[row.index] = values;
      //send/receive api updates here, then refetch or update local table data for re-render
      setTableData([...tableData]);
      exitEditingMode(); //required to exit editing mode and close modal
    }
  };

  const handleCancelRowEdits = () => {
    setValidationErrors({});
  };

  const handleDeleteRow = useCallback(
    (row) => {
      if (!confirm(`Are you sure you want to delete ${row.getValue("id")}`)) {
        return;
      }
      //send api delete request here, then refetch or update local table data for re-render

      tableData.splice(row.index, 1);
      setTableData([...tableData]);
    },
    [tableData]
  );

  const getCommonEditTextFieldProps = useCallback(
    (cell) => {
      return {
        error: !!validationErrors[cell.id],
        helperText: validationErrors[cell.id],
        onBlur: (event) => {
          const isValid =
            cell.column.id === "email"
              ? validateEmail(event.target.value)
              : cell.column.id === "age"
              ? validateAge(+event.target.value)
              : validateRequired(event.target.value);
          if (!isValid) {
            //set validation error for cell if invalid
            setValidationErrors({
              ...validationErrors,
              [cell.id]: `${cell.column.columnDef.header} is required`,
            });
          } else {
            //remove validation error for cell if valid
            delete validationErrors[cell.id];
            setValidationErrors({
              ...validationErrors,
            });
          }
        },
      };
    },
    [validationErrors]
  );

  const columns = useMemo(
    () => [
      {
        accessorKey: "uid",
        header: "ID",
        enableColumnOrdering: false,
        enableEditing: false, //disable editing on this column
        enableSorting: false,
        size: 80,
      },
      {
        accessorKey: "user_name",
        header: "Name",
        size: 140,
        enableEditing: false,
      },

      {
        accessorKey: "phoneNo",
        header: "Phone No",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "time",
        header: "Time",
        enableEditing: false,
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell }) => ({
          ...getCommonEditTextFieldProps(cell),
          type: "number",
        }),
      },
      {
        accessorKey: "resident.name",
        header: "Resident",
        enableEditing: false,
        size: 80,
      },
      {
        accessorKey: "completionState",
        header: "Complete",
        size: 80,
        muiTableBodyCellEditTextFieldProps: ({ cell, row }) => ({
          select: true,
          children: ["scheduled", "completed", "canceled"].map((state) => {
            const current = row.getValue("completionState");
            if (current !== state)
              return (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              );
          }),
        }),
      },
      {
        accessorKey: "date",
        header: "Date",
        enableEditing: false,
      },
    ],
    [getCommonEditTextFieldProps]
  );

  return (
    <>
      <div className="main-content d-flex flex-column">
        <MaterialReactTable
          state={{ isLoading }}
          displayColumnDefOptions={{
            "mrt-row-actions": {
              muiTableHeadCellProps: {
                align: "center",
              },
              size: 120,
            },
          }}
          columns={columns}
          data={tableData}
          editingMode="modal" //default
          enableColumnOrdering
          enableEditing
          onEditingRowSave={handleSaveRowEdits}
          onEditingRowCancel={handleCancelRowEdits}
          renderRowActions={({ row, table }) => (
            <Box sx={{ display: "flex", gap: "1rem" }}>
              <Tooltip arrow placement="left" title="Edit">
                <IconButton onClick={() => table.setEditingRow(row)}>
                  <Edit />
                </IconButton>
              </Tooltip>
              <Tooltip arrow placement="right" title="Delete">
                <IconButton
                  color="error"
                  onClick={() => {
                    confirm.log(row);
                    handleDeleteRow(row);
                  }}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
            </Box>
          )}
        />
      </div>
    </>
  );
};

const validateRequired = (value) => !!value.length;
const validateEmail = (email) =>
  !!email.length &&
  email
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
const validateAge = (age) => age >= 18 && age <= 50;

export default ScheduleVisit;
