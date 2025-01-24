"use client";

import { useEffect, useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // Monatsansicht
import timeGridPlugin from "@fullcalendar/timegrid"; // Tages- und Wochenansicht
import listPlugin from "@fullcalendar/list"; // Listenansicht
import {
  Button,
  Box,
  Typography,
  IconButton,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { Icon } from "@iconify/react/dist/iconify.js";

const Calendar = () => {
  const calendarRef = useRef(null);
  const [title, setTitle] = useState();
  const [api, setApi] = useState<any>();
  const [selectedGrid, setSelectedGrid] = useState<string>("dayGridMonth");

  useEffect(() => {
    const calendarApi = calendarRef.current.getApi();
    setApi(calendarApi);
    setTitle(calendarApi.view.title);
  }, []);

  useEffect(() => {
    if (api) {
      api.changeView(selectedGrid);
      setTitle(api.view.title);
    }
    console.log("@@@@@@@@@@ vietype: ", selectedGrid);
  }, [selectedGrid, api]);

  function updateTitle() {
    setTitle(api.view.title);
  }

  const nav = (nav: string) => {
    if (nav === "next") {
      api.next();
    } else {
      api.prev();
    }
    updateTitle();
  };

  const setToggleGroup = (e, grid) => {
    if (grid !== null) {
      setSelectedGrid(grid);
    }
  };

  const setToday = () => {
    api.today();
  };

  return (
    <>
      <Box
        sx={{
          gap: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
          <IconButton onClick={() => nav("prev")}>
            <Icon icon="mdi:chevron-left" />
          </IconButton>
          <Button size="small" variant="outlined" onClick={setToday}>
            Today
          </Button>
          <IconButton onClick={() => nav("next")}>
            <Icon icon="mdi:chevron-right" />
          </IconButton>
        </Box>

        <Typography variant="h6">{title}</Typography>
        <Box sx={{ gap: 1, display: "flex", alignItems: "center" }}>
          <ToggleButtonGroup
            size="small"
            value={selectedGrid}
            color="primary"
            onChange={setToggleGroup}
            aria-label="Platform"
            exclusive
          >
            <ToggleButton value={"dayGridMonth"}>Month</ToggleButton>
            <ToggleButton value={"timeGridWeek"}> Week</ToggleButton>
            <ToggleButton value={"timeGridDay"}> Day</ToggleButton>
          </ToggleButtonGroup>
        </Box>
      </Box>
      <FullCalendar
        ref={calendarRef}
        plugins={[dayGridPlugin, timeGridPlugin]}
        height={700}
        initialView="dayGridMonth" // Standardansicht beim Laden
        headerToolbar={{
          left: "", // Navigationselemente
          center: "", // Titel zentriert
          right: "", // Ansichtsumschalter
        }}
      />
    </>
  );
};

export default Calendar;
