import React from "react";
import { useState } from "react";
import "./Tour.css";
import Select from "react-select";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function Tour() {
  const tourOptions = [
    { value: "allTours", label: "همه تورها" },
    { value: "singleDay", label: "تور یک روزه" },
    { value: "aFewDays", label: "تور چند روزه" },
  ];
  const tours = [
    {
      name: "تور ماسال",
      type: "یک روزه",
      price: 4500000,
      transportation: "اتوبوس",
      capacity: 10,
    },
    {
      name: "تور کیش",
      type: "سه روزه",
      price: 10000000,
      transportation: "هواپیما",
      capacity: 15,
    },
    {
      name: "تور مشهد",
      type: "سه روزه",
      price: 7500000,
      transportation: "هواپیما",
      capacity: 0,
    },
    {
      name: "تور شیراز",
      type: "چهار روزه",
      price: 10000000,
      transportation: "هواپیما",
      capacity: 10,
    },
    {
      name: "تور قشم",
      type: "سه روزه",
      price: 1000000,
      transportation: "هواپیما",
      capacity: 0,
    },
    {
      name: "تور اصفهان",
      type: "چهار روزه",
      price: 7500000,
      transportation: "هواپیما",
      capacity: 5,
    },
  ];
  const tableHeaders = ["نام", "نوع تور", "هزینه(تومان)", "حمل و نقل", "ظرفیت"];
  const [selectedTourType, setSelectedTourType] = useState("allTours");
  const [showAvailableTours, setShowAvailableTours] = useState(false);
  const handleFilterChange = (selectedOption) => {
    setSelectedTourType(selectedOption.value);
  };
  const handleShowingAvailableTours = (event) => {
    setShowAvailableTours(event.target.checked);
  };
  const filterTourByCapacity = (tour) => {
    if (showAvailableTours && tour.capacity === 0) {
      return false;
    }
    if (selectedTourType == "allTours") {
      return true;
    }
    if (selectedTourType === "singleDay") {
      return tour.type === "یک روزه";
    }
    if (selectedTourType === "aFewDays") {
      return tour.type !== "یک روزه";
    }
  };
  return (
    <div className="d-flex  flex-column p-3 pt-0 w-100 tour-page">
      <div
        className="w-100 mx-auto tour-page-card"
        style={{ maxWidth: "1000px" }}
      >
        <div className="h-100">
          {/* filters */}
          <div className="d-flex flex-column flex-sm-row justify-content-between bg-white align-items-center">
            <div className="col-12 col-sm-6 w-100">
              <Select
                options={tourOptions}
                defaultValue={tourOptions[0]}
                onChange={handleFilterChange}
              />
            </div>
            <div className="col-12 col-sm-3 mt-2 mt-sm-0  mr-0 pr-0 bg-white ">
              <FormControlLabel
                control={
                  <Checkbox
                    className="mr-0 pr-0"
                    checked={showAvailableTours}
                    onChange={handleShowingAvailableTours}
                  />
                }
                label="نمایش تورهای قابل رزرو"
              />
            </div>
          </div>
          {/* table */}
          <div
            style={{ border: "1px solid #dad6d6" }}
            className="table-Container d-none d-sm-block mt-3"
          >
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} className="table">
                <TableHead>
                  <TableRow>
                    {tableHeaders.map((header) => {
                      return (
                        <TableCell key={header} align="center">
                          {header}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                </TableHead>
                <TableBody>
                  {tours.filter(filterTourByCapacity).map((row) => (
                    <TableRow
                      key={row.name}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell align="center">{row.name}</TableCell>
                      <TableCell align="center">{row.type}</TableCell>
                      <TableCell align="center">
                        {Number(row.price).toLocaleString()}
                      </TableCell>
                      <TableCell align="center">{row.transportation}</TableCell>
                      <TableCell align="center">
                        {" "}
                        <span
                          className={
                            row.capacity
                              ? ""
                              : " badge badge-danger badge-pill text-white p-2"
                          }
                        >
                          {row.capacity ? row.capacity : "تکمیل ظرفیت"}
                        </span>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </div>
        </div>
        {/* cards for mobile */}
        <div className="d-flex flex-column d-sm-none">
          {tours.filter(filterTourByCapacity).map((tour, index) => {
            return (
              <div className="tour-card mt-2" key={index}>
                <div className="d-flex justify-content-between">
                  <b className="text-info">نام</b>
                  <span>{tour.name}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <b className="text-info">نوع تور</b>
                  <span>{tour.type}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <b className="text-info">هزینه(تومان)</b>
                  <span>{Number(tour.price).toLocaleString()}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <b className="text-info">حمل و نقل</b>
                  <span>{tour.transportation}</span>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <b className="text-info">ظرفیت</b>
                  <span
                    className={
                      tour.capacity
                        ? ""
                        : " badge badge-danger badge-pill text-white p-2"
                    }
                  >
                    {tour.capacity ? tour.capacity : "تکمیل ظرفیت"}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
