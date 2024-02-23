import { Dispatch, SetStateAction } from "react";

export type PropsType = {
    children: string | JSX.Element | JSX.Element[]
}

export type ContextCType = {
    searchObj: { title: '', groupBy: '' };
    setSearchObj: Dispatch<SetStateAction<string>>
}