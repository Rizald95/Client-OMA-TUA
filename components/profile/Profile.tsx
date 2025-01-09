"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./Profile.css"; // Import file CSS

export function Profile() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [nim, setNim] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const profileData = { name, email, phone, address, nim };
    localStorage.setItem("profileData", JSON.stringify(profileData));
    router.push("/user-profile");
  };

  return (
    <div className="profile-container">
      <form onSubmit={handleSubmit} className="profile-form">
        <h1 className="profile-title">Isi Profil Anda</h1>
        <input
          type="text"
          placeholder="Nama"
          className="profile-input"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Email"
          className="profile-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="tel"
          placeholder="Nomor Telepon"
          className="profile-input"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          required
        />
        <textarea
          placeholder="Alamat"
          className="profile-input"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="NIM"
          className="profile-input"
          value={nim}
          onChange={(e) => setNim(e.target.value)}
          required
        />
        <button type="submit" className="profile-button">
          Simpan Profil
        </button>
      </form>
    </div>
  );
}
