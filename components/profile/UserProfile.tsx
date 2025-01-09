"use client";

import { useEffect, useState } from "react";
import "./UserProfile.css";  // Mengimpor file CSS

type ProfileData = {
  name: string;
  email: string;
  phone: string;
  address: string;
  nim: string;
};

export default function UserProfile() {
  const [profileData, setProfileData] = useState<ProfileData | null>(null);

  useEffect(() => {
    const storedData = localStorage.getItem("profileData");
    if (storedData) {
      setProfileData(JSON.parse(storedData));
    }
  }, []);

  if (!profileData) {
    return (
      <div className="profile-container">
        <p className="loading-text">Memuat data...</p>
      </div>
    );
  }

  return (
    <div className="profile-container">
      <div className="profile-card">
        <h1 className="profile-title">Profil Anda</h1>
        <div className="profile-info">
          <p>
            <strong>Nama:</strong> {profileData.name}
          </p>
          <p>
            <strong>Email:</strong> {profileData.email}
          </p>
          <p>
            <strong>Nomor Telepon:</strong> {profileData.phone}
          </p>
          <p>
            <strong>Alamat:</strong> {profileData.address}
          </p>
          <p>
            <strong>NIM:</strong> {profileData.nim}
          </p>
        </div>
        <button
          onClick={() => {
            window.location.href = "/";
          }}
          className="back-button"
        >
          Kembali ke Halaman Utama
        </button>
      </div>
    </div>
  );
}
