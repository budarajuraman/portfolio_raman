import profile from './profile.jpg'
import profile_no_bg from './profile_no_bg.png'
export const assets = {
    profile,
    profile_no_bg
}

import blog_project from './blog_project.jpg'
import calculate from './calculate.jpeg'
import food_del_project from './food_del_project.jpg'
import stop_project from './stop_project.jpeg'
import video_chat from './video_chat.png'
import train_reservation from './train_reservation.png'
import tic_tac_toe from './tic_tac_toe.png'
import tutor_img from './tutor_img.jpg'

export const project_list = [
    {
        id: 1,
        title: "BlogMaster",
        img: blog_project,
        // Live_view : "https://budarajuraman.github.io/blog_master/",
        git_view: "https://github.com/budarajuraman/blog_master",
        description: "A blogging platform built using ReactJS and MaterialUI, allowing users to create, edit, and manage blog posts. "
    },
    {
        id: 2,
        title: "Food Basket",
        img: food_del_project,
        // Live_view : "https://budarajuraman.github.io/food_delivery_app/",
        git_view: "https://github.com/budarajuraman/food_delivery_app",
        description: "Developed a dynamic, responsive, and user-friendly food delivery app using ReactJS. Includes interactive features like filter options, a customizable cart, and streamlined ordering process for enhanced user experience."
    },
    {
        id: 3,
        title: "RoomConnect",
        img: video_chat,
        // Live_view : "https://budarajuraman.github.io/stop_watch/",
        git_view: "https://github.com/budarajuraman/video_chat_web_app",
        description: "Built a WebRTC-based video chat platform with real-time communication and messaging using NodeJS, ExpressJS, MongoDB, and EJS. Features include room-based calls, participant tracking, and call history logging."
    },
    {
        id: 4,
        title: "Tic Tac Toe",
        img: tic_tac_toe,
        // Live_view : "https://budarajuraman.github.io/stop_watch/",
        git_view: "https://github.com/budarajuraman/tic_tac_toe_react",
        description: "A classic Tic Tac Toe game built using ReactJS, offering a responsive interface and intuitive game mechanics. Implemented to enhance my problem solving skills."
    },
    {
        id: 5,
        title: "AI-Powered Python Tutor for Kids",
        img: tutor_img,
        // Live_view : "https://budarajuraman.github.io/blog_master/",
        git_view: "https://github.com/budarajuraman/python_tutor",
        description: "Developed an AI-powered Python tutor using ReactJS and NodeJS. Provides interactive learning experiences with AI-based chat, customizable tutor characters, and story-based assessments for kids."
    },
    {
        id: 6,
        title: "Stop Watch",
        img: stop_project,
        // Live_view : "https://budarajuraman.github.io/stop_watch/",
        git_view: "https://github.com/budarajuraman/stop_watch",
        description: "A stopwatch web app built using HTML, CSS, and JavaScript. Offers start, stop, reset, and lap features with a simple, user-friendly interface."
    },
    {
        id: 7,
        title: "Calculator",
        img: calculate,
        // Live_view : "https://budarajuraman.github.io/Calculator/calculator.html",
        git_view: "https://github.com/budarajuraman/Calculator",
        description: "A functional calculator built using HTML, CSS, and JavaScript. Supports basic arithmetic operations with a clean and intuitive UI."
    },
    {
        id: 8,
        title: "Train Seat Reservation System",
        img: train_reservation,
        // Live_view : "https://budarajuraman.github.io/stop_watch/",
        git_view: "https://github.com/budarajuraman/train_reservation",
        description: "A train seat reservation system developed using HTML, CSS, and JavaScript. Allows users to book and manage seat reservations with a visual representation of seat availability."
    }
]
