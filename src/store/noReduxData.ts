import axios from "axios";
import {IMySliderDataItem, IComment, IPost} from '../types'

const POSTS_DATA_URL: string = "https://jsonplaceholder.typicode.com/posts";
const MAX_POSTS_PER_PAGE: number = 10;

async function fetchSinglePost(id: number) {
    return await axios.get<IPost>(`${POSTS_DATA_URL}/${id}`);
}

async function fetchPostComments(id: number) {
    return await axios.get<IComment[]>(`${POSTS_DATA_URL}/${id}/comments`);
}

const MySliderData: IMySliderDataItem[] = [
    {
        name: "Intro",
        title: "Welcome to MoGo",
        subtitle: "Creative Template",
        buttonText: "Learn more"
    },
    {
        name: "Work",
        title: "Good work",
        subtitle: "We do this",
        buttonText: "Our work"
    },
    {
        name: "About",
        title: "Our company",
        subtitle: "About us",
        buttonText: "Explore"
    },
    {
        name: "Contacts",
        title: "We have contacts",
        subtitle: "But not for you",
        buttonText: "Contact us"
    }
]

export {fetchSinglePost, fetchPostComments, MAX_POSTS_PER_PAGE, MySliderData};
