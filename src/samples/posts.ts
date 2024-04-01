// Calculate number of comments for given post including comments of linked posts
const inputPosts: Array<IPost> = [
    {
        id: 1, 
        comments: [
            'This is Alex',
            'This is Mila'
        ],
        linkedPosts: [
            3, 5
        ]

    },
    {
        id: 3,
        comments: [
            'This is Alex 3',
            'This is Mila 3'
        ],
        linkedPosts: [
            4
        ]
    },
    {
        id: 5,
        comments: [
            'This is Alex 5',
            'This is Mila 5'
        ],
        linkedPosts: [
            3
        ]
    },
    {
        id: 4,
        comments: [
            'This is Alex 4',
            'This is Mila 4',
            'This is Irina 4'
        ],
        linkedPosts: [
            3
        ]
    },
    {
        id: 5,
        comments: [
        ],
        linkedPosts: [
            3
        ]
    },
    {
        id: 7,
        comments: [
            'This is Alex 7'
        ],
        linkedPosts: [
            8
        ]
    },
    {
        id: 8,
        comments: [
            'This is Alex 8'
        ],
        linkedPosts: [
        ]
    },
]

interface IPost {
    id: number,
    linkedPosts: Array<number>
    comments: Array<string>,
}

let totalComments: number;
let linkedPosts: number[];

const processResursive = (postId: number) => {
    const currentPost = inputPosts.find ( post => post.id === postId);
    if (!linkedPosts.includes(postId)) {
        totalComments = totalComments + currentPost.comments.length;
    }
    linkedPosts.push(postId);
    currentPost.linkedPosts?.forEach(id => {
        if (!linkedPosts.includes(id)) {
            processResursive(id);
        }    
    })
}

export const processPosts = (inputPostId: number) => {
    const currentPost = inputPosts.find ( post => post.id === inputPostId);
    if ( typeof currentPost === 'undefined') {
        return 0;
    }
    linkedPosts = [];
    totalComments = 0;
    processResursive(inputPostId);
    return(totalComments);
}
