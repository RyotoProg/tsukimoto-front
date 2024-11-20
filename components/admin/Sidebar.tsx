'use client'
import React, { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const [collapseShow, setCollapseShow] = useState("hidden");
  const router = useRouter();
  const pathname = usePathname();
  return (
    <>
      <nav className="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
        <div className="md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
          {/* Toggler */}
          <button
            className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
            type="button"
            onClick={() => setCollapseShow("bg-white m-2 py-3 px-6")}
          >
            <i className="fas fa-bars"></i>
          </button>
          {/* Brand */}
          <Link href="/dashboard" className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
              Tsukimoto
          </Link>
          {/* Collapse */}
          <div
            className={
              "md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded " +
              collapseShow
            }
          >
            {/* Collapse header */}
            <div className="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200">
              <div className="flex flex-wrap">
                <div className="w-6/12">
                  <Link href="/tsk/admin/dashboard" className="md:block text-left md:pb-2 text-blueGray-600 mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0">
                      Tsukimoto
                  </Link>
                </div>
                <div className="w-6/12 flex justify-end">
                  <button
                    type="button"
                    className="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    onClick={() => setCollapseShow("hidden")}
                  >
                    <i className="fas fa-times"></i>
                  </button>
                </div>
              </div>
            </div>
            {/* Divider */}
            <hr className="my-4 md:min-w-full" />
            {/* Navigation */}

            <ul className="md:flex-col md:min-w-full flex flex-col list-none">
              <li className="items-center">
                <Link href="/tsk/admin/dashboard" 
                    className={
                      "text-xs uppercase py-3 font-bold block " +
                      (pathname.indexOf("/tsk/admin/dashboard") !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-700 hover:text-gray-500")
                    }>
                    <i
                      className={
                        "fas fa-tv mr-2 text-sm " +
                        (pathname.indexOf("/tsk/admin/dashboard") !== -1
                          ? "opacity-75"
                          : "text-gray-500")
                      }
                    ></i>{" "}
                    Dashboard
                </Link>
              </li>

              <li className="items-center">
                <Link href="/tsk/admin/products"
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (pathname.indexOf("/tsk/admin/products") !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-700 hover:text-gray-500")
                      }
                >
                    <i
                      className={
                        "fas fa-warehouse mr-2 text-sm " +
                        (pathname.indexOf("/tsk/admin/products") !== -1
                          ? "opacity-75"
                          : "text-gray-500")
                      }
                    ></i>{" "}
                    Productos
                </Link>
              </li>

              <li className="items-center">
                <Link href="/tsk/admin/news" 
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (pathname.indexOf("/tsk/admin/news") !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-700 hover:text-gray-500")
                      }
                >
                    <i
                      className={
                        "fas fa-newspaper mr-2 text-sm " +
                        (pathname.indexOf("/tsk/admin/news") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Noticias
                </Link>
              </li>

              <li className="items-center">
                <Link href="/tsk/admin/shops" 
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (pathname.indexOf("/tsk/admin/shops") !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-700 hover:text-gray-500")
                      }
                >
                    <i
                      className={
                        "fas fa-shop mr-2 text-sm " +
                        (pathname.indexOf("/tsk/admin/shops") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Tiendas
                </Link>
              </li>
            </ul>

            <hr className="my-4 md:min-w-full" />

            <ul className="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
              <li className="items-center">
                <Link href="/tsk/admin/config" 
                    className={
                        "text-xs uppercase py-3 font-bold block " +
                        (pathname.indexOf("/tsk/admin/config") !== -1
                        ? "text-blue-500 hover:text-blue-600"
                        : "text-gray-700 hover:text-gray-500")
                      }
                >
                    <i
                      className={
                        "fas fa-gear mr-2 text-sm " +
                        (pathname.indexOf("/tsk/admin/config") !== -1
                          ? "opacity-75"
                          : "text-blueGray-300")
                      }
                    ></i>{" "}
                    Configuracion
                </Link>
              </li>
            </ul>
            
          </div>
        </div>
      </nav>
    </>
  );
}
