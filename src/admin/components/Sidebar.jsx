// src/admin/components/Sidebar.jsx
import { useState } from "react";
import {
  FaBars,
  FaChartLine,
  FaCog,
  FaExchangeAlt,
  FaFileAlt,
  FaMoneyCheckAlt,
  FaTachometerAlt,
  FaTags,
  FaUserFriends,
  FaUsers,
  FaUserShield,
  FaWallet,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className={`sidebar ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-header">
        <h2 className="logo">{collapsed ? "SX" : "Solarx0"}</h2>
        <FaBars
          className="collapse-btn"
          onClick={() => setCollapsed(!collapsed)}
        />
      </div>

      <nav className="sidebar-menu">
        {/* Dashboard */}
        <NavLink to="/admin" end>
          <FaTachometerAlt /> <span>Dashboard</span>
        </NavLink>

        {/* Users */}
        <NavLink to="/admin/users">
          <FaUsers /> <span>Users</span>
        </NavLink>
        {/* <NavLink to="/admin/userdetails">
          <FaUsers /> <span>User Details</span>
        </NavLink> */}

        {/* Deposits */}
        <NavLink to="/admin/deposits/pending">
          <FaMoneyCheckAlt /> <span>Pending Deposits</span>
        </NavLink>
        <NavLink to="/admin/deposits/completed">
          <FaMoneyCheckAlt /> <span>Completed Deposits</span>
        </NavLink>

        {/* Withdrawals */}
        <NavLink to="/admin/withdrawals/pending">
          <FaWallet /> <span>Pending Withdrawals</span>
        </NavLink>
        <NavLink to="/admin/withdrawals/completed">
          <FaWallet /> <span>Completed Withdrawals</span>
        </NavLink>
        <NavLink to="/admin/withdrawals/settings">
          <FaWallet /> <span>Withdrawal Settings</span>
        </NavLink>

        {/* Transactions */}
        <NavLink to="/admin/transactions">
          <FaExchangeAlt /> <span>All Transactions</span>
        </NavLink>

        {/* Referrals */}
        <NavLink to="/admin/referrals/tree">
          <FaUserFriends /> <span>Referral Tree</span>
        </NavLink>
        <NavLink to="/admin/referrals/settings">
          <FaUserFriends /> <span>Referral Settings</span>
        </NavLink>
        <NavLink to="/admin/promocode">
          <FaTags /> <span>Promo Code</span>
        </NavLink>

        {/* Reports */}
        <NavLink to="/admin/reports/daily">
          <FaChartLine /> <span>Daily Report</span>
        </NavLink>
        <NavLink to="/admin/reports/monthly">
          <FaChartLine /> <span>Monthly Report</span>
        </NavLink>

        {/* CMS */}

        <NavLink to="/admin/cms/announcements">
          <FaFileAlt /> <span>Announcements</span>
        </NavLink>

        {/* Settings */}

        <NavLink to="/admin/settings/payment">
          <FaCog /> <span>Payment Settings</span>
        </NavLink>
        <NavLink to="/admin/settings/security">
          <FaCog /> <span>Security Settings</span>
        </NavLink>
        <NavLink to="/admin/settings/notifications">
          <FaCog /> <span>Notification Settings</span>
        </NavLink>

        {/* Admin Management */}
        <NavLink to="/admin/admins">
          <FaUserShield /> <span>Admin List</span>
        </NavLink>
        <NavLink to="/admin/admins/roles">
          <FaUserShield /> <span>Roles</span>
        </NavLink>
        <NavLink to="/admin/admins/logs">
          <FaUserShield /> <span>Admin Logs</span>
        </NavLink>
      </nav>
    </div>
  );
};

export default Sidebar;
