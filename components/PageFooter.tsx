import { version } from "@lib/version";
import Link from "next/link";

export default function PageFooter() {
    const year = new Date().getFullYear();
    
    return(
        <div className="footer">
            {year}©YourName - {version}
        </div>
    );
}