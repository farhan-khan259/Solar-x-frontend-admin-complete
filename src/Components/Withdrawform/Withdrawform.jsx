import { useState } from "react";
import { FaArrowLeft, FaLock, FaShieldAlt } from "react-icons/fa";
import { MdAccountBalance } from "react-icons/md";
import { Link } from "react-router-dom";
import "./Withdrawform.css";

const Withdrawform = () => {
  const [bankName, setBankName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");

  return (
    <div className="withdraw-container2">
      <div className="header2">
        <Link to="/withdraw" className="back-link2">
          <FaArrowLeft />
        </Link>
        <h1 className="wdrawfund"> Withdraw Funds</h1>
      </div>

      <div className="balance-box2">
        <p>Available Balance</p>
        <h2>0 PKR</h2>
      </div>

      <div className="step-section2">
        <h2>
          <span className="step-number2">Step 1:</span> Withdrawal Account
          Status
        </h2>

        <div className="status-box2">
          <div className="icon-circle2">
            <FaShieldAlt />
          </div>
          <h3 className="status-title2">
            <FaLock className="lock-icon2" /> Account Not Bound
          </h3>
          <p className="status-2">
            You must bind your withdrawal account before applying for a
            withdrawal.
          </p>

          <div className="form-box2">
            <h4 className="form-heading2">
              <MdAccountBalance className="icon2" /> Bank Account Details
            </h4>

            <div className="form-group2">
              <label>Bank / Wallet Name</label>
              <select
                className="bank-select2"
                value={bankName}
                onChange={(e) => setBankName(e.target.value)}
              >
                <option value="">Select Your Bank or Wallet</option>

                <optgroup label="Banks">
                  <option>Habib Bank Limited (HBL)</option>
                  <option>Meezan Bank</option>
                  <option>Allied Bank</option>
                  <option>United Bank Limited (UBL)</option>
                  <option>National Bank of Pakistan (NBP)</option>
                  <option>Bank Alfalah</option>
                  <option>MCB Bank</option>
                  <option>Bank of Punjab</option>
                  <option>Askari Bank</option>
                  <option>Faysal Bank</option>
                  <option>JS Bank</option>
                  <option>Soneri Bank</option>
                  <option>Samba Bank</option>
                  <option>Al Baraka Bank</option>
                  <option>Dubai Islamic Bank</option>
                </optgroup>

                <optgroup label="Digital Wallets">
                  <option>Easypaisa Wallet</option>
                  <option>JazzCash Wallet</option>
                  <option>SadaPay Wallet</option>
                  <option>NayaPay Wallet</option>
                  <option>UPaisa Wallet</option>
                </optgroup>
              </select>
            </div>

            <div className="form-group2">
              <label>Account Holder Name</label>
              <input
                type="text"
                placeholder="Full name as per bank account"
                value={accountName}
                onChange={(e) => setAccountName(e.target.value)}
              />
            </div>

            <div className="form-group2">
              <label>Account Number</label>
              <input
                type="number"
                placeholder="16-digit account number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
              />
            </div>

            <div className="form-actions2">
              <button className="bind-btn2">
                <Link
                  to="/withdrawfunds"
                  state={{ bankName, accountName, accountNumber }}
                >
                  Bind Now
                </Link>
              </button>
              <button className="cancel-btn2">
                <Link to="/withdraw">Cancel</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Withdrawform;
