import "../styles/Education.css";

export default function Education({dataCV, setDataCV, index}) {

    return (
        <div>
            <h3>#{index}</h3>
            <input 
                type="text" 
                
                placeholder="Field of study"
                onChange={(e) => {


                }}
            />

            <input 
                type="text" 
                
                placeholder="Name of university"
                onChange={(e) => {
                    
                }}
            />

            <input 
                type="text" 
                
                placeholder="Duration"
                onChange={(e) => {
                    
                }}
            />
        </div>
    );
};
