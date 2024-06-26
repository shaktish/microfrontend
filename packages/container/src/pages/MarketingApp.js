import React, {useEffect, useRef} from 'react';
import {mount} from 'marketing/marketing';

const MarketingApp = () => {
    const ref = useRef(null);
    useEffect(()=>{
        mount(ref.current); 
    },[])

    return <div ref={ref}></div>
}

export default MarketingApp;