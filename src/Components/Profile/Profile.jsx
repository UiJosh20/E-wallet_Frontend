import React, { useEffect, useState } from "react";
import qrcode from "../../assets/Vector_2.png";
import user from "../../assets/user.png";
import logo from "../../assets/logo.png";
import code from "../../assets/Group.png";
import { fetchTransactions } from "../../api";
import { QrReader } from "react-qr-reader"; 


const Profile = () => {
  const [username, setUsername] = useState("");
  const [balance, setBalance] = useState("");
  const [uid, setUid] = useState("");
  const [showModalcode, setShowModalcode] = useState(false);
    const [showScanner, setShowScanner] = useState(false); 
    const [qrData, setQrData] = useState(null); 
    const [showModal, setShowModal] = useState(false); 
    const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const res = await fetchTransactions();
    setBalance(res.data.balance);
    setUsername(res.data.name);
    setUid(res.data.UID);
  };

  
  const handleScan = (result) => {
    if (result) {
      setQrData(result.text);
      setShowScanner(false); 
     
    }
  };

  const handleError = (error) => {
    console.error("QR Scanner Error:", error);
  };
  return (
    <section className="lg:h-[900px] h-[770px] bg-white w-full pt-2 px-4 overflow-y-auto">
      <div className="flex justify-between items-center mt-4">
        <i className="fas fa-chevron-left text-2xl text-gray-600"></i>
        <i className="fas fa-ellipsis text-2xl text-gray-600"></i>
      </div>

      <main>
        <img src={user} alt="user" className="mx-auto w-20 relative top-28" />
        <img src={qrcode} alt="qrcode" className="mx-auto" />

        <div className="text-center my-3">
          <p className="mb-5">Send to:</p>
          <p className="text-xl mb-5">Call me {username}</p>
          <p className="text-lg font-extralight mb-5">UID {uid}</p>
          <p className="text-4xl"> $ {balance.toLocaleString()}</p>
        </div>

        <div className="flex flex-col">
          <div className="flex items-center gap-4 mx-auto shadow-lg rounded-lg p-5 justify-center bg-[#f9f9f9]">
            <img src={logo} alt="logo" />
            <small className="text-sm">Zenith Bank Account ****703804</small>
          </div>
          <p className="text-center text-[12px] my-3">
            Amet minim mollit non deserunt ullamco est sit aliqua
          </p>

          {/* Show Modal Button */}
          <button
            className="bg-[#547ee8] rounded-lg p-3 text-white mx-auto w-60"
            onClick={() => setShowModalcode(true)}
          >
            Show QR Code
          </button>
        </div>
      </main>

      {/* QR Code Modal */}
      {showModalcode && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 transition-opacity duration-300">
          <div className="bg-white rounded-lg p-6 w-[90%] md:w-[50%] shadow-lg transition-transform duration-300 scale-100">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Call me {username}</h2>
              <button
                onClick={() => setShowModalcode(false)}
                className="text-gray-500 hover:text-gray-800"
              >
                <i className="fas fa-close"></i>
              </button>
            </div>
            <div className="flex flex-col items-center">
              <img src={code} alt="QR Code" className="w-40 h-40 mb-4" />
              <p className="text-lg font-extralight mb-5">UID {uid}</p>

              <button
                className="border border-[#547ee8] rounded-lg px-4 py-2 text-[#547ee8] flex gap-5 items-center"
                onClick={() => setShowScanner(true)}
              >
                <i className="fas fa-camera"></i>
                Scan QR Code
              </button>
            </div>
          </div>
        </div>
      )}

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
                onClick={() => {
                  setShowModal(false);
                }}
                className="px-4 py-2 bg-[#f38d43] text-white rounded"
              >
                Cancel
              </button>

              <button
                onClick={() => {
                  setInputValue("");
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

export default Profile;
