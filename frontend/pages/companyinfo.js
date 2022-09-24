

export default function CompanyInfo(){
    return(
        <div className="flex flex-col mx-3">
            <input type="text" placeholder="Company's Name" className="mt-5 h-12 border border-slate-200 rounded" required/>
            <input type="text" placeholder="Company's Email" className="mt-5 h-12 border border-slate-200 rounded"/>
            <input type="text" placeholder="ENS Domain (optional)" className="mt-5 h-12 border border-slate-200 rounded"/>
        </div>
    );
};