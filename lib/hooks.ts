import { useActiveSectionContext } from "@/context/active-section";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { links } from "./data";


type SectionName = (typeof links)[number]["name"]
type useSectionInViewProps={
    sectionName:SectionName;
}


export function useSectionInView({sectionName}:useSectionInViewProps,threshold=0.75){
    const { setActiveSection, timeOfLastClicked } = useActiveSectionContext();
    const { ref, inView } = useInView({
        threshold
    });
    useEffect(() => {

        if (inView && Date.now() - timeOfLastClicked > 1000) {
            setActiveSection(sectionName);
        }
    }, [inView, setActiveSection, timeOfLastClicked,sectionName])
    return {
        ref,
        inView
    }
}