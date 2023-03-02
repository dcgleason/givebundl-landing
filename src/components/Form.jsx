import React, {useEffect} from "react";

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    region: 'na1',
                    portalId: '22464839',
                    formId: '6ef963b4-cdd9-49d2-aca9-5713f5303733',
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div>
            <h1 className="text-2xl mb-12 font-bold tracking-tight text-gray-900 sm:text-4xl" >The employee recognition solution that boosts retention. Sign up to learn more.</h1>
            <div id="hubspotForm"></div>
        </div>
    );

}

export default HubspotContactForm;