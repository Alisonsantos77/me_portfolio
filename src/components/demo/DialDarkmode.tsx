import { ThemeProvider } from "../theme-provider";
import { ModeToggle } from "../theme-toggle";

export function DialDarkmode() {
    return (
        <div className="fixed bottom-28 end-6 sm:bottom-20">
            <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
                <ModeToggle />
            </ThemeProvider>
        </div>

    )
}

export default DialDarkmode