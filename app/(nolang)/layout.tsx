import { PropsWithChildren, Suspense } from "react";
import Statistics from "@/components/Statisctics";

const GlobalLayout: React.FC<PropsWithChildren<object>> = async ({ children }) => <html><body>
    {children}
    <Suspense fallback={null}>
        <Statistics />
    </Suspense>
</body></html>

export default GlobalLayout;