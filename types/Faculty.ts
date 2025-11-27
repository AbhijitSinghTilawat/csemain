// types/Faculty.ts
export interface Faculty {
    id: number;
    name: string;
    designation: string;
    specialization: string;
    email: string;
    profileImagePath: string;
    researchAreas: string[];
    education?: string;   // Optional, क्योंकि सभी faculty के पास नहीं हो सकता
    contact?: string;     // Optional, same reason
    profileUrl?: string;  // Optional, link न हो तो fallback "#"
}
