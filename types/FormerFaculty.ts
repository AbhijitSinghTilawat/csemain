export interface FormerFaculty {
    id: number;
    name: string;
    designation: string;
    department?: string;
    email?: string;
    profileImagePath: string;
    education?: string;
    contactNo?: string;   // 👈 यह नया field
    profileUrl?: string;
    duration?: string;    // 👈 यह नया field
    readMoreUrl?: string; // 👈 यह नया field
}
