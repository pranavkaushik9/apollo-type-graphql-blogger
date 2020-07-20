import { ActionItems, SiteUser } from "./types";

export const guestUserMenuItems: ActionItems = [
    {
        id: 'login',
        text: 'Login'
    },
    {
        id: 'signup',
        text: 'Signup'
    }
];

export const loggedInUserMenuitems: ActionItems = [
    {
        id: 'logout',
        text: 'Logout'
    }
];

export const defaultSiteUser: SiteUser = {
    isGuest: true,
    info: {
        id: '',
        firstName: '',
        lastName: '',
        fullName: 'Guest'
    }
};
