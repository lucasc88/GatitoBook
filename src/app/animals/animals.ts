//interface to put a type when data return from the API
export interface Animal {

    id: number;
    postDate: Date;
    url: string;
    description: string;
    allowComments: boolean;
    likes: number;
    comments: number;
    userId: number;
}

//The endpoint can return an array of animals.
//So, Animals is an array of Animal
export type Animals = Array<Animal>;