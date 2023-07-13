export type Post = {
    title:string;
    userName:string;
    description:string;
    postId:string;
    answer?: string; // Make the "answer" property optional by adding "?"
}