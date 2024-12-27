import { createSlice } from "@reduxjs/toolkit";

const appSettings = {
  theme: {
    mode: localStorage.getItem("themeMode"), // Optionen: 'light', 'dark', 'system'
  },
  language: {
    current: "de", // Aktuelle Sprache (z. B. 'de' für Deutsch, 'en' für Englisch)
    availableLanguages: ["de", "en", "fr", "es"], // Unterstützte Sprachen
  },
  region: {
    timezone: "Europe/Berlin", // Zeitzone
    currency: "EUR", // Standardwährung
    country: "DE", // Ländercode
  },
  notifications: {
    enabled: true, // Aktiviert Benachrichtigungen
    sound: true, // Aktiviert Benachrichtigungstöne
    emailAlerts: false, // Aktiviert E-Mail-Benachrichtigungen
  },
  privacy: {
    dataSharing: false, // Erlaubt das Teilen von Nutzungsdaten
    tracking: false, // Aktiviert/Deaktiviert Tracking
    adPersonalization: false, // Aktiviert/Deaktiviert personalisierte Werbung
  },
  userPreferences: {
    rememberLogin: true, // Merkt sich den Login-Status
    autoSave: true, // Aktiviert automatisches Speichern
    defaultHomePage: "dashboard", // Standard-Startseite ('dashboard', 'profile', etc.)
  },
  integrations: {
    cloudSync: {
      enabled: true, // Aktiviert die Synchronisierung mit der Cloud
      provider: "GoogleDrive", // Anbieter (z. B. 'GoogleDrive', 'Dropbox')
    },
    socialMedia: {
      connected: true, // Social-Media-Verbindungen aktiviert
      platforms: ["Facebook", "Twitter"], // Verknüpfte Plattformen
    },
  },
};

const settingSlice = createSlice({
  name: "setting",
  initialState: appSettings,
  reducers: {
    handleTheme: (state, action) => {
      state.theme.mode = action.payload;
      localStorage.setItem("themeMode", action.payload);
    },
  },
});

// Exporte für Reducer und Actions
export const { handleTheme } = settingSlice.actions;
export default settingSlice.reducer;
