import express from 'express';
import cors from 'cors';
const app = express();
const port = process.env.PORT || 3000;

const usersData = [
  {
    id: 8,
    name: 'Akash Sharma',
    email: 'akashsharma@example.com',
    skills: 'Python, Django, Flask',
    interests: 'AI, Machine Learning, Cricket',
    profileImage: 'https://picsum.photos/207/300',
  },
  
  {
    id: 9,
    name: 'Sekhar Reddy',
    email: 'sekharreddy@example.com',
    skills: 'JavaScript, React, Node.js',
    interests: 'Web Development, Travel, Photography',
    profileImage: 'https://picsum.photos/208/300',
  },
  
  {
    id: 10,
    name: 'Lokesh Kumar',
    email: 'lokeshkumar@example.com',
    skills: 'Java, Spring Boot, Hibernate',
    interests: 'Software Architecture, Reading, Soccer',
    profileImage: 'https://picsum.photos/209/300',
  },
  
  {
    id: 11,
    name: 'Avinash Singh',
    email: 'avinashsingh@example.com',
    skills: 'C++, Data Structures, Algorithms',
    interests: 'Competitive Programming, Science Fiction, Gaming',
    profileImage: 'https://picsum.photos/210/300',
  },
  
  {
    id: 12,
    name: 'Hemanth Kumar',
    email: 'hemanthkumar@example.com',
    skills: 'Angular, TypeScript, MongoDB',
    interests: 'UI/UX Design, Cycling, Music',
    profileImage: 'https://picsum.photos/211/300',
  },
  
  {
    id: 13,
    name: 'Rakesh Patel',
    email: 'rakeshpatel@example.com',
    skills: 'PHP, Laravel, MySQL',
    interests: 'Entrepreneurship, Movies, Cooking',
    profileImage: 'https://picsum.photos/212/300',
  },
  
  {
    id: 14,
    name: 'Guru Prasad',
    email: 'guruprasad@example.com',
    skills: 'DevOps, Docker, Kubernetes',
    interests: 'Open Source, Traveling, Coffee',
    profileImage: 'https://picsum.photos/213/300',
  },
  
  
];

app.use(cors());

app.get("/", (req, res) => {
  res.json(usersData); 
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});





