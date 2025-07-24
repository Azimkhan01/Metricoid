import React, { useEffect, useState } from 'react';
import { IoPencilSharp } from "react-icons/io5";

const fallbackUsers = [
  {
    initials: "DL",
    name: "Dwain Littrell",
    email: "dlittrell1@pcworld.com",
    address: "952 Magdeline Trail",
    phone: "904-118-9004",
    website: "feedspan.com",
    company: {
      name: "Feedspan",
      tagline: "Nisi excepteur ad conse...",
    },
    image: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  {
    initials: "JD",
    name: "John Doe",
    email: "john_doe@gmail.com",
    address: "86 Cramlin str, Idaho, PL, 02928",
    phone: "(293) 441-8015",
    website: "wagner.com",
    company: {
      name: "Wagner LLC",
      tagline: "Nisi excepteur ad conse...",
    },
    image: null
  }
];

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8000/getData')
      .then((res) => {
        if (!res.ok) {
          throw new Error('Server not responding');
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data)) {
          setUsers(data);
        } else {
          setUsers(fallbackUsers);
        }
      })
      .catch((err) => {
        console.error('Fetch failed:', err.message);
        setUsers(fallbackUsers);
      });
  }, []);

  return (
    <section className="min-h-screen w-full flex justify-center items-center bg-pink-50">
      <div className="flex flex-wrap gap-6 justify-center">
        {users.map((user, index) => (
          <Card key={index} user={user} />
        ))}
      </div>
    </section>
  );
}

const Card = ({ user }) => {
  return (
    <div className="flex bg-pink-100 rounded-xl shadow-md p-4 w-[380px]">
      <div className="w-1/3 flex items-center justify-center">
        {user.image ? (
          <img
            src={user.image}
            alt={user.name}
            className="w-20 h-20 rounded-full object-cover"
          />
        ) : (
          <div className="w-20 h-20 rounded-full bg-pink-300 flex items-center justify-center text-2xl font-semibold text-gray-800">
            {user.initials}
          </div>
        )}
      </div>
      <div className="w-2/3 p-5 rounded relative bg-white">
        <div className="flex justify-between items-start">
          <h2 className="text-xl font-semibold text-gray-800">{user.name}</h2>
          <button className="text-blue-500 border-2 border-blue-500/50 p-1.5 rounded bg-blue-50">
            <IoPencilSharp />
          </button>
        </div>
        <p className="text-sm text-gray-600 mt-1">📧 {user.email}</p>
        <p className="text-sm text-gray-600">📍 {user.address}</p>
        <p className="text-sm text-gray-600">📞 {user.phone}</p>
        <a
          href={`https://${user.website}`}
          className="text-sm text-blue-500 underline"
          target="_blank"
          rel="noopener noreferrer"
        >
          🌐 {user.website}
        </a>
        <div className="mt-2 flex items-center">
          <div className="w-6 h-6 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 mr-2" />
          <div>
            <p className="text-sm font-semibold text-gray-800">{user.company.name}</p>
            <p className="text-xs text-gray-500">{user.company.tagline}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
