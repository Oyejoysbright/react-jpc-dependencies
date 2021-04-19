import { useEffect } from 'react'

function FieldWatcher({ids, active = [""]}) {
    
    const getAllId = () => {
        var IDs = [];
        const elements = document.querySelectorAll("*[id]:not([id=''])");
        for (let i = 0; i < elements.length; i++) {
            const element = elements[i];
            IDs.push(element.id);
        }
        return IDs;
    }
    
    //Get all ids if ID is undefined
    ids = ids || getAllId();
    const reset = (element) => {
        if (document.getElementById(element) !== null) {
            if (document.getElementById(element).className.replace) {
                let res = document.getElementById(element).className.replace("required", "");
                document.getElementById(element).className = res;                        
            }
        }
    }

    useEffect(() => {

        ids.forEach(element => {
            let status = false;
            active.forEach(child => {
                if (element === child) {
                    return status = true;
                }
            });

            if (status) {
                if (document.getElementById(element)) {
                    if (document.getElementById(element).className !== null) {
                        document.getElementById(element).className += "required";
                        window.scrollTo(0, document.getElementById(element).offsetTop);
                        setTimeout(() => {
                            reset(element);
                        }, 10000);
                    }
                }
            } else reset(element);
        });

    }, [ids, active]);

    return null;
}

export default FieldWatcher
