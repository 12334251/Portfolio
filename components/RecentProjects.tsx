/* eslint-disable @next/next/no-img-element */
"use client";

import { projects } from "@/data";
import React from "react";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa6";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalProvider,
  ModalTrigger,
} from "./ui/animated-modal";
import { FiSmartphone, FiGithub, FiGlobe } from "react-icons/fi";

const RecentProjects = () => {
  return (
    <ModalProvider>
      <div className="pb-20" id="projects">
        <h1 className="heading">
          A small selection of{" "}
          <span className="text-purple">recent projects</span>
        </h1>
        <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-8 mt-10">
          {projects.map(
            ({
              id,
              title,
              des,
              img,
              iconLists,
              link,
              gitLink,
              mobileAppLink,
            }) => (
              <Modal key={id}>
                <ModalTrigger className="sm:h-[41rem] h-[32rem] lg:min-h-[32.5rem] flex items-center justify-center sm:w-[570px] w-[80vw]">
                  <PinContainer title={gitLink} href={gitLink}>
                    <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh] mb-10">
                      <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                        <img src="/bg.png" alt="bg-img" />
                      </div>
                      <img
                        src={img}
                        alt={title}
                        className={`z-10 absolute bottom-0 ${
                          id === 1 ? "w-[90%] h-[90%]" : ""
                        }`}
                      />
                    </div>
                    <h1 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
                      {title}
                    </h1>
                    <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2">
                      {des}
                    </p>
                    <div className="flex items-center justify-between mt-7 mb-3">
                      <div className="flex items-center">
                        {iconLists.map((icon, index) => (
                          <div
                            key={icon}
                            className="border border-white/[0.2] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                            style={{
                              transform: `translateX(-${5 * index * 2}px)`,
                            }}
                          >
                            <img src={icon} alt={icon} className="p-2" />
                          </div>
                        ))}
                      </div>
                      <div className="flex justify-center items-center">
                        <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                          Check Live Site
                        </p>
                        <FaLocationArrow className="ms-3" color="#CBACF9" />
                      </div>
                    </div>
                  </PinContainer>
                  {/* </a> */}
                </ModalTrigger>
                <ModalBody>
                  <ModalContent>
                    <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                      Take a look at my{" "}
                      <span className="px-1 py-0.5 rounded-md bg-gray-100 dark:bg-neutral-800 dark:border-neutral-700 border border-gray-200">
                        {(() => {
                          const items: string[] = [];
                          if (mobileAppLink) items.push("mobile app");
                          if (link) items.push("website");
                          items.push("GitHub repo");

                          if (items.length === 1) {
                            return items[0];
                          } else if (items.length === 2) {
                            return items.join(" and ");
                          } else {
                            return (
                              items.slice(0, -1).join(", ") +
                              ", and " +
                              items[items.length - 1]
                            );
                          }
                        })()}
                      </span>{" "}
                      — enjoy! 🚀
                    </h4>
                    {/* ─── NEW responsive frame/container ─── */}
                    <div className="relative w-[80vw] max-w-[100%] aspect-[16/9] overflow-hidden rounded-2xl bg-[#13162d] mx-auto">
                      {/* ─── Full‐bleed “floor” or background image ─── */}
                      <img
                        src="/bg.png"
                        alt="dark‐frame background"
                        className="absolute inset-0 w-full h-full object-cover"
                      />

                      {/* ─── Project screenshot (Earth, etc.), centered and fully visible ─── */}
                      <img
                        src={img}
                        alt={title}
                        className={`absolute inset-0 m-auto object-contain ${
                          id === 1
                            ? "w-[90%] h-[90%] bottom-0 mb-0"
                            : " w-full h-full"
                        }`}
                      />
                    </div>
                  </ModalContent>
                  <ModalFooter className="flex flex-wrap justify-center gap-4 px-4 py-3">
                    {/* Mobile App Button */}
                    {mobileAppLink && (
                      <a
                        href={mobileAppLink}
                        rel="noopener noreferrer"
                        className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-indigo-500 to-blue-500 text-white rounded-md hover:from-indigo-600 hover:to-blue-600 transition-colors duration-150"
                      >
                        {/* Icon background “pill” */}
                        <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/30 rounded-full">
                          <FiSmartphone className="w-4 h-4 text-white" />
                        </span>
                        View Mobile App
                      </a>
                    )}

                    {/* GitHub Repo Button */}
                    <a
                      href={gitLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition-colors duration-150"
                    >
                      <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/20 rounded-full">
                        <FiGithub className="w-4 h-4 text-white" />
                      </span>
                      GitHub Repo
                    </a>

                    {/* Live Website Button */}
                    {link && (
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center w-full sm:w-auto px-4 py-2 bg-gradient-to-r from-green-500 to-teal-500 text-white rounded-md hover:from-green-600 hover:to-teal-600 transition-colors duration-15"
                      >
                        <span className="flex items-center justify-center mr-2 w-6 h-6 bg-white/30 rounded-full">
                          <FiGlobe className="w-4 h-4 text-white" />
                        </span>
                        Visit Website
                      </a>
                    )}
                  </ModalFooter>
                </ModalBody>
              </Modal>
            )
          )}
        </div>
      </div>
    </ModalProvider>
  );
};

export default RecentProjects;
