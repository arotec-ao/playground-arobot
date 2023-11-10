'use client'

import Styles from '@/styles/modules/playground/index.module.css'
import AppContext, {data} from '@/components/AppContext/AppContext';
import PlaygroundContent from '@/components/PagePlayground/content';

export default function Playground() { 
  
    return (
        <div className={Styles.app}>
            <AppContext.Provider value={data}>
                <PlaygroundContent />
            </AppContext.Provider>

        </div>
    );
}