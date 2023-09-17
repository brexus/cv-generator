import "../../styles/preview/PersonalDataPreview.css";

export default function PersonalDataPreview({dataCV, setDataCV}) {
    return (
        <div id="personalData-preview">
            <h1>{dataCV.personalData.fullName}</h1>
            <h2>{dataCV.personalData.jobTitle}</h2>
            <h3 className="personalData-h3">E-mail: {dataCV.personalData.email}</h3>
            <h3 className="personalData-h3">Phone: {dataCV.personalData.phone}</h3>
            <h3 className="personalData-h3">Date of birth: {dataCV.personalData.dateOB}</h3>
            <h3 className="personalData-h3">Address: {dataCV.personalData.address}</h3>
        </div>
    );
};
