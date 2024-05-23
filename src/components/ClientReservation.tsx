import React, { useState } from "react";
import { useProviders } from "../hooks/useProviders";
import {
  Button,
  List,
  ListItemText,
  Typography,
  Box,
  Paper,
  Divider,
  Grid,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  SelectChangeEvent,
  ListItemButton,
} from "@mui/material";
import { Provider } from "../types/Provider";

const ClientReservation: React.FC = () => {
  const { data: providers } = useProviders();
  const [selectedProviderId, setSelectedProviderId] = useState<number | null>(
    null
  );
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [reservationTimeout, setReservationTimeout] =
    useState<NodeJS.Timeout | null>(null);

  const handleProviderSelect = (event: SelectChangeEvent<string>) => {
    setSelectedProviderId(parseInt(event.target.value));
    setSelectedDate(null);
    setSelectedSlot(null);
    if (reservationTimeout) clearTimeout(reservationTimeout);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedSlot(null);
    if (reservationTimeout) clearTimeout(reservationTimeout);
  };

  const handleSlotSelect = (slot: string) => {
    setSelectedSlot(slot);
    if (reservationTimeout) clearTimeout(reservationTimeout);
    // Set a timer to expire the reservation after 30 minutes
    setReservationTimeout(
      setTimeout(() => {
        setSelectedDate(null);
        setSelectedSlot(null);
        alert("Reservation expired after 30 minutes of inactivity.");
      }, 30 * 60 * 1000)
    );
  };

  const handleConfirm = () => {
    if (selectedSlot) {
      // TODO: Implement a call to the appointment API.
      alert(`Reservation confirmed for ${selectedSlot} on ${selectedDate}`);
      setSelectedDate(null);
      setSelectedSlot(null);
      if (reservationTimeout) clearTimeout(reservationTimeout);
    }
  };

  const selectedProvider = providers.find(
    (provider) => provider.id === selectedProviderId
  );

  // TODO: Update this function to use the Day.js datetime library.
  // TODO: Ensure to handle timezones correctly: data from the backend should be in UTC, and it should be converted to the client's local timezone.
  const isAfter24hrs = (date: string, slot: string) => {
    const now = new Date();
    const [hours, minutes] = slot.split(":").map(Number);
    const slotTime = new Date(date);
    slotTime.setHours(hours, minutes);
    return slotTime.getTime() - now.getTime() > 24 * 60 * 60 * 1000; // At least 24 hours in advance
  };

  return (
    <Box p={2}>
      <FormControl fullWidth variant="outlined" sx={{ mb: 4 }}>
        <InputLabel>Select Provider</InputLabel>
        <Select
          value={selectedProviderId?.toString() ?? ""}
          onChange={handleProviderSelect}
          label="Select Provider"
        >
          {providers.map((provider: Provider) => (
            <MenuItem key={provider.id} value={provider.id}>
              {provider.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      {selectedProvider && (
        <Paper elevation={3} sx={{ mb: 4 }}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4} sx={{ p: 2 }}>
              <Typography variant="h6">{selectedProvider.name}</Typography>
            </Grid>
            <Grid item xs={12} md={8} sx={{ p: 2 }}>
              <Typography>Select a Date & Time</Typography>

              <Grid
                container
                spacing={1}
                justifyContent="center"
                sx={{ mt: 2 }}
              >
                {selectedProvider.schedule.map((schedule) => (
                  <Grid item key={schedule.date}>
                    <Button
                      variant={
                        selectedDate === schedule.date
                          ? "contained"
                          : "outlined"
                      }
                      onClick={() => handleDateSelect(schedule.date)}
                    >
                      {schedule.date}
                    </Button>
                  </Grid>
                ))}
              </Grid>

              {selectedDate && (
                <>
                  <List>
                    {selectedProvider.schedule
                      .find((sched) => sched.date === selectedDate)
                      ?.slots.filter((slot) => isAfter24hrs(selectedDate, slot))
                      .map((slot) => (
                        <ListItemButton
                          key={slot}
                          selected={selectedSlot === slot}
                          onClick={() => handleSlotSelect(slot)}
                        >
                          <ListItemText primary={slot} />
                        </ListItemButton>
                      ))}
                  </List>
                </>
              )}

              <Divider />
              <Box sx={{ textAlign: "center", mt: 2 }}>
                <Button
                  variant="contained"
                  color="primary"
                  disabled={!selectedSlot}
                  onClick={handleConfirm}
                >
                  Confirm Reservation
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      )}
    </Box>
  );
};

export default ClientReservation;
