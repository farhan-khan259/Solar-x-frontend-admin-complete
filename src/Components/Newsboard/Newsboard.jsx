import React from "react";
import "./Newsboard.css";

export default function Newsboardd() {
  const activities = [
    "Raheel01: Just Withdrawal 300 PKR — 2 minutes ago!",
    "Bilal12: Just Deposit 5000 PKR — 4 minutes ago!",
    "Nadeem32: Level 1 Commission 400 PKR — 25 minutes ago!",
    "Fasil42: Level 2 Commission 200 PKR — 35 minutes ago!",
    "Faizan1: Level 3 Commission 100 PKR — 9 minutes ago!",
    "Ahsan09: Just Deposit 10000 PKR — 3 minutes ago!",
    "SanaKhan: Just Withdrawal 500 PKR — 6 minutes ago!",
    "Zeeshan77: Level 1 Commission 800 PKR — 14 minutes ago!",
    "Hamza12: Level 2 Commission 300 PKR — 20 minutes ago!",
    "AliRaza: Level 3 Commission 150 PKR — 28 minutes ago!",
    "Umair88: Just Withdrawal 700 PKR — 11 minutes ago!",
    "Hassan05: Just Deposit 2500 PKR — 17 minutes ago!",
    "Iqra24: Level 1 Commission 500 PKR — 8 minutes ago!",
    "Nashit14: Level 2 Commission 350 PKR — 19 minutes ago!",
    "Sara15: Level 3 Commission 120 PKR — 7 minutes ago!",
    "Kamran33: Just Deposit 8000 PKR — 5 minutes ago!",
    "Usman64: Just Withdrawal 900 PKR — 16 minutes ago!",
    "Shahbaz01: Level 1 Commission 450 PKR — 13 minutes ago!",
    "Hira88: Level 2 Commission 280 PKR — 22 minutes ago!",
    "Yasir29: Level 3 Commission 110 PKR — 10 minutes ago!",
    "Amir92: Just Deposit 1500 PKR — 12 minutes ago!",
    "Sadaf44: Just Withdrawal 350 PKR — 15 minutes ago!",
    "Rehan77: Level 1 Commission 470 PKR — 18 minutes ago!",
    "Arham32: Level 2 Commission 210 PKR — 26 minutes ago!",
    "Mahnoor20: Level 3 Commission 90 PKR — 30 minutes ago!",
    "Talha55: Just Deposit 7000 PKR — 3 minutes ago!",
    "Murtaza68: Just Withdrawal 600 PKR — 21 minutes ago!",
    "Ayesha90: Level 1 Commission 530 PKR — 9 minutes ago!",
    "Kashif71: Level 2 Commission 320 PKR — 29 minutes ago!",
    "Farah19: Level 3 Commission 140 PKR — 6 minutes ago!",
  ];

  return (
    <div className="newsboardd-containerd">
      <div className="newsboardd-headerd">
        <span className="newsboardd-statusd"></span>
        <span className="newsboardd-titled">Live Activity Solar X Team</span>
      </div>

      <div className="newsboardd-scroll-wrapperd">
        <div className="newsboardd-scroll-contentd">
          {activities.map((item, index) => (
            <div key={index} className="newsboardd-itemd">
              {item}
            </div>
          ))}
          {activities.map((item, index) => (
            <div key={`dup-${index}`} className="newsboardd-itemd">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
