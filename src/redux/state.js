let renderTree = () => {
    return  console.log('hello');
}

let state = {
    postsPage: {
        postMessages: [
            { id: "1", message: "Keep your presence fresh on Google.", like: "5" },
            { id: "2",  message: "Get verified and start posting today.", like: "1" },
            { id: "3", message: "Your audience is searching for you. Get verified on Google and amplify your brand.", like: "2" }
        ],
        text: 'Hello'
    },
    dialogPage: {
        dialogNames: [
			{ name: "Andrey", id: "1", message: "Hdfsdfls;dlfksdjksldkjsldkjfslkdjfsjdklfskdjflskdjskflsdkjfksdsldkjfsjdkflskdjfsldjfdlskfjjskdlfskjdlfksjdkfsldkfjslkdfj" },
			{ name: "Ivan", id: "2" ,  message: "Howj dld"},
			{ name: "Gosha", id: "3" ,  message: "Ho"},
			{ name: "Svetlana", id: "4",  message: "Fucdfdks;;dlkf dl;s'd;lfsd fdfl;ssjdkflskdjfslkdjfslkdjfsjhdjkfhsjdhfksjhdkfjshdkjhfskdjfhskdjhfjshdfkjshdkfjhskdjfhskjhdfksjhdkjfshkdjfhskdhfksdjhfjksdhfd"},
			{ name: "Ruslan", id: "5" , message: "Fuck"},
        ],

        // dialogMessages: [
        //     { message: "Heddfsdfkss", id: "1" },
        //     { message: "Howjs", id: "2" },
        //     { message: "Good! Thanks", id: "3" },
        //     { message: "Fuck", id: "4" },
        //     { message: "Wow", id: "5" },
        // ]
    },
    friendsBox: {
        friends: [
            {
                name: "Anna", id: "1", url: "https://pnggfx.com/wp-content/uploads/2020/07/download-free-graphics-user-avatar-png-picture.png"
            },
            {
                name: "Vika", id: "2", url: "https://c7.hotpng.com/preview/510/349/155/computer-icons-teacher-clip-art-avatar.jpg"
            },
            {
                name: "Andrey", id: "3", url: "https://s3.amazonaws.com/media-p.slid.es/uploads/259608/images/3941391/flat-face-icon-23.png"
            }
        ]
    },
}

export let addPost = () => {
    const newPost = {
        id: "4",
        message: state.postsPage.postMessages.text ,
        like: "10"
    }
    state.postsPage.postMessages.push(newPost);
    renderTree(state);
}

export let changeText = (text) => {
    state.postsPage.postMessages.text = text;
}

export let subscribe = (observe) => {
    renderTree = observe;  //паттерн наблюдатель!!!
    console.log(observe);
};

export default state;