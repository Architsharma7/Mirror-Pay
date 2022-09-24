import CompanyInfo from "./companyinfo";
import Countries from "./countries";
import Wallet from "./wallet";
import { useState } from "react";
import styles from "../styles/onboarding.module.css";

export default function Onboarding() {
  const [page, setPage] = useState(0);
  const [formData, setFormData] = useState({
    companyname: "",
    companyemail: "",
  });

  const FormTitles = ["Company's Info", "Countries", "Wallet"];

  const PageDisplay = () => {
    if (page == 0) {
      return <CompanyInfo formData={formData} setFormData={setFormData}/>;
    } else if (page == 1) {
      return <Countries />;
    } else {
      return <Wallet />;
    }
  };


  return (
    <div className="w-screen h-screen flex mx-auto my-auto">
      <div className="md:basis-1/2 bg-black ">
        <img src="../images/cool.png" alt="" className="mt-4"/>
        <h3 className="text-white text-center text-xl">Let's get you onboard!! 🚀🚀</h3>
      </div>
      <div className="bg-gradient-to-r from-slate-200 via-emerald-300 to-cyan-400 w-screen h-screen">
        <div className={styles.form}>
          <div className={styles.progressbar}>
            <div
              style={{
                width: page === 0 ? "33.33%" : page == 1 ? "66.66%" : "100%",
              }}
            ></div>
          </div>

          <div className={styles.formcontainer}>
            <div className={styles.header}>
              <h1 className="text-2xl">{FormTitles[page]}</h1>
            </div>
            <div className={styles.body}>{PageDisplay()}</div>
            <div className={styles.footer}>
              <button
                onClick={() => {
                  setPage((currPage) => currPage - 1);
                }}
                hidden={page == 0}
                className="text-white bg-slate-700"
              >
                Previous
              </button>
              <button
                hidden={page == FormTitles.length - 1}
                onClick={() => {
                  setPage((currPage) => currPage + 1);
                }}
                className="text-white bg-slate-700"
              >
                {page == FormTitles.length - 1 ? "" : "Next"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
