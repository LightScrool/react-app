interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

interface IMySliderDataItem {
    name: string,
    title: string,
    subtitle: string,
    buttonText: string,
}

export {IMySliderDataItem, IComment, IPost}