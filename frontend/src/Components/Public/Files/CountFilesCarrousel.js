import { RequireContextPark } from "../Files/RequireContextPark.js";
import { RequireContextStudio } from "../Files/RequireContextStudio.js";

export const CountFilesCarrousel = () => {
    const uri = window.location.href;
    if (uri.includes('attraction') && uri.includes('park-park-disneyland')) {
        const collection = RequireContextPark();
        const files = collection.keys().map(image => collection(image));
        return (files.length);
    }
    if (uri.includes('attraction') && uri.includes('park-park-disneyland')) {
        const collection = RequireContextStudio();
        const files = collection.keys().map(image => collection(image));
        return (files.length);
    }
}