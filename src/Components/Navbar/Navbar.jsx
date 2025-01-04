import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { QrReader } from "react-qr-reader"; 
import scan from "../../assets/scan.png";

const Navbar = () => {
  const location = useLocation();
  const [active, setActive] = useState(location.pathname);
  const [showScanner, setShowScanner] = useState(false); // Toggle for QR Scanner
  const [qrData, setQrData] = useState(null); // Store scanned QR data
  const [showModal, setShowModal] = useState(false); // Toggle for Add Manually modal
  const [inputValue, setInputValue] = useState(""); // Input value for UID

  // Update active state whenever the location changes
  useEffect(() => {
    console.log(location.pathname);
    setActive(location.pathname);

  }, [location.pathname]);

  // Function to determine the icon color based on active state
  const getIconColor = (route) => (active === route ? "#547ee8" : "#000");

  // Handle QR scanner result
  const handleScan = (result) => {
    if (result) {
      setQrData(result.text); // Use result.text for the scanned QR data
      setShowScanner(false); // Close scanner after successful scan
      console.log("Scanned Data:", result.text);
    }
  };

  const handleError = (error) => {
    console.error("QR Scanner Error:", error);
  };

  return (
    <section className="relative navcon">
      <div className="navbar flex justify-between items-center">
        {/* Home Icon */}
        <div className="nav-item">
          <Link to="/" onClick={() => setActive("/dashboard")}>
            <i
              className="fas fa-home"
              style={{
                color: getIconColor("/dashboard"),
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/dashboard"),
                border: active === "/dashboard" ? "3px solid #547ee8" : "none",
                borderRadius: "5px",
                width: "100%",
              }}
            ></div>
          </Link>
        </div>

        {/* Chart Icon */}
        <div className="nav-item me-10">
          <Link to="/chart" onClick={() => setActive("/chart")}>
            <i
              className="fas fa-chart-bar"
              style={{
                color: getIconColor("/chart"),
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/chart"),
                border: active === "/chart" ? "3px solid #547ee8" : "none",
                borderRadius: "5px",
                width: "100%",
              }}
            ></div>
          </Link>
        </div>

        {/* Floating QR Code Scanner Button */}
        <div className="absolute flex justify-center items-center -mt-6">
          <button
            onClick={() => setShowScanner(true)}
            className="bg-gradient-to-r to-orange-300 from-[#f38d43] rounded-full p-3 shadow-lg hover:scale-105 transition-transform"
            style={{ width: "60px", height: "60px" }}
          >
            <img src={scan} alt="Scan QR Code" />
          </button>
        </div>

        {/* Cards Icon */}
        <div className="nav-item ms-10">
          <Link to="/cards" onClick={() => setActive("/cards")}>
            <i
              className="fas fa-credit-card"
              style={{
                color: getIconColor("/cards"),
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/cards"),
                border: active === "/cards" ? "3px solid #547ee8" : "none",
                borderRadius: "5px",
                width: "100%",
              }}
            ></div>
          </Link>
        </div>

        {/* Profile Icon */}
        <div className="nav-item">
          <Link to="/profile" onClick={() => setActive("/profile")}>
            <i
              className="fas fa-user"
              style={{
                color: getIconColor("/profile"),
                fontSize: "20px",
                paddingBottom: "5px",
              }}
            ></i>
            <div
              style={{
                backgroundColor: getIconColor("/profile"),
                border: active === "/profile" ? "3px solid #547ee8" : "none",
                borderRadius: "5px",
                width: "100%",
              }}
            ></div>
          </Link>
        </div>
      </div>

      {/* QR Code Scanner Modal */}
      {showScanner && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50">
          <div className="fixed top-0 p-3 px-5 flex gap-20 bg-white w-full items-center rounded-b-2xl">
            <button
              onClick={() => setShowScanner(false)}
              className=" text-black font-bold text-lg"
            >
              <i className="fas fa-chevron-left"></i>
            </button>

            <p>Scan user QR</p>
          </div>
          <div className="relative w-72 h-72">
            <div className="absolute inset-0 ">
              {/* Corner Borders */}
              <div className="absolute top-6 -left-3 w-8 h-8 border-t-4 border-l-4 border-[#547ee8]"></div>
              <div className="absolute top-6 -right-3 w-8 h-8 border-t-4 border-r-4 border-[#547ee8]"></div>
              <div className="absolute bottom-6 -left-3 w-8 h-8 border-b-4 border-l-4 border-[#547ee8]"></div>
              <div className="absolute bottom-6 -right-3 w-8 h-8 border-b-4 border-r-4 border-[#547ee8]"></div>
            </div>
            {/* QR Reader */}
            <QrReader
              onResult={handleScan}
              constraints={{ facingMode: "environment" }}
              containerStyle={{ width: "100%", height: "100%" }}
              onError={handleError}
              className="rounded-lg"
            />
          </div>

          <div className="mt-24">
            <button
              onClick={() => setShowModal(true)}
              className="bg-[#547ee8] text-white px-4 py-2 rounded-lg mt-4 w-full"
            >
              Add manually
            </button>
          </div>
          {qrData && (
            <p className="mt-4 text-white text-lg">Scanned: {qrData}</p>
          )}
        </div>
      )}

      {/* Add Manually Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex flex-col justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-80">
            <h2 className="text-xl font-bold mb-4 text-center">Input UID</h2>
            <input
              type="text"
              placeholder="UID:"
              className="border border-gray-300 p-2 w-full rounded"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
            />
            <div className="mt-4 flex justify-between gap-4">
              <button
                onClick={() => {setShowModal(false)}}
                className="px-4 py-2 bg-[#f38d43] text-white rounded"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setInputValue("");
                  console.log("UID entered:", inputValue);
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-[#547ee8] w-full text-white rounded"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Navbar;
