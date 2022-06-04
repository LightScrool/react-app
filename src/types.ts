import {ReactNode} from "react";

export interface IComment {
    postId: number,
    id: number,
    name: string,
    email: string,
    body: string
}

export interface IPost {
    userId: number,
    id: number,
    title: string,
    body: string
}

export interface IMySliderDataItem {
    name: string,
    title: string,
    subtitle: string,
    buttonText: string,
}

export interface IRoute {
    path: string,
    exact: boolean,
    element: any // TODO: any is condemned
}

export interface UIProps {
    children?: ReactNode,
    className?: string
}
