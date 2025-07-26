import PagesWrapper from "@/components/wrappers/PagesWrapper";
import React from "react";

const ContactPage = () => {
  return (
    <PagesWrapper title="Contact">
      <div className="flex gap-12 flex-col md:flex-row">
        <div className="flex-1 flex flex-col gap-6">
          <p>email@kata.design</p>
          <p className="bg-green-200 w-full md:max-w-[368px] h-54"></p>
          <div className="flex justify-between md:w-[80%]">
            <div className="flex flex-col gap-4">
              <p className="uppercase font-medium">Find us</p>
              <div className="flex justify-between">
                <p className="text-gray-600 font-medium">IG</p>
                <p className="text-gray-600 font-medium">VM</p>
                <p className="text-gray-600 font-medium">LI</p>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-medium">Montenegro, Europe</p>
              <p className="font-medium">+382 1234567</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-6 w-full">
          <p className="text-lg">Say hello</p>
          <form className="w-full lg:w-[80%] mx-auto">
            <div className="flex md:flex-col lg:flex-row items-center gap-2 w-full">
              <div className="flex flex-col gap-0.5 w-full">
                <label className="uppercase font-medium">Name</label>
                <input
                  placeholder="Your name"
                  className="focus:outline-none py-1"
                />
              </div>
              <div className="flex flex-col gap-0.5 w-full">
                <label className="uppercase font-medium">Subject</label>
                <input
                  placeholder="Choose subject"
                  className="focus:outline-none py-1"
                />
              </div>
            </div>
            <div className="flex md:flex-col lg:flex-row items-center gap-2 w-full">
              <div className="flex flex-col gap-0.5 w-full">
                <label className="uppercase font-medium">Company</label>
                <input
                  placeholder="Your company"
                  className="focus:outline-none py-1"
                />
              </div>
              <div className="flex flex-col gap-0.5 w-full">
                <label className="uppercase font-medium">Mail</label>
                <input
                  placeholder="E-mail address"
                  className="focus:outline-none py-1"
                />
              </div>
            </div>
            <hr className="my-6 h-0.5 bg-black" />
            <div className="flex flex-col gap-1">
              <label className="uppercase font-medium">Message</label>
              <textarea
                placeholder="Start typing here..."
                className="min-h-36 max-h-96 bg-gray-100 p-2"
              />
            </div>
            <button className="my-4 border border-black py-1.5 min-w-28 cursor-pointer hover:bg-black hover:text-white transition-all ease-linear duration-200">
              Submit
            </button>
          </form>
        </div>
      </div>
    </PagesWrapper>
  );
};

export default ContactPage;
