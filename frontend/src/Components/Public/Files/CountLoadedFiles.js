import { RequireContextPark } from "./RequireContextPark.js";
import { RequireContextStudio } from "./RequireContextStudio.js";

export const CountLoadedFiles = () => {
    const uri = window.location.href;
    if (uri.includes('attraction') && uri.includes('park-park-disneyland')) {
        const collection = RequireContextPark();
        const files = collection.keys().map(image => collection(image));
        return (files.length);
    }
    if (uri.includes('attraction') && uri.includes('walt-disney-studios')) {
        const collection = RequireContextStudio();
        const files = collection.keys().map(image => collection(image));
        return (files.length);
    }
}