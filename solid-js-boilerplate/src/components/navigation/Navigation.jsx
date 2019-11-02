import { RouterLink } from '../router/SolidRouter';

export const Navigation = () => (
    <nav className="nav">
        <RouterLink path="">Home</RouterLink>
        <RouterLink path="profile">Profile</RouterLink>
        <RouterLink path="settings">Settings</RouterLink>
    </nav>

)