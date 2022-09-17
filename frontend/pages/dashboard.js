import Link from "next/link";
import { useState } from "react";

export default function Dashboard() {
  const [open, setOpen] = useState(true);
  const Menus = [
    {title: "hello", src: "control"},
    {title: "goodmorning", src: "control"},
    {title: "goodnight", src: "control", gap: true},
    {title: "bye-bye", src: "control"},
    {title: "breakfast", src: "control"},
    {title: "playground", src: "control", gap: true},
    {title: "baseball", src: "control"},
  ]

  return (
    <div className="flex bg-white">
      <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen bg-black relative p-5 pt-8`}>
        <img
          src="../images/control.png"
          alt=""
          className={`absolute cursor-pointer -right-4 top-9 w-9 border-2 border-black rounded-full ${!open && 'rotate-180'}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex items-center gap-x-4">
          <img src="../images/control.png" alt="" className={`cursor-pointer duration-300 ${open && "rotate-[360deg]"}`}/>
          <h1 className={`text-white origin-left ml-2 font-medium text-xl duration-300 ${!open && 'scale-0'}`}>MirrorPay</h1>
        </div>
        <ul className={`text-white pt-6`}>
         {Menus.map((menu, index) => (
          <li key={index} className={`${menu.gap? "mt-9" : "mt-2"} ${index === 0 && "bg-slate-400"} text-sm flex items-center gap-x-4 cursor-pointer p-2 rounded-md hover:bg-slate-400`}>
            <img src={`../images/${menu.src}.png`}/>
            <span className={`${!open && "hidden"} origin-left duration-300`}>{menu.title}</span>
          </li>
         ))}
        </ul>
      </div>
    </div>
  );
}
