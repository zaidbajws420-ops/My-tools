import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import PasswordGeneratorPage from "./pages/tools/PasswordGeneratorPage";
import AgeCalculatorPage from "./pages/tools/AgeCalculatorPage";
import YouTubeThumbnailPage from "./pages/tools/YouTubeThumbnailPage";
import ImageCompressorPage from "./pages/tools/ImageCompressorPage";
import InstagramBioPage from "./pages/tools/InstagramBioPage";
import QRCodeGeneratorPage from "./pages/tools/QRCodeGeneratorPage";
import PasswordGeneratorBlog from "./pages/blog/PasswordGeneratorBlog";
import AgeCalculatorBlog from "./pages/blog/AgeCalculatorBlog";
import YouTubeThumbnailBlog from "./pages/blog/YouTubeThumbnailBlog";
import ImageCompressorBlog from "./pages/blog/ImageCompressorBlog";
import InstagramBioBlog from "./pages/blog/InstagramBioBlog";
import QRCodeGeneratorBlog from "./pages/blog/QRCodeGeneratorBlog";

function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      {/* Tool Pages */}
      <Route path={"/tools/password-generator"} component={PasswordGeneratorPage} />
      <Route path={"/tools/age-calculator"} component={AgeCalculatorPage} />
      <Route path={"/tools/youtube-thumbnail-downloader"} component={YouTubeThumbnailPage} />
      <Route path={"/tools/image-compressor"} component={ImageCompressorPage} />
      <Route path={"/tools/instagram-bio-generator"} component={InstagramBioPage} />
      <Route path={"/tools/qr-code-generator"} component={QRCodeGeneratorPage} />
      {/* Blog Pages */}
      <Route path={"/blog/password-generator"} component={PasswordGeneratorBlog} />
      <Route path={"/blog/age-calculator"} component={AgeCalculatorBlog} />
      <Route path={"/blog/youtube-thumbnail-downloader"} component={YouTubeThumbnailBlog} />
      <Route path={"/blog/image-compressor"} component={ImageCompressorBlog} />
      <Route path={"/blog/instagram-bio-generator"} component={InstagramBioBlog} />
      <Route path={"/blog/qr-code-generator"} component={QRCodeGeneratorBlog} />
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
