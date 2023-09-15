import "../../styles/preview/PersonalDataPreview.css";

export default function PersonalDataPreview() {
    return (
    <div id="personalData-preview">
        <h1>Full Name</h1>
        <h2>Job title</h2>
        <h3 className="personalData-h3">E-mail: test@gmail.com</h3>
        <h3 className="personalData-h3">Phone: 545 464 753</h3>
        <h3 className="personalData-h3">Date of birth: 23.05.1995</h3>
    </div>
    );
};
