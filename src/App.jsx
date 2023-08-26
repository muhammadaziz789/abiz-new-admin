import { Suspense } from "react";
import Router from "./router";
import PageFallback from "./components/PageFallback";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "react-query";
import queryClient from "./services/queryClient";
import AlertProvider from "./providers/AlertProvider";
import { ThemeProvider } from "@mui/material/styles";
import { themeMui } from "./theme";
import "./i18next";

function App() {
  return (
    <Suspense fallback={<PageFallback />}>
      <div className="App">
        <QueryClientProvider client={queryClient}>
          <ThemeProvider theme={themeMui}>
            <AlertProvider>
              <BrowserRouter>
                <Router />
              </BrowserRouter>
            </AlertProvider>
          </ThemeProvider>
        </QueryClientProvider>
      </div>
    </Suspense>
  );
}

export default App;
