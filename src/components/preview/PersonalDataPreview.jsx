import "../../styles/preview/PersonalDataPreview.css";

export default function PersonalDataPreview({fullName="-", jobTitle="-", email="-", phone="-", dateOfBirth="-", address="-"}) {
    return (
    <div id="personalData-preview">
        <h1>{fullName}</h1>
        <h2>{jobTitle}</h2>
        <h3 className="personalData-h3">E-mail: {email}</h3>
        <h3 className="personalData-h3">Phone: {phone}</h3>
        <h3 className="personalData-h3">Date of birth: {dateOfBirth}</h3>
        <h3 className="personalData-h3">Address: {address}</h3>
    </div>
    );
};
