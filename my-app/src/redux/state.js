
let store = {
    _state: {
        profilePage: {
            posts: [
                { message: 'Hi, how are you?', id: 1, likesCount: 15 + '\uD83D\uDC4D' },
                { message: "It's my first post", id: 2, likesCount: 11 + String.fromCodePoint(0x1F497) },
                { message: "It's my second post", id: 3, likesCount: 42 + '💗' },
                { message: 'YO', id: 4 },
            ],
            newPostText: 'it-kamasutra.com',
        },
        dialogsPage: {
            dialogs: [
                { name: 'Dimych', id: 1 },
                { name: 'Sveta', id: 2 },
                { name: 'Petya', id: 3 },
                { name: 'Sasha', id: 4 },
                { name: 'Valera', id: 5 },
                { name: 'Masha', id: 6 },
            ],
            messages: [
                { message: 'hi', id: 1 },
                { message: 'How is your IT-kamasutra', id: 2 },
                { message: 'YO', id: 3 },
                { message: 'YO', id: 4 },
                { message: 'YO', id: 5 },
                { message: 'YO', id: 6 },
            ],
        },
    },
    getState() {
        return this._state;
    },
    _callSubscriber() {
        console.log('State changed');
    },
    dispatch(action) {

        if (action.type === 'ADD-POST') {
            let newPost = {
                message: this._state.profilePage.newPostText,
                id: 1,
                likesCount: 0 + String.fromCodePoint(0x1F497),
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);

        } else if (action.type === 'UPDATE-NEW-POST-TEXT'){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    },
    // addPost() {
    //     let newPost = {
    //         message: this._state.profilePage.newPostText,
    //         id: 1,
    //         likesCount: 0 + String.fromCodePoint(0x1F497),
    //     };
    //     this._state.profilePage.posts.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },
    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },
    subscribe(observer) {
        this._callSubscriber = observer; // pattern
    },
}

export default store;

window.store = store;