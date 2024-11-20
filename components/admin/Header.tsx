'use client'
import React from "react";
import BtnModaladmin from "./Modal/BtnModaladmin";
import Link from "next/link";
import { product } from "./products/InterfaceProduct";

interface Gender{
  value:string;
  label:string
}

export default function Header({ page, back, add, type, genres, serie }: {page:string, back:string, add:string, type:string, genres:Array<Gender>, serie:Array<product> }) {
  return (
    <>
      <div className="flex justify-between flex-col sm:flex-row py-4">
          {back ? (
            <div className="top-0 left-0 w-full z-10 bg-transparent md:flex-row md:flex-nowrap md:justify-start flex items-center p-4 text-white">
            <div className="w-full mx-auto items-center flex md:flex-nowrap flex-wrap md:px-10 px-4">
              <Link className="text-sm uppercase inline-block font-semibold pt-3 pl-3 hover:text-slate-500" href={back}>
                <i className="fa-solid fa-arrow-left"></i> {page}
              </Link>
            </div>
          </div>
          ) : (
            ""
          )}
          <a
            className="text-sm uppercase inline-block text-center font-semibold pl-5"
            onClick={(e) => e.preventDefault()}
          >
            {page}
          </a>
          <BtnModaladmin add={add} type={type} genres={genres} serie={serie}/>
        </div>
    </>
  );
}