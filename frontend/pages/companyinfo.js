
export default function CompanyInfo({formData, setFormData}){

    return(
        <div className="flex flex-col mx-3">
            <input type="text" placeholder="Company's Name" className="mt-5 h-12 border border-slate-200 rounded" required value={formData.companyname} onChange={(event) => {setFormData({...formData, companyname: event.target.value })}}/>
            <input type="text" placeholder="Company's Email" className="mt-5 h-12 border border-slate-200 rounded" required value={formData.companyemail} onChange={(event) => {setFormData({...formData, companyemail: event.target.value })}}/>
            <input type="text" placeholder="ENS Domain (optional)" className="mt-5 h-12 border border-slate-200 rounded"/>
        </div>
    );
};