import axios from "axios";

const POSTS_DATA_URL = "https://jsonplaceholder.typicode.com/posts";
const MAX_POSTS_PER_PAGE = 10;

async function fetchPosts(_page=1){
    return await axios.get(POSTS_DATA_URL, {
        params: {
            _limit: MAX_POSTS_PER_PAGE,
            _page
        }
    });
}

async function fetchSinglePost(id){
    return await axios.get(`${POSTS_DATA_URL}/${id}`);
}

async function fetchPostComments(id){
    return await axios.get(`${POSTS_DATA_URL}/${id}/comments`);
}

const MySliderData = [
    {
        "name": "Intro",
        "title": "Welcome to MoGo",
        "suptitle": "Creative Template",
        "buttonText": "Learn more"
    },
    {
        "name": "Work",
        "title": "Good work",
        "suptitle": "We do this",
        "buttonText": "Our work"
    },
    {
        "name": "About",
        "title": "Our company",
        "suptitle": "About us",
        "buttonText": "Explore"
    },
    {
        "name": "Contacts",
        "title": "We have contacts",
        "suptitle": "But not for you",
        "buttonText": "Contact us"
    }
]

export {fetchPosts, fetchSinglePost, fetchPostComments, MAX_POSTS_PER_PAGE, MySliderData};
