 
export interface MsStudent {
  id: number;
  name: string;
  supervisor: string;
  rollNo: string;
  researchArea: string;
  email: string;
  profileImagePath: string;
}

 
const dummyMsStudents: MsStudent[] = [
  {
    id: 1,
    name: "Venkataramana Prahaladh",
    supervisor: "Prof. Neminath Hubballi",
    rollNo: "ms2104101005",
    researchArea: "Software Defined Networks",
    email: "ms2104101005@iiti.ac.in",
    profileImagePath: "/msstudentpng/ms2104101005_Venkataramana Prahaladh.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 2,
    name: "Ashutosh Dhamaniya",
    supervisor: "Dr. Puneet Gupta",
    rollNo: "ms2304101005",
    researchArea: "N/A", // इमेज में खाली है
    email: "ms2304101005@iiti.ac.in",
    profileImagePath: "/msstudentpng/ms2204101005_Ashutosh Dhamaniya.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 3,
    name: "Aditi Rao S",
    supervisor: "Dr. Chandresh Kumar Maurya",
    rollNo: "ms2304101001",
    researchArea: "Natural Language Processing - Speech and Text",
    email: "ms2304101001@iiti.ac.in",
    profileImagePath: "/msstudentpng/Aditi Rao S.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 4,
    name: "Aditya Konade",
    supervisor: "Prof. Somnath Dey",
    rollNo: "ms2304101002",
    researchArea: "Precision Farming",
    email: "ms2304101002@iiti.ac.in",
    profileImagePath: "/msstudentpng/Aditya Kanade.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 5,
    name: "Gaurav Patel",
    supervisor: "Dr. Sidharth Sharma",
    rollNo: "ms2304101007",
    researchArea: "Network Optimization",
    email: "ms2304101007@iiti.ac.in",
    profileImagePath: "/msstudentpng/Gaurav Patel.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 6,
    name: "Lata Pandey",
    supervisor: "Dr. Nagendra Kumar",
    rollNo: "ms2304101009",
    researchArea: "Natural Language Processing / Deep learning",
    email: "ms2304101009@iiti.ac.in",
    profileImagePath: "/msstudentpng/Lata Pangtey.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 7,
    name: "Prajjval Dhiman",
    supervisor: "Prof. Gourinath Banda",
    rollNo: "ms2304101010",
    researchArea: "Machine learning",
    email: "ms2304101010@iiti.ac.in",
    profileImagePath: "/msstudentpng/Prajjval Dhiman.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 8,
    name: "Pranay Mallick",
    supervisor: "Dr. Soumi Chattopadhyay",
    rollNo: "ms2304101011",
    researchArea: "Recommendation System Using Deep learning",
    email: "ms2304101011@iiti.ac.in",
    profileImagePath: "/msstudentpng/Prolay Mallick.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 9,
    name: "Sourabh Singh",
    supervisor: " Dr. Aniruddha Singh Kushwaha",
    rollNo: "ms2304101012",
    researchArea: "Machine Learning Framework to implement on Programmable Network",
    email: "ms2304101012@iiti.ac.in",
    profileImagePath: "/msstudentpng/Sourabh Singh.jpg", // 👈 अपनी इमेज का पाथ डालें
  }, 
  {
    id: 10,
    name: "Suhas G Hegde",
    supervisor: "Prof. Aruna Tiwari",
    rollNo: "ms2304101013",
    researchArea: "Image Generation using Deep Learning",
    email: "ms2304101013@iiti.ac.in",
    profileImagePath: "/msstudentpng/Suhas G Hegde.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 11,
    name: "Urvesh Nileshbhai Trivedi",
    supervisor: "Prof. Abhishek Srivastava",
    rollNo: "ms2304101014",
    researchArea: "AI / ML (Gaining insights into AI based medical diagnosis )",
    email: "ms2304101014@iiti.ac.in",
    profileImagePath: "/msstudentpng/Urvesh Nileshbhai Trivedi.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 12,
    name: "Vaidehi Agarwal",
    supervisor: "Dr. Puneet Gupta",
    rollNo: "ms2304101015",
    researchArea: "application of remote photoplethysmography in health care",
    email: "ms2304101015@iiti.ac.in",
    profileImagePath: "/msstudentpng/Vaidehi Agarwal.jpg",  
  },
  {
    id: 13,
    name: "Debashish Utpal Biswas",
    supervisor: "Dr. Puneet Gupta",
    rollNo: "ms2404101001",
    researchArea: " ",
    email: "ms2404101001@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101001_Debashish Utpal Biswas.jpg",  
  },
  {
    id: 14,
    name: "Piyush",
    supervisor: "Dr. Bodhisatwa Mazumdar",
    rollNo: "ms2404101002",
    researchArea: " ",
    email: "ms2404101002@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101002_Piyush.jpg",  
  },
  {
    id: 15,
    name: "Jatin Sharma",
    supervisor: "Dr. Nagendra Kumar",
    rollNo: "ms2404101003",
    researchArea: " ",
    email: "ms2404101003@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101003_Jatin Sharma.jpg",  
  },
  {
    id: 16,
    name: "Vislavath Bansilal",
    supervisor: "Dr. Ayan Mandal",
    rollNo: "ms2404101004",
    researchArea: " ",
    email: "ms2404101004@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101004_Vislavath Bansilal.jpg",  
  },
  {
    id: 17,
    name: "Saransh Vashistha",
    supervisor: "Prof. Aruna Tiwari",
    rollNo: "ms2404101005",
    researchArea: " ",
    email: "ms2404101005@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101005_Saransh Vashistha.jpg",  
  },
  {
    id: 18,
    name: "Yashwardhan Manoj Raut",
    supervisor: "Dr. Subhra Mazumdar",
    rollNo: "ms2404101007",
    researchArea: " ",
    email: "ms2404101007@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101007_Yashwardhan Manoj Raut.jpg",  
  },
  {
    id: 19,
    name: "M Harsh Kumar",
    supervisor: "Prof. Somnath Dey",
    rollNo: "ms2404101008",
    researchArea: " ",
    email: "ms2404101008@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101008_M Harsh Kumar.jpg",  
  },
  {
    id: 20,
    name: "Rohan Bera",
    supervisor: "Dr. Chandresh Kumar Maurya",
    rollNo: "ms2404101009",
    researchArea: " ",
    email: "ms2404101009@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101009_Rohan Bera.jpg", 
  },
  {
    id: 21,
    name: "Mukul Kumar",
    supervisor: "Dr. Ranveer Singh",
    rollNo: "ms2404101010",
    researchArea: " ",
    email: "ms2404101010@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101010_Mukul Kumar.jpg",  
  },
  {
    id: 22,
    name: "Ayush Kumar Singh",
    supervisor: "Prof. Anirban Sengupta",
    rollNo: "ms2404101011",
    researchArea: " ",
    email: "ms2404101011@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101011_Ayush Kumar Singh.jpg",  
  },
  {
    id: 23,
    name: "Anand Suralkar",
    supervisor: "Dr. Soumi Chattopadhyay",
    rollNo: "ms2404101012",
    researchArea: " ",
    email: "ms2404101012@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101012_Anand Suralkar.jpg",  
  },
  {
    id: 24,
    name: "Vanish Jain",
    supervisor: "Prof. Surya Prakash",
    rollNo: "ms2404101013",
    researchArea: " ",
    email: "ms2404101013@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101013_Vanish Jain.jpg", 
  },
  {
    id: 25,
    name: "Masabattula Teja Nikhil",
    supervisor: "Dr. Ranveer Singh",
    rollNo: "ms2404101014",
    researchArea: " ",
    email: "ms2404101014@iiti.ac.in",
    profileImagePath: "/msstudentpng/2404101014_Masabattula Teja Nikhil.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 26,
    name: "Atharva Kulkarni",
    supervisor: "Prof. Surya Prakash",
    rollNo: "ms2504101002",
    researchArea: " ",
    email: "ms2504101002@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101002_Atharva Kulkarni.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 27,
    name: "Harish K P",
    supervisor: "Prof. Neminath Hubballi",
    rollNo: "ms2504101004",
    researchArea: " ",
    email: "ms2504101004@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101004_Harish K P.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 28,
    name: "Mohnish Raj",
    supervisor: "Dr. Soumi Chattopadhyay",
    rollNo: "ms2504101005",
    researchArea: " ",
    email: "ms2504101005@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101005_Mohnish Raj.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 29,
    name: "Mufaddal Hakim",
    supervisor: "Dr. Bodhisatawa Mazumdar",
    rollNo: "ms2504101006",
    researchArea: " ",
    email: "ms2504101006@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101006_Mufaddal Hakim.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 30,
    name: "Nishkarsh Verma",
    supervisor: "Prof. Aruna Tiwari",
    rollNo: "ms2504101007",
    researchArea: " ",
    email: "ms2504101007@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101007_Nishkarsh Verma.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 31,
    name: "Prathamesh Mukund Deshpande",
    supervisor: "Dr. Ayan Mondal",
    rollNo: "ms2504101008",
    researchArea: " ",
    email: "ms2504101008@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101008_Prathamesh Mukund Deshpande.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 32,
    name: "Rahul Kumar Rathore",
    supervisor: "Dr. Puneet Gupta",
    rollNo: "ms2504101009",
    researchArea: " ",
    email: "ms2504101009@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101009_Rahul Kumar Rathore.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 33,
    name: "Rajesh Kanna M R",
    supervisor: "Dr. Ranveer Singh",
    rollNo: "ms2504101010",
    researchArea: " ",
    email: "ms2504101010@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101010_Rajesh Kanna M R.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 34,
    name: "Rimil Mandi",
    supervisor: "Prof. Anirban Sengupta",
    rollNo: "ms2504101011",
    researchArea: " ",
    email: "ms2504101011@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101011_Rimil Mandi.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 35,
    name: "Rohan Thapa",
    supervisor: "Dr. Nagendra Kumar",
    rollNo: "ms2504101012",
    researchArea: " ",
    email: "ms2504101012@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101012_Rohan Thapa.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 36,
    name: "Saiyam Jain",
    supervisor: "Prof. Gourinath Banda",
    rollNo: "ms2504101013",
    researchArea: " ",
    email: "ms2504101013@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101013_Saiyam Jain.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
  {
    id: 37,
    name: "Shaikh Ubiad Ahmed",
    supervisor: "Prof. Somnath Dey",
    rollNo: "ms2504101015",
    researchArea: " ",
    email: "ms2504101015@iiti.ac.in",
    profileImagePath: "/msstudentpng/2504101015_Shaikh Ubiad Ahmed.jpg", // 👈 अपनी इमेज का पाथ डालें
  },
];

// 3. डेटा 'get' करने का फ़ंक्शन
export async function getMsStudents(): Promise<MsStudent[]> {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return dummyMsStudents;
}