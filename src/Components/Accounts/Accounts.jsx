import React from 'react'
import cards from "../../assets/Frame17.png"; 

const Accounts = () => {
  return (
    <section className=" lg:h-[900px] h-[710px] bg-white w-full pt-2 px-4 overflow-y-auto">
      <div className="pt-2 pb-3">
        <i className="fas fa-chevron-left text-xl"></i>
      </div>
      <div className="flex justify-between items-center my-2">
        <div>
          <p className="text-3xl">My Card</p>
          <small className="text-[12px] font-light">
            Tap Card for more detailed information
          </small>
        </div>
        <svg
          width="24"
          height="24"
          fill="#547ee8"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12M12 7.75a.75.75 0 0 0-.75.75v2.75H8.5a.75.75 0 0 0 0 1.5h2.75v2.75a.75.75 0 0 0 1.5 0v-2.75h2.75a.75.75 0 0 0 0-1.5h-2.75V8.5a.75.75 0 0 0-.75-.75" />
        </svg>
      </div>

      <div>
        <img src={cards} alt="" className='w-full' />
      </div>

      <div className="mt-6 flex justify-between items-center">
        <div>
          <p className="text-lg">Receive your card?</p>
          <p className="text-[12px] font-light w-36 mt-2">
            Tap the button to make sure your card is fully activated
          </p>
        </div>
        <button className="text-white text-sm bg-[#547ee8] rounded-md p-2 mt-4  w-32">
          Activate
        </button>
      </div>
    </section>
  );
}

export default Accounts
