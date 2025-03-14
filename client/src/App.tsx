import { Route } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Header } from "./components/header";
import { Home } from "./pages/home";
import { WhatsAppChat } from "./components/WhatsAppChat";
import WebDevelopment from "./pages/services/web-development";
import FullStackDevelopment from "./pages/services/full-stack";
import UIUXDesign from "./pages/services/ui-ux-design";
import NotFound from "./pages/not-found";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">
          <Route path="/" component={Home} />
          <Route path="/services/web-development" component={WebDevelopment} />
          <Route path="/services/full-stack" component={FullStackDevelopment} />
          <Route path="/services/ui-ux-design" component={UIUXDesign} />
          <Route path="/:rest*" component={NotFound} />
        </main>
        <WhatsAppChat />
      </div>
    </QueryClientProvider>
  );
}

export default App;