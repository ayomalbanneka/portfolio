import user_image from './user-image.jpeg';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import docker from './docker.png';
import netbeans from './netbeans.png';
import mysql from './mysql.png';
import intellijIDEA from './intellij-idea.png';
import postman from './postman.png';
import aws from './aws.png';
import azure from './azure.png';
import github_actions from './github_actions.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo_test.png';
import logo_dark from './white_logo.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './profile-img.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import web_icon from './web-icon.png';
import mobile_icon from './mobile-icon.png';
import cloud_icon from './cloud.png';
import graphics_icon from './graphics-icon.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';
import devops_icon from './devops.png';
import web_development_icon_white from './web-development-white.png';
import mobile_icon_white from './mobile_icon_dark.png';
import cloud_icon_white from './cloud-icon-dark.png';
import devops_icon_white from './devops-icon-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    cloud_icon,
    firebase,
    figma,
    git,
    mongodb,
    docker,
    netbeans,
    mysql,
    intellijIDEA,
    postman,
    aws,
    azure,
    github_actions,
    right_arrow_white,
    logo,
    logo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    web_icon,
    mobile_icon,
    devops_icon,
    graphics_icon,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark,
    web_development_icon_white,
    mobile_icon_white,
    cloud_icon_white,
    devops_icon_white
};

export const workData = [
    {
        title: 'E-commerce website',
        description: 'Web Development',
        bgImage: '/work-1.png',
        link: 'https://github.com/ayomalbanneka/e-commerce-web-application'
    },
    {
        title: 'Inventory management System',
        description: 'Java swing application',
        bgImage: '/work-3.png',
        link: 'https://github.com/ayomalbanneka/Inventory-Management-System'
    },
    {
        title: 'Bookly - Online book store',
        description: 'Build using Java, HTML, CSS and JavaScript and REST API',
        bgImage: '/work-2.png',
        link: 'https://github.com/ayomalbanneka/Bookly'
    },
    {
        title: 'Simple Node.js App Host on Azure App Service',
        description: 'A simple Node.js application deployed on Azure App Service, showcasing cloud deployment and management skills.',
        bgImage: '/work-4.png',
        link: 'https://github.com/ayomalbanneka/azure-ci-cd'
    }
]

export const serviceData = [
    { icon: assets.web_icon, darkIcon: assets.web_development_icon_white, title: 'Web Development', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, darkIcon: assets.mobile_icon_white, title: 'Mobile App', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.cloud_icon, darkIcon: assets.cloud_icon_white, title: 'Cloud Development', description: 'Designing and deploying scalable cloud solutions using AWS, Azure, and serverless architectures with CI/CD pipelines...', link: '' },
    { icon: assets.devops_icon, darkIcon: assets.devops_icon_white, title: 'DevOps & Automation', description: 'Streamlining development workflows with Docker, GitHub Actions, and infrastructure as code for reliable deployments...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'JavaScript, React Js, Next Js, PHP, Java' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'Bsc(Hons) Software Engineering' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    { src: assets.vscode, name: 'VS Code' },
    { src: assets.git, name: 'Git' },
    { src: assets.docker, name: 'Docker' },
    { src: assets.netbeans, name: 'NetBeans' },
    { src: assets.mysql, name: 'MySQL' },
    { src: assets.intellijIDEA, name: 'IntelliJ IDEA' },
    { src: assets.postman, name: 'Postman' },
    { src: assets.github_actions, name: 'GitHub Actions' },
    { src: assets.firebase, name: 'Firebase' },
];

export const cloudServicesData = [
    { src: assets.aws, name: 'AWS' },
    { src: assets.azure, name: 'Azure' },
];