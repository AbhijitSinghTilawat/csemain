export interface MtechStudent {
  id: string;
  name: string;
  supervisor: string;
  email: string;
  imageUrl: string;
}

export const allMtechData: Record<string, MtechStudent[]> = {
  "2024": [
    { id: "2402101002", name: "ANTIM JAIN", supervisor: "Dr. Ayan Mondal", email: "mt2402101002@iiti.ac.in", imageUrl: "/mtechpng/2402101002.jpg" },
    { id: "2402101003", name: "Sachin Sharma", supervisor: "Dr. Puneet Gupta", email: "mt2402101003@iiti.ac.in", imageUrl: "/mtechpng/2402101003.jpg" },
    { id: "2402101004", name: "Adarsh Mishra", supervisor: "Dr. Sasank Mouli", email: "mt2402101004@iiti.ac.in", imageUrl: "/mtechpng/2402101004.jpg" },
    { id: "2402101005", name: "Mohd Aamir", supervisor: "Dr. Nagendra Kumar", email: "mt2402101005@iiti.ac.in", imageUrl: "/mtechpng/2402101005.jpg" },
    { id: "2402101008", name: "Manish Solanki", supervisor: "Dr. Chandresh Kumar Maurya", email: "mt2402101008@iiti.ac.in", imageUrl: "/mtechpng/2402101008.jpg" },
    { id: "2402101009", name: "Anugunj Saini", supervisor: "Prof. Surya Prakash", email: "mt2402101009@iiti.ac.in", imageUrl: "/mtechpng/2402101009.jpg" },
    { id: "2402101011", name: "Rajat Tambare", supervisor: "Prof. Somnath Dey", email: "mt2402101011@iiti.ac.in", imageUrl: "/mtechpng/2402101011.jpg" },
    { id: "2402101012", name: "Money Bansal", supervisor: "Prof. Abhishek Srivastava", email: "mt2402101012@iiti.ac.in", imageUrl: "/mtechpng/2402101012.jpeg" },
    { id: "2402101013", name: "Bukke Roopa Sree", supervisor: "Dr. Aniruddha Singh Kushwaha", email: "mt2402101013@iiti.ac.in", imageUrl: "/mtechpng/2402101013.jpg" },
    { id: "2402101014", name: "Sandip Dnyaneshwar Ambre", supervisor: "Dr. Aniruddha Singh Kushwaha", email: "mt2402101014@iiti.ac.in", imageUrl: "/mtechpng/2402101014.jpg" },
    { id: "2402101015", name: "Himanshu Mishra", supervisor: "Prof. Abhishek Srivastava", email: "mt2402101015@iiti.ac.in", imageUrl: "/mtechpng/2402101015.jpg" },
    { id: "2402101016", name: "Harshal Shashikant Shinde", supervisor: "Prof. Gourinath Banda", email: "mt2402101016@iiti.ac.in", imageUrl: "/mtechpng/2402101016.jpg" },
    { id: "2402102017", name: "Suvash Chandra Yadav", supervisor: "Dr. Ayan Mondal", email: "mt2402102017@iiti.ac.in", imageUrl: "/mtechpng/2402102017.jpg" },
    { id: "2402102018", name: "Prajwal Lamsal", supervisor: "Dr. Subhra Mazumdar", email: "mt2402102018@iiti.ac.in", imageUrl: "/mtechpng/2402102018.jpg" },
    { id: "2402102019", name: "Ankit Kayastha", supervisor: "Prof. Neminath Hubballi", email: "mt2402102019@iiti.ac.in", imageUrl: "/mtechpng/2402102019.jpg" }
  ],
  "2025": [
    { id: "2502101001", name: "Ayush Kumar Pandey", supervisor: "Dr. Debasish Pattanayak", email: "mt2502101001@iiti.ac.in", imageUrl: "/mtechpng/2502101001.jpg" },
    { id: "2502101003", name: "Samshrita Ghimire", supervisor: "Dr. Aniruddha Singh Kushwah", email: "mt2502101003@iiti.ac.in", imageUrl: "/mtechpng/2502101003.jpg" },
    { id: "2502101004", name: "Jashkumar Sanjaybhai Dhanani", supervisor: "Dr. Chandresh K. Maurya", email: "mt2502101004@iiti.ac.in", imageUrl: "/mtechpng/2502101004.jpg" },
    { id: "2502101005", name: "Kaushik Sarmah", supervisor: "Dr. Subhra Mazumdar", email: "mt2502101005@iiti.ac.in", imageUrl: "/mtechpng/2502101005.jpg" },
    { id: "2502101006", name: "Mohit Arora", supervisor: "Prof. Kapil Ahuja", email: "mt2502101006@iiti.ac.in", imageUrl: "/mtechpng/2502101006.jpg" },
    { id: "2502101007", name: "Mukul Hayaran", supervisor: "Dr. Nagendra Kumar", email: "mt2502101007@iiti.ac.in", imageUrl: "/mtechpng/2502101007.jpg" },
    { id: "2502101008", name: "Nagendra Chouhan", supervisor: "Prof. Aruna Tiwari", email: "mt2502101008@iiti.ac.in", imageUrl: "/mtechpng/2502101008.jpg" },
    { id: "2502101009", name: "Saket Jain", supervisor: "Dr. Ayan Mondal", email: "mt2502101009@iiti.ac.in", imageUrl: "/mtechpng/2502101009.jpg" },
    { id: "2502101010", name: "Srishthy Agrawal", supervisor: "Prof. Abhishek Srivastava", email: "mt2502101010@iiti.ac.in", imageUrl: "/mtechpng/2502101010.jpg" },
    { id: "2502101011", name: "Sudhanshu Sharma", supervisor: "Dr. Sasank Mouli", email: "mt2502101011@iiti.ac.in", imageUrl: "/mtechpng/2502101011.jpg" },
    { id: "2502101012", name: "Suraj Ahirwar", supervisor: "Dr. Soumi Chattopadhyay", email: "mt2502101012@iiti.ac.in", imageUrl: "/mtechpng/2502101012.jpg" },
    { id: "2502101013", name: "Utkarsh Singh Rathore", supervisor: "Dr. Puneet Gupta", email: "mt2502101013@iiti.ac.in", imageUrl: "/mtechpng/2502101013.jpg" },
    { id: "2502101014", name: "Deepanshu Patil", supervisor: "Prof. Somnath Dey", email: "mt2502101014@iiti.ac.in", imageUrl: "/mtechpng/2502101014.jpg" },
    { id: "2502101015", name: "KATRAVATH NAGESH", supervisor: "Prof. Surya Prakash", email: "mt2502101015@iiti.ac.in", imageUrl: "/mtechpng/2502101015.jpg" },
    { id: "2502101016", name: "Rishabh Yadav", supervisor: "Dr. Subhra Mazumdar", email: "mt2502101016@iiti.ac.in", imageUrl: "/mtechpng/2502101016.jpg" },
    { id: "2502101018", name: "Sagar Kumar Sah", supervisor: "Prof. Abhishek Srivastava", email: "mt2502101018@iiti.ac.in", imageUrl: "/mtechpng/2502101018.jpg" }
  ]
};

export const allAlumniData = allMtechData;